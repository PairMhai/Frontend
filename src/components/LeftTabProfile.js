import React , {Component} from 'react'
import {Cookies} from 'react-cookie'
import axios from 'axios';
import profile_icon from '../img/icon/userpic.png'
import pf_icon from '../img/icon/userpic.png'
import cart_icon from '../img/icon/cart.png'
import his_icon from '../img/icon/history.png'
import logout_icon from '../img/icon/logout.jpg'
import '../CSS/LeftTabProfile.css';

class LeftTabProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {firstname:'', lastname:''}
        this.logout = this.logout.bind(this);
    }

    logout(e) {
        const cookies = new Cookies();
        cookies.remove('key', {path: '/'});
        cookies.remove('prod',{path: '/'});
        window.location = "/home"
    }
    
    componentWillMount() {
        const cookies = new Cookies();
        var key = cookies.get('key')

        axios.get('https://pairmhai-api.herokuapp.com/membership/cust/'+ key) 
        .then((response)=> {
            this.setState({ firstname: response.data.user.first_name, lastname: response.data.user.last_name,});
        })
        .catch(function (error){
            console.log(error);
        })
    }
   
    render(){
        return (
            <div className="left-tab-profile"><br/>
                <img id="profile-pic" src={profile_icon} alt="profile-logo"/><br/>
                <div className="user-name">{this.state.firstname+' '+this.state.lastname}</div><br/>
                <a href='/profile'><div className="profile-btn"><img id="pf_icon" src={pf_icon} alt="pf_icon"/>Profile</div ></a>
                <a href='/cart'><div className="profile-btn"><img id="pf_icon" src={cart_icon} alt="cart_icon"/>Cart</div></a>
                <a href='/history'><div className="profile-btn"><img id="pf_icon" src={his_icon} alt="history_icon"/>History</div></a>
                <div className="profile-btn" onClick={this.logout}><img id="pf_icon" src={logout_icon} alt="logout_icon"/>Logout</div>
            </div>     
        );
    }
}

export default LeftTabProfile