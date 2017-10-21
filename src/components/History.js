import React , {Component} from 'react'
import { Cookies } from 'react-cookie';
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import '../CSS/History.css'

class History extends Component {

    componentWillMount() {
        const cookies = new Cookies();
        var key = cookies.get('key')
        if(key !== 'null' && key !== undefined){
            
        } else {
            window.location = "/home";
        }
    }

    render(){


        

        return (
            <div>
                <Navbar /> 
                <div className="row">
                    <div className="col-md-3 push-md-9">
                        <LeftTabProfile />
                    </div>
                    <div className="col-md-9 push-md-3 cus-con">
                        <p className="his-header">HISTORY</p>
                        <input className="searchbar-2" type="search" name="search" placeholder="Enter here"/>
                        
                        <button type="submit" className="search_btn" >
                        Search
                        </button>
                        <div className="pay-info">
                        <div className="row" key="001">
                <div className="first-col-his">001</div>
                <div className="second-col-his">Total :2300 Baht</div>
                <div className="second-col-his">pink silk dress 1500 Baht.-</div>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default History