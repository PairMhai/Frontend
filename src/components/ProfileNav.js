import React , {Component} from 'react'
import '../CSS/Tab.css'
import pf_icon from '../img/userpic.png'
import pf2_icon from '../img/cart.png'

class ProfileNav extends Component {

    render(){
        return (
            <div className="login-bar">
                <a className="tab-text" href="/signin"><img id="pff_icon" src={pf_icon} alt="pf_icon"/>PROFILE</a> &nbsp;&nbsp;&nbsp;
                <a className="tab-text" href="/signup"><img id="pff_icon" src={pf2_icon} alt="pf2_icon"/>CART</a> &nbsp;&nbsp;&nbsp;
            </div>
        );
    }
}

export default ProfileNav