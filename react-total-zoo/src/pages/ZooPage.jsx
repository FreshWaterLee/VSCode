import { useEffect, useState } from 'react';
import './sdataTable.css'
import '../App.css'
import {Button} from '@material-ui/core/'
import {makeStyles} from '@material-ui/core/styles'
import NavigateBeforeIconOutlined from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextIconOutlined from '@material-ui/icons/NavigateNextOutlined';
import store from '../store';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    alignItems:'flex-start',
  },
}));

const styles = {
  menu: {
    transform: 'translate(0%,0%)',
    position:'absolute',
    // top : '50px',
    // left : '75%',
    overflow: 'hidden',
    border: '2px solid #ddd',
    width: 300,
    marginTop: 20,
  },
  selection: {
    padding: 10,
    margin: 0,
    // borderBottom: '1px solid #ededed',
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
  const [showData,setShow] = useState([{name:'NaZoo Park',path:'/images/Main/003.jpg',description:"원하는 동물의 종류를 선택해주세욧!!",kind:"Title"}]);
  const [befKind, setK] = useState('');
  const [slideL,setSl] = useState(0);
  const [nowS, setNs] = useState(0);
  const classes = useStyles();
  const animate=()=>{
    var hei = (height ===215 ? 38:215); // 최대 길이 및 하나의 옵션의 길이만큼 띄우는것
    setHeight(hei); //메뉴의 길이를 다시 세팅
  }
  const clickB = (e)=>{
    const menu = document.getElementById('Select');
    var kind = menu.innerText;
    if(e.target.id === "Animal"){
      if(befKind !== e.target.id){
        setK(e.target.id);
        kind = '동물';
      }
    }
    if(e.target.id === "Bird") {
      if(befKind !== e.target.id){
        setK(e.target.id);
        kind = '조류';
      }
    }
    if(e.target.id === "Sea") {
      if(befKind !== e.target.id){
        setK(e.target.id);
        kind = '어류';
      }
    }
    if(e.target.id === "Poke") {
      //임시 이미지이다 슬라이드가 구현 된다면 바로 삭제될 예정
      if(befKind !== e.target.id){
        setK(e.target.id);
        kind = '포켓몬';
      }
    }
    // menu.innerText = select.innerText;
    menu.innerText = kind;
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

  return (
    <div class = "main-container">
      <div class = 'temp-box'>
        <div class = 'name'>{showData[nowS].name}</div>
      </div>
      <div class = 'border-dee3eb'>
        <p style={styles.selection} id = 'Select'>종류를 선택하세요~!</p>
              {/* <Motion style = {{height : spring(height)}}> 
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
              </Motion> */}
            </div>
        <div class = 'tmpe-box bot-three'>
          <div class = 'border-dee3eb'>
          <section className = "slider">
            {showData.map((imagee,index)=>{
              return(
                <div className = {index === nowS ? 'slide active':imagee} key = {index}>
                {index === nowS && (
                <img src = {imagee.path} alt = "travel image" className = 'image' onMouseEnter = {ShowArrow}/>)}
                </div>
              )
          })}
            {isChange && <NavigateBeforeIconOutlined color='primary' fontSize = 'large' id = 'before'className='left-arrow' onClick = {Arrow}/>}
            {isChange && <NavigateNextIconOutlined color='primary' fontSize = 'large' id = 'next' className = 'right-arrow' onClick = {Arrow}/>}
          </section>
          </div>
        </div>
        <div class = 'temp-box box-four'>
            <div class = 'logo_box'>
              <Button id = 'Animal' className={classes.button} variant='text' color = 'default' startIcon = {<img id = 'Animal' class = 'button_logo' src = '/images/Icons/Animal_icon.jpg'onClick = {clickB}/>} onClick = {clickB}><h3 id = 'Animal'onClick = {clickB}>동물</h3></Button>
              <Button id = 'Bird' className={classes.button} variant='text' color = 'default' startIcon = {<img id = 'Bird' class = 'button_logo' src = '/images/Icons/Bird_icon.jpg'onClick = {clickB}/>} onClick = {clickB}><h3 id = 'Bird'onClick = {clickB}>조류</h3></Button>
              <Button id = 'Sea' className={classes.button} variant='text' color = 'default' startIcon = {<img id = 'Sea' class = 'button_logo' src = '/images/Icons/Sea_icon.jpg'onClick = {clickB}/>}onClick = {clickB}><h3 id = 'Sea'onClick = {clickB}>어류</h3></Button>
              <Button id = 'Poke' className={classes.button} variant='text' color = 'default' startIcon = {<img id ='Poke'class = 'button_logo' src = '/images/Icons/Poke_icon.jpg' onClick = {clickB}/>} onClick = {clickB}><h3 id = 'Poke'onClick = {clickB}>괴물</h3></Button>
            </div>
        {/* ↑ 종류 버튼을 놓을 곳 */}
          <div class = 'gap-box'></div>
          <div class = 'border-dee3eb'>
            {/* <div class ='description'>{showData[nowS].description}</div> */}
            <div class ='description'>{showData[nowS].description}</div>
          </div>
        </div>
      </div>
      
  );
}

export default ShowTable;