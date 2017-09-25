import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LoginTab from '../components/LoginTab'
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
                {/* <LoginTab /> */}
              
                {/* <SignUp /> */}

                <Contact />
            </div>
        );
    }
}

export default Home