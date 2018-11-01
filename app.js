const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');

const env = process.env.NODE_ENV;
const app = express();

console.log('---- start env ------', env);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * setting session param
*/

app.use(session({
  secret: 'lessonApp',
  resave: false,
  saveUninitialized: false,
  cookie: {
//    httpOnly: true,
//    secure: true,
    maxAge:  365 * 24 * 60 * 60 * 1000,
   }
}));

app.use(require('./common/middleware/responseObjectDefer'));

app.use(require('./routesNoLogin'));
app.use(require('./common/middleware/loginCheck')); /** login check */
app.use(require('./routes'));

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
