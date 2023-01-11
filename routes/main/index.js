"use strict"; //ECMA 스크립트 문법 준수
//자바스크립트 파일을 만들시에는 써줘야함.

const express = require('express'); //express import
const router = express.Router(); //express import

//라우팅하는 것들은 라우트에서 관리
//get방식 통신 
// 첫번째는 url, 두번째는 서버로 보낼 요청값과 결과값
router.get("/", (req, res) => {
    res.render("main/index", {
        title: "My Diary",
        code: "success"
    }) //파일 랜더링
});

router.get("/write", (req, res) => {
    res.render("main/write", {
        title: "Keeping a Diary",
        code: "success"
    }) //파일 랜더링
});

module.exports = router; //모듈로 던지기