import React, { Component } from 'react'
import Navbar from './components/Navbar'
import LoginTab from './components/LoginTab'
import LeftTab from './components/LeftTab'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LoginTab />
        <LeftTab /> 

      </div>
    );
  }
}

export default App
