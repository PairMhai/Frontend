import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LoginTab from '../components/LoginTab'
import LeftTab from '../components/LeftTab'
import fb_icon from '../img/facebook_icon.png'
import line_icon from '../img/line_icon.png'
import tel_icon from '../img/tel_icon.png'
import '../CSS/Contact.css'

class Contact extends Component {

render(){
return (

<div>
    <div>
        <Navbar />
    </div>
    <div id="container">

        <div id="second">
            <div className="address-wrapper">

                <p>Faculty of Engineering, Kasetsart University </p>
                <div id="map" >


                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6607.927433481854!2d76.32357176582866!3d10.00883294733899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1476078954945"
                            height="327" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div id="first">

            <div className="form-wrapper">

                <h2>Contact Us</h2>
                <div className="message"></div>

                <form id="contact-form" action="" method="post" >

                    <fieldset>

                        <div className="field">
                            <img id="fb" src={fb_icon}/>
                            www.facebook.com/pairmhai2017
                        </div>

                        <div className="field">
                            <img id="line" src={line_icon}/>
                            pairmhai2017
                        </div>

                        <div className="field">
                            <img id="tel" src={tel_icon}/>
                            089-9999999
                        </div>

                        <div className="field" title="send_mail">
                            <label id="sent_email" htmlFor="email">Send E-mail</label>
                            <textarea id="email" name="mail" cols="15" rows="5" required="required"></textarea>
                        </div>

                        <div className="field submit">
                            <input type="submit" value="Send"></input>
                        </div>

                    </fieldset>

                </form>

            </div>

        </div>


    </div>


</div>
);
}
}

export default Contact