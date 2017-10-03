import React , {Component} from 'react'
import axios from 'axios';
import line_icon from '../img/line.png'
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
        axios.post('http://127.0.0.1:8000/membership/login/',
        { 
            "username": this.state.username,
            "password": this.state.password,
        })
        .then(function (response) {
            alert(response.data.key);
            console.log(response);
        })
        .catch(function (error) {
            if (error.response) {
                alert(JSON.stringify(error.response.data, null, '\t'));
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
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

export default LeftTab