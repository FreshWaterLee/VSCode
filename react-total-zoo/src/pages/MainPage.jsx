import React from 'react'; 
import styled from 'styled-components';
import oc from 'open-color';

class App extends Component{
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
      if(ratio>0) this.setState({count:this.state.count+5});
    });
    this.intersectionObserver.observe(this.myref.current);
  }
  componentWillUnmount(){

  }

  reapeat_logo(){
    var image = ['/images/Main/001.jpg','/images/Main/002.jpg','/images/Main/003.jpg','/images/Main/005.jpg','/images/Main/006.jpg','/images/Main/004.jpg']
    var test = ['Welcome To Naju Zoo Park!!','We Have a Various Creatures!!','First Animal!!','Second Bird!!','Third Marine Life','And!! Our Zoo Parks Special Creature PokeMon!!!'];
    var str = [];
    for(var i=0; i<this.state.count; i++){
      str.push(<div key={i}>
        <h2>{test[i%5]}</h2>
        <img src = {image[i%5]} />
        <iframe width = "452" height="254" title = {i} src = "https://www.youtube.com/embed/Rf"></iframe>
      </div>
      );
    }
    return str;
  }
  render(){
    return (
      <div className = "App">
        <div className = "App-header">
          {this.reapeat_logo()}
          <div ref = {this.myref}></div>
        </div>
      </div>
    )
  }
}

export default App;
// const Logo = styled.div`
//     font-size: 1.4rem;
//     letter-spacing: 2px;
//     color: ${oc.teal[7]};
//     font-family: 'Rajdhani';
// `;

// function MainPage(){
//     return (
//         <>
//         <div style ={{margin: '100px'}}></div>
//         <div className='main'>
//             <Logo>메인페이지 구성</Logo>
//         </div>
//         </>
//     );
// }
// export default MainPage;