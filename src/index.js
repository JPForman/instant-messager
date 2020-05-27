import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyCPQAWkYm_qiQWi2ABCspg0CfzUYAFoNKo",
  authDomain: "instant-messager-1d66b.firebaseapp.com",
  databaseURL: "https://instant-messager-1d66b.firebaseio.com",
  projectId: "instant-messager-1d66b",
  storageBucket: "instant-messager-1d66b.appspot.com",
  messagingSenderId: "54532088921",
  appId: "1:54532088921:web:ccc0de71605b9736b5bd48",
  measurementId: "G-LRCHTSNEMJ"
});

const routing = (
<Router>
  <div id='routing-container'>
    <Route path='/login'component={LoginComponent}></Route>
    <Route path='/signup' component={SignupComponent}></Route>
    <Route path='/dashboard' component={DashboardComponent}></Route>
  </div>
</Router>
);

ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
