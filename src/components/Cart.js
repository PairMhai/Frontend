import React , {Component} from 'react'
import '../CSS/Usercart.css';
import dress from '../img/Design/darkorange-dress.jpg'
import material from '../img/Material/red.jpg'
import Navbar from '../components/Navbar'
import LeftTab from '../components/LeftTab'

class Cart extends Component {
   
    render(){
        return (

            <div>
                <Navbar /> 
                <div className="row">
                    <div className="col-md-3 push-md-9">
                        <LeftTab />
                    </div>
                    <div className="col-md-9 push-md-3 cus-con">
                <div className="cart-header">
                    YOUR CART
                </div>
              <div>
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
                    
                
                </div>
                
                </div>
                <br/>
                <div className="total-price">
                    <label className="price-label">
                    TOTAL PRICE :
                    </label>
                    <label className="price-label">
                    2,300 
                    </label>
                    <label className="price-label">
                    BAHT 
                    </label>
                    <br/>
                <div className="btn-field">
                <input className="clearcart_btn" type="submit" value="Clear Cart" ></input> 
                <input className="clearcart_btn" type="submit" value="Shipping and Payment" ></input> 
                </div>
                </div>
                
</div>            
                
                </div>
                

                
        );
    }
}

export default Cart