//모듈
const express = require('express');
const app = express();

const port = 3000; //서버 포트

//라우팅
const home = require('./routes/main');

//app 세팅
app.engine('html', require('ejs').renderFile);
app.set("views", "./views"); //경로
app.set("view engine", "ejs"); //확장자

app.use("/", home); //미들웨어 등록

app.listen(port, function () { 
    console.log('서버 가동');
});