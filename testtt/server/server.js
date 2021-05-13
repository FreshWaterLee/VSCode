
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


// //종류별 동물 데이터 리턴 함수
// app.post("/kindtable", (req,res)=>{
//     var info=[];
//     var kind = req.body.kind;
//     var sql = "SELECT name,path,description FROM image where kind = '"+kind+"'";
//     connection.query(sql,
//     function(err,rows,fields){
//         if(err){
//             console.log("불러오기 실패");
//         }else{
//             for(var i=0; i<rows.length; i++){
//                 info.push(rows[i]);
//             }
//             console.log("불러오기 성공",info.length);
//             res.send(info);
//         }
//     })
// })

// 관리자가 보는 테이블 리턴 함수
app.post("/alltable", (req,res)=>{
    var sql = "SELECT _id,name,kind,path,description FROM image";
    connection.query(sql,
    function(err,rows,fields){
        if(err){
            console.log("불러오기 실패");
        }else{
            // console.log("불러오기 성공");
            var ttt = {data : rows};
            console.log(ttt);
            res.send(ttt);
        }
    })
})

app.post("/Logincheck",(req,res)=>{
    var id = req.body.id;
    var pw = req.body.pw;
    var sql = "select name from admin where id='"+id+"' and pw='"+pw+"'";
    connection.query(sql,function(err,rows,fields){
        if(err){
            console.log("db 접속 실패!!");
        }else{
            if(rows.length===0){
                var name = {name:"None"};
                console.log("로그인 실패!!");
                res.send(name);
            }else{
                var name = rows[0];
                console.log("로그인 성공");
                res.send(name);
            }
        }
    })
})

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})