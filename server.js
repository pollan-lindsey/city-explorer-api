require('dotenv').config();

const express = require('express');

const port = process.env.PORT || 3002;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})