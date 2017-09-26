import React , {Component} from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SignInTab from '../components/LoginTab'
import LeftTab from '../components/LeftTab'
import LeftTabFilter from '../components/LeftTabFilter'
import SignUp from '../pages/SignUp'
import Contact from '../pages/Contact'
import '../CSS/Home.css';



class Home extends Component {
    render(){
        return (
            <div>
                <Navbar /> 
                <LeftTab />
            </div>
        );
    }
}

export default Home