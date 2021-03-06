import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import axios from 'axios'
import { Cookies } from 'react-cookie'
import '../CSS/CustomerInfo.css'

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {firstname:'', lastname:'', gender:'',
        birthday:'', age:'', address:'', tel:'', email:''}
    }

    componentWillMount() {
        const cookies = new Cookies()
        var key = cookies.get('key')
        if(key !== 'null' && key !== undefined){
            axios.get('https://pairmhai-api.herokuapp.com/membership/cust/'+ key) 
            .then((response)=> {
                this.setState({ firstname: response.data.user.first_name, lastname: response.data.user.last_name,
                    gender: response.data.user.gender ,birthday: response.data.user.date_of_birth, 
                    age: response.data.user.age, address: response.data.user.address, tel: response.data.user.telephone,
                    email: response.data.user.email_address,
                })
            })
            .catch(function (error){
                console.log(error)
            })
        } else {
            window.location = "/home"
        }
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
                        <p className="cus-inf-header">YOUR INFORMATION</p>
                        <div className="cus-inf-part">
                            FIRSTNAME: <span className="cus-data" name="firstname">{this.state.firstname}</span>  &emsp;&emsp;&emsp;
                            LASTNAME: <span className="cus-data" name="lastname">{this.state.lastname}</span>
                            <br/><br/>GENDER: <span className="cus-data" name="gender">{this.state.gender}</span> &emsp;&emsp;&emsp;
                            BIRTHDAY: <span className="cus-data" name="birthday">{this.state.birthday}</span>  &emsp;&emsp;&emsp;
                            AGE: <span className="cus-data" name="age">{this.state.age}</span>
                            <br/><br/>ADDRESS: <span className="cus-data" name="address">{this.state.address}</span>
                            <br/><br/>TEL: <span className="cus-data" name="tel">{this.state.tel}</span> &emsp;&emsp;&emsp;
                            E-MAIL: <span className="cus-data" name="email">{this.state.email}</span>
                        </div>
                        <a href='/edit_profile'>
                            <input className="cus-btn-edit" type="button" value="EDIT"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
