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

app.post("/callbody", (req,res)=>{
    var info=[];
    var kind = req.body.kind;
    var sql = "SELECT name,path,description FROM image where kind = '"+kind+"'";
    connection.query(sql,
    function(err,rows,fields){
        if(err){
            console.log("불러오기 실패");
        }else{
            for(var i=0; i<rows.length; i++){
                info.push(rows[i]);
            }
            console.log("불러오기 성공",info.length);
            res.send(info);
        }
    })
})
app.post("/Login",(req,res)=>{
    // var id = req.body.id;
    // var pw = req.body.pw;
    // var sql = "select name from admin where id='"+id+"' and pw='"+pw+"'";
    var sql = "select name from admin where id='test' and pw='test'";
    connection.query(sql,function(err,rows,fields){
        if(err){
            console.log("db 접속 실패!!");
        }else{
            if(rows.length<1){
                res.send("None");
            }else{
                var name = rows[0];
                res.send(name);
            }
        }
    })
})
app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})