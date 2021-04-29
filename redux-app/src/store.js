import {createStore} from 'redux';
//Store를 통해 
export default createStore(function(state,action){
    if(state === undefined){ //조건문을 통해 데이터 초기화를 선언하면 된다. undefined라면 처리할 데이터 초기화
        return {number:0}
    }
    if(action.type === 'INCREMENT'){ // Type===''에 따라 원하는 데이터 처리
        return {number:state.number + action.size}
    }
    return state;
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())