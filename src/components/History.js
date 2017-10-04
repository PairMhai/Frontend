import React , {Component} from 'react'
import { Cookies } from 'react-cookie';
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import '../CSS/Payment.css'

class History extends Component {

    componentWillMount() {
        const cookies = new Cookies();
        var key = cookies.get('key')
        if(key !== 'null' && key !== undefined){
            
        } else {
            window.location = "/home";
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
                        <p className="pay-header">HISTORY</p>
                        <div className="pay-info">
                           Comming soon
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default History