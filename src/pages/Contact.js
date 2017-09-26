import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LoginTab from '../components/LoginTab'
import LeftTab from '../components/LeftTab'
import fb_icon from '../img/facebook_icon.png'
import line_icon from '../img/line_icon.png'
import tel_icon from '../img/tel_icon.png'
import axios from 'axios'
import '../CSS/Contact.css'

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = { msg: '', email: ''};

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
        axios.post('http://127.0.0.1:8000/comment/',{ 
            "email": this.state.email,
            "message": this.state.msg,
        })
          event.preventDefault();
    }
render(){
    return (
        <div id="container">
            <Navbar /> 
            <div id="second">
                <h3>Faculty of Engineering, Kasetsart University </h3>            
                 <iframe className="ct-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6607.927433481854!2d76.32357176582866!3d10.00883294733899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1476078954945"
                             allowFullScreen></iframe>
            </div>
            <div id="first">
                 <h2>Contact Us</h2>
                <div className="message"></div>
                    <fieldset>
                        <div className="fb-field">
                            <img id="fb" src={fb_icon}/>&nbsp;www.facebook.com/pairmhai2017
                        </div><br></br>
                        <div className="line-field">
                            <img id="line" src={line_icon}/>&nbsp;pairmhai2017
                        </div><br></br>
                        <div className="tel-field">
                             <img id="tel" src={tel_icon}/>&nbsp;089-9999999
                        </div>
                        <div className="mailTxt-field" title="send_mail">
                            <label id="sent_email" htmlFor="email"><h3>Send Message</h3></label>
                            <p>E-mail <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /></p>
                            <p><textarea className="text-msg" name="msg" value={this.state.msg} required="required" onChange={this.handleChange}/></p>
                        </div>
                        <div className="submit-field">
                            <input type="submit" value="Send" onClick={this.handleSubmit}></input>
                        </div>
                    </fieldset>
                </div>
            </div> 
        );
    }
}

export default Contact