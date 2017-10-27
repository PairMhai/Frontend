import React , {Component} from 'react'
import axios from 'axios'
import {Cookies} from 'react-cookie'
import swal from 'sweetalert'
import line_icon from '../img/line-1.png'
import profile_icon from '../img/icon/userpic.png'
import '../CSS/Lefttab.css'

class LeftTab extends Component {
    constructor(props){
        super(props);
        this.state = { username: '', password: ''};

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
            "username": this.state.username,
            "password": this.state.password,
        })
        .then(function (response) {
            console.log(response)
            const cookies = new Cookies();
            cookies.set('key', response.data.key, {path: '/'})
            cookies.set('prod',[], {path: '/'});
            window.location = "/home/"
        })
        .catch(function (error) {
            console.log(error)
            const cookies = new Cookies();
            cookies.set('key', null, {path: '/'})
            this.setState({password: ''})
            swal ( "Oops" ,  "Incorrect username or password" ,  "error" )
        });
        event.preventDefault(); 
    }

    render(){
        return (
            <div>
                <div className="login-left">
                    <img id="profile-pic" src={profile_icon} alt="profile-logo"/>
                    <br/>
                    <div className="login-cont">
                        <p className="login-label">USERNAME: </p><br></br>  
                        <input type="user" name="username" className="login-input" value={this.state.username} onChange={this.handleChange}/><br></br>
                        <p className="login-label">PASSWORD: </p><br></br> 
                        <input type="password" name="password" className="login-input"  value={this.state.password} onChange={this.handleChange}/><br></br>
                        <a href="#" className="forget">Forgot your password?</a><br></br> 
                        <input className="login-left-btn" type="submit" onClick={this.handleSubmit} value="SIGN IN" />
                        <br/>
                        <label className="orlabel"><img id="line_icon" src={line_icon} alt="line_icon"/>or<img id="line_icon" src={line_icon} alt="line_icon"/></label>
                        <br/>
                        <a href="/signup"><input className="login-left-btn" href="/signup" type="submit" value="SIGN UP" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftTab;