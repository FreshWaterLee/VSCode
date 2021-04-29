import {createStore} from 'redux';

export default createStore(function(state,action){
    if(state === undefined){
        return {
            name : '',
            kind : '',
            animal:'',
        }
    }
    if(action.type === 'loginS'){
        // console.log('name'+action.name);
        // console.log('data'+action.data);
        return({
            name:action.name,
            animal:action.data,
        })
    }
    return state;
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())