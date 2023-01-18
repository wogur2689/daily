"use strict"; //ECMA 스크립트 문법 준수
//자바스크립트 파일을 만들시에는 써줘야함.

//모듈
const express = require('express');
const app = express();

//라우팅
const home = require('./routes/main');

//app 세팅
app.engine('html', require('ejs').renderFile);
app.set("views", "./views"); //경로
app.set("view engine", "ejs"); //확장자

app.use("/", home); //미들웨어 등록

module.exports = app;