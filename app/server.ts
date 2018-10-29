import { Application, Request, Response, NextFunction } from "express";

// const path = require('path');
import * as path from 'path';
import * as fs from "fs";
import * as express from "express";
const app = express();
const port = 8000;

const OPTIONS = {
    type: {
        "info": true,
        "critical": true
    }
};

// const statusHandler = require('./status');
const JSON_MAIN = JSON.parse((fs.readFileSync(path.join(__dirname, '/events.json'))).toString());
const JSON_EVENTS = JSON_MAIN.events;
// Метод добавления нулей в числа
import numTo2Digit from './utility';


/**
 * Маршрут - страница status
 * Показывает время, прошедшее с запуска сервера
 */
app.get('/status', (req: Request, res) => {
    const serverStartTime = app.get('serverStartTime'),
          serverCurrentTime = new Date();

    // Разница времени
    let serverWorkingTime = Number(serverCurrentTime) - Number(serverStartTime),
        serverTimeH = Math.floor(serverWorkingTime / (1000 * 3600)) % 60,
        serverTimeM = Math.floor(serverWorkingTime / (1000 * 60)) % 60,
        serverTimeS = Math.floor(serverWorkingTime / 1000) % 60;

    res.send(`${numTo2Digit(serverTimeH)}:${numTo2Digit(serverTimeM)}:${numTo2Digit(serverTimeS)}`);
});


/**
 * API
 */
app.get('/api/events', (req, res) => {
    let params = req.query;
    /* Типы в request */
    let types = params.type || null;
    let typesArray = null;

    // Если нет параметров
    if (Object.keys(params).length == 0) {
        return res.status(200).json(JSON_EVENTS);
    }

    // console.log(params);

    // Если параметр не существует
    for (let key in params) {
        // key = type, ..
        // params[key] = critical, info..
        if (params.hasOwnProperty(key)) {
            if (!OPTIONS[key]) {
                return res.status(400).send('incorrect parameters');
            }
        }
    }

    if (types) {
        typesArray = types.split(':');
        // Если параметр type неверный
        typesArray.forEach(function (type) {
            if (!OPTIONS["type"][type]) {
                return res.status(400).send('incorrect type');
            }
        });

        let jsonSorted = JSON_EVENTS.filter(function (event) {
            return typesArray.includes(event.type);
        });
        return res.status(200).json(jsonSorted);
    } else {
        return res.status(400).send('incorrect type');
    }



});

/**
 * 404 ошибка
 */
app.use(function(req, res, next) {
    res.status(404).send('<h1>Page not found</h1>');
});

app.use(function (err, req, res, next) {
    res.status(500).end('Server error');
});

/**
 * Запуск сервера
 */
app.listen(port, (error) => {
    if (error) {
        return console.log(`error ${error}`);
    }
    app.set('serverStartTime', new Date());
    console.log(`Example app listening on port ${port}!`);
});
