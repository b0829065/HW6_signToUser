// import React from 'react'; 原本的
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ToDo from './ToDo';
import SignInSide from './sign_in';

ReactDOM.render(
  <Router>
    <div>
      <Route  exact path="/" component={SignInSide}/>
      <Route  path="/about" >
      <ToDo/>
      </Route>
    </div>
  </Router>,
  document.getElementById('root'));
  reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

