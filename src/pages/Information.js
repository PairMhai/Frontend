import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LoginTab from '../components/LoginTab'
import LeftTabInformation from '../components/LeftTabInformation'
import SilkHis from '../components/SilkHis'

class Information extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <LeftTabInformation />
                
            </div>
        );
    }
}

export default Information