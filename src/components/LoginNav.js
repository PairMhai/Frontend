import React , {Component} from 'react'
import '../CSS/Tab.css'
import pf_icon from '../img/icon/userpic.png'
import pf2_icon from '../img/icon/user-2.png'

class LoginNav extends Component {

    render(){
        return (
            <div className="login-bar">
                <a className="tab-text" href="/signin"><img id="pff_icon" src={pf_icon} alt="pf_icon"/>SIGN IN</a> &nbsp;&nbsp;&nbsp;
                <a className="tab-text" href="/signup"><img id="pff_icon" src={pf2_icon} alt="pf2_icon"/>SIGN UP</a> &nbsp;&nbsp;&nbsp;
            </div>
        );
    }
}

export default LoginNav