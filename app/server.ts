import {Request, Response, NextFunction } from "express";
import {Application} from "express-serve-static-core";
import express from "express";

const app: Application = express();
import path from 'path';
import fs from "fs";
const port: number = 8000;

const OPTIONS: {
    [type: string]: {
        [prop: string]: boolean,
    }
} = {
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
app.get('/status', (req: Request, res: Response) => {
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
app.get('/api/events', (req: Request, res: Response) => {
    let params = req.query;
    /* Типы в request */
    let types = params.type || null;
    let typesArray: string[];

    // Если нет параметров
    if (Object.keys(params).length == 0) {
        return res.status(200).json(JSON_EVENTS);
    }

    // Если параметр не существует
    for (let key in params) {
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

        let jsonSorted = JSON_EVENTS.filter(function (event: {type: string}) {

            return typesArray.includes(event["type"]);
        });
        return res.status(200).json(jsonSorted);
    } else {
        return res.status(400).send('incorrect type');
    }



});

/**
 * 404 ошибка
 */
app.use(function(req: Request, res: Response, next: NextFunction) {
    res.status(404).send('<h1>Page not found</h1>');
});

app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).end('Server error');
});

/**
 * Запуск сервера
 */
app.listen(port, (error: Error) => {
    if (error) {
        return console.log(`error ${error}`);
    }
    app.set('serverStartTime', new Date());
    console.log(`Example app listening on port ${port}!`);
});
