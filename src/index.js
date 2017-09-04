import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Highlight from './pages/Highlight'
import Home from './pages/Home'
import Material from './pages/Material'
import Design from './pages/Design'
import Contact from './pages/Contact'

import './index.css';



ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Highlight}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/material' component={Material}/>
      <Route exact path='/design' component={Design}/>
      <Route exact path='/contact' component={Contact}/>
    </Switch>
  </BrowserRouter>
)     
,document.getElementById('root'));
