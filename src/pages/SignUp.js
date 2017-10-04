import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import swal from 'sweetalert'
import '../CSS/SignUp.css';
import ReactTooltip from 'react-tooltip'

class SignUp extends Component {
    
    constructor(props){
        super(props);
        this.state = { username: 'Hellpo', password: 'Hello', cfpassword: 'Hello', firstname: 'Hello', lastname: 'Hello', gender: 'male',email: 'aaa@ku.th', age: '23', birthday: '', tel: '4557779',  address: 'hello'};

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

    open() {
        swal({
            title: "Card Information",
            text: "Card Number:",
            content: "input", 
            buttons: {
                cancel: "Cancel",
                add: "Add Card",
            }
        })
        .then((value) => {
            switch (value) {
                case "add":
                    swal(`Add Card Complete!`);   
                default:
                    break;
            }
        });
    }

    handleSubmit(event){
        axios.post('https://pairmhai-api.herokuapp.com/membership/register/',
        { 
            "user": {
                "username": this.state.username,
                "first_name": this.state.firstname,
                "last_name": this.state.lastname,
                "email": this.state.email,
                "telephone": this.state.tel,
                "address": this.state.address,
                "age": this.state.age,
                "date_of_birth": this.state.birthday,
                "gender": this.state.gender,
            },
            "password1": this.state.password,
            "password2": this.state.cfpassword,
            "classes": 3
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        event.preventDefault(); 
    }
  
    render() {
        return (
            <div>
                <Navbar />
            <div className="siup-center container-fluid">
                <p className="signup">SIGN UP</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        USERNAME: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;&nbsp;
                        PASSWORD: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;&nbsp;
                        CONFIRM PASSWORD: <input type="password" name="cfpassword" value={this.state.cfpassword} onChange={this.handleChange}/>
                    </div>
                    <p className="person">PERSONAL INFORMATION</p>
                    <div className="container">
                        FIRSTNAME: <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange}/> &nbsp;&nbsp;&nbsp;&nbsp;
                        LASTNAME: <input  type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}/> <br></br> <br></br>
                        GENDER: 
                            &nbsp;&nbsp;<input type="radio" name="gender" value="female" onChange={this.handleChange}/> FEMALE
                            &nbsp;&nbsp;<input type="radio" name="gender" value="male" onChange={this.handleChange}/> MALE &nbsp;&nbsp;&nbsp;&nbsp;
                        AGE: <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;
                        BIRTHDAY: <input type="date" name="birthday" className="hbd" value={this.state.birthday} onChange={this.handleChange}/><br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                        E-MAIL: <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/> &nbsp;&nbsp;&nbsp;&nbsp;
                        TEL: <input type="text" name="tel" value={this.state.tel} onChange={this.handleChange}/><br></br> <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                        ADDRESS: <textarea className="addr" name="address" value={this.state.address} onChange={this.handleChange}/> &nbsp;&nbsp;&nbsp;&nbsp;
                        <p className="member">MEMBERSHIP:</p><br/>
                        <div type="container" className="radio-container">
                            <div className="member-box" data-tip="React-tooltip">
                                <input type="radio" name="member" onChange={this.handleChange}/>&nbsp;&nbsp;BRONZE 
                                <ReactTooltip place="right" type="dark" effect="float"/>
                            </div> 
                            <div className="member-box" data-tip="React-tooltip">
                                <input type="radio" name="member" onChange={this.handleChange}/>&nbsp;&nbsp;SILVER 
                                <ReactTooltip place="right" type="dark" effect="float"/>   
                            </div> 
                            <div className="member-box" data-tip="React-tooltip">
                                <input type="radio" name="member" onChange={this.handleChange}/>&nbsp;&nbsp;GOLD
                                <ReactTooltip place="right" type="dark" effect="float"/>
                            </div> 
                            <div className="member-box" data-tip="React-tooltip">
                                <input type="radio" name="member" onChange={this.handleChange}/>&nbsp;&nbsp;PLATINUM
                                <ReactTooltip place="right" type="dark" effect="float"/>
                            </div> 
                            <div className="member-box">
                                <input type="radio" name="member" onChange={this.handleChange}/>&nbsp;&nbsp;DIAMOND 
                                <ReactTooltip place="right" type="dark" effect="float"/>
                            </div> 
                        </div>
                    </div>
                    <p className="payment">PAYMENT INFORMATION</p>
                    <div className="container">
                        <table className="payment-table">
                            <tbody>
                                <tr>
                                    <td>4569 xxx xxx</td>
                                    <td>TMB</td>
                                    <td>3/20</td>
                                    <td>Thanawan Sean-in</td>
                                </tr>
                            </tbody>
                        </table><br></br>
                        <button className="signup_btn pull-right" onChange={this.handleChange} onClick={this.open}>ADD CARD</button>
                    </div><br></br>
                    <input type="submit" value="SIGN UP" className="signup_btn"/><br></br><br></br>
                </form> 
            </div>
            </div>
        );
    }
}

export default SignUp