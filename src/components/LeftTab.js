import React , {Component} from 'react'
import '../CSS/Lefttab.css';
import line_icon from '../img/line-1.png'
import profile_icon from '../img/userpic.png'
class LeftTab extends Component {
   
    render(){
        return (

            <div>
                <div className="login-left">
                <img id="profile-pic" src={profile_icon} alt="profile-logo"/>
                        <br/><br/>
                   <p className="login-label">USERNAME: </p><br></br>  
                   <input type="user" name="user" className="login-input" ></input><br></br>
                   <p className="login-label">PASSWORD: </p><br></br> 
                   <input type="password" name="pass" className="login-input" ></input><br></br>
                   <a href="#" className="forget">Forgot your password?</a><br></br> 
                   <input className="login-left-btn" type="submit" value="SIGN IN" />
                  <br/>
                  <label className="orlabel"><img id="line_icon" src={line_icon} alt="line_icon"/>or<img id="line_icon" src={line_icon} alt="line_icon"/></label>
                  <br/>
                   <input className="login-left-btn" type="submit" value="SIGN UP" />
                </div>
            </div>
        );
    }
}

export default LeftTab