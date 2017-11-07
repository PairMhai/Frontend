import React , {Component} from 'react'
import { Cookies } from 'react-cookie';
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import ems from '../img/icon/ems-logo.png'
import kerry from '../img/icon/kerry-exprss-logo.png'
import '../CSS/Payment.css'
import Modal from 'react-modal'
import ReactDOM from 'react-dom';
import swal from 'sweetalert'
import axios from 'axios'


import AddCard from '../components/AddCard'

class Payment extends Component {

    constructor(props){
        super(props);
        this.state = { isActive: false, card_number: '', bank:'', ccv:'', card_holder:'', exp:'', customer:'',};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this); 
    }

    componentWillMount() {

        Modal.setAppElement('body');

        const cookies = new Cookies();
        var key = cookies.get('key')
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event){
        const cookies = new Cookies();
        
                axios.post('https://pairmhai-api.herokuapp.com/payment/',{ 
                        "owner": this.state.card_holder,
                        "credit_no": this.state.card_number,
                        "ccv": this.state.ccv,
                        "expire_date": this.state.exp,
                        "customer": cookies.get('key')
                    
                })
                .catch(function (error) {
                    swal ( "Oops" ,  "Incorrect data" ,  "error" )
                  });
                event.preventDefault();      
    }

    toggleModal = () => {
            this.setState({
            isActive: !this.state.isActive
        })
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
                            SHIPPING:&emsp; <input className="pay-radio" type="radio" name="shipping" value="EMS"/><img id="pay_icon" src={ems} alt="ems_icon"/> 
                            <input type="radio" name="shipping" value="KERRY"/><img id="pay_icon" src={kerry} alt="kerry_icon"/><br/>
                            SELECT CARD &emsp;or&emsp; <input className="pay-btn-add" type="button" value="ADD CART" onClick={this.toggleModal}/>
                            <Modal contentLabel="modal" isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                                <div>
                                    <p className="add-card-info">CARD INFORMATION</p>
                                </div><br/>
                                    <div type="container" className="info-box">
                                    <div className="card-box"><input type="radio" name="card" onChange={this.handleChange}/>Visa</div>
                                    <div className="card-box"><input type="radio" name="card" onChange={this.handleChange}/>Master-Card</div>   
                                    <br/><br/>
                                    Card Number &nbsp;&nbsp;<input className="card_number" type="text" name="card_number" value={this.state.card_number} onChange={this.handleChange}/>&nbsp;&nbsp;
                                    Bank &nbsp;&nbsp;<input className="bank" name="bank" type="text" value={this.state.bank} onChange={this.handleChange}/>&nbsp;&nbsp;
                                    CVV &nbsp;&nbsp;<input className="ccv" name="ccv" type="text" value={this.state.ccv} onChange={this.handleChange}/><br/><br/>            
                                    Card Holder &nbsp;&nbsp;<input className="card_holder" type="text" name="card_holder" value={this.state.card_holder} onChange={this.handleChange}/>&nbsp;&nbsp;
                                    EXP &nbsp;&nbsp;<input type="date" className="exp" name="exp" value={this.state.exp} onChange={this.handleChange}/>
                                </div><br/>
                                <div>
                                    <button className="signup_btn pull-right" onClick={this.handleSubmit} onChange={this.handleChange}>ADD</button>
                                </div>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment