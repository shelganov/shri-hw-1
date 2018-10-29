"use strict";
exports.__esModule = true;
// const path = require('path');
var path = require("path");
var fs = require("fs");
var express = require("express");
var app = express();
var port = 8000;
var OPTIONS = {
    type: {
        "info": true,
        "critical": true
    }
};
// const statusHandler = require('./status');
var JSON_MAIN = JSON.parse((fs.readFileSync(path.join(__dirname, '/events.json'))).toString());
var JSON_EVENTS = JSON_MAIN.events;
// Метод добавления нулей в числа
var utility_1 = require("./utility");
/**
 * Маршрут - страница status
 * Показывает время, прошедшее с запуска сервера
 */
app.get('/status', function (req, res) {
    var serverStartTime = app.get('serverStartTime'), serverCurrentTime = new Date();
    // Разница времени
    var serverWorkingTime = Number(serverCurrentTime) - Number(serverStartTime), serverTimeH = Math.floor(serverWorkingTime / (1000 * 3600)) % 60, serverTimeM = Math.floor(serverWorkingTime / (1000 * 60)) % 60, serverTimeS = Math.floor(serverWorkingTime / 1000) % 60;
    res.send(utility_1["default"](serverTimeH) + ":" + utility_1["default"](serverTimeM) + ":" + utility_1["default"](serverTimeS));
});
/**
 * API
 */
app.get('/api/events', function (req, res) {
    var params = req.query;
    /* Типы в request */
    var types = params.type || null;
    var typesArray = null;
    // Если нет параметров
    if (Object.keys(params).length == 0) {
        return res.status(200).json(JSON_EVENTS);
    }
    // console.log(params);
    // Если параметр не существует
    for (var key in params) {
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
        var jsonSorted = JSON_EVENTS.filter(function (event) {
            return typesArray.includes(event.type);
        });
        return res.status(200).json(jsonSorted);
    }
    else {
        return res.status(400).send('incorrect type');
    }
});
/**
 * 404 ошибка
 */
app.use(function (req, res, next) {
    res.status(404).send('<h1>Page not found</h1>');
});
app.use(function (err, req, res, next) {
    res.status(500).end('Server error');
});
/**
 * Запуск сервера
 */
app.listen(port, function (error) {
    if (error) {
        return console.log("error " + error);
    }
    app.set('serverStartTime', new Date());
    console.log("Example app listening on port " + port + "!");
});
