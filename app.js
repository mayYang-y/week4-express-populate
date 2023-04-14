const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

// 資料庫連線設定
require('./connections');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


// 路由第一層設定在此：
// 例：如果進入 "/users"，就會往 usersRouter(./routes/users) 檔案裡面找下一層子路徑
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

module.exports = app;
