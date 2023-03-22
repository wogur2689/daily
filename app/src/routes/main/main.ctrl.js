"use strict"; //ECMA 스크립트 문법 준수
//자바스크립트 파일을 만들시에는 써줘야함.

const logger = require("../../config/logger");
const Daily = require("../../model/Daily");
const DateToString = require("../../util/DateUtil");

//page
const output = {
    /**
     * 시작페이지(main 컨트롤러 함수)
     * @param {\} req 
     * @param {*} res 
     */
    mainPage: async (req, res) => {
        logger.info(`GET / 200 "메인 화면"`);
        const daily = new Daily(); //서비스 객체 생성
        let response = await daily.read(); //데이터 읽어오기
        
        res.render("main/index", {
            title: "My Diary",
            code: "success",
            dailys: response.data
        }) //파일 랜더링
    },

    /**
     * 일기 쓰기
     * @param {\} req 
     * @param {*} res 
     */
    writePage: (req, res) => {
        logger.info(`GET /write "일기 작성화면"`);
        res.render("main/write", {
            title: "My Diary",
            code: "success"
        }) //파일 랜더링
    },

    /**
     * 일기 읽기
     * @param {\} req 
     * @param {*} res
     */
    readPage: (req, res) => {
        logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
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
     */
    save: async (req, res) => {
        const daily = new Daily(req.body); //서비스 객체 생성
        const response = await daily.save(); //save

        const url = {
            method:"POST",
            path:"/save",
            status: response.err ? 404 : 200,
        }

        log(response, url);
        return res.status(url.status).json(response); //json 반환
    },

    /**
     * 일기 읽기
     */
    read: async (req, res) => {
        const daily = new Daily(req.body); //서비스 객체 생성
        const response = await daily.read(); //read

        const url = {
            method:"POST",
            path:"/read",
            status: response.err ? 400 : 200,
        }

        log(response, url);
        return res.status(url.status).json(response); //json 반환
    }
}


//index.js에서 사용하기 위해 모듈로 주입
module.exports = {
    output,
    process
};

//로그 출력
const log = (response, url) => {
    if (response.err) {
        logger.error(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
        );
    } else {
        logger.info(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`
        );
    }
};