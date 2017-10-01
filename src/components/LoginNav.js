import React , {Component} from 'react'
import '../CSS/Tab.css'

class LoginNav extends Component {

    render(){
        return (
            <div className="login-bar">
                <a className="tab-text" href="/signin">SIGN IN</a> &nbsp;&nbsp;&nbsp;
                <a className="tab-text" href="/signup">SIGN UP</a> &nbsp;&nbsp;&nbsp;
            </div>
        );
    }
}

export default LoginNav