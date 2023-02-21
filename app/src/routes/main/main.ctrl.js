"use strict"; //ECMA 스크립트 문법 준수
//자바스크립트 파일을 만들시에는 써줘야함.

//page
const output = {
    /**
     * 시작페이지(main 컨트롤러 함수)
     * @param {\} req 
     * @param {*} res 
     */
    mainPage: (req, res) => {
        res.render("main/index", {
            title: "My Diary",
            code: "success"
        }) //파일 랜더링
    },

    /**
     * 일기 쓰기
     * @param {\} req 
     * @param {*} res 
     */
    writePage: (req, res) => {
        res.render("main/write", {
            title: "Keeping a Diary",
            code: "success"
        }) //파일 랜더링
    },

    /**
     * 일기 읽기
     * @param {\} req 
     * @param {*} res
     */
    readPage: (req, res) => {
        res.render("main/read", {
            title: "Keeping a Diary",
            code: "success"
        }) //파일 랜더링
    }
}

//api
const process = {
    /**
     * 일기 저장
     * @param {*} req 
     * @param {*} res 
     */
    save: (req, res) => {
        console.log(req.body);
    }
}


//index.js에서 사용하기 위해 모듈로 주입
module.exports = {
    output,
    process
};