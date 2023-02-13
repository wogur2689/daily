const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "daily",
});

db.connect();
//db 연결

module.exports = db;