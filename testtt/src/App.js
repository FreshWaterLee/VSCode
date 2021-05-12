
import { useState } from 'react';
import {Motion, spring} from 'react-motion';
import './App.css';
const styles = {
  menu: {
    transform: 'translate(0%,0%)',
    position:'absolute',
    top : '0%',
    left : '0%',
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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    width: 200,
    height: 45,
    border: 'none',
    borderRadius: 4,
    backgroundColor: '#ffc107',
  },
}
function App() {
  const [height, setHeight] = useState(38); // UseState를 사용해 Function에서 State를 사용하는 효과를 냄
  const animate=()=>{
    var hei = (height ===215 ? 38:215); // 최대 길이 및 하나의 옵션의 길이만큼 띄우는것
    setHeight(hei); //메뉴의 길이를 다시 세팅
  }
  const clickB = (e)=>{
    const select = document.getElementById(e.target.id);
    const menu = document.getElementById('Select');
    const image = document.getElementById('img');
    if(e.target.id === "Animal"){
      image.setAttribute('src','/Main/001.jpg');
    }
    if(e.target.id === "Bird") {
      image.setAttribute('src','/Main/007.jpg');
    }
    if(e.target.id === "Sea") {
      image.setAttribute('src','/Main/006.jpg');
    }
    if(e.target.id === "Poke") {
      image.setAttribute('src','/Main/004.jpg');
    }
    menu.innerText = select.innerText;
    animate(); //선택하면 옵션들을 안보이게 하기위해 애니메이션을 다시 진행
  }
  const clickC = ()=>{ //동물의 품종을 선택할때 선택 종류를 보여주기위한 애니메이션
    animate();
  }
  const clickW = ()=>{ // 선택한 품종 값을 전송하여 선택한 품종만 띄우는 함수(페이지 이동도 포함)

  }
  return (
    <div className="App" >
      <img id = 'img' src = '/Main/003.jpg' width ="320px" height="215px"/>
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
      
      {/* <Box color="text.primary">
      
      <Button variant = "contained" color = "primary" disableElevation>Button1</Button>
      <Button  color = "secondary">Button2</Button>
      </Box> */}
    </div>
  );
}

export default App;
