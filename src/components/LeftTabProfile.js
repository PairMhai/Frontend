import React , {Component} from 'react'
import '../CSS/LeftTabProfile.css';
import profile_icon from '../img/userpic.png'
import pf_icon from '../img/userpic.png'
import cart_icon from '../img/cart.png'
import his_icon from '../img/history.png'
class LeftTabProfile extends Component {
   
    render(){
        return (
            <div>
                <br></br>
                <div className="left-tab-profile">
                    <br></br>
                        <img id="profile-pic" src={profile_icon} alt="profile-logo"/>
                        <br/><br/>
                        <label className="user-name">Thanawan Sean-in</label>
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