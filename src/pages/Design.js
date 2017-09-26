import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LoginTab from '../components/LoginTab'
import LeftTabFilter from '../components/LeftTabFilter'
import ProdCard from '../components/ProdCard'

class Design extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <LoginTab />
                <LeftTabFilter />
                <div>
                    <ProdCard />
                </div>
            </div>
        );
    }
}

export default Design