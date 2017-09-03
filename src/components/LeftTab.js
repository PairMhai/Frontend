import React , {Component} from 'react'
import '../CSS/SignIn.css';

class LeftTab extends Component {

    render(){
        return (
            <div>
                <div className="left-tab">
                <section>
                   <label>Username : </label><br></br>  
                   <input type="user" name="user"></input><br></br>
                   <label>Password : </label><br></br> 
                   <input type="pass" name="pass"></input><br></br>
                   <a href="#" class="more">Forgot your password?</a><br></br> 
                   <button>Sign in</button><br></br>
                   ----------------or-----------------<br></br>
                   <button>Sign up</button>
                   </section>
                </div>
            </div>
        );
    }
}

export default LeftTab