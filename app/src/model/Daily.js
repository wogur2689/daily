"use strict";

const logger = require("../config/logger");
/**
 * Spring의 service 로직
 * 해당 데이터를 가지고 검증 및 조작
 */
const DataStorage = require("./DataStorage");

class Daily {
    constructor(body) {
        this.body = body; //기본생성자
    }

    //일기 리스트
    async getDailyList() {
        const client = this.body; //클라이언트 값
        try {
            const data = await DataStorage.getDailyList(client);
            return data;
        }
        catch (err) {
            return { success: false, msg: err };
        }
    }

    //일기 저장
    async create() {
        const client = this.body; //클라이언트 값
        try {
            const response = await DataStorage.create(client);
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    }

    //일기 읽기
    async read() {
        const client = this.body; //클라이언트 값
        try {
            const data = await DataStorage.read(client);
            return data;
        }
        catch (err) {
            return { success: false, msg: err };
        }
    }

    //일기 수정
    async update() {
        const client = this.body; //클라이언트 값
        try {
            const data = await DataStorage.update(client);
            return data;
        }
        catch (err) {
            return { success: false, msg: err };
        }
    }

    //일기 삭제
    async delete() {
        const client = this.body; //클라이언트 값
        try {
            const data = await DataStorage.delete(client);
            return data;
        }
        catch (err) {
            return { success: false, msg: err };
        }
    }
}

module.exports = Daily;