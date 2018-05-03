'use strict';

var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.status(200).render('index');
});

module.exports = app;