import DisplayNumber from "../Components/DisplayNumber";
import {connect} from 'react-redux';
function mapStateToProps(state){
    return {
        number:state.number, 
        //리턴할 State의 값을 보내주는 함수가 Redux_connect의 첫번째 괄호의 매개변수 1번
    }
}
// function mapDispatchToProps(){
//     //Dispatch의 설정 값을 보내주는 함수?
//     return {
//         type:"INCREMENT",
//         size : ,
//     }
// }
export default connect(mapStateToProps)(DisplayNumber);
//2번째 괄호는 리턴 값(리턴 함수), 1번째 괄호는 Redux State를 ReactProps로 변환, 

// import { Component } from "react";
// import store from "../store";
// export default class extends Component{
//     state = {number:store.getState().number} // 초기값 받기
//     constructor(props){
//     super(props);
//     store.subscribe(function(){
//       this.setState({number:store.getState().number});
//     }.bind(this))
//   }
//     render(){
//         return(
//             <DisplayNumber number ={this.state.number} unit={this.props.unit}/>
//         )
//     }
// }