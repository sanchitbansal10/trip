const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');  
const mongoose = require('mongoose')
const sessions = require('client-sessions')


//import routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const packageDetailsRouter = require('./routes/packageDetails');
const packageListRouter = require('./routes/packageList')


//calling mongodb stuff

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://edgar212:edgar212m@ds159489.mlab.com:59489/tripinline");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
})

//calling app
var app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//caling client-session
app.use(sessions({
  cookieName: 'session',
  secret: 'woo2sa3hfiri29dz',
  duration: 24*60*60*1000
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users',jsonParser, usersRouter);
app.use('/packageDetails',packageDetailsRouter);
app.use('/packageList',packageListRouter);

/* 
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
}); */

module.exports = app;
