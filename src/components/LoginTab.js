import React , {Component} from 'react'

class LoginTab extends Component {

    render(){
        return (
            <div>
                <div className="login-bar">
                    <a className="link" href="">Sign In</a> &nbsp;&nbsp;&nbsp;
                    <a className="link" href="/signup">Sign Up</a> &nbsp;&nbsp;&nbsp;
                </div>
            </div>
        );
    }
}

export default LoginTab