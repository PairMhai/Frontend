import React , {Component} from 'react'
import '../CSS/SignInpage.css';
import Navbar from '../components/Navbar'
import axios from 'axios';
import line_icon from '../img/line-1.png'
import profile_icon from '../img/icon/userpic.png'
import {Cookies } from 'react-cookie';
import swal from 'sweetalert'

class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = { user: '', pass: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event){
        axios.post('https://pairmhai-api.herokuapp.com/membership/login/',
        { 
            "username": this.state.user,
            "password": this.state.pass,
        })
        .then(function (response) {
            console.log(response)
            const cookies = new Cookies();
            cookies.set('key', response.data.key, {path: '/'})
            cookies.set('prod', [], {path: '/'})
            window.location = "/home"
        })
        .catch(function (error) {
            const cookies = new Cookies();
            cookies.set('key', null, {path: '/'})
            swal ( "Oops" ,  "Incorrect username or password" ,  "error" )
          });
        event.preventDefault(); 
    }
    toggleModal = () => {
            this.setState({
            isActive: !this.state.isActive
        })}
   
    render(){
        return (

            <div>
                <Navbar />
                <div className="signin" >
                <img id="profile-pic-signin" src={profile_icon} alt="profile-logo"/>
                <br/>
                   <label className="signin-label-page">USERNAME: </label> 
                   <input type="user" name="user" className="signin-input-page" value={this.state.user} onChange={this.handleChange}></input><br></br>
                   <label className="signin-label-page">PASSWORD: </label>
                   <input type="password" name="pass" className="signin-input-page"   value={this.state.pass} onChange={this.handleChange}></input><br></br>
                   <a href="#" className="forget">Forgot your password?</a><br></br> 
                   <a href="home"><input className="signin-page-btn" href="/home"type="submit" value="SIGN IN" onClick={this.handleSubmit}/></a>
                   <br/>
                   <label className="orlabel-page"><img id="line_icon" src={line_icon} alt="line_icon"/>or<img id="line_icon" src={line_icon} alt="line_icon"/></label>
                   <br/>
                   <a href="/signup"><input className="signin-page-btn" href="/signup" type="submit" value="SIGN UP" /></a>
                </div>
            </div>
        );
    }
}

export default SignIn