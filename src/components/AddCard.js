import React , {Component} from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import {Cookies } from 'react-cookie';
import swal from 'sweetalert'
import visa from '../img/icon/visa.png'
import master from '../img/icon/mastercard.png'
import '../CSS/Card.css'

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            card_number: '', bank:'', cvv:'', card_holder:'', exp:'', customer:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        Modal.setAppElement('body');
        const cookies = new Cookies();
        var key = cookies.get('key')
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        })
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
                "ccv": this.state.cvv,
                "expire_date": this.state.exp,
                "customer": cookies.get('key')
            
        })
        .catch(function (error) {
            swal ( "Oops" ,  "Incorrect data" ,  "error" )
          });
        event.preventDefault();      
    }

    

    render() {
        return (
            <div>
                <Modal contentLabel="modal" isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                    <div>
                        <p className="add-card-info">CARD INFORMATION</p>
                    </div><br/>
                    <div type="container" className="info-box">
                        <div className="card-box"><input type="radio" name="card" onChange={this.handleChange}/>Visa</div>
                        <div className="card-box"><input type="radio" name="card" onChange={this.handleChange}/>Master-Card</div>   
                        <br/><br/>
                        Card Number &nbsp;&nbsp;<input className="card_number" name="card_number" value={this.state.card_number} onChange={this.handleChange}/>&nbsp;&nbsp;
                        Bank &nbsp;&nbsp;<input className="bank" name="bank" value={this.state.bank} onChange={this.handleChange}/>&nbsp;&nbsp;
                        CVV &nbsp;&nbsp;<input className="cvv" name="cvv" value={this.state.cvv} onChange={this.handleChange}/><br/><br/>            
                        Card Holder &nbsp;&nbsp;<input className="card_holder" name="card_holder" value={this.state.card_holder} onChange={this.handleChange}/>&nbsp;&nbsp;
                        EXP &nbsp;&nbsp;<input type="month" className="exp" name="exp" value={this.state.exp} onChange={this.handleChange}/>
                    </div><br/>
                    <div>
                        <button className="signup_btn pull-right" onClick={this.handleSubmit} onChange={this.handleChange}>ADD</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default AddCard