import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Highlight from './pages/Highlight'
import Home from './pages/Home'
import './index.css';



ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Highlight}/>
      <Route path='/home' component={Home}/>
    </Switch>
  </BrowserRouter>
)     
,document.getElementById('root'));
