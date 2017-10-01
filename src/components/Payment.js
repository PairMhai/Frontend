import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabFilter'
import TabProfile from '../components/LeftTabProfile'
import '../CSS/Payment.css'

class Payment extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <div className="row">
                    <div className="col-md-3 push-md-9">
                        <LeftTabProfile />
                    </div>
                    <div className="col-md-9 push-md-3 cus-con">
                        <p className="pay-header">SHIPPING & PAYMENT</p>
                        <div className="pay-info">
                            TOTAL PRICE:&emsp;<span className="pay-price" id="price"> 2300</span>&emsp;Baht.- <br/>
                            SHIPPING:&emsp; <input type="radio" name="shipping" value="EMS"/> 
                            &emsp;&emsp;<input type="radio" name="shipping" value="KERRY"/><br/>
                            SELECT CARD &emsp;or&emsp; <input className="pay-btn-add" type="button" value="ADD CART"/>
                            <p/>
                            <table className="pay-table">
                            <tbody>
                                <tr>
                                    <td>&emsp;<input type="checkbox"/></td>
                                    <td>4569 xxx xxx</td>
                                    <td>TMB</td>
                                    <td>3/20</td>
                                    <td>Thanawan Sean-in</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment