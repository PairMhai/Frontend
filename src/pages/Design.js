import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTab from '../components/LeftTab'
import ProdCard from '../components/ProdCard'

class Design extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <div className="row">
                    <LeftTab />
                    <ProdCard />
                </div>
            </div>
        );
    }
}

export default Design