import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import '../CSS/SignUp.css';

class SignUp extends Component {

    render() {
        return (
            <div>
                <p classname="signup">SIGN UP</p>
                <div classname="container">
                    USERNAME: <input class="user"></input>
                    PASSWORD: <input class="pass"></input>
                </div>
                <p classname="person">PERSONAL INFORMATION</p>
                <div classname="container">
                    FIRSTNAME: <input class="first"></input>
                    LASTNAME: <input class="last"></input><br></br>
                    GENTLE: 
                        <input type="radio" name="gentle" value="female" /> FEMALE
                        <input type="radio" name="gentle" value="male" />MALE
                    AGE: <input type="number" class="age"></input>
                    BIRTHDAY: <input type="date"></input><br></br>
                    E-MAIL: <input class="email"></input>
                    TEL: <input class="tel"></input><br></br>
                    ADDRESS: <input class="addr"></input>
                </div>
                <p classname="payment">PAYMENT INFORMATION</p>
                <div classname="container">
                    <table align="center">
                        <tr>
                            <td>4569 xxx xxx</td>
                            <td>TMB</td>
                            <td>3/20</td>
                            <td>Thanawan Sean-in</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                         </tr>
                    </table><br></br>
                    <button>ADD CART</button>
                </div>
                <div><button classname="signup_btn">SIGN UP</button></div>
            </div>
        );
    }
}

export default Highlight