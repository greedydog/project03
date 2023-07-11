import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; //App컴포넌트를 가져와서 사용하겠습니다.
import reportWebVitals from './reportWebVitals';
import App from './AppExample'
//AppExample.js 생성 index.js로 와서 해당내용 작성
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
