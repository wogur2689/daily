"use strict"; //ECMA 스크립트 문법 준수
//자바스크립트 파일을 만들시에는 써줘야함.

const moment = require("moment");

/**
 * date -> String
 * @param {*} date 
 * @returns 
 */

const DateToString = (date) => {
    return moment(date).toString();
}

module.exports = DateToString;