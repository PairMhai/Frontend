import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LoginTab from '../components/LoginTab'
import LeftTab from '../components/LeftTab'
import SilkHis from '../components/SilkHis'

class Information extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <LoginTab />
                <LeftTab />
                <div>
                    <SilkHis />
                </div>
            </div>
        );
    }
}

export default Information