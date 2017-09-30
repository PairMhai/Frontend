import React , {Component} from 'react'
import '../CSS/Tab.css'

class ProfileTab extends Component {

    render(){
        return (
            <div className="login-bar">
                <a className="tab-text" href="/profile">PROFILE</a> &nbsp;&nbsp;&nbsp;
                <a className="tab-text" href="/cart">MY CART</a> &nbsp;&nbsp;&nbsp;
            </div>
        );
    }
}

export default ProfileTab