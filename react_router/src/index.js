import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, HashRouter, NavLink, Switch, useParams} from 'react-router-dom';

function Home(){
  return (
    <div>
        <h2> Home </h2>
        Home...
    </div>
  )
}
var contents = [
  {id:1,title:'HTML',description:'HTML is ...'},
  {id:2,title:'JS',description:'JS is ...'},
  {id:3,title:'React',description:'REACT is ...'},
]
function Topic(){
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic = {
    title : 'Sorry',
    description:'NotFound'
  }
  //Topic_id는 문자열로 되어있기때문에 조건문에서 사용할때 숫자형으로 변경해야함
  for(var i=0; i<contents.length; i++){
    if(contents[i].id ===Number(topic_id)){ 
      selected_topic = contents[i];
      break;
    }
  }
  console.log('params',params);
  return (
    <div>
        <h3>{selected_topic.title}</h3>
        {selected_topic.description}
    </div>
  );
}
function Topics(){
  var lis = [];
  for(var i =0; i<contents.length; i++){
    lis.push(<li key= {contents[i].id}><NavLink to ={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return (
    <div>
        <h2> Topics </h2>
        <ul>
          {lis}
        </ul>
        <Route path = "/topics/:topic_id">
          <Topic></Topic>
        </Route>
        {/* <Switch>
          <Route path = "/topics/1">HTML IS ...</Route>
          <Route path = "/topics/2">JS IS ...</Route>
          <Route path = "/topics/3">REACT IS ...</Route>
        </Switch> */}
    </div>
  )
}

function Contact(){
  return (
    <div>
        <h2> Contact </h2>
        Contact...
    </div>
  )
}

function App(){
  return (
    <div>
      <h1>Hello React Router DOM example</h1>
      <ul>
        <li><NavLink exact to ="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Switch>
      <Route exact path = "/"><Home></Home></Route>
      {/* exact path는 정확히 주소가 일치할때 Route가 되게 하는것 
        쓰기 싫다면 Switch문으로 감싸서 사용하면 된다.*/
      }
      <Route path ="/topics"><Topics></Topics></Route> 
      {/* <Route path ="/topics"><Topics></Topics></Route> 같은 경로를 입력한 Component를 설정하면 전부 다 뜨게 된다. */}
      <Route path = "/contact"><Contact></Contact></Route>
      <Route path = "/">Not Found</Route>
      </Switch>
    </div>
  )
}
ReactDOM.render(
  <HashRouter>
    {/* HashRouter는 웹서버에서든 웹서버를 사용할수있게 할려면 Browser Router를 사용, 불가능하다면 Hash Router */}
    <App />
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
