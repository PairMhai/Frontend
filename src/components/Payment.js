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
import visa from '../img/icon/visa.png'
import master from '../img/icon/mastercard.png'


import AddCard from '../components/AddCard'

class Payment extends Component {

    constructor(props){
        super(props);
        this.state = { shipping: '', cusKey: '',isCardActive: false, isAddrActive: false, user: [], card: [], cardNumber: '', ccv:'', cardHolder:'', exp:''}
        this.getShipping = this.getShipping.bind(this);
        this.cardAdd = this.cardAdd.bind(this);
    }

    componentWillMount() {

        const cookies = new Cookies();
        var key = cookies.get('key')
        if(key !== 'null' && key !== undefined){
            this.setState({cusKey: key})
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

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleAdd() {
        const newCard = this.state.cardDetail;
        newCard.push({owner: this.state.cardHolder, credit_no: this.state.cardNumber, ccv: this.state.ccv, expire_date: this.state.exp});
        this.setState({cardDetail: newCard, isActive: !this.state.isActive});
        console.log(this.state.cardDetail);

        this.setState({ owner: '', credit_no: '', ccv: '', expire_date: '', cardHolder:''});
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

    cardToggleModal = () => {
        this.setState({isCardActive: !this.state.isCardActive })
    }

    render(){
        const allCard = this.state.cardDetail.map((cardVal, index)=>{
            return <div className="row" key={index}>
                  <div className="first-col">{cardVal.owner}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="second-col">{cardVal.credit_no}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="third-col">{cardVal.expire_date}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
          });  

          const cusCard = this.state.cardDetail.map((cardVal, index) => {
            return <tr className="table-tr" key={cardVal.id}>
                        <td>&emsp;<input type="checkbox"/></td>
                        <td>{cardVal.credit_no}</td>
                        <td>{cardVal.owner}</td>
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
                                <div className="info-box">
                                    <div className="card-box">
                                        <input type="radio" name="card" onChange={this.handleChange}/>
                                        <img id="visa_icon" src={visa} alt="visa-icon"/> 
                                        <input type="radio" name="card" onChange={this.handleChange}/>
                                        <img id="visa_icon" src={master} alt="master-icon"/>    
                                    </div>
                                    <br/>
                                    Card Number &nbsp;&nbsp;<input name="cardNumber" value={this.state.cardNumber} onChange={this.handleChange}/>&nbsp;&nbsp;
                                    CCV &nbsp;&nbsp;<input  name="ccv" value={this.state.ccv} onChange={this.handleChange}/><br/><br/>            
                                    Card Holder &nbsp;&nbsp;<input  name="cardHolder" value={this.state.cardHolder} onChange={this.handleChange}/>&nbsp;&nbsp;
                                    EXP &nbsp;&nbsp;<input type="date"  name="exp" value={this.state.exp} onChange={this.handleChange}/>
                                </div><br/>
                                <button className="signup_btn modal-btn" onClick={this.toggleModal}>CANCEL</button>
                                <button className="signup_btn modal-btn" onClick={this.handleAdd}>ADD</button>
                            </Modal>
                         <p/>
                         <table className="pay-table">
                         <tbody>
                             {cusCard}
                         </tbody>
                     </table>
                     <br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment