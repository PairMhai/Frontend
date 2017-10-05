import React , {Component} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import ProfileNav from '../components/ProfileNav'
import LoginNav from '../components/LoginNav'
import {Cookies} from 'react-cookie'
import Modal from 'react-modal'
import swal from 'sweetalert'
import '../CSS/Des.css'

class DesDetail extends Component {

    constructor(props){
        super(props);
        this.state = {amount: 0, isActive: false, id: '', name: '', description: '',  color: '', material:'', price: '',  imageName: '',prod:[], detail: [] }

        this.increaseProd = this.increaseProd.bind(this);
        this.decreaseProd = this.decreaseProd.bind(this);
        this.addProdToCart = this.addProdToCart.bind(this);
        this.checkLogin = this.checkLogin.bind(this);

        this.state = {
            isActive: false
        }
        this.isLogin = this.isLogin.bind(this);
    }

    increaseProd() {
        if (!this.isLogin()) {
            swal({title:"Please Login"})
            return
        }
        this.setState({ amount: this.state.amount + 1 });
    } 

    decreaseProd() {
        if (!this.isLogin()) {
            swal({title:"Please Login"})
            return
        }
        if(this.state.amount > 0)
            this.setState({ amount: this.state.amount - 1 });
    }

    addProdToCart() {
        if (!this.isLogin()) {
            swal({title:"Please Login"})
            return
        }
        if(this.state.amount > 0){
            const newProd = this.state.prod;
            newProd.push({ prod_id: this.state.id, name: this.state.name, amount: this.state.amount, price: this.state.price, imageName: this.state.imageName}); 
            this.setState({prod: newProd})
            
            const cookies = new Cookies();
            var key = cookies.set('prod',this.state.prod,);
            this.setState({ amount: 0});
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

    isLogin(){
        const cookies = new Cookies();
        var key = cookies.get('key');
        if (key === 'null' || key === undefined) 
            return false;
        return true;
    }

    componentWillMount() {
        axios.get('https://pairmhai-api.herokuapp.com/catalog/design/'+ this.props.match.params.id) 
        .then((response)=> {
            this.setState({ id: response.data.product_id,
                name: response.data.name, description: response.data.description,
                price: response.data.price, imageName: response.data.images[0].file_name,
                material: response.data.material_name, color: response.data.material_color,
            })
            const newDetail = this.state.detail;
            newDetail.push(response.data); 
            this.setState({detail: newDetail})
            console.log(response)
        })
        .catch(function (error){
            console.log(error);
        })

        Modal.setAppElement('body');
    }

    open = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render(){
        const image = this.state.detail.map((det, index) => {
            return   <img className="img-prod" key="des-img" src={ require('../img/des/'+det.images[0].file_name) } alt="des-pic"/>
        });

        return (
            <div>
                <Navbar />                 
                {this.checkLogin()}
                <div className="container-fluid">
                    <p className="des-head">Design</p>
                    <div className="row">
                        <div className="col-lg-4">
                           {image}
                        </div>
                        <div className="col-lg-4">
                            <p>NAME:&ensp;{this.state.name}</p>
                            <p>DESCRIPTION:&ensp;{this.state.description}</p> 
                            <p>MATERIAL:&ensp;{this.state.material}</p>
                            <p>COLOR:&ensp;{this.state.color}</p>
                            <p>PRICE:&ensp;{this.state.price} Baht.- </p>
                            <div className="row des-group-btn ">
                                <button className="des-btn-add" onClick={this.decreaseProd}>-</button>
                                <input className="des-amount" type="number" value={this.state.amount} required/>
                                <button className="des-btn-add" onClick={this.increaseProd}>+</button>
                            </div>
                            <h8>You must fill in your size before add product to care</h8>
                            <button className="des-btn-submit" onClick={this.addProdToCart}>ADD TO CART</button>
                        </div>
                        <div className="col-lg-4">
                            <p className="txt-size">Size</p>
                            <div className="des-right">
                                <img className="des-img-size" src={ require('../img/des/size.png') } alt="size-pic"/>
                                <p/><button className="des-btn-size" onClick={this.open}>Fill Your Size</button>
                                <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal} contentLabel="Modal">
                                    <button className="des-exit-fill" onClick={this.open}>X</button>
                                    <p className="des-fill-label">FILL YOUR SIZE</p>
                                    <div className="des-my-modal">
                                        <div className="size-info">
                                            <img className="img-in-modal" src={ require('../img/des/ash-dress.jpg') } alt="des-pic"/>
                                        </div>
                                        <div className="size-info">
                                            <img className="img-in-modal" src={ require('../img/des/size.png') } alt="size-pic"/>
                                        </div>
                                        <div className="size-info">
                                            Neck &nbsp;&nbsp;<input className="fill-size"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                            Sleeve Length &nbsp;&nbsp;<input className="fill-size"/><br/><br/>  
                                            Bust &nbsp;&nbsp;<input className="fill-size"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                            Back Length &nbsp;&nbsp;<input className="fill-size"/><br/><br/>  
                                            Waist &nbsp;&nbsp;<input className="fill-size"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                            Waistband &nbsp;&nbsp;<input className="fill-size"/><br/><br/>  
                                            Rise &nbsp;&nbsp;<input className="fill-size"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                            Outseam &nbsp;&nbsp;<input className="fill-size"/><br/><br/>  
                                            Hips &nbsp;&nbsp;<input className="fill-size"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                            Inseam Length &nbsp;&nbsp;<input className="fill-size"/><br/><br/>                                
                                            Thigh &nbsp;&nbsp;<input className="fill-size"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                            Ankle &nbsp;&nbsp;<input className="fill-size"/><br/><br/>  
                                            Knee &nbsp;&nbsp;<input className="fill-size"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                            Calf &nbsp;&nbsp;<input className="fill-size"/><br/><br/>  
                                            <button className="des-submit-fill">SUBMIT</button>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DesDetail