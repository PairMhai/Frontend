import React , {Component} from 'react'
import '../CSS/SignIn.css';

class LeftTab extends Component {
   
    render(){
        return (
            <div className="login-layout">
                <section className="login-left">
                   <p className="login-label">USERNAME: </p><br/>  
                   <input type="user" name="user" className="login-input"></input><br/>
                   <p className="login-label">PASSWORD: </p><br/>
                   <input type="pass" name="pass" className="login-input"></input><br/>
                   <a href="#" className="forget">Forgot your password?</a><br/> 
                   <input className="login-left-btn" type="submit" value="SIGN IN" />
                  <br/>
                   ----------------or-----------------<br/>
                   <input className="login-left-btn" type="submit" value="SIGN UP" />
                </section>
            </div>
        );
    }
}

export default LeftTab