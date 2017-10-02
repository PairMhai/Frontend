import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabFilter'
import TabProfile from '../components/LeftTabProfile'
import axios from 'axios'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import '../CSS/CustomerInfo.css'

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {firstname:'', lastname:'', gender:'', birthday:'', age:'', address:'', tel:'', email:''}}

    render(){
        return (
            <div>
                <Navbar /> 
                <div className="row">
                    <div className="col-md-3 push-md-9">
                        <LeftTabProfile />
                    </div>
                    <div className="col-md-9 push-md-3 cus-con">
                        <p className="cus-inf-header">YOUR INFORMATION</p>
                        <div className="cus-inf-part">
                            FIRSTNAME: <span className="cus-data" name="firstname">BaiToey</span>  &emsp;&emsp;&emsp;
                            LASTNAME: <span className="cus-data" name="lastname">BABA</span>
                            <br/><br/>GENDER: <span className="cus-data" name="gender">TUDs</span> &emsp;&emsp;&emsp;
                            BIRTHDAY: <span className="cus-data" name="birthday">12/04/1996</span>  &emsp;&emsp;&emsp;
                            AGE: <span className="cus-data" name="age">18</span>
                            <br/><br/>ADDRESS: <span className="cus-data" name="address">Chatuchak, under the bridge</span>
                            <br/><br/>TEL: <span className="cus-data" name="tel">0888888888</span> &emsp;&emsp;&emsp;
                            E-MAIL: <span className="cus-data" name="email">DDDDD@D.com</span>
                        </div>
                        <input className="cus-btn-edit" type="button" value="EDIT"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile
