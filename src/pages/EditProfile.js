import React , {Component} from 'react'
import {Cookies} from 'react-cookie'
import Navbar from '../components/Navbar'
import axios from 'axios';
import LeftTabProfile from '../components/LeftTabProfile'
import swal from 'sweetalert'

class EditProfile extends Component {
    
    constructor(props){
        super(props);
        this.state = { username: '', firstname: '', lastname: '', gender: '', email: '', 
                       birthday: '', tel: '',  address: '', age: '', isActive: false};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        // const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
    
        // this.setState({
        //   [name]: value
        // });
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
    }

    handleSubmit(event){
        axios.patch('http://pairmhai-api.herokuapp.com/membership/user/', {
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
            const cookies = new Cookies();
            cookies.set('key', response.data.key, {path: '/'})
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
                        <button className="cus-btn-edit" onClick={this.handleSubmit} >SUBMIT</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile