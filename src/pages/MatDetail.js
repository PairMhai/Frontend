import React , {Component} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import ProfileNav from '../components/ProfileNav'
import LoginNav from '../components/LoginNav'
import {Cookies} from 'react-cookie'
import '../CSS/Mat.css'

class MatDetail extends Component {

    constructor(props){
        super(props);
        this.state = {amount: 0,id: '', name: '', description: '',  color: '', price: '', imageName: ''}

        this.increaseProd = this.increaseProd.bind(this);
        this.decreaseProd = this.decreaseProd.bind(this);
        this.addProdToCart = this.addProdToCart.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }

    componentWillMount() {
        axios.get('https://pairmhai-api.herokuapp.com/catalog/material/'+ this.props.match.params.id) 
        .then((response)=> {
            this.setState({ id: response.data.product_id,
                name: response.data.name, description: response.data.description,
                price: response.data.price, color: response.data.color, imageName: '../img/mat/'+response.data.image_name,
            })
            console.log(response)
        })
        .catch(function (error){
            console.log(error);
        })
    }

    increaseProd() {
        this.setState({ amount: this.state.amount + 1 });
    } 

    decreaseProd() {
        if(this.state.amount > 0)
            this.setState({ amount: this.state.amount - 1 });
    }

    addProdToCart() {
        this.setState({ amount: 0});
    }
    
    checkLogin(){
        const cookies = new Cookies();
        var key = cookies.get('key');
        if(key!=null)
            return <ProfileNav />;
        return <LoginNav />;
    }

    render(){
        const path = this.state.imageName;
          return (
            <div>
                <Navbar />                 
                {this.checkLogin()}
                <div className="content container-fluid">
                    <p className="mat-head">Material</p>
                    <div className="row">
                        <div id="img-mat" className="col-lg-6">
                            <img className="mat-img-prod" src={require('../img/mat/black.jpg')} alt="mat-pic"/>
                        </div>
                        <div className="mat-right col-lg-6">
                            <p>NAME:&ensp;&ensp;{this.state.name}</p>
                            <p>DESCRIPTION:&ensp;{this.state.description}</p> 
                            <p>COLOR:&ensp;{this.state.color}</p>
                            <p>PRICE:&ensp;{this.state.price} Baht.- / Yard of Fabric</p>
                            <div className="row mat-group-btn ">
                                <button className="mat-btn-add" onClick={this.decreaseProd}>-</button>
                                <input className="mat-amount" type="number" value={this.state.amount} required/>
                                <button className="mat-btn-add" onClick={this.increaseProd}>+</button>&ensp;Yard of Fabric
                            </div>
                            <button className="mat-btn-submit">ADD TO CARD</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MatDetail