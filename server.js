const express = require('express');
const calc = require('calculator.js');

const port = 3020;

const app = express();

app.get('/test', (req, res) => {
    res.send("test");
});

app.get('/add', (req, res) => {
    res.send(calc.add(1, 1));
});

app.listen(port, () => {
    console.log('Server listening on the port   ', port);
})
