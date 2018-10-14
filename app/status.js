const numTo2Digit = require('./utility');
// const express = require('express');
// const app = express();

function statusHandler(req, res) {
    console.log(req);
    // const serverStartTime = app.get('serverStartTime'),
        serverCurrentTime = new Date();

    // Разница времени
    let serverWorkingTime = serverCurrentTime - serverStartTime,
        serverTimeH = Math.floor(serverWorkingTime / (1000 * 3600)) % 60,
        serverTimeM = Math.floor(serverWorkingTime / (1000 * 60)) % 60,
        serverTimeS = Math.floor(serverWorkingTime / 1000) % 60;

    res.send(`${numTo2Digit(serverTimeH)}:${numTo2Digit(serverTimeM)}:${numTo2Digit(serverTimeS)}`);
}

module.exports = statusHandler;