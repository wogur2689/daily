"use strict";

/**
 * DB를 CRUD하는 역할만 수행
 * Spring의 Repository
 */
const db = require("../config/db");
const DateUtil = require("../util/DateUtil");
const logger = require("../config/logger");
// #변수 : public -> private로 접근 지정

class DataStorage {
    //일기 리스트 조회
    static async getDailyList(data) {
        //처음에는 생성된지 1달치만 조회.
        let a = data.a;
        let b = data.b;
        if(a == undefined && b == undefined) {
            a = DateUtil.prevMonth(0);
            b = DateUtil.prevMonth(3);
            logger.info(a);
            logger.info(b);
        }
        return new Promise((resolve, reject) => { //resolve는 성공을, reject는 실패를 반환
            const query = "SELECT * FROM daily where create_at between ? and ?";
            db.query(query, [a, b], (err, data) => {
                if(err) reject(`${err}`);
                else resolve(data);
            });
        });
    }

    //일기 내용보기
    static async read(data) {
        return new Promise((resolve, reject) => { //resolve는 성공을, reject는 실패를 반환
            const query = "SELECT * FROM daily where id = ?";
            db.query(query, [data.id], (err, data) => {
                if(err) reject(`${err}`);
                else resolve(data);
            });
        });
    }

    //일기 저장
    static async create(data) {
        const date = new Date();
        const today = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        return new Promise((resolve, reject) => { //resolve는 성공을, reject는 실패를 반환
            const query = "INSERT INTO daily(title, user_name, content, create_at, update_at) VALUES( ?, ?, ?, ?, ?)";
            db.query(query, [data.title, data.userName, data.content, today, today], (err) => {
                if(err) reject(err);
                else resolve({ success: true });
            });
        });
    }

    //일기 수정
    static async update(data) {
        const date = new Date();
        const today = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        return new Promise((resolve, reject) => { //resolve는 성공을, reject는 실패를 반환
            const query = "UPDATE daily SET title = ? user_name = ? content = ? update_at = ? where id = ?";
            db.query(query, [data.title, data.userName, data.content, today, data.id], (err) => {
                if(err) reject(err);
                else resolve({ success: true });
            });
        });
    }

    //일기 삭제
    static async delete(data) {
        const date = new Date();
        const today = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        return new Promise((resolve, reject) => { //resolve는 성공을, reject는 실패를 반환
            const query = "delete from daily where id = ?";
            db.query(query, [data.id], (err) => {
                if(err) reject(err);
                else resolve({ success: true });
            });
        });
    }
}

module.exports = DataStorage;