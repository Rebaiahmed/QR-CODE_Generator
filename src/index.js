import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory,IndexRedirect,browserHistory } from 'react-router'


//************import the necessary pages*************



import ChatBot from './Chatbot';




ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
  <IndexRedirect to="/ChatBot" />
  <Route path="/ChatBot" component={ChatBot} />

   </Route>
     </Router>



  , document.getElementById('root'));
registerServiceWorker();
