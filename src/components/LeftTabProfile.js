import React , {Component} from 'react'
import {Cookies} from 'react-cookie'
import axios from 'axios';
import profile_icon from '../img/icon/userpic.png'
import pf_icon from '../img/icon/userpic.png'
import cart_icon from '../img/icon/cart.png'
import his_icon from '../img/icon/history.png'
import '../CSS/LeftTabProfile.css';

class LeftTabProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {firstname:'', lastname:''}
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
            <div>
                <br></br>
                <div className="left-tab-profile">
                    <br></br>
                        <img id="profile-pic" src={profile_icon} alt="profile-logo"/>
                        <br/><br/>
                        <label className="user-name">{this.state.firstname+' '+this.state.lastname}</label>
                        <div className="profile-btn" role="button" onClick={() => this.handleChange('profile')}><img id="pf_icon" src={pf_icon} alt="pf_icon"/>Profile</div >
                        <div className="profile-btn" role="button" onClick={() => this.handleChange('cart')}><img id="pf_icon" src={cart_icon} alt="cart_icon"/>Cart</div>
                        <div className="profile-btn" role="button" onClick={() => this.handleChange('history')}><img id="pf_icon" src={his_icon} alt="history_icon"/>History</div>
                        
                    <br></br>
                        
                    </div>

                    
                
                </div>
                

                
        );
    }
}

export default LeftTabProfile