import React, { Component } from 'react'
import Header from '../components/Header'

class test extends Component{
    state ={
        id:"",
        pw:"",
        name:"",
        btnState:false,
    }
    idChange=(e)=>{
        //id 입력 텍스트에 데이터가 입력되면 id 업데이트//
        this.setState({
            id : e.target.value,
        })
    }
    pwChange=(e)=>{
        //pw 입력 텍스트에 데이터가 입력되면 pw 업데이트//
        this.setState({
            pw : e.target.value,
        })
    }
    btnChangeColor = () =>{
        // 삼항 연산자와 and 연산자를 사용해서 id와 pw에 입력된 데이터의 길이에 따라 로그인 버튼 활성화 유무 결정
        (this.state.id.length >=5 && this.state.pw.length >=6)? 
        this.setState({btnState:true,}):this.setState({btnState:false,})
    }
    check_login=()=>{
        var post = {id:this.state.id,pw:this.state.pw};
        fetch("http://localhost:3001/Login_check",{
            method:"post",
            headers : {
              "content-type" : "application/json",
            },
            body : JSON.stringify(post),
        }).then((res)=>res.json())
        .then((json)=>{
            this.setState({
                name: json,
            })
            var result =this.state.name.name;
            if(result !=="None")
            {
                window.location.href="/test/"+result;
            }
            else{
                alert("관리자가 아닙니다!!");
            }
        })
    }
    go_to=()=>{
        window.location.href="test/login";
    }
    render(){
        return(
            <>
            <Header/>
            <div>
            <h1 style={{color : this.props.titleColor}}>Child Component</h1>
            <button className={"login_btn " + (this.state.btnChangeColor? 'onColor':'offColor')} type ="button" onClick={this.go_to}>로그인</button>
            </div>
            </>
            );
    }

}

export default test;