"use strict";

/**
 * Spring의 service 로직
 */

/**
 * 해당 데이터를 가지고 검증 및 조작
 */
const DataStorage = require("./DataStorage");

class Daily {
    constructor(body) {
        this.body = body; //기본생성자
    }

    //일기 저장
    async save() {
        const client = this.body; //클라이언트 값
        try {
            const response = await DataStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    }

    //일기 읽기
    async read() {
        const client = this.body; //클라이언트 값
        try {
            const data = await DataStorage.getDaily();
            return { data: data };
        }
        catch (err) {
            return { success: false, msg: err };
        }
    }
}

module.exports = Daily;