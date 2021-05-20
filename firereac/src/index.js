import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {getFirestore} from 'redux-firestore'
import {getFirebase} from 'react-redux-firebase'

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))); 
// Firebase에 접근할때 사용하는 함수(getFirestore,getFirebase)를 매개변수로 입력해서 업데이트 혹은 데이터를 불러올때 사용이 가능하게 해주는 코드
// Redux에 경우는 하나의 컴포넌트를 통해 여러 작업을 실행하므로 한번만 실행해주면 된다.
// (즉 FireBase와 연결을 하는것이기에 한번 설정하면 불러올때나 업데이트시 계속 부를 필요가없다)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
