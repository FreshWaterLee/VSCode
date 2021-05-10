import React from 'react'; 
import { Component } from 'react';
import Head from '../components/Head';
import '../App.css';

class MainPage extends Component{
  myref;
  intersectionObserver;

  constructor(){
    super();
    this.myref = React.createRef();
    this.state={
      count:0
    }
  }

  componentDidMount(){
    this.intersectionObserver = new IntersectionObserver(enteries=>{
      var ratio = enteries[0].intersectionRatio; // ratio 페이지 길이 초과시
      console.log("ratio = "+ratio);
      if(ratio>0) this.setState({count:this.state.count+6});
    });
    this.intersectionObserver.observe(this.myref.current);
  }
  componentWillUnmount(){

  }

  reapeat_logo(){
    var image = ['/images/Main/003.jpg','/images/Main/002.jpg','/images/Main/001.jpg','/images/Main/007.jpg','/images/Main/006.jpg','/images/Main/004.jpg'];
    var test = ['Welcome To Naju Zoo Park!!','We Have Various Creatures!!','First Animal!!','Second Bird!!','Third Marine Life!!',' Special Creature PokeMon!!'];
    var str = [];
    for(var i=0; i<this.state.count; i++){
      str.push(<div key={i}>
        <h2>{test[i%6]}</h2>
        <img src = {image[i%6]} width = "960" height="480" />
        {/* <iframe width = "452" height="254" title = {i} src = "https://www.youtube.com/embed/Rf"></iframe> */}
      </div>
      );
    }
    return str;
  }
  render(){
    return (
      <>
      <Head/>
      <div className = "App">
        <div className = "App-header">
          {this.reapeat_logo()}
          <div ref = {this.myref}></div>
        </div>
      </div>
      </>
    )
  }
}

export default MainPage;