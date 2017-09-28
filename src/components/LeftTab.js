import React , {Component} from 'react'
import '../CSS/SignIn.css';

class LeftTab extends Component {
   
    render(){
        return (
            <div>
                <div className="login-left">
                   <p className="login-label">USERNAME: </p><br></br>  
                   <input type="user" name="user" className="login-input"></input><br></br>
                   <p className="login-label">PASSWORD: </p><br></br> 
                   <input type="pass" name="pass" className="login-input"></input><br></br>
                   <a href="#" className="forget">Forgot your password?</a><br></br> 
                   <input className="login-left-btn" type="submit" value="SIGN IN" />
                  <br/>
                  <p className="login-label">-------or-----</p>
                  <br/>
                   <input className="login-left-btn" type="submit" value="SIGN UP" />
                </div>
            </div>
        );
    }
}

export default LeftTab