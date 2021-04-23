var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'lee',
    password : '12345',
    database : 'study_db'
});

module.exports = db;