import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import fb_icon from '../img/icon/facebook_icon.png'
import line_icon from '../img/icon/line_icon.png'
import tel_icon from '../img/icon/tel_icon.png'
import axios from 'axios'
import swal from 'sweetalert'
import '../CSS/Contact.css'
import Footer from '../components/Footer'

class Contact extends Component {
    
    constructor(props){
        super(props);
        this.state = { msg: '', email: '', isModalOpen:false };

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
        axios.post('https://pairmhai-api.herokuapp.com/comment/',{ 
            "email": this.state.email,
            "message": this.state.msg,
        })
          event.preventDefault();
          swal({
              title: "Sent!",
              text: "Your comment already sent.",
              type: "success"
          }).then(function(){
              window.location = "home"
          });
          
    }
 

render(){
    return (
        <div id="container">
            <Navbar /> 
            <div id="second">
                <h3>Faculty of Engineering, Kasetsart University </h3>            
                    <iframe className="ct-map" src="https://maps.google.com/maps?q=Faculty%20of%20Engineering%2C%20Kasetsart%20University%20Bangkok%2C%20TH&t=&z=14&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
            <div id="first">
                 <h2>Contact Us</h2>
                <div className="message"></div>
                    <fieldset>
                        <div className="fb-field">
                            <img id="fb" src={fb_icon} alt="fb-logo"/>&nbsp;www.facebook.com/pairmhai2017
                        </div><br></br>
                        <div className="line-field">
                            <img id="line" src={line_icon} alt="line-logo"/>&nbsp;pairmhai2017
                        </div><br></br>
                        <div className="tel-field">
                             <img id="tel" src={tel_icon} alt="tel-logo"/>&nbsp;089-9999999
                        </div>
                        <div className="mailTxt-field">
                            <label id="sent_email" htmlFor="email"><h3>Send Message</h3></label>
                            <p>E-mail: <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /></p>
                            <p><textarea className="text-msg" name="msg" value={this.state.msg} required="required" onChange={this.handleChange}/></p>
                        </div>
                        <div className="submit-field">
                            <input className="contact-btn" type="submit" value="Send" onClick={ this.handleSubmit }></input> 
                        </div>
                    </fieldset>
                </div>
                <div >
                <Footer />
                </div>
            </div> 
        );
    }
}

export default Contact