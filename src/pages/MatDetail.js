import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import ProfileNav from '../components/ProfileNav'
import LoginNav from '../components/LoginNav'
import '../CSS/Mat.css'

class MatDetail extends Component {

    constructor(props){
        super(props);
        this.state = {amount: 0, isLogin: true}

        this.increaseProd = this.increaseProd.bind(this);
        this.decreaseProd = this.decreaseProd.bind(this);
        this.addProdToCart = this.addProdToCart.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
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
        if(this.state.isLogin)
            return <ProfileNav />;
        return <LoginNav />
    }

    render(){
        return (
            <div>
            <div className="nav">
                <Navbar /> 
                <LoginNav />
                
                {this.checkLogin()}
                </div>
                <div className="content container-fluid">
                    <p className="mat-head">Material</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-prod" src={ require('../img/Material/rosegold.jpg') } alt="mat-pic"/>
                        </div>
                        <div className="mat-right col-lg-6">
                            <p>NAME:&ensp;Red silk </p>
                            <p>DESCRIPTION:&ensp;Made in Thailand </p> 
                            <p>MATERIAL:&ensp;Mudmee Silk  </p>
                            <p>COLOR:&ensp;Dark Red </p>
                            <p>PRICE:&ensp;500 Baht / Yard of fabric  </p>
                            <div className="row mat-group-btn ">
                                <button className="mat-btn-add" onClick={this.decreaseProd}>-</button>
                                <input className="mat-amount" type="number" value={this.state.amount} required/>
                                <button className="mat-btn-add"  onClick={this.increaseProd}>+</button>&ensp;Yard of Fabric
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