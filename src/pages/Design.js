import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import {Cookies} from 'react-cookie';
import LeftTabFilter from '../components/LeftTabFilter'
import ProdCard from '../components/ProdCard'
import LoginNav from '../components/LoginNav'
import ProfileNav from '../components/ProfileNav'

class Design extends Component {
    
    constructor(props){
        super(props);
        this.checkLogin =  this.checkLogin = this.checkLogin.bind(this);
    }

    checkLogin(){
        const cookies = new Cookies();
        var key = cookies.get('key');
        if(key === 'null' || key === undefined)
            return <LoginNav />;
        return <ProfileNav />;
    }

    render(){
        return (
            <div>
                <Navbar /> 
                {this.checkLogin()}
                <div className="row container-fluid">
                    <div className="col-md-3 push-md-9 ">
                        <LeftTabFilter />
                    </div>
                    <div className="col-md-9 push-md-3">
                        <ProdCard type="des"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Design