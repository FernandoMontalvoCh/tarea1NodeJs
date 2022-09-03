const express = require('express');

const { clientRouter } = require('./route/client.route');

const app = express();

app.use(express.json());

app.use("/api/v1/client", clientRouter);


app.all('*', (req, res) => {
    res.status(404). json({
        status: 'error',
        message: `${req.method} ${req.url} does not exist in our server`
    })
})

module.exports = { app };