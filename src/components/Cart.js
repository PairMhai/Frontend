import React , {Component} from 'react'
import { Cookies } from 'react-cookie'
import axios from 'axios'
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import '../CSS/Cart.css';
import ems from '../img/icon/ems-logo.png'
import kerry from '../img/icon/kerry-exprss-logo.png'
import lineman from '../img/icon/lineman.png'


class Cart extends Component {

    constructor(props){
        super(props);
        this.state = { isActive: false, prod: [], orderKey: 0, price: 0, discount: 0, total_price: 0, shipping: "EMS"}
        this.clearCart = this.clearCart.bind(this);
        this.decreaseProd = this.decreaseProd.bind(this);
        this.increaseProd = this.increaseProd.bind(this);
        this.getPrice = this.getPrice.bind(this);
        this.shipChange = this.shipChange.bind(this);
    }

    componentWillMount() {
        const cookies = new Cookies();
        var key = cookies.get('key');
        var allProd = cookies.get('prod');
        this.setState({prod: allProd})
        if(key === 'null' || key === undefined){
            window.location = "/home";
        }
    }
    
    componentDidMount(){
        this.getPrice()
    }

    shipChange(e){
        const target = e.target;
        const value = target.value;
        this.setState({ shipping: value });
    }

    increaseProd(e){
        var idx = e.target.id;
        var arr = this.state.prod;
        arr[idx].amount += 1;
        this.setState({prod: arr})
        this.getPrice();
        e.preventDefault(); 
    }

    decreaseProd(e){
        var idx = e.target.id;
        var arr = this.state.prod;
        arr[idx].amount -= 1;
        if(arr[idx].amount === 0){
            arr.splice(idx, 1)
        }
        this.setState({prod: arr})
        this.getPrice();
        e.preventDefault(); 
    }

    toggleModal = () => {
        this.setState({ isActive: !this.state.isActive })
    }

    clearCart(){
        this.setState({prod: [],})
        const cookies = new Cookies();
        cookies.set('prod',this.state.prod,{path: '/'})
        console.log(this.state.prod);
    }

    getPrice(){
        const cookies = new Cookies();
        var key = cookies.get('key');
        var products = [];
        console.log(this.state.prod)
        console.log(this.state.prod.length)
        for(var i=0; i<this.state.prod.length; i++){
            products.push({ pid: this.state.prod[i].prod_id, quantity:this.state.prod[i].amount}); 
        }
        console.log(key)
        
        
        axios.post('https://pairmhai-api.herokuapp.com/cart/calculate', {
            "customer": key,
            "products": products,
        })
        .then((response) => {
            console.log(response)
            this.setState({orderKey: response.data.calculate_id, price: response.data.full_price, 
                discount: response.data.customer_discount + response.data.event_discount, total_price: response.data.total_price
            })
        })
        .catch(function (error) {
            console.log(error.response);
        });  
    }

    render(){
        const listProd = this.state.prod.map((det, index) => {
            return <div className="row" key={det.id +""+ index}>
                <div className="first-col"><img className="material" src={ require('../img/'+det.type+'/'+det.imageName)} alt="prod_pic"/>{det.id} {det.name}</div>
                <div className="second-col">
                    <button className="cart-btn-add" id={index} onClick={this.decreaseProd}>-</button>
                    {det.amount}
                    <button className="cart-btn-add" id={index} onClick={this.increaseProd}>+</button></div>
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
                                <input className="pay-radio" type="radio" name="shipping" defaultChecked={this.state.shipping} onChange={this.shipChange} value="EMS"/><img id="pay_icon" src={ems} alt="EMS"/>&nbsp;&nbsp;&nbsp; 
                                <input className="pay-radio" type="radio" name="shipping" onChange={this.shipChange} value="KERRY"/><img id="pay_icon" src={kerry} alt="KERRY"/>&nbsp;&nbsp;&nbsp;
                                <input className="pay-radio" type="radio" name="shipping" onChange={this.shipChange} value="LINEMAN"/><img id="pay_icon" src={lineman} alt="LINEMAN"/><br/>
                            </div>
                        </div>
                        <div className="total-price">
                            <span className="price-label">PRICE: {this.state.price} Baht.-</span><br/>
                            <span className="price-label">DISCOUNT: {this.state.discount} Baht.-</span><br/>
                            <span className="price-label">TOTAL PRICE: {this.state.total_price} Baht.-</span><br/>
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