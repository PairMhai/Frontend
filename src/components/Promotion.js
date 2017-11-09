import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import LeftTab from '../components/LeftTab'
import '../CSS/Payment.css'
import '../CSS/Promotion.css';
import axios from 'axios'
import {Cookies} from 'react-cookie'

class Promotion extends Component {

    constructor(props) {
        super(props)
        this.state = { promotions: [] }
    }

    checkLogin(){
        const cookies = new Cookies();
        var key = cookies.get('key');
        if(key === 'null' || key === undefined)
            return <LeftTab />;
        return <LeftTabProfile  />;
    }

    componentWillMount() {
        axios.get('https://pairmhai-api.herokuapp.com/catalog/promotions')
        .then((response) => {
            console.log(response.data);
            this.setState({promotions: response.data});
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }

    render(){
        const promDet = this.state.promotions.map((promVal, index) => {
            return (
                <div key={promVal.name} className="row">
                    <div className="col-sm-4">
                        <img className="img" src={require('../img/Promotion/'+ promVal.image_name)} width="80%" alt="product pic" />
                    </div>
                    <div className="col-sm-6 promotion-info">
                        <h2><div>{promVal.name}</div></h2>                    
                        <div className="promo-detail" name="description">{promVal.description}</div><br/>
                        <div className="promo-detail" name="discount">{promVal.discount}</div><br/>
                        <div className="promo-detail" name="start">{promVal.start}</div> 
                        <div className="promo-detail" name="end">{promVal.end}</div><br/>
                    </div>  
                </div>  
            );
        });
        return (
            <div>
                <Navbar /> 
                <div className="row">
                    <div className="col-md-3 push-md-9">
                        {this.checkLogin()}
                    </div>
                    <div className="col-md-9 push-md-3 cus-con">
                        <p className="event">SPECIAL EVENT</p>
                        <div className="promotion-box">
                            
                            {promDet}
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Promotion