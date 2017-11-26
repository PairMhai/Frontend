import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LeftTabProfile from '../components/LeftTabProfile'
import LeftTab from '../components/LeftTab'
import homePic from '../img/homePic.png'
import {Cookies} from 'react-cookie'
import '../CSS/Home.css'


class Home extends Component {
    
    constructor(props){
        super(props)
        this.state = {isLogin: false}
        
        this.checkLogin =  this.checkLogin = this.checkLogin.bind(this)
    }

    checkLogin(){
        const cookies = new Cookies()
        var key = cookies.get('key')
        if(key === 'null' || key === undefined)
            return <LeftTab />
        return <LeftTabProfile  />
    }

    render(){
        return (
            <div>
                <div className="nav">
                <Navbar /> 
                </div>
                <div className="row">
                    <div className="col-md-3 push-md-9">
                        {this.checkLogin()}
                    </div>
                    <div className="col-md-9 push-md-3">
                        <div className="company_name">PAIR MHAI </div>
                        <div className="our_story">Our Story </div>
                        <div className="slogan">Simple But Elegant </div>
                        <div className="pic_zone">
                            <div className="pic_zone_1"><img className="home_pic" alt="home-pic" src={homePic}/></div>
                        </div>
                        <div className="txt_zone">
                            <div className="pairmhai_info">
                            &emsp; &emsp;The name of the company
                            is Pair Mhai Company Limited.
                            We will sell silk materials and
                            silk designs including silk shirt, silk pants,
                            silk skirts, and silk dress. Moreover, the target
                            of our products is people who love silk.
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                <Footer />
                </div>

            </div>
            
        )
    }
}

export default Home