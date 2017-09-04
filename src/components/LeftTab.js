import React , {Component} from 'react'
import '../CSS/SignIn.css';

class LeftTab extends Component {

    render(){
        return (
            <div>
                <div className="left-tab">
                <section>
                   <label>Username : </label><br></br>  
                   <input type="user" name="user" class="login"></input><br></br>
                   <label>Password : </label><br></br> 
                   <input type="pass" name="pass" class="login"></input><br></br>
                   <a href="#" class="forget">Forgot your password?</a><br></br> 
                   <button class="login-left-btn">Sign in</button><br></br>
                   ----------------or-----------------<br></br>
                   <button class="login-left-btn">Sign up</button>
                   </section>
                </div>
            </div>
        );
    }
}

export default LeftTab