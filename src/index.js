import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar'
import Highlight from './pages/Highlight'
import Home from './pages/Home'
import Material from './pages/Material'
import Design from './pages/Design'
import Contact from './pages/Contact'
import Information from './pages/Information'
import CleanInfo from './pages/CleanInfo'
import CareInfo from './pages/CareInfo'
import TypeInfo from './pages/TypeInfo'
import GenuineInfo from './pages/GenuineInfo'
import SignUp from './pages/SignUp'

import './CSS/index.css';



ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Highlight}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/contactus' component={Contact}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/info/his' component={Information}/>
      <Route exact path='/info/clean' component={CleanInfo}/>
      <Route exact path='/info/care' component={CareInfo}/>
      <Route exact path='/info/type' component={TypeInfo}/>
      <Route exact path='/info/genuine' component={GenuineInfo}/>
      <Route exact path='/material' component={Material}/>
      <Route exact path='/design' component={Design}/>
    </Switch>
  </BrowserRouter>
)     
,document.getElementById('root'));
