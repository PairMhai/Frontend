import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabFilter'
import TabProfile from '../components/LeftTabProfile'
import '../CSS/Payment.css'

class Promotion extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <div className="row">
                    <div className="col-md-3 push-md-9">
                      
                    </div>
                    <div className="col-md-9 push-md-3 cus-con">
                        <h1>Comming Soon</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Promotion