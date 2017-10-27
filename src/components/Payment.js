import React , {Component} from 'react'
import { Cookies } from 'react-cookie';
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import Modal from 'react-modal'
import '../CSS/Payment.css'


class Payment extends Component {
    constructor(props){
        super(props);
        this.state = { shipping: "KERRY", isCardActive: false, isAddrActive: false}
        this.getShipping = this.getShipping.bind(this)
        this.cardAdd = this.cardAdd.bind(this)
    }

    componentWillMount() {
        const cookies = new Cookies();
        var key = cookies.get('key')
        if(key !== 'null' && key !== undefined){
            
        } else {
            window.location = "/home";
        }
        Modal.setAppElement('body');
    }

    cardAdd(){

    }

    cardToggleModal = () => {
        this.setState({isCardActive: !this.state.isCardActive })
    }
    addrToggleModal = () => {
        this.setState({isAddrActive: !this.state.isAddrActive })
    }


    getShipping(){
        if(this.state.shipping === "EMS")
            return <img src={ require('../img/icon/ems-logo.png')} alt="EMS" width="15%" />
        else if(this.state.shipping === "KERRY")
            return <img src={ require('../img/icon/kerry-exprss-logo.png')} alt="KERRY" width="15%" />
        else
            return <img src={ require('../img/icon/lineman.png')} alt="LINEMAN" width="15%" />
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
                        <p className="pay-header">PAYMENT</p>
                        <div className="pay-info">
                            TOTAL PRICE:&emsp;<span className="pay-price" id="price"> 2300</span>&emsp;Baht.- <br/>      
                            SELECT CARD &emsp;or&emsp; <input className="pay-btn-add" type="button" value="ADD CART" onClick={this.cardToggleModal}/>
                            <Modal isOpen={this.state.isCardActive} onRequestClose={this.cardToggleModal} contentLabel="Modal">
                                <div>
                                    <p className="add-card-info">CARD INFORMATION</p>
                                </div><br/>
                                <div className="info-box">
                                    <div className="card-box">
                                        <input type="radio" name="card"/>
                                        <img id="visa_icon" src={ require('../img/icon/visa.png')} alt="visa-icon"/> 
                                        <input type="radio" name="card"/>
                                        <img id="visa_icon" src={ require('../img/icon/mastercard.png')} alt="master-icon"/>    
                                    </div>
                                    <br/>
                                    Card Number &nbsp;&nbsp;<input className="card-number"/>&nbsp;&nbsp;
                                    CVV &nbsp;&nbsp;<input className="cvv"/><br/><br/>            
                                    Card Holder &nbsp;&nbsp;<input className="card-holder"/>&nbsp;&nbsp;
                                    EXP &nbsp;&nbsp;<input type="month" className="exp"/>
                                </div><br/>
                                <button className="signup_btn modal-btn" onClick={this.cardToggleModal}>CANCEL</button>
                                <button className="signup_btn modal-btn" onChange={this.cardAdd}>ADD</button>
                            </Modal>
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
                        <br/>
                        SHIPPING: {this.getShipping()}<br/>
                        SELECT ADDRESS &emsp;or&emsp; <input className="pay-btn-add" type="button" value="ADD ADDRESS" onClick={this.addrToggleModal}/>
                        <Modal isOpen={this.state.isAddrActive} onRequestClose={this.addrToggleModal} contentLabel="Modal">
                            <div>
                                <p className="add-card-info">ADD NEW ADDRESS</p>
                            </div><br/>
                            <div type="container" className="info-box">
                            <a className="address">ADDRESS:</a>
                            <br/><textarea className="addr-add" name="address" value={this.state.address} onChange={this.handleChange}/><br/><br/>
                            </div><br/>
                            <button className="signup_btn modal-btn" onClick={this.addrToggleModal}>CANCEL</button>
                            <button className="signup_btn modal-btn" onChange={this.ddAddr}>ADD</button>
                        </Modal>
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
                        <button className="pay-btn-add btn-right" onclick="">Check Out</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment