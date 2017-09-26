import React , {Component} from 'react'
import '../CSS/SignIn.css';

class LeftTab extends Component {
   
    render(){
        return (
            <div className="login-layout">
                <section className="login-left">
                   <p className="login-label">USERNAME: </p><br></br>  
                   <input type="user" name="user" className="login-input"></input><br></br>
                   <p className="login-label">PASSWORD: </p><br></br> 
                   <input type="pass" name="pass" className="login-input"></input><br></br>
                   <a href="#" className="forget">Forgot your password?</a><br></br> 
                   <input className="login-left-btn" type="submit" value="SIGN IN" class="button"></input>
                  <br></br>
                   ----------------or-----------------<br></br>
                   <input className="login-left-btn" type="submit" value="SIGN UP" class="button"></input>
                </section>
            </div>
        );
    }
}

export default LeftTab