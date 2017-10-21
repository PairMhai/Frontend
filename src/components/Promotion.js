import React , {Component} from 'react'
import Navbar from '../components/Navbar'
// import LeftTabProfile from '../components/LeftTabFilter'
// import TabProfile from '../components/LeftTabProfile'
import '../CSS/Payment.css'
import '../CSS/Promotion.css';
import user from '../img/icon/userpic.png'

class Promotion extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <div className="row">
                    <div className="col-md-3 push-md-9">
                    </div>
                    <div className="col-md-9 push-md-3 cus-con">
                        <p className="event">SPECIAL EVENT</p>
                        <div className="promotion-box">
                            <div className="promotion-info">
                                <img id="user_icon" src={user} alt="user-icon" className="promo-pic"/> 
                            </div>
                            <div className="promotion-info">
                                <h2>Birthday Party!</h2>
                                <p>
                                    Special price!<br/>
                                    Sale up to 70%<br/>
                                    from 10-16 August 2018
                                </p>
                            </div>    
                            <div className="promotion-info">
                                <img id="user_icon" src={user} alt="user-icon"/> 
                            </div>
                            <div className="promotion-info">
                                <h2>Mew's day</h2>
                                <p>
                                    Special price!<br/>
                                    Sale up to 70%<br/>
                                    from 10-16 August 2018
                                </p>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Promotion