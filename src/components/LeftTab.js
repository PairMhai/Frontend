import React , {Component} from 'react'
import axios from 'axios';
import line_icon from '../img/line.png'
import {Cookies } from 'react-cookie';
import swal from 'sweetalert'
import '../CSS/Lefttab.css';

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
        axios.post('http://guarded-brook-49660.herokuapp.com/membership/login/',
        { 
            "username": this.state.username,
            "password": this.state.password,
        })
        .then(function (response) {
            console.log(response)
            const cookies = new Cookies();
            cookies.set('key', response.data.key, {path: '/'})
        })
        .catch(function (error) {
            const cookies = new Cookies();
            cookies.set('key', null, {path: '/'})
           swal ( "Oops" ,  "Incorrect username or password" ,  "error" )
          });
        event.preventDefault(); 
    }

    render(){
        return (
            <div>
                <div className="login-left">
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
        );
    }
}

export default LeftTab;