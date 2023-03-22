"use strict";

/**
 * DB를 CRUD하는 역할만 수행
 * Spring의 Repository
 */
const db = require("../config/db");
// #변수 : public -> private로 접근 지정

class DataStorage {
    //일기 저장
    static async save(data) {
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

    //일기 조회
    static getDaily() {
        return new Promise((resolve, reject) => { //resolve는 성공을, reject는 실패를 반환
            const query = "SELECT * FROM daily";
            db.query(query, (err, data) => {
                if(err) reject(`${err}`);
                else resolve(data);
            });
        });
    }
}

module.exports = DataStorage;