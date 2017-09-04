import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import '../CSS/SignUp.css';

class SignUp extends Component {

    render() {
        return (
            <div>
                <p className="signup">SIGN UP</p>
                <div className="container">
                    USERNAME: <input className="for-sign-up"></input>
                    PASSWORD: <input className="for-sign-up"></input>
                </div>
                <p className="person">PERSONAL INFORMATION</p>
                <div className="container">
                    FIRSTNAME: <input className="for-sign-up"></input>
                    LASTNAME: <input className="for-sign-up"></input><br></br>
                    GENTLE: 
                        <input type="radio" name="gentle" value="female" /> FEMALE
                        <input type="radio" name="gentle" value="male" />MALE
                    AGE: <input type="number" className="for-sign-up"></input>
                    BIRTHDAY: <input type="date"></input><br></br>
                    E-MAIL: <input className="for-sign-up"></input>
                    TEL: <input className="for-sign-up"></input><br></br>
                    ADDRESS: <input className="addr"></input>
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
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                         </tr>
                    </table><br></br>
                    <button className="signup_btn">ADD CART</button>
                </div>
                <div><button className="signup_btn">SIGN UP</button></div>
            </div>
        );
    }
}

export default Highlight