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
                   <a href="#" classname="forget">Forgot your password?</a><br></br> 
                   <input class="login-left-btn" type="submit" value="SIGN IN" class="button"></input>
                  <br></br>
                   ----------------or-----------------<br></br>
                   <input class="login-left-btn" type="submit" value="SIGN UP" class="button"></input>
                   </section>
                </div>
            </div>
                
        );
    }
}

export default LeftTab