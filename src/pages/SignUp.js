import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import swal from 'sweetalert'
import '../CSS/SignUp.css';

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

    // open() {
    //     swal("Card Information", {
    //         // content: "input",
    //     })
    //     .then((value) => {
    //         swal(`Add Card Complete!`);
    //     });
    
    // }

    ccomplex () {
        swal.withForm({
          title: 'Card Information',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: 'Add Card',
          closeOnConfirm: true,
          formFields: [

            { name: 'type', value: 'Visa', type: 'radio' },
            { name: 'type', value: 'Master', type: 'radio' },

            { id: 'number', placeholder: 'Card Number' },
            { id: 'bank', placeholder: 'Bank' },
            { id: 'cvv', placeholder: 'CVV' },
            { id: 'holder', placeholder: 'Card Holder' },
            { id: 'exp', placeholder: 'exp' },
            
          ]
        })
        .then((res) => {
            console.log(res)
        });
      }

    handleSubmit(event){
        axios.post('http://127.0.0.1:8000/membership/',
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
            if (error.response) {
              // The request was made and the server responded with a status code 
              // that falls out of the range of 2xx 
              alert(JSON.stringify(error.response.data, null, '\t'));
              // console.log(error.response.data); // response message
              // console.log(error.response.status); // http response code
              // console.log(error.response.headers); // response header
            } else if (error.request) {
              // The request was made but no response was received 
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of 
              // http.ClientRequest in node.js 
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error 
              console.log('Error', error.message);
            }
            console.log(error.config);
          });

        // alert(this.state.username + ' ' + this.state.gender);
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
                        <div type="container" className="radio_container">
                            &nbsp;&nbsp;<input type="radio" name="member" value="bronze" onChange={this.handleChange}/> BRONZE 
                            &nbsp;&nbsp;<input type="radio" name="member" value="silver" onChange={this.handleChange}/> SILVER 
                            &nbsp;&nbsp;<input type="radio" name="member" value="gold" onChange={this.handleChange}/> GOLD 
                            &nbsp;&nbsp;<input type="radio" name="member" value="platinum" onChange={this.handleChange}/> PLATINUM 
                            &nbsp;&nbsp;<input type="radio" name="member" value="diamond" onChange={this.handleChange}/> DIAMOND 
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
                        <button className="signup_btn pull-right" onChange={this.handleChange} onClick={this.complex}>ADD CARD</button>
                    </div><br></br>
                    <input type="submit" value="SIGN UP" className="signup_btn"/><br></br><br></br>
                </form> 
            </div>
            </div>
        );
    }
}

export default SignUp