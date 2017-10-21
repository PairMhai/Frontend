import React , {Component} from 'react'
import {Cookies} from 'react-cookie'
import '../CSS/Tab.css'
import pf_icon from '../img/icon/userpic.png'
import pf2_icon from '../img/icon/cart.png'
import logout_icon from '../img/icon/logout.jpg'


class ProfileNav extends Component {
    
    constructor(props){
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout(e) {
        const cookies = new Cookies();
        cookies.set('key', null, {path: '/'});
        cookies.remove('prod',{path: '/'});
        window.location = "/home"
    }

    render(){
        return (
            <div className="login-bar">
                <a className="tab-text" href="/profile"><img id="pff_icon" src={pf_icon} alt="pf_icon"/>PROFILE</a> &nbsp;&nbsp;&nbsp;
                <a className="tab-text" href="/cart"><img id="pff_icon" src={pf2_icon} alt="pf2_icon"/>CART</a> &nbsp;&nbsp;&nbsp;
                <span className="tab-text" onClick={this.logout}><img id="pff_icon" src={logout_icon} alt="pf3_icon"/>LOG OUT</span> &nbsp;&nbsp;&nbsp;            
            </div>
        );
    }
}

export default ProfileNav