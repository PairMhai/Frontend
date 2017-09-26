import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LoginTab from '../components/LoginTab'
import LeftTabFilter from '../components/LeftTabFilter'
import ProdCard from '../components/ProdCard'

class Material extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <div className="row">
                    <LeftTabFilter />
                    <ProdCard />
                </div>
            </div>
        );
    }
}

export default Material