import React , {Component} from 'react'
import { Cookies } from 'react-cookie';
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import ems from '../img/icon/ems-logo.png'
import kerry from '../img/icon/kerry-exprss-logo.png'
import '../CSS/Payment.css'

class Payment extends Component {

    componentWillMount() {
        const cookies = new Cookies();
        var key = cookies.get('key')
        if(key !== 'null' && key !== undefined){
            
        } else {
            window.location = "/home";
        }
    }

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
                            SHIPPING:&emsp; <input type="radio" name="shipping" value="EMS"/><img id="pay_icon" src={ems} alt="ems_icon"/> 
                            <input type="radio" name="shipping" value="KERRY"/><img id="pay_icon" src={kerry} alt="kerry_icon"/><br/>
                            SELECT CARD &emsp;or&emsp; <input className="pay-btn-add" type="button" value="ADD CART"/>
                            <p/>
                            <table className="pay-table">
                            <tbody>
                                <tr className="table-tr">
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