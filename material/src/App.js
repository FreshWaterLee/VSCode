import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import { useState } from 'react';
import {Motion, spring} from 'react-motion';
const styles = {
  menu: {
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
  const [height, setHeight] = useState(38);
  const [img,setImg] = useState('/Main/003.jpg');
  const animate=()=>{
    var hei = height ===215 ? 38:215 ;
    setHeight(hei);
  }
  const clickB = (e)=>{
    const select = document.getElementById(e.target.id);
    const menu = document.getElementById('Select');
    if(select === "Animal") setImg('/Main/001.jpg');
    if(select === "Bird") setImg('/Main/007.jpg');
    if(select === "Sea") setImg('/Main/006.jpg');
    if(select === "Poke") setImg('/Main/004.jpg');
    menu.innerText = select.innerText;
    animate();
  }
  const clickC = ()=>{
    animate();
  }
  return (
    <div className="App" >
      <Motion style = {{height : spring(height)}}>
        {
          ({height}) => <div style = {Object.assign({}, styles.menu,{height})}>
            <p style={styles.selection} id = 'Select' onClick = {clickC}>종류를 선택하세요~!</p>
            <p style={styles.selection} id = 'Animal' onClick = {clickB}>동물</p>
            <p style={styles.selection} id = 'Bird' onClick = {clickB}>새</p>
            <p style={styles.selection} id = 'Sea' onClick = {clickB}>해양생물</p>
            <p style={styles.selection} id = 'Poke' onClick = {clickB}>포켓몬</p>
            </div>
        }
      </Motion>
      <img id = 'img' src = {img} width ="320px"></img>
      <Box color="text.primary">
        <Button variant = "contained" color = "primary" disableElevation>Button1</Button>
        <Button  color = "secondary">Button2</Button>
      </Box>
    </div>
  );
}

export default App;
