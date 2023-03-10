var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const cookies = require('cookie-parser');

var indexRouter = require('./routes/indexRouter');
var userRouter = require('./routes/userRouter');
var moviesRouter = require('./routes/movieRouter');

var app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(session({
  secret: "El mensaje secreto",
  resave: false,
  saveUninitialized: false
}));

app.use(userLoggedMiddleware);

app.use(cookies());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false })); //define la forma que nos llega la info de los formularios, va siempre
app.use(express.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/movies', moviesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render('not-found')
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
