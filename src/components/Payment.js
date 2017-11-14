import React , {Component} from 'react'
import { Cookies } from 'react-cookie';
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import Modal from 'react-modal'
import axios from 'axios'
import swal from 'sweetalert'
import '../CSS/Payment.css'


class Payment extends Component {
    constructor(props){
        super(props);
        this.state = { orderInfo: [], cusKey: '',isCardActive: false, isAddrActive: false,
        selectedCard: '', user: [], card: [],owner: '', 
        cardNumber: '', ccv: '', exp: '', cardHolder:''}
        this.getShipping = this.getShipping.bind(this);
        this.cardAdd = this.cardAdd.bind(this);
        this.checkout = this.checkout.bind(this);
        this.addChange = this.addChange.bind(this);
    }

    componentWillMount() {
        const cookies = new Cookies();
        var key = cookies.get('key')
        var order = cookies.get('orderInfo')
        if(key !== 'null' && key !== undefined && order !== null && order !== undefined){
            this.setState({cusKey: key, orderInfo: order})
            axios.get('https://pairmhai-api.herokuapp.com/membership/cust/'+key)
            .then(response => {
                console.log(response);
                this.setState({user: response.data.user, card: response.data.creditcards })
            })
            .catch(function (error) {
                console.log(error);
            }); 
        } else {
            window.location = "/home";
        }
        Modal.setAppElement('body');
    }
    componentDidMount(){
        const cookies = new Cookies();
        var order = cookies.get('orderInfo')
        this.setState({orderInfo: order, shipping: order.shipping}) 
    }

    addChange(e){
        var newUser = this.state.user
        newUser.address = e.target.value
        this.setState({user: newUser})
        e.preventDefault(); 
    }

    cardAdd(){
        const newCard = this.state.cardDetail;
        newCard.push({owner: this.state.cardHolder, credit_no: this.state.cardNumber, ccv: this.state.ccv, expire_date: this.state.exp});
        this.setState({cardDetail: newCard, isActive: !this.state.isActive});
        console.log(this.state.cardDetail);

        this.setState({ owner: '', cardNumber: '', ccv: '', exp: '', cardHolder:''});
    }

    cardToggleModal = () => {
        this.setState({isCardActive: !this.state.isCardActive })
    }
    addrToggleModal = () => {
        this.setState({isAddrActive: !this.state.isAddrActive })
    }

    checkout(){
        if(this.selectedCard === ''){
            swal ( "Oops" ,  "Select your card." ,  "error" )
        } else {
            axios.post('https://pairmhai-api.herokuapp.com/cart/', {
                "uuid": this.state.orderInfo.id,
                "creditcard": this.selectedCard,
                "address": this.state.user.address,
            })
            .then(function (response) {
                swal("Thank you!","Total price"+ response.data.final_price +" Baht-, Product " + response.data.total_product +" items, Send by " + response.data.transportation.name, "success");
                window.location = "/home"
                console.log(response);
            })
            .catch(function (error) {
                console.log(error.response);
                swal ( "Oops" ,  "Something wrong" ,  "error" )
            });
        }
    }

    getShipping(){
        if(this.state.orderInfo.shipping === 1)
            return <img src={ require('../img/icon/ems-logo.png')} alt="EMS" width="15%" />
        else if(this.state.orderInfo.shipping === 2)
            return <img src={ require('../img/icon/kerry-exprss-logo.png')} alt="KERRY" width="15%" />
        else
            return <img src={ require('../img/icon/lineman.png')} alt="LINEMAN" width="15%" />

    }

    render(){
        const cusCard = this.state.card.map((det, index) => {
        return  <tr className="table-tr" key={det.id}>
                    <td>&emsp;<input type="checkbox" /></td>
                    <td>{det.credit_no}</td>
                    <td>{det.owner}</td>
                </tr>
        });
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
                            TOTAL PRICE:&emsp;<span className="pay-price" id="price"> {this.state.orderInfo.price} </span>&emsp;Baht.- <br/>
                            SELECT CARD &emsp;or&emsp; <input className="pay-btn-add" type="button" value="ADD CART" onClick={this.cardToggleModal}/>
                            <Modal isOpen={this.state.isCardActive} onRequestClose={this.cardToggleModal} contentLabel="Modal">
                                <div>
                                    <p className="add-card-info">CARD INFORMATION</p>
                                </div><br/>
                                <div className="info-box">
                                    <div className="card-box">
                                        <input type="radio" name="card" value="visa" defaultChecked/>
                                        <img id="visa_icon" src={ require('../img/icon/visa.png')} alt="visa-icon"/> 
                                        <input type="radio" name="card" value="master"/>
                                        <img id="visa_icon" src={ require('../img/icon/mastercard.png')} alt="master-icon"/>    
                                    </div>
                                    <br/>
                                    Card Number &nbsp;&nbsp;<input name="cardNumber" value={this.state.cardNumber} onChange={this.handleChange}/>&nbsp;&nbsp;
                                    CCV &nbsp;&nbsp;<input  name="ccv" value={this.state.ccv} onChange={this.handleChange}/><br/><br/>            
                                    Card Holder &nbsp;&nbsp;<input  name="cardHolder" value={this.state.cardHolder} onChange={this.handleChange}/>&nbsp;&nbsp;
                                    EXP &nbsp;&nbsp;<input type="date"  name="exp" value={this.state.exp} onChange={this.handleChange}/>
                                </div><br/>
                                <button className="signup_btn modal-btn" onClick={this.cardToggleModal}>CANCEL</button>
                                <button className="signup_btn modal-btn" onChange={this.cardAdd}>ADD</button>
                            </Modal>
                            <p/>
                            <table className="pay-table">
                                <tbody>
                                    {cusCard}
                                </tbody>
                            </table>
                            <br/><br/>
                            SHIPPING: {this.getShipping()}<br/><p/>
                            SELECT ADDRESS &emsp;or&emsp; <button className="pay-btn-add" onClick={this.addrToggleModal}>CHANGE ADDRESS</button>
                            <Modal isOpen={this.state.isAddrActive} onRequestClose={this.addrToggleModal} contentLabel="Modal">
                                <div>
                                    <p className="add-card-info">CHANGE ADDRESS</p>
                                </div><br/>
                                <div type="container" className="info-box">
                                <a className="address">ADDRESS:</a>
                                <br/><textarea className="addr-add" name="address" value={this.state.user.address} onChange={this.addChange}/><br/><br/>
                                </div><br/>
                                <button className="signup_btn modal-btn" onClick={this.addrToggleModal}>OK</button>
                            </Modal>
                            <p/>
                            <div className="pay-table">
                                &nbsp;&nbsp;To: {this.state.user.first_name} {this.state.user.last_name}<br/>
                                &emsp; &emsp; {this.state.user.address}
                            </div>
                        </div>
                        <button className="pay-btn-add btn-right" onClick={this.checkout}>Checkout</button> 
                        <a href="/cart"><button className="pay-btn-add btn-right">Back</button></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment