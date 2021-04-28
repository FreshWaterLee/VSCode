import React, { Component } from 'react'
import Header from '../components/Header'
import styled from "styled-components";
import oc from 'open-color';

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
class test extends Component{
    constructor(props)
    {
        super(props);
        this.state ={
                id:"",
                pw:"",
                name:"",
                btnState:false,
        }
    }
    idChange=(e)=>{
        //id 입력 텍스트에 데이터가 입력되면 id 업데이트//
        this.setState({
            id : e.target.value,
        })
    }
    btnChangeColor = () =>{
        // 삼항 연산자와 and 연산자를 사용해서 id와 pw에 입력된 데이터의 길이에 따라 로그인 버튼 활성화 유무 결정
        (this.state.id.length >=5 && this.state.pw.length >=6)? 
        this.setState({btnState:true,}):this.setState({btnState:false,})
    }
    check_login=()=>{
        var post = {"id":this.state.id,"pw":document.getElementById('password').value};
        var result;
        fetch("http://localhost:3001/Logincheck",{
            method:"post",
            headers : {
              "content-type" : "application/json",
            },
            body : JSON.stringify(post),
        }).then((res)=>res.json()
        )
        .then((json)=>{
            this.setState({
                name: json.name,
            })
            var result = this.state.name;
            if(result !=="None")
            {
                window.location.replace("/test/"+result);
                // this.props.history.push("/Admin");
            }
        })
    }
    go_main=()=>{
        window.location.href="/";
    }
    LoginForm=()=>{
        return(
            <Container>
                <Logo>REACT ZOO</Logo>
                <Input id="id" name="id" placeholder="아이디를 입력해주세요" onChange={this.idChange}/>
                <br/>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    onchange={this.pwChange}
                />
                <Button onClick={this.check_login}>로그인</Button>
                <Button onClick={this.go_main}>돌아가기</Button>
            </Container>
        );        
    }
    render(){
        return(
            <>
            <Header/>
            <this.LoginForm/>
            {/* <div>
            <button className={"login_btn " + (this.state.btnChangeColor? 'onColor':'offColor')} type ="button" onClick={this.go_to}>로그인</button>
            <button className={"login_btn " + (this.state.btnChangeColor? 'onColor':'offColor')} type ="button" onClick={this.go_main}>메인으로</button>
            </div> */}
            </>
            );
    }

}

export default test;