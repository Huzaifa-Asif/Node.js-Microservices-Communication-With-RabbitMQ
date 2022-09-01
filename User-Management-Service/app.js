var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const amqplib = require('amqplib');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

let conn, ch1, queue = 'session';
// RabbitMQ Connection and Listener 
(async () => {
  queue = 'session';
  conn = await amqplib.connect('amqp://localhost');
  ch1 = await conn.createChannel();
  await ch1.assertQueue(queue);
  app.locals.channel = ch1;
  app.locals.queue = queue;
})();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter, );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;