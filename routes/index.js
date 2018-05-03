'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).render('index');
})

module.exports = app;