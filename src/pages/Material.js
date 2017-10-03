import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTabFilter from '../components/LeftTabFilter'
import ProdCard from '../components/ProdCard'
import Cart from '../components/Cart'
import LoginNav from '../components/LoginNav'
import ProfileNav from '../components/ProfileNav'

class Material extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <div className="row container-fluid">
                    <div className="col-md-3 push-md-9 ">
                        <LeftTabFilter />
                    </div>
                    <div className="col-md-9 push-md-3">

                    <LoginNav />
                        <ProdCard />

                    </div>
                </div>
            </div>
        );
    }
}

export default Material