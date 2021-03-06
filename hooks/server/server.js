const express = require("express"); 
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

var connection = mysql.createConnection({
    host : "localhost",
    user : "lee", //mysql의 id
    password : "12345", //mysql의 password
    database : "study_db", //사용할 데이터베이스
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options("*",cors());

app.get("/todo", (req,res)=>{
    var sql = "SELECT * FROM todos";
    connection.query(sql,
    function(err,rows,fields){
        if(err){
            console.log("불러오기 실패");
        }else{
            console.log(rows);
            res.send(rows);
        }
    })
})

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})