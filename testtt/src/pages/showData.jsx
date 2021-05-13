import { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import {Motion, spring} from 'react-motion';
import NavigateBeforeIconOutlined from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextIconOutlined from '@material-ui/icons/NavigateNextOutlined';
import store from '../store'
import Slide from './Slide';
function SplitPane(props){
    return(
        <div className = "SplitPane">
            <div className = "SplitPane-left">
                {props.left}
            </div>
            <div className = "SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}
const Container = styled.div`
    width: 60%;
    overflow: hidden; 
`;

const SliderContainer = styled.div`
    width:100%;
    display:flex;
`;
const styles = {
  menu: {
    transform: 'translate(0%,0%)',
    position:'absolute',
    top : '0%',
    left : '80%',
    overflow: 'hidden',
    border: '2px solid #ddd',
    width: 300,
    marginTop: 20,
  },
  selection: {
    padding: 10,
    margin: 0,
    borderBottom: '1px solid #ededed',
    width :"100%"
  },
  image:{
    marginTop:'20px',
    position : 'absolute',
    width : '80%',
    height : '70vh',
    overflow : 'hidden',
  },
  left:{
    position : 'absolute',
    marginTop:'20px',
    left : '0%',
    top : '35vh',
  },
  right:{
    marginTop:'20px',
    position : 'absolute',
    left : '75%',
    top : '35vh',
  },
}

function ShowTable() {
  const [height, setHeight] = useState(38); // UseState를 사용해 Function에서 State를 사용하는 효과를 냄
  const [isChange, setChange ] = useState(false);
  const [data, setData] = useState([]);// 모든 동물 데이터를 가지고 있는 변수
  const [showData,setShow] = useState([{name:'title',path:'/Main/003.jpg',description:"Title",kind:"Title"}]);
  const [befKind, setK] = useState('');
  const [slideL,setSl] = useState(0);
  const [nowS, setNs] = useState(0);
  const slideRef = useRef(null);
  const animate=()=>{
    var hei = (height ===215 ? 38:215); // 최대 길이 및 하나의 옵션의 길이만큼 띄우는것
    setHeight(hei); //메뉴의 길이를 다시 세팅
  }
  const clickB = (e)=>{
    const select = document.getElementById(e.target.id);
    const menu = document.getElementById('Select');
    if(e.target.id === "Animal"){
      if(befKind !== e.target.id){
        setK(e.target.id);
      }
    }
    if(e.target.id === "Bird") {
      if(befKind !== e.target.id){
        setK(e.target.id);
      }
    }
    if(e.target.id === "Sea") {
      if(befKind !== e.target.id){
        setK(e.target.id);
      }
    }
    if(e.target.id === "Poke") {
      //임시 이미지이다 슬라이드가 구현 된다면 바로 삭제될 예정
      if(befKind !== e.target.id){
        setK(e.target.id);
      }
    }
    menu.innerText = select.innerText;
    animate(); //선택하면 옵션들을 안보이게 하기위해 애니메이션을 다시 진행
  }
  const clickC = ()=>{ //동물의 품종을 선택할때 선택 종류를 보여주기위한 애니메이션
    animate();
  }
  const ShowArrow = ()=>{
    var aaa = !isChange;
    setChange(aaa);
  }
  const Arrow=(e)=>{
    if(e.target.id === 'next'){
      setNs(nowS+1 >= slideL ? 0:nowS+1)
    }else if (e.target.id === 'before'){
      setNs(nowS-1 < 0 ? slideL-1:nowS-1);
    }
  }
  useEffect(()=>{ //여기서 넘겨받은 Json Data를 필터링을 통해 원하는 종류 데이터만 파싱 및 슬라이드 최대 길이를 수정
    if(befKind !== ''){
        var rrrr = data.filter(function(data){return data.kind ===befKind});
        console.log(rrrr);
        setSl(rrrr.length);
        setShow(rrrr);
    }else{
      store.subscribe(function(){
          var rrrr = store.getState().animal;
          setData(rrrr);
          setShow(rrrr);
      })
    }
    setNs(0);
  },[befKind]);
  useEffect(()=>{
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${nowS}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [nowS]);
  return (
    <div >
      {/* <img id = 'img' src = '/Main/003.jpg' width ="320px" height="215px" onMouseOver ={ShowArrow}/> */}
      <SplitPane right={
      <Motion style = {{height : spring(height)}}> 
      {/* 길이를 이벤트에 따라 조정하면서 늘었다 줄었다하는 애니메이션을 준다. */}
        {
          ({height}) =>
          <div style = {Object.assign({}, styles.menu,{height})}>
            <p style={styles.selection} id = 'Select' onClick = {clickC}>종류를 선택하세요~!</p>
            <p style={styles.selection} id = 'Animal' onClick = {clickB}>동물</p>
            <p style={styles.selection} id = 'Bird' onClick = {clickB}>새</p>
            <p style={styles.selection} id = 'Sea' onClick = {clickB}>해양생물</p>
            <p style={styles.selection} id = 'Poke' onClick = {clickB}>포켓몬</p>
          </div>
        }
      </Motion>
      }left = {
        <>
      {/* <img style = {styles.image} id = 'img' src = {showData[nowS].path} width ="320px" height="215px" onMouseOver ={ShowArrow}/> */}
      <Container>
      <SliderContainer ref ={slideRef}>
        {showData.map(imagee=>{
          console.log(imagee);
          return(
              <Slide img = {imagee.path} event = {ShowArrow}/>
          )
      })}
      </SliderContainer>
        {isChange && <NavigateBeforeIconOutlined color='primary' fontSize = 'large' id = 'before' style = {styles.left} onClick = {Arrow}/>}
        {isChange && <NavigateNextIconOutlined color='primary' fontSize = 'large' id = 'next'style = {styles.right} onClick = {Arrow}/>}
      </Container>
      </>
      }/>
    </div>
  );
}

export default ShowTable;