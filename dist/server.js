'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _index = require('../routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 5000;

app.use((0, _morgan2.default)('dev'));
app.use((0, _bodyParser2.default)());

app.set('view engine', 'ejs');
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.use('/', _index2.default);

app.listen(port, function () {
    console.log("Server Live On " + port);
});