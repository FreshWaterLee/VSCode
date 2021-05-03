import AddNumber from "../Components/AddNum";
import {connect} from 'react-redux';
// 디스패치를 실행할 이벤트를 정의 하는 곳이 mapDispatchToProps 함수이다.
function mapDispatchToProps(dispatch){
    return{
        onClick:function(size){
            dispatch({type:'INCREMENT',size:size});
        }
    }
}
export default connect(null,mapDispatchToProps)(AddNumber);

// import React,{ Component } from "react";
// export default class extends Component{
//     render()
//     {
//         return <AddNumber onClick = {function(size){
//             store.dispatch({type:"INCREMENT", size:size});
//         }.bind(this)}></AddNumber>
//     }
// }