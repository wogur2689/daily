"use strict"; //ECMA 스크립트 문법 준수
//자바스크립트 파일을 만들시에는 써줘야함.

const app = require("../app");

const port = 3000; //서버 포트

app.listen(port, () => {
    console.log('서버 가동');
});