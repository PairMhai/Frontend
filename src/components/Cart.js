import React , {Component} from 'react'
import { Cookies } from 'react-cookie';
import dress from '../img/des/darkorange-dress.jpg'
import material from '../img/mat/red.jpg'
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import '../CSS/Usercart.css';
import Modal from 'react-modal'

class Cart extends Component {

    constructor(props){
        super(props);
        this.state = {
            isActive: false
        }
    }

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
                        <div className="cart-header">YOUR CART</div>
                        <table className="cart-table">
                            <tbody >
                                <tr className="table-tr">
                                    <th className="head-table">Product Name</th>
                                    <th className="head-table">Amout</th>
                                    <th className="head-table">Price</th>
                                </tr> 
                                <tr className="table-tr">
                                    <td ><img className="material" src={material} alt="material_pic"/>003 Red Silk</td>
                                    <td className="amout-price" >1</td>
                                    <td className="amout-price">500</td>
                                </tr>
                                <tr className="table-tr">
                                    <td><img className="dress" src={dress} alt="dress_pic"/>022 Red Silk Dress</td>
                                    <td className="amout-price">1</td>
                                    <td className="amout-price">1800</td>
                                </tr>                    
                            </tbody>
                        </table>
                        <div className="total-price"><br/><br/>
                            <span className="price-label">TOTAL PRICE : 2,300 Baht.-</span>
                            <br/>
                            <div className="btn-field">
                                <input className="clearcart_btn" type="submit" value="Clear Cart" /> 
                                <a href="/payment"><input className="clearcart_btn" type="submit" value="Shipping and Payment" /></a> 
                            </div>
                        </div>
                    </div>             
                </div>            
            </div>    
        );
    }
}

export default Cart