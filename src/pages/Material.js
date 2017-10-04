import React , {Component} from 'react'
import {Cookies} from 'react-cookie';
import Navbar from '../components/Navbar'
import LeftTabFilter from '../components/LeftTabFilter'
import ProdCard from '../components/ProdCard'
import LoginNav from '../components/LoginNav'
import ProfileNav from '../components/ProfileNav'

class Material extends Component {

    constructor(props){
        super(props);
        this.state = {prod: ['s','f']}
        
        this.checkLogin =  this.checkLogin = this.checkLogin.bind(this);
    }

    checkLogin(){
        const cookies = new Cookies();
        var key = cookies.get('key');
        if(key === 'null')
            return <LoginNav />;
        return <ProfileNav />;
    }

    render(){
        return (
            <div>
                <Navbar /> 
                <div className="row container-fluid">
                    <div className="col-md-3 push-md-9 ">
                        <LeftTabFilter />
                    </div>
                    <div className="col-md-9 push-md-3">
                        {this.checkLogin()}
                        <ProdCard type="mat"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Material