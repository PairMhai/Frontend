import React , {Component} from 'react'
import '../CSS/SignInpage.css';
import Navbar from '../components/Navbar'
import line_icon from '../img/line-1.png'
import profile_icon from '../img/userpic.png'
class SignIn extends Component {
   
    render(){
        return (

            <div>
                <Navbar />
                <div className="signin" >
                <img id="profile-pic-signin" src={profile_icon} alt="profile-logo"/>
                <br/>
                   <label className="signin-label-page">USERNAME: </label> 
                   <input type="user" name="user" className="signin-input-page" ></input><br></br>
                   <label className="signin-label-page">PASSWORD: </label>
                   <input type="password" name="pass" className="signin-input-page" ></input><br></br>
                   <a href="#" className="forget-page">Forgot your password?</a><br></br> 
                   <input className="signin-page-btn" type="submit" value="SIGN IN" />
                  <br/>
                  <label className="orlabel-page"><img id="line_icon" src={line_icon} alt="line_icon"/>or<img id="line_icon" src={line_icon} alt="line_icon"/></label>
                  <br/>
                   <input className="signin-page-btn" type="submit" value="SIGN UP" />
                </div>
            </div>
        );
    }
}

export default SignIn