import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabFilter'
import TabProfile from '../components/LeftTabProfile'
import '../CSS/CustomerInfo.css'

class Profile extends Component {

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
                            FIRSTNAME: <span className="cus-data" id="firstname">BaiToey</span>  &emsp;&emsp;&emsp;
                            LASTNAME: <span className="cus-data" id="lastname">BABA</span>
                            <br/><br/>GENDER: <span className="cus-data" id="gender">TUDs</span> &emsp;&emsp;&emsp;
                            BIRTHDAY: <span className="cus-data" id="birthday">12/04/1996</span>  &emsp;&emsp;&emsp;
                            AGE: <span className="cus-data" id="age">18</span>
                            <br/><br/>ADDRESS: <span className="cus-data" id="address">Chatuchak, under the bridge</span>
                            <br/><br/>TEL: <span className="cus-data" id="tel">0888888888</span> &emsp;&emsp;&emsp;
                            E-MAIL: <span className="cus-data" id="email">DDDDD@D.com</span>
                        </div>
                        <input className="cus-btn-edit" type="button" value="EDIT"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile
