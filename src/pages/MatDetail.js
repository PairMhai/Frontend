import React , {Component} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import ProfileNav from '../components/ProfileNav'
import LoginNav from '../components/LoginNav'
import {Cookies} from 'react-cookie'
import swal from 'sweetalert'
import '../CSS/Mat.css'
import Footer from '../components/Footer'

class MatDetail extends Component {

    constructor(props){
        super(props);
        this.state = {amount: 0,id: '', name: '', description: '',  color: '', price: '', imageName: '',
        prod: [], detail: [], max: '', remain: ''}

        this.increaseProd = this.increaseProd.bind(this);
        this.decreaseProd = this.decreaseProd.bind(this);
        this.addProdToCart = this.addProdToCart.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
        this.isLogin = this.isLogin.bind(this);
    }

    componentWillMount() {
        axios.get('https://pairmhai-api.herokuapp.com/catalog/material/'+ this.props.match.params.id) 
        .then((response)=> {
            this.setState({ id: response.data.product_id,
                name: response.data.name, description: response.data.description,
                price: response.data.price, color: response.data.color, imageName: response.data.image_name, 
                max: response.data.quantity, remain: response.data.quantity
            })

            const newDetail = this.state.detail;
            newDetail.push(response.data); 
            this.setState({detail: newDetail})
            console.log(response.data)
        })
        .catch(function (error){
            console.log(error);
        })
         
        const cookies = new Cookies();
        
        if(cookies.get('prod')!== 'null' && cookies.get('prod') !== undefined){
            var oldProd = cookies.get('prod');
            this.setState({prod: oldProd,})
        } else {
            var key = cookies.set('prod',this.state.prod,{path: '/'});
        }
        console.log(this.state.prod);
    }

    increaseProd() {
        if (!this.isLogin()) {
            swal({title:"Please Login"})
            return
        } 
        if(this.state.amount < this.state.remain)
            this.setState({ amount: this.state.amount + 1, remain: this.state.remain - this.state.amount})
        else
            swal("Sorry","The product is not enough.", "error")
    } 

    decreaseProd() {
        if (!this.isLogin()) {
            swal({title:"Please Login"})
            return
        }
        if(this.state.amount > 0)
            this.setState({ amount: this.state.amount - 1, remain: this.state.remain + 1});
    }

    isLogin(){
        const cookies = new Cookies();
        var key = cookies.get('key');
        if (key === 'null' || key === undefined) 
            return false;
        return true;
    }

    addProdToCart() {
        if (!this.isLogin()) {
            swal({title:"Please Login"})
            return
        }
        if(this.state.amount > 0){
            var idx = -1
            for(var i = 0 ; i < this.state.prod.length; i++){
                if(this.state.prod[i].prod_id === this.state.id){
                   idx = i
                   break
                }    
            }
            if(idx !== -1){
                var arr = this.state.prod;
                arr[idx].amount += this.state.amount;
                this.setState({prod: arr})
            } else {
                const newProd = this.state.prod;
                newProd.push({ prod_id: this.state.id,type: 'mat', name: this.state.name, amount: this.state.amount,
                price: this.state.price, imageName: this.state.imageName, remark: '', max: this.state.max}); 
                this.setState({prod: newProd});
            }
            this.setState({ amount: 0});
            const cookies = new Cookies();
            cookies.set('prod',this.state.prod,{path: '/'})
            console.log(this.state.prod);
            swal({title:"Your product is already added"})
        } else {
            swal({title:"You should add product before add to cart"})
        }
    }
    
    checkLogin(){
        const cookies = new Cookies();
        var key = cookies.get('key');
        if(key!== 'null' && key !== undefined)
            return <ProfileNav />;
        return <LoginNav />;
    }

    render(){
        const image = this.state.detail.map((det, index) => {
             return  <img className="mat-img-prod" key="mat-prod" src={require('../img/mat/'+det.image_name)} alt="mat-pic"/>
        });
          return (
            <div>
                <Navbar />                 
                {this.checkLogin()}
                <div className="content container-fluid">
                    <p className="mat-head">Material</p>
                    <div className="row">
                        <div id="img-mat" className="col-lg-6">
                            {image}   
                        </div>
                        <div className="mat-right col-lg-6">
                            <p>NAME:&ensp;&ensp;{this.state.name}</p>
                            <p>DESCRIPTION:&ensp;{this.state.description}</p> 
                            <p>COLOR:&ensp;{this.state.color}</p>
                            <p>PRICE:&ensp;{this.state.price} Baht.- / Yard of Fabric</p>
                            <p>REMAINING:&ensp;{this.state.max - this.state.amount} Yard of Fabric</p>
                            <div className="row mat-group-btn ">
                                <button className="mat-btn-add" onClick={this.decreaseProd}>-</button>
                                <input className="mat-amount" type="number" value={this.state.amount} disabled/>
                                <button className="mat-btn-add" onClick={this.increaseProd}>+</button>&ensp;Yard of Fabric
                            </div>
                            <button className="mat-btn-submit" onClick={this.addProdToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div >
                <Footer />
                </div>
            </div>
        );
    }
}

export default MatDetail