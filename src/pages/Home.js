import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import LeftTab from '../components/LeftTab'
import LoginNav from '../components/LoginNav'
import ProfileNav from '../components/ProfileNav'
import homePic from '../img/homePic.jpg'
import profile_icon from '../img/userpic.png'
import '../CSS/Home.css';


class Home extends Component {
    render(){
        return (
            <div>
                <div className="nav">
                <Navbar /> 
                </div>
                <div className="row">
                    <div className="col-md-3 push-md-9">
                    <LeftTab />
                    </div>
                    <div className="col-md-9 push-md-3">
                    <ProfileNav />
                        <div className="company_name">PAIR MHAI </div>
                        <div className="our_story">Our Story </div>
                        <div className="slogan">Simple But Elegant </div>
                        <div className="pic_zone">
                            <div className="pic_zone"><img className="home_pic" alt="home-pic" src={homePic}/></div>
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
            </div>
        );
    }
}

export default Home