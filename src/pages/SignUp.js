import React , {Component} from 'react'
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

class SignUp extends Component {
    
    constructor(props){
        super(props);
        this.state = { username: 'Hellpo', password: 'Hello', cfpassword: 'Hello', firstname: 'Hello', lastname: 'Hello', gender: 'male',email: 'aaa@ku.th', age: '23', birthday: '', tel: '4557779',  address: 'hello'};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            isActive: false
        }
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    open() {
        <AddCard/>
    }

    handleSubmit(event){
        axios.post('https://pairmhai-api.herokuapp.com/membership/register/',
        { 
            "user": {
                "username": this.state.username,
                "first_name": this.state.firstname,
                "last_name": this.state.lastname,
                "email": this.state.email,
                "telephone": this.state.tel,
                "address": this.state.address,
                "age": this.state.age,
                "date_of_birth": this.state.birthday,
                "gender": this.state.gender,
                "member": this.state.member,
            },

            "password1": this.state.password,
            "password2": this.state.cfpassword,
            "classes": 3
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        event.preventDefault(); 
    }
  
    render() {
        return (
            <div>
                <Navbar />
            <div className="siup-center container-fluid">
                <p className="signup">SIGN UP</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        USERNAME: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;&nbsp;
                        PASSWORD: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;&nbsp;
                        CONFIRM PASSWORD: <input type="password" name="cfpassword" value={this.state.cfpassword} onChange={this.handleChange}/>
                    </div>
                    <p className="person">PERSONAL INFORMATION</p>
                    <div className="container">
                        FIRSTNAME: <input type="text" name="first_name" value={this.state.firstname} onChange={this.handleChange}/> &nbsp;&nbsp;&nbsp;&nbsp;
                        LASTNAME: <input  type="text" name="last_name" value={this.state.lastname} onChange={this.handleChange}/> <br></br> <br></br>
                        GENDER: 
                            &nbsp;<input type="radio" name="gender" className="gender" value="female" onChange={this.handleChange}/> FEMALE
                            &nbsp;<input type="radio" name="gender" value="male" className="gender" onChange={this.handleChange}/> MALE &nbsp;&nbsp;&nbsp;&nbsp;
                        BIRTHDAY: <input type="date" name="date_of_birth" className="hbd" value={this.state.birthday} onChange={this.handleChange}/>
                                  <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                        E-MAIL: <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/> &nbsp;&nbsp;&nbsp;&nbsp;
                        TEL: <input type="text" name="telephone" value={this.state.tel} onChange={this.handleChange}/><br></br> <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                        ADDRESS: <br/><textarea className="addr" name="address" value={this.state.address} onChange={this.handleChange}/> 
                        
                        <div type="container" className="radio-container">
                        <a className="member">MEMBERSHIP:</a>
                        <div className="member-box">
                            <input type="radio" name="member" className="member-radio" value="diamond" onChange={this.handleChange}/>
                            <a data-tip="Discount 12% each time that purchase product.">DIAMOND</a> 
                            <ReactTooltip place="ribottomght" type="dark" effect="float"/><br/>
                            <img id="class-icon" src={diamond} alt="diamond-icon" className="diamond-icon member-icon"/> 
                        </div>
                           
                        <div className="member-box">
                            <input type="radio" name="member" className="member-radio" value="platinum" onChange={this.handleChange}/>
                            <a data-tip="Discount 10% each time that purchase product.">PLATINUM</a>
                            <ReactTooltip place="bottom" type="dark" effect="float"/><br/>
                            <img id="class-icon" src={platinum} alt="platinum-icon" className="platinum-icon member-icon"/> 
                        </div>
                          
                        <div className="member-box">
                            <input type="radio" name="member" className="member-radio" value="gold" onChange={this.handleChange}/>
                            <a data-tip="Discount 8% each time that purchase product.">GOLD</a>
                            <ReactTooltip place="bottom" type="dark" effect="float"/><br/>
                            <img id="class-icon" src={gold} alt="gold-icon" className="gold-icon member-icon"/> 
                        </div>

                        <div className="member-box">
                            <input type="radio" name="member" className="member-radio" value="silver" onChange={this.handleChange}/>
                            <a data-tip="Discount 5% each time that purchase product.">SILVER</a> 
                            <ReactTooltip place="bottom" type="dark" effect="float"/><br/>
                            <img id="class-icon" src={silver} alt="silver-icon" className="silver-icon member-icon"/> 
                        </div>
                            
                        <div className="member-box">
                            <input type="radio" name="member" className="member-radio" value="bronze" onChange={this.handleChange}/>
                            <a data-tip="Discount 2% each time that purchase product.">BRONZE</a>
                            <ReactTooltip place="bottom" type="dark" effect="float"/><br/>
                            <img id="class-icon" src={bronze} alt="bronze-icon" className="bronze-icon member-icon"/> 
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
                            <button className="signup_btn pull-right" onChange={this.handleChange} onClick={this.toggleModal}>ADD CARD</button>
                            <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal} contentLabel="Modal">
                                <div>
                                    <p className="add-card-info">CARD INFORMATION</p>
                                </div><br/>
                                <div className="info-box">
                                    <div className="card-box"><input type="radio" name="card"/>Visa
                                    <input type="radio" name="card"/>Master-Card</div>   
                                    <br/>
                                    Card Number &nbsp;&nbsp;<input className="card-number"/>&nbsp;&nbsp;
                                    {/* Bank &nbsp;&nbsp;<input className="bank"/>&nbsp;&nbsp; */}
                                    CVV &nbsp;&nbsp;<input className="cvv"/><br/><br/>            
                                    Card Holder &nbsp;&nbsp;<input className="card-holder"/>&nbsp;&nbsp;
                                    EXP &nbsp;&nbsp;<input type="month" className="exp"/>
                                </div><br/>
                                <button className="signup_btn modal-btn" onChange={this.handleChange} onClick={this.toggleModal}>CANCEL</button>
                                <button className="signup_btn modal-btn" onChange={this.handleChange}>ADD</button>
                            </Modal>
                        </div>
                    </div><br></br>
                    <input type="submit" value="SIGN UP" className="signup_btn btn-height"/><br></br><br></br>
                </form> 
            </div>
            </div>
        );
    }
}

export default SignUp