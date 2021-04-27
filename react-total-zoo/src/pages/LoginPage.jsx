
import React, { Component } from 'react'; 
import Header from '../components/Header';
import Customer from '../components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
//관리자 페이지!!
function alldata() {
    var customer=[] ;
    fetch("http://localhost:3001/alltable",{
            method:"post",
            headers : {
              "content-type" : "application/json",
            },
        }).then((res)=>res.json())
        .then((json)=>{
            // for(var i =0; i<json.length; i++){
            //     customer.push(json[i]);
            // }
            // customer = json;
            json.map(data =>{
                // console.log("data is ",data);
                var a = data;
                customer.push(a);
                console.log(a);
            })
        })
        // var result = Object.keys(customer).map(key => ({[key]:customer[key]}));
        return customer;
    }
const LoginPage=({match})=>{
    // var animal = alldata();
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