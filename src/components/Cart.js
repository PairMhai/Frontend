import React , {Component} from 'react'
import { Cookies } from 'react-cookie';
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import Modal from 'react-modal'
import '../CSS/Cart.css';
import ems from '../img/icon/ems-logo.png'
import kerry from '../img/icon/kerry-exprss-logo.png'
import lineman from '../img/icon/lineman.png'


class Cart extends Component {

    constructor(props){
        super(props);
        this.state = { isActive: false, prod: [], }
        this.clearCart = this.clearCart.bind(this);
    }

    componentWillMount() {
        const cookies = new Cookies();
        var key = cookies.get('key');
        var allProd = cookies.get('prod');
        this.setState({prod: allProd,})
        if(key === 'null' || key === undefined){
            window.location = "/home";
        }
    }

    toggleModal = () => {
        this.setState({ isActive: !this.state.isActive })
    }

    clearCart(){
        const cookies = new Cookies();
        cookies.set('prod', [], {path: '/'})
        window.location = "/home";
    }

    render(){
     
        const listProd = this.state.prod.map((det, index) => {
            return <div className="row" key={det.id +""+ index}>
                <div className="first-col"><img className="material" key={det.id} src={ require('../img/'+det.type+'/'+det.imageName)} alt="prod_pic"/>{det.id} {det.name}</div>
                <div className="second-col">
                    <button className="cart-btn-add" onClick={this.decreaseProd}>-</button>
                    {det.amount}
                    <button className="cart-btn-add" onClick={this.decreaseProd}>+</button></div>
                <div className="second-col">{det.price * det.amount} Baht.-</div>
                </div>
        });

        return (
            <div>
                <Navbar /> 
                <div className="row">
                    <div className="col-md-3 push-md-9">
                        <LeftTabProfile />
                    </div>
                    <div className="col-md-9 push-md-3 cus-con" >
                        <div className="cart-header">YOUR CART</div>
                        <div className="cart-table" >
                            <div className="row">
                                <div className="first-col head"><h3>Product Name</h3></div>
                                <div className="second-col"><h3>Amount</h3></div>
                                <div className="second-col"><h3>Price</h3></div>
                            </div>
                            {listProd}                
                        </div>
                        <div className="shipping">
                            <br/>
                            <div className="ship-header">SELECT SHIPPING: </div> 
                            <div className="shipping-border">
                                <input className="pay-radio" type="radio" name="shipping" value="EMS"/><img id="pay_icon" src={ems} alt="ems_icon"/> 
                                <input className="pay-radio" type="radio" name="shipping" value="KERRY"/><img id="pay_icon" src={kerry} alt="kerry_icon"/>
                                <input className="pay-radio" type="radio" name="shipping" value="LINEMAN"/><img id="pay_icon" src={lineman} alt="line_icon"/><br/>
                            </div>
                        </div>
                        <div className="total-price"><br/><br/>
                            <span className="price-label">PRICE : 2,600 Baht.-</span><br/>
                            <span className="price-label">DISCOUNT : 300 Baht.-</span><br/>
                            <span className="price-label">TOTAL PRICE : 2,300 Baht.-</span><br/>
                        </div>

                        <div className="btn-field">
                            <a href="/payment"><button className="clearcart_btn"> Payment </button></a>
                            <button className="clearcart_btn" onClick={this.clearCart}> Clear Cart </button> 
                        </div>
                    </div>
                </div>             
            </div>            
        );
    }
}

export default Cart