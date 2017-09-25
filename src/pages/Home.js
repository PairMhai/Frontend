import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LoginTab from '../components/LoginTab'
import LeftTab from '../components/LeftTab'
import LeftTabFilter from '../components/LeftTabFilter'
import SignUp from '../pages/SignUp'
import '../CSS/Home.css';

class Home extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                {/* <LoginTab /> */}
              
                <SignUp />
            </div>
        );
    }
}

export default Home