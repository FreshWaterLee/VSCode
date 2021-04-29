
import React, {useEffect, useState } from 'react'; 
import Header from '../components/Header';
import Customer from '../components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const LoginPage=()=>{
    // const [count, setCount] = useState(0); // useEffect 확인용 useState
    const [animal, setAnimal] = useState([{_id:"1",name:"None",kind:"None",path:"None",description:"None"}]);// 동물 데이터를 state에 저장해놓기 위해 생성
    // const [addbtn, setAdd] = useState(false); // 생물을 추가 했을시 새로고침을 위해 생성
    const alldata=()=>{
        var customer = [];
        fetch("http://localhost:3001/alltable",{
            method:"post",
            headers : {
              "content-type" : "application/json",
            },
        }).then((res)=>res.json())
        .then((json)=>{
            customer = JSON.stringify(json);
            setAnimal(JSON.parse(customer)); 
        })
    }
    useEffect(() =>{
        console.log("페이지 전환!!");
        alldata();
    },[]) // ,[조건] 조건에 만족할때 마다 페이지 새로고침, 혹은 한번만 실행하고 싶다면[]을 입력하면 된다.
    return (
    <>
    <Header/>
        <div>
            <Table>
            <TableHead>
            <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>종류</TableCell>
            <TableCell>설명</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {
                animal.map(data=>{
                return (
                <Customer id={data._id} name={data.name} path={data.path} kind = {data.kind} description={data.description}/>
                )})
            }
            </TableBody>
            </Table>
            </div>
        </>
    )
}

export default LoginPage;