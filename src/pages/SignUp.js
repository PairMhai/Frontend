import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import '../CSS/SignUp.css';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = { username: '', password: '', firstname: '', lastname: ''};

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
        axios.post('127.0.0.1:8000/membership', {
            username: this.state.username,
            password: this.state.password,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          alert(this.state.username + ' ' + this.state.password);
          event.preventDefault();
    }
  

    render() {
        return (
            <div className="siup-center container-fluid">
                <p className="signup">SIGN UP</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        USERNAME: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;&nbsp;
                        PASSWORD: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <p className="person">PERSONAL INFORMATION</p>
                    <div className="container">
                        FIRSTNAME: <input type="text" name="firstname" value={this.state.firstname}/> &nbsp;&nbsp;&nbsp;&nbsp;
                        LASTNAME: <input  type="text" name="lastname" value={this.state.lastname}/> <br></br> <br></br>
                        GENDER: 
                            &nbsp;&nbsp;<input type="radio" name="female" value="female" /> FEMALE
                            &nbsp;&nbsp;<input type="radio" name="male" value="male" />MALE &nbsp;&nbsp;&nbsp;&nbsp;
                        AGE: <input type="number"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        BIRTHDAY: <input type="date"></input><br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                        E-MAIL: <input type="email" ></input> &nbsp;&nbsp;&nbsp;&nbsp;
                        TEL: <input type="text"></input><br></br> <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                        ADDRESS: <input type="text" className="addr"></input> &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <p className="payment">PAYMENT INFORMATION</p>
                    <div className="container">
                        <table align="center" className="payment-table">
                            <tr>
                                <td>4569 xxx xxx</td>
                                <td>TMB</td>
                                <td>3/20</td>
                                <td>Thanawan Sean-in</td>
                            </tr>
                        </table><br></br>
                        <button className="signup_btn pull-right">ADD CART</button>
                    </div><br></br>
                    <input type="submit" value="SIGN UP" className="signup_btn"/><br></br><br></br>
                </form> 
            </div>
        );
    }
}

export default SignUp