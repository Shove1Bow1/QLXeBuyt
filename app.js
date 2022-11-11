var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var productsRouter = require('./routes/products');
var tuyenXeRouter=require('./routes/TuyenXe');
var phuXeRouter=require('./routes/PhuXe');
var taiXeRouter=require('./routes/TaiXe');
var luuThongRouter=require('./routes/LuuThong');
var xeRouter=require('./routes/Xe');
var caLamRouter=require('./routes/CaLam');
var baoDuongRouter=require('./routes/BaoDuong');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// app.use('/index', indexRouter);
// app.use('/users', usersRouter);
// app.use('/products', productsRouter);
app.use('/tuyen_xe',tuyenXeRouter);
app.use('/luu_thong',luuThongRouter);
app.use('/tai_xe',taiXeRouter);
app.use('/ca_lam',caLamRouter);
app.use('/tai_xe',taiXeRouter);
app.use('/bao_duong',baoDuongRouter);
app.use('/phu_xe',phuXeRouter);
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
