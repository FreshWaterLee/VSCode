import React, { useState } from 'react'
import Header from '../components/Header'
import styled from "styled-components";
import oc from 'open-color';
import store from '../store';
import Footer from'../components/Footer';
import { useHistory } from 'react-router';

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
`;

const Logo = styled.div`
    position:relative;
    margin-bottom:20px;
    text-align:center;
    left:30%;
    width:40%;
    height:40px;
    font-size: 1.4rem;
    letter-spacing: 4px;
    background-color:${oc.teal[7]};
    color: white;
    font-family: 'Rajdhani';

`;
// color: ${oc.teal[7]};

const Input = styled.input`
  position: relative;
  overflow: hidden;
  left: 30%;
  width: 40%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 18px;
  position:relative;
  font-weight: 700;
  line-height: 49px;
  display: block;
  left:30%;
  width: 40%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

const send_list=(name)=>{
    var data ='';
    alert("목록?");
    fetch("http://localhost:3001/alltable",{
        method:"post",
        headers : {
            "content-type" : "application/json",
        },
    }).then((res)=>res.json())
    .then((json)=>{
        data = json.data;
    }).then(()=>{
        alert('name is '+ name+'data'+data);
        store.dispatch({type:"loginS",name : name, data:data});
    })
}
const check_login=({history})=>{
    var post = {"id":document.getElementById('id').value,"pw":document.getElementById('password').value};
    var name = '';
    fetch("http://localhost:3001/Logincheck",{
        method:"post",
        headers : {
        "content-type" : "application/json",
        },
        body : JSON.stringify(post),
    }).then((res)=>res.json()
    )
    .then((json)=>{
        name = json.name;
    }).then(()=>{
        if(name !=="None")
        {
            alert("로그인 완료!!"+name);
            send_list(name);
            history.push('/red_login');
        }
        else{
            alert("아닌데? 아닌데?"+name);
        }
    })

}
const go_main=()=>{
}

export default function App({location}){
    const [his,setHist] = useState(useHistory());
    
    return(        
    <>
        <Header location = {location} history = {his}/>
        <Container>
                <Logo>REACT ZOO</Logo>
                <Input id="id" name="id" placeholder="아이디를 입력해주세요" value='아이디를 입력'/>
                <br/>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                />
                <Button onClick={check_login()}>로그인</Button>
                <Button onClick={go_main}>돌아가기</Button>
        </Container>
        <Footer/>
        </>
    )
}

