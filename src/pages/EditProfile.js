import React , {Component} from 'react'
import {Cookies} from 'react-cookie'
import Navbar from '../components/Navbar'
import axios from 'axios';
import LeftTabProfile from '../components/LeftTabProfile'
import swal from 'sweetalert'
import visa from '../img/icon/visa.png'
import master from '../img/icon/mastercard.png'
import Modal from 'react-modal'
import '../CSS/SignUp.css';
import '../CSS/EditProfile.css';

class EditProfile extends Component {
    
    constructor(props){
        super(props);
        this.state = { username: '', firstname: '', lastname: '', gender: '', email: '', 
                       birthday: '', tel: '',  address: '', age: '', isActive: false, user:[],
                       card: [], owner: '', cardNumber: '', ccv: '', exp: '', cardHolder:'', customer:''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);        
        this.cardChange = this.cardChange.bind(this);
        this.showCard = this.showCard.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    cardChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleAdd() {
        const cookies = new Cookies();
        axios.post('https://pairmhai-api.herokuapp.com/payment/', {
            "owner": this.state.cardHolder,
            "credit_no": this.state.cardNumber,
            "ccv": this.state.ccv,
            "expire_date": this.state.exp,
            "customer": cookies.get('key')
        })
        .then(function (response) {
            console.log(response);
            swal("Success","Already added", "success").then((value) => {
                window.location = "edit_profile/"
            });
        })
        .catch(function (error) {
            console.log(error.response);
            swal("Sorry","Something wrong try again", "error");
        });
    
        this.setState({ owner: '', cardNumber: '', ccv: '', exp: '', cardHolder:''});
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    componentWillMount() {
        const cookies = new Cookies();
        var key = cookies.get('key')
        axios.get('https://pairmhai-api.herokuapp.com/membership/user/' + key)
        .then((response) => {
            this.setState({ username: response.data.username, firstname: response.data.first_name, 
                            lastname: response.data.last_name, email: response.data.email_address, 
                            tel: response.data.telephone, address: response.data.address, 
                            birthday: response.data.date_of_birth, gender: response.data.gender,
                            age: response.data.age })
        })         
        .catch(function (error) {
            console.log(error);
        });   
        Modal.setAppElement('body');
        this.showCard();
    }

    showCard() {
        const cookies = new Cookies();
        var key = cookies.get('key')
        axios.get('https://pairmhai-api.herokuapp.com/membership/cust/' + key)
        .then(response => {
            console.log(response);
            this.setState({user: response.data.user, card: response.data.creditcards })
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }

    handleSubmit(event) {
        const cookies = new Cookies();
        var key = cookies.get('key');
        axios.patch('http://pairmhai-api.herokuapp.com/membership/user/' + key, {
            "username": this.state.username,
            "first_name": this.state.firstname,
            "last_name": this.state.lastname,
            "email_address": this.state.email,
            "telephone": this.state.tel,
            "address": this.state.address,
            "date_of_birth": this.state.birthday,
            "gender": this.state.gender,
            "age": this.state.age
        })
        .then(function (response) {
            window.location = "/profile"
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
            swal ( "Oops" ,  "Please enter valid data" ,  "error" )
        });  
        event.preventDefault();

    }

  
    render() {

        const allCard = this.state.card.map((cardVal, index)=>{
            return <div className="row" key={index}>
                        <div className="first-col">{cardVal.owner}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="second-col">{cardVal.credit_no}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="third-col">{cardVal.expire_date}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                   </div>
        });

        return (
            <div>
                <Navbar />
                <div className="row">
                    <div className="col-md-3 push-md-9">
                        <LeftTabProfile />
                    </div>
                    <div className="col-md-9 push-md-3 cus-con">
                        <p className="cus-inf-header">EDIT PROFILE</p>
                        <div className="cus-inf-part">
                            USERNAME: <span className="cus-data" name="username">{this.state.username}</span><br/><br/> 
                            FIRSTNAME: <input className="cus-data edit-box" name="firstname" value={this.state.firstname} onChange={this.handleChange}/><br/><br/>
                            LASTNAME: <input  className="cus-data edit-box" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                            <br/><br/>GENDER: <span className="cus-data" name="gender">{this.state.gender}</span> &emsp;&emsp;&emsp;
                            BIRTHDAY: <span className="cus-data" name="birthday">{this.state.birthday}</span>  &emsp;&emsp;&emsp;
                            AGE: <span className="cus-data" name="age">{this.state.age}</span><br/>
                            ADDRESS: <textarea className="cus-data" name="address" value={this.state.address} onChange={this.handleChange}/>
                            <br/><br/>TEL: <input className="cus-data edit-box" name="tel" value={this.state.tel} onChange={this.handleChange}/><br/><br/>
                            E-MAIL: <input className="cus-data edit-box" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="edit-card-box">
                            {allCard} <br/>               
                            <div>
                                <button className="signup_btn pull-right" onClick={this.toggleModal}>ADD CARD</button>
                                <Modal contentLabel="modal" isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                                    <div>
                                        <p className="add-card-info">CARD INFORMATION</p>
                                    </div><br/>
                                    <div className="info-box">
                                        <div className="card-box">
                                            <input type="radio" name="card" defaultChecked/>
                                            <img id="visa_icon" src={visa} alt="visa-icon"/> 
                                            <input type="radio" name="card"  />
                                            <img id="visa_icon" src={master} alt="master-icon"/>    
                                        </div><br/>
                                        Card Number &nbsp;&nbsp;<input name="cardNumber" value={this.state.cardNumber} onChange={this.cardChange}/>&nbsp;&nbsp;
                                        CCV &nbsp;&nbsp;<input  name="ccv" value={this.state.ccv} onChange={this.cardChange}/><br/><br/>            
                                        Card Holder &nbsp;&nbsp;<input  name="cardHolder" value={this.state.cardHolder} onChange={this.cardChange}/>&nbsp;&nbsp;
                                        EXP &nbsp;&nbsp;<input type="date"  name="exp" value={this.state.exp} onChange={this.cardChange}/>
                                    </div><br/>
                                    <button className="signup_btn modal-btn" onClick={this.toggleModal}>CANCEL</button>
                                    <button className="signup_btn modal-btn" onClick={this.handleAdd}>ADD</button>
                                </Modal>    
                            </div>
                        </div>
                        <button className="cus-btn-edit" onClick={this.handleSubmit} >SUBMIT</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile