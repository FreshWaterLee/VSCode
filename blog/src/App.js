import React, { Component } from 'react'
import { Redirect } from 'react-router';
import User from "./pages/User"

class App extends Component {
  state = {
    data:[{name : "Zoo",path:"None",description : "N.O.N.E"}], //이미지 데이터를 가져오기위해 사용
    kind : "",
    place :0,
    name :"",
  }
  handleChange =(e)=>{
    console.log(this.state.kind);
    this.setState({
      kind : e.target.value,
    });
  }
  nextClick = ()=>{
    if(this.state.place >=this.state.data.length-1){
      this.setState({
        place : 0
      });
    }
    else{
      this.setState({
        place : this.state.place+1
      });
    }
  }
  beforeClick = ()=>{
    if(this.state.place ===0){
      this.setState({
        place : this.state.data.length-1
      });
    }
    else{
      this.setState({
        place : this.state.place-1
      });
    }
  }
  onCall =()=>{
    if(this.state.kind === ""){
        alert("종류를 입력해주세요!!");
    }
    else{
    this.state.place = 0;
    const post ={
      kind : this.state.kind,
    };
    fetch("http://localhost:3001/callbody",{
      method:"post",
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(post), // 전송할 데이터를 입력할곳
    })
    .then((res)=>res.json())
    .then((json)=>{
      alert(json.name);
      this.setState({
        data: json,
        // json이 key, value로 구성되어있기 때문에 key값을 data에 입력해야한다.
      });
    });
  }}
  check_login=()=>{
    var post = {id:this.state.id,pw:this.state.pw};
    fetch("http://localhost:3001/Login",{
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
        var result = this.state.name.name;
        if(result !== "None"){
          return(
            <Redirect to="/User?name="result />
          )
          //페이지 이동을 위해 Redirect를 건다. to = '원하는 URL'//
        }else{
          alert("관리자가 아닙니다.");
        }
    })
  }
  render() {
    var place = 0;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <select onChange={this.handleChange} name ="testbody">
                <option value = "">선택안함</option>
                <option value = "Animal">동물</option>
                <option value = "Bird">새</option>
                <option value = "Poke">포켓몬</option>
                <option value = "Sea">해양생물</option>
                </select>
              </td>
              <td>{this.state.data[this.state.place].name}</td>
              <td align = 'right'>
                <button onClick={this.onCall}>가져오기</button>
              </td>
            </tr>
            <tr>
              <td colSpan = '3'><img src={this.state.data[this.state.place].path} width= "480px" height = "300px"/></td>
            </tr>
            <tr>
              <td><button onClick ={this.beforeClick}>이전</button></td>
              <td>설명 란</td>
              <td align = 'right'><button onClick={this.nextClick}>다음</button></td>
            </tr>
            <tr>
              <td align = 'left' colSpan = '3'> {this.state.data[this.state.place].description.split(',').join('.').split('.').map((line) => {
            return <div>{line}</div>})}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.check_login}>테스트!!</button>
      </div>
    )
  }
}

export default App;


// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Home, About, User } from './pages'; // 생성한 페이지 정보를 가져올때 사용

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/user">User</Link>
//               </li>
//             </ul>
//           </nav>
//           <Route exact path='/' component={Home}/> 
//           {/* component란 페이지를 뜻한다? component ={페이지}를 하면 주소뒤에 입력한 값에 따른 페이지 지정이 가능하다(?). */}
//           <Route path='/about' component={About}/>
//           <Route path='/user/:name' component={User}/>
//         </div>
//       </Router>
//     );
//   }
// }
// export default App;