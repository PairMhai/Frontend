import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTabFilter from '../components/LeftTabFilter'

import ProdCard from '../components/ProdCard'

class Design extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <LeftTabFilter />
                <div className="row">
                    
                    <ProdCard />
                </div>
            </div>
        );
    }
}

export default Design