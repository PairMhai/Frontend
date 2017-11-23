import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios';
import swal from 'sweetalert'
import '../CSS/ConfirmResetPass.css'

class ConfirmResetPass extends Component {

    constructor(props) {
        super(props);
        this.state = { newPassword:'', cfnewPassword:'', userid:'', token:'', };
    }

    handleSubmit(event) {
        axios.post('membership/password/reset/confirm/',{
                "new_password1": this.state.newPassword,
                "new_password2": this.state.cfnewPassword,
                "uid": this.state.userid,
                "token": this.state.token,
        }).then(function(response){
            swal("Success","Password changed", "success");
            window.location = "/home"
            console.log(response);
        }).catch(function (error) {
            console.log(error.response);
            //swal ( "Oops" ,  "Please enter valid data" ,  "error" )
        });
        event.preventDefault();  
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="cfp-center container-fluid">
                    <p className="cfNewPass">Confirm Password</p>
                        <div className="container">
                        NEW PASSWORD: <input type="password" name="newPassword" value={this.state.newPassword} onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;&nbsp;
                        CONFIRM NEW PASSWORD: <input type="password" name="cfnewPassword" value={this.state.cfnewPassword} onChange={this.handleChange}/><br></br>
                        <br></br>
                        USER ID: <input type="text" name="userid" value={this.state.userid} onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;&nbsp;
                       TOKEN: <input type="text" name="token" value={this.state.token} onChange={this.handleChange}/>
                        </div>
                </div>

                <div >
                <Footer />
                </div>
                
            </div>
        );
    }
}

export default ConfirmResetPass
