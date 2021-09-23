const http = require('http');
const express = require('express');
const path = require('path');
function getWeather() {
    const weathers = ['soleado', 'parcialmente-nublado', 'nublado', 'lluvioso', 'tormenta', 'nevado'];
    const pos = Math.floor(Math.random() * weathers.length);
    return weathers[pos];
}
const app = express();
app.get('/get-weather', (req, res, next) => {
    res.json({ weather: getWeather() });
})
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
const server = http.createServer(app);
server.listen('8080');
