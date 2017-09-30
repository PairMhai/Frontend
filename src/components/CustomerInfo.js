
import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import TabProfile from '../components/LeftTabProfile'
import '../CSS/CustomerInfo.css'

class CustomerInfo extends Component {

    render(){
        return (
            <div className="col-md-9 push-md-3">
                <TabProfile/>
                <div className="cus-inf-header">YOUR INFORMATION</div>
                    <div className="cus-inf-part">
                        <div className="cus-inf-left">
                            <label className="firstname">&emsp;&emsp;FIRSTNAME:&nbsp; </label>
                            <label name="customer_name" className="import_cusName">Taeyon</label><br/>
                            <label className="age">&emsp;&emsp;AGE:&nbsp; </label>
                            <label name="customer_age" className="import_cusAge">27</label><br/>
                            <label className="birthday">&emsp;&emsp;BIRTHDAY:&nbsp; </label>
                            <label name="customer_birthday" className="import_cusBirthDay">29/01/39</label><br/>
                            <label className="email">&emsp;&emsp;EMAIL:&nbsp; </label>
                            <label name="customer_email" className="import_cusEmail">taeyon.ss@hotmail.com</label>
                        </div>
                        <div className="cus-inf-right">
                            <label className="lastname">&emsp;&emsp;LASTNAME:&nbsp; </label>
                            <label name="customer_lastName" className="import_cusLastName">Kim</label><br/>
                            <label className="gender">&emsp;&emsp;GENDER:&nbsp; </label>
                            <label name="customer_gender" className="import_cusGender">Female</label><br/>
                            <label className="tel">&emsp;&emsp;TEL:&nbsp; </label>
                            <label name="customer_tel" className="import_cusTel">0921688888</label><br/>
                            <label className="address">&emsp;&emsp;ADDRESS:&nbsp; </label>
                            <label name="customer_address" className="import_cusAddress">Seoul, South Korea</label>
                        </div> 
                    </div>
            </div>
        );
    }
}

export default CustomerInfo
