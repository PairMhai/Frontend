import React , {Component} from 'react'
import {Cookies} from 'react-cookie'
import Navbar from '../components/Navbar'
import AddCard from '../components/AddCard'
import axios from 'axios';
import '../CSS/SignUp.css';
import ReactTooltip from 'react-tooltip'
import Modal from 'react-modal'
import bronze from '../img/icon/bronze.png'
import silver from '../img/icon/silver.png'
import gold from '../img/icon/gold.png'
import platinum from '../img/icon/platinum.png'
import diamond from '../img/icon/diamond.png'
import visa from '../img/icon/visa.png'
import master from '../img/icon/mastercard.png'
import swal from 'sweetalert'

class SignUp extends Component {
    
    constructor(props){
        super(props);
        this.state = { username: '', password: '', cfpassword: '', firstname: '', lastname: '', 
        gender: '',email: '', birthday: '', tel: '',  address: '', classes: '', isActive: false,
        cardNumber: '', ccv:'', cardHolder:'', exp:'', customer:'', cardDetail:[]};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
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

    componentWillMount() {
        Modal.setAppElement('body');
    }

    toggleModal = () => {
        this.setState({ isActive: !this.state.isActive })
    }

    handleSubmit(event){
        console.log("user name: " + this.state.username);
        console.log("first name: " + this.state.firstname);
        console.log("last name: " + this.state.lastname);
        console.log("email: " + this.state.email);
        console.log("telephone: " + this.state.tel);
        console.log("address: " + this.state.address);
        console.log("date of birth: " + this.state.birthday);
        console.log("gender: " + this.state.gender);
        
        console.log("owner: " + this.state.cardOwner);
        console.log("credit no: " + this.state.cardNumber);
        console.log("ccv: " + this.state.ccv);
        console.log("expire date: " + this.state.exp);


        axios.post('https://pairmhai-api.herokuapp.com/membership/register/', {
            "user": {
                "username": this.state.username,
                "first_name": this.state.firstname,
                "last_name": this.state.lastname,
                "email": this.state.email,
                "telephone": this.state.tel,
                "address": this.state.address,
                "date_of_birth": this.state.birthday,
                "gender": this.state.gender
            },
            "password1": this.state.password,
            "password2": this.state.cfpassword,
            "classes": this.state.classes,

            "credit_cards": this.state.cardDetail,
        })
        .then(function (response) {
            swal("Success","Please verify your e-mail", "success");
            window.location = "/home"
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.response);
            swal ( "Oops" ,  "Please enter valid data" ,  "error" )
        });
         event.preventDefault();  
     }

  
    render() {
        // const allCard = this.state.cardDetail.map((cardVal, index)=>{
        //   return 
        //   <div>
        //   <table className="payment-table">
        //       <tbody>
        //           <tr>
        //               <td>4569 xxx xxx</td>
        //               <td>TMB</td>
        //               <td>3/20</td>
        //               <td>Thanawan Sean-in</td>
        //           </tr>
        //       </tbody>
        //   </table><br></br>
        //   </div>
        // });
        
        return (
            <div>
                <Navbar />
            <div className="siup-center container-fluid">
                <p className="signup">SIGN UP</p>
                
                    <div className="container">
                        USERNAME: <input type="user" name="username" value={this.state.username} onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;&nbsp;
                        PASSWORD: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;&nbsp;
                        CONFIRM PASSWORD: <input type="password" name="cfpassword" value={this.state.cfpassword} onChange={this.handleChange}/>
                    </div>
                    <p className="person">PERSONAL INFORMATION</p>
                    <div className="container">
                        FIRSTNAME: <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange}/> &nbsp;&nbsp;&nbsp;&nbsp;
                        LASTNAME: <input  type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}/> <br></br> <br></br>
                        GENDER: 
                            &nbsp;<input type="radio" name="gender" className="gender" value="Female" onChange={this.handleChange}/> FEMALE
                            &nbsp;<input type="radio" name="gender" value="Male" className="gender" onChange={this.handleChange}/> MALE &nbsp;&nbsp;&nbsp;&nbsp;
                        BIRTHDAY: <input type="date" name="birthday" className="hbd" value={this.state.birthday} onChange={this.handleChange}/>
                                  <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                        E-MAIL: <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/> &nbsp;&nbsp;&nbsp;&nbsp;
                        TEL: <input type="text" name="tel" value={this.state.tel} onChange={this.handleChange}/><br></br> <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="address">ADDRESS:</a>
                        <br/><textarea className="addr" name="address" value={this.state.address} onChange={this.handleChange}/><br/><br/>
                        
                        <a className="member">MEMBERSHIP:</a>
                        <div type="container" className="radio-container">
                        <div className="member-box">
                            <img id="class-icon" src={diamond} alt="diamond-icon" className="diamond-icon member-icon"/> 
                            <br/><input type="radio" name="classes" value="5" className="member-radio" onChange={this.handleChange}/>
                            <a data-tip="Discount 12% each time that purchase product.">DIAMOND</a> 
                        </div>
                           
                        <div className="member-box">
                            <img id="class-icon" src={platinum} alt="platinum-icon" className="platinum-icon member-icon"/> 
                            <br/><input type="radio" name="classes" value="4" className="member-radio" onChange={this.handleChange}/>
                            <a data-tip="Discount 10% each time that purchase product.">PLATINUM</a>
                        </div>
                          
                        <div className="member-box">
                            <img id="class-icon" src={gold} alt="gold-icon" className="gold-icon member-icon"/> 
                            <br/><input type="radio"  name="classes" value="3" className="member-radio" onChange={this.handleChange}/>
                            <a data-tip="Discount 8% each time that purchase product.">GOLD</a>
                        </div>

                        <div className="member-box">
                            <img id="class-icon" src={silver} alt="silver-icon" className="silver-icon member-icon"/> 
                            <br/><input type="radio" name="classes" value="2" className="member-radio" onChange={this.handleChange}/>
                            <a data-tip="Discount 5% each time that purchase product.">SILVER</a> 
                        </div>
                            
                        <div className="member-box">
                            <img id="class-icon" src={bronze} alt="bronze-icon" className="bronze-icon member-icon"/> 
                            <br/><input type="radio" name="classes" value="1" className="member-radio" onChange={this.handleChange}/>
                            <a data-tip="Discount 2% each time that purchase product.">BRONZE</a>
                        </div>
                                             
                        </div>
                        <br/>
                    </div>
                    <p className="payment">PAYMENT INFORMATION</p>
                    <div className="container">
                        <table className="payment-table">
                            <tbody>
                                <tr>
                                    <td>4569 xxx xxx</td>
                                    <td>TMB</td>
                                    <td>3/20</td>
                                    <td>Thanawan Sean-in</td>
                                </tr>
                            </tbody>
                        </table><br></br>
                        <div>
                            <button className="signup_btn pull-right" onClick={this.toggleModal}>ADD CARD</button>
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

                        </div>
                    </div><br></br>
                <button className="signup_btn" onClick={this.handleSubmit} >SIGN UP</button><br></br><br></br>

            </div>
            </div>
        );
    }
}

export default SignUp


// expiredate require