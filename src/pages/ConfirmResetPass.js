import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import swal from 'sweetalert'
import '../CSS/ConfirmResetPass.css'

class ConfirmResetPass extends Component {

    constructor(props) {
        super(props);
        this.state = { newPassword:'', cfnewPassword:'', userid: this.props.match.params.uid, token: this.props.match.params.token, };
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
    
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        if(this.state.newPassword !== '' && this.state.cfnewPassword !== ''){
            axios.post('https://pairmhai-api.herokuapp.com/membership/password/reset/confirm/',{
                    "new_password1": this.state.newPassword,
                    "new_password2": this.state.cfnewPassword,
                    "uid": this.state.userid,
                    "token": this.state.token,
            }).then(function(response){
                console.log(response);
                swal("Success","Password changed", "success").then((value) => {
                    window.location = "/home"
                })
            }).catch(function (error) {
                console.log(error.response);
                swal ( "Oops" ,  "Something went wrong" ,  "error" )
            });
        } else 
            swal ( "Complete new password and confirm password" )
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
                        CONFIRM NEW PASSWORD: <input type="password" name="cfnewPassword" value={this.state.cfnewPassword} onChange={this.handleChange}/>
                        </div> <br></br>
                        <button className="submit_btn" onClick={this.handleSubmit} >SUBMIT</button><br></br><br></br>
                </div>

                <div >
                <Footer />
                </div>
                
            </div>
        );
    }
}

export default ConfirmResetPass
