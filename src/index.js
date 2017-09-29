import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Highlight from './pages/Highlight'
import Home from './pages/Home'
import Material from './pages/Material'
import Design from './pages/Design'
import Contact from './pages/Contact'
import Information from './pages/Information'
import SignUp from './pages/SignUp'
import MatDetail from './pages/MatDetail'
import DesDetail from './pages/DesDetail'

import './CSS/index.css';



ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Highlight}/>
      <Route path='/home' component={Home}/>
      <Route exact path='/contactus' component={Contact}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/info' component={Information}/>
      <Route exact path='/material' component={Material}/>
      <Route exact path='/design' component={Design}/>
      <Route exact path="/mat/" component={Material}/>
      <Route exact path="/des/" component={Design}/>
      <Route path="/mat/:id" component={MatDetail}/>
      <Route path="/des/:id" component={DesDetail}/>
    </Switch>
  </BrowserRouter>
)     
,document.getElementById('root'));
