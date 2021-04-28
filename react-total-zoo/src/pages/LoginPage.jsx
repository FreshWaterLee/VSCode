
import React, {useEffect, useState } from 'react'; 
import Header from '../components/Header';
import Customer from '../components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
//관리자 페이지!!
// const animal = alldata();
// useEffect( ()=>{
//     console.log("페이지 전환!!");
// }, [match])
const LoginPage=({match})=>{
    const [count, setCount] = useState(0);
    const [animal, setAnimal] = useState([]);// 동물 데이터를 state에 저장해놓기 위해 생성
    const [addbtn, setAdd] = useState(false); // 생물을 추가 했을시 새로고침을 위해 생성
    
    const alldata=()=>{
        alert("실행");
        var customer = [];
        fetch("http://localhost:3001/alltable",{
            method:"post",
            headers : {
              "content-type" : "application/json",
            },
        }).then((res)=>res.json())
        .then((json)=>{
            customer = JSON.stringify(json);
            setAnimal(customer);
        })
    }
    useEffect(() =>{
        console.log("페이지 전환!!");
        setCount(count+1);
        alldata();
        console.log("과연? ",JSON.parse(animal).length);
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
            </TableBody>
            </Table>
            </div>
        </>
    )
}

export default LoginPage;