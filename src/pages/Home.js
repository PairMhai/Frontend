import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTab from '../components/LeftTab'
import '../CSS/Home.css';



class Home extends Component {
    render(){
        return (
            <div>
                <Navbar /> 
                <div className="row">
                    <LeftTab />
                    {/* <ProdCard /> */}
                </div>
            </div>
        );
    }
}

export default Home