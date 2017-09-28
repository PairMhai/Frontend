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
                    <div className="col-md-3 push-md-9">
                    <LeftTab />
                    </div>
                    <div className="col-md-9 push-md-3">
                    {/* <ProdCard /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home