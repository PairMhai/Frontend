import React , {Component} from 'react'
import Navbar from '../components/Navbar'

class ConfirmResetPass extends Component {

    constructor(props) {
        super(props);
        this.state = { newPassword = '', cfnewPassword = '', userid = '', token = '', };
    }

    handleSubmit(event) {
        axios,post('membership/password/reset/confirm/',{

        })

    }

    render() {
        
    }
}