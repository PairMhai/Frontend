import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LoginTab from '../components/LoginTab'
import LeftTab from '../components/LeftTab'
import ProdCard from '../components/ProdCard'

class Design extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <LoginTab />
                <LeftTab />
                <div>
                    <ProdCard />
                </div>
            </div>
        );
    }
}

export default Design