import React , {Component} from 'react'
import { Cookies } from 'react-cookie'
import axios from 'axios'
import swal from 'sweetalert'
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import '../CSS/Cart.css';
import ems from '../img/icon/ems-logo.png'
import kerry from '../img/icon/kerry-exprss-logo.png'
import lineman from '../img/icon/lineman.png'


class Cart extends Component {

    constructor(props){
        super(props);
        this.state = { isActive: false, prod: [], }
        this.clearCart = this.clearCart.bind(this);
        this.decreaseProd = this.decreaseProd.bind(this);
        this.increaseProd = this.increaseProd.bind(this);
        this.getPrice = this.getPrice.bind(this);
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
            delete arr[idx];
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
        cookies.set('prod',this.state.prod,{path: '/'})
        console.log(this.state.prod);

        axios.post('http://pairmhai-api.herokuapp.com/cart', {
            "user": {
                "username": this.state.username,
                "first_name": this.state.firstname,
                "last_name": this.state.lastname,
                "email": this.state.email,
                "telephone": this.state.tel,
                "address": this.state.address,
                "date_of_birth": this.state.birthday,
                "gender": this.state.gender
            },
            "password1": this.state.password,
            "password2": this.state.cfpassword,
            "classes": this.state.classes
        })
        .then(function (response) {
            swal ( "Are you sure for buying?",  "error" )
           
        })
        .catch(function (error) {
            console.log(error);
            swal ( "Oops" ,  "Please enter valid data" ,  "error" )
        });  
        event.preventDefault();

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
                                <input className="pay-radio" type="radio" name="shipping" value="EMS"/><img id="pay_icon" src={ems} alt="EMS"/> 
                                <input className="pay-radio" type="radio" name="shipping" value="KERRY"/><img id="pay_icon" src={kerry} alt="KERRY"/>
                                <input className="pay-radio" type="radio" name="shipping" value="LINEMAN"/><img id="pay_icon" src={lineman} alt="LINEMAN"/><br/>
                            </div>
                        </div>
                        <div className="total-price">
                            <span className="price-label">PRICE: 2,600 Baht.-</span><br/>
                            <span className="price-label">DISCOUNT: 300 Baht.-</span><br/>
                            <span className="price-label">TOTAL PRICE: 2,300 Baht.-</span><br/>
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