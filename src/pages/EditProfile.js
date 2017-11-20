import React , {Component} from 'react'
import {Cookies} from 'react-cookie'
import Navbar from '../components/Navbar'
import axios from 'axios';
import '../CSS/SignUp.css';
// import ReactTooltip from 'react-tooltip'
import Modal from 'react-modal'
import bronze from '../img/icon/bronze.png'
import silver from '../img/icon/silver.png'
import gold from '../img/icon/gold.png'
import platinum from '../img/icon/platinum.png'
import diamond from '../img/icon/diamond.png'
import visa from '../img/icon/visa.png'
import master from '../img/icon/mastercard.png'
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
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    componentWillMount() {
        axios.post('http://pairmhai-api.herokuapp.com/membership/user')
        .then((response) => {
            this.setState({ username: response.data.username, firstname: response.data.first_name, 
                            lastname: response.data.last_name, email: response.data.email_address, 
                            tel: response.data.telephone, address: response.data.address, 
                            birthday: response.data.date_of_birth, gender: response.data.gender,
                            age: response.data.age })
        })            
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    handleSubmit(event){
        axios.post('http://pairmhai-api.herokuapp.com/membership/user', {
            "user": {
                "username": this.state.username,
                "first_name": this.state.firstname,
                "last_name": this.state.lastname,
                "email_address": this.state.email,
                "telephone": this.state.tel,
                "address": this.state.address,
                "date_of_birth": this.state.birthday,
                "gender": this.state.gender,
                "age": this.state.age
            },  
        })
        .then(function (response) {
            const cookies = new Cookies();
            cookies.set('key', response.data.key, {path: '/'})
            window.location = "/home"
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
                <div className="siup-center container-fluid">
                <p className="signup">Edit Profile</p>
                <form onSubmit={this.handleSubmit}>   
                    <input type="submit" value="SUBMIT" className="signup_btn" /><br></br><br></br>
                </form> 
            </div>
            </div>
        );
    }
}

export default EditProfile