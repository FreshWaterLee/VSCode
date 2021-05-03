import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {Provider} from 'react-redux';// react-redux에서 가져올수있는 App의 상위 함수
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
/* // provider 는 Store라는 값을 받아야하는데 매개변수는 우리가 작성한 Store를 입력하면 된다.(import의 불필요성을 없앨수있다.) */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
