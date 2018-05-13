var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

var hackerInfo = require('../api/hackerInfo');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/hackerInfo', hackerInfo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

  // render the error page
app.use(function(err, req, res, next){  
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
