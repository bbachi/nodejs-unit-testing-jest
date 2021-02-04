const express = require('express');

const port = 3020;

const app = express();

app.get('/test', (req, res) => {
    res.send("test");
});

app.listen(port, () => {
    console.log('Server listening on the port   ', port);
})