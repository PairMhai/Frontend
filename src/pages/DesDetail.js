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
        this.state = {amount: 0, isActive: false, id: '', name: '', description: '',  color: '', material:'', 
        price: '',  imageName: '',prod:[], detail: [], size: '' ,
        neck: 0, sleeve: 0, bust: 0, back: 0, waist: 0, waistband: 0, rise: 0, outseam: 0, hips: 0, inseam: 0,
         thigh: 0, ankle: 0, knee: 0, calf: 0, isFillSize: false}

        this.increaseProd = this.increaseProd.bind(this);
        this.decreaseProd = this.decreaseProd.bind(this);
        this.addProdToCart = this.addProdToCart.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
        this.isLogin = this.isLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if(value !== '' && value !== 0)
            this.setState({isFillSize: true})

        this.setState({
          [name]: value
        });
    }

    handleSubmit(){
        if(this.state.isFillSize){
            this.setState({size: 'neck: '+this.state.neck+' sleeve: '+ this.state.sleeve+' bust: '+ this.state.bust+
            ' back: '+ this.state.back+' waist: '+ this.state.waist+' waistband: '+this.state.waistband+' rise: '+this.state.rise+
            ' outseam: '+this.state.outseam+' hips: '+this.state.hips+' inseam: '+this.state.inseam+ ' thigh: '+this.state.thigh+
            ' ankle: '+this.state.ankle+' knee: '+this.state.knee+' calf: '+this.state.calf})
        } else {
            swal({title:"Please complete your size!"})
        }
        this.setState({isActive: false})
    }_

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
        if(!this.state.isFillSize){
            swal({title:"Please fill your size!"})
            return
        }
        if(this.state.amount > 0){
            const newProd = this.state.prod;
            newProd.push({ prod_id: this.state.id,type: 'des', name: this.state.name, amount: this.state.amount, price: this.state.price, imageName: this.state.imageName, remark: ''}); 
            this.setState({prod: newProd});
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

        const cookies = new Cookies();
        if(cookies.get('prod')!== 'null' && cookies.get('prod') !== undefined){
            var oldProd = cookies.get('prod');
            this.setState({prod: oldProd,})
        } else {
            var key = cookies.set('prod',this.state.prod, {path: '/'});
        }
        console.log(this.state.prod);
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
        const imgModal = this.state.detail.map((det, index) => {
            return  <img className="img-in-modal" key="modal-img" src={ require('../img/des/'+det.images[0].file_name)} alt="des-pic"/>
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
                                <input className="des-amount" type="number" value={this.state.amount} disabled/>
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
                                            {imgModal}
                                        </div>
                                        <div className="size-info">
                                            <img className="img-in-modal" src={ require('../img/des/size.png') } alt="size-pic"/>
                                        </div>
                                        <div className="size-info">
                                            <h4>Fill in your size (inch)</h4><br/>
                                                Neck &nbsp;&nbsp;<input className="fill-size" type="number" name="neck" value={this.state.neck} onChange={this.handleChange} required/>&nbsp;&nbsp;&nbsp;&nbsp;
                                                Sleeve Length &nbsp;&nbsp;<input className="fill-size" type="number" name="sleeve" value={this.state.sleeve} onChange={this.handleChange} required/><br/><br/>  
                                                Bust &nbsp;&nbsp;<input className="fill-size" type="number" name="bust" value={this.state.bust} onChange={this.handleChange} required/>&nbsp;&nbsp;&nbsp;&nbsp;
                                                Back Length &nbsp;&nbsp;<input className="fill-size" type="number" name="back" value={this.state.back} onChange={this.handleChange} required/><br/><br/>  
                                                Waist &nbsp;&nbsp;<input className="fill-size" type="number" name="waist" value={this.state.waist} onChange={this.handleChange} required/>&nbsp;&nbsp;&nbsp;&nbsp;
                                                Waistband &nbsp;&nbsp;<input className="fill-size" type="number" name="waistband" value={this.state.waistband} onChange={this.handleChange} required/><br/><br/>  
                                                Rise &nbsp;&nbsp;<input className="fill-size" type="number" name="rise" value={this.state.rise} onChange={this.handleChange} required/>&nbsp;&nbsp;&nbsp;&nbsp;
                                                Outseam &nbsp;&nbsp;<input className="fill-size" type="number" name="outseam" value={this.state.outseam} onChange={this.handleChange} required/><br/><br/>  
                                                Hips &nbsp;&nbsp;<input className="fill-size" type="number" name="hips" value={this.state.hips} onChange={this.handleChange} required/>&nbsp;&nbsp;&nbsp;&nbsp;
                                                Inseam Length &nbsp;&nbsp;<input className="fill-size" type="number" name="inseam" value={this.state.inseam} onChange={this.handleChange} required/><br/><br/>                                
                                                Thigh &nbsp;&nbsp;<input className="fill-size" type="number" name="thigh" value={this.state.thigh} onChange={this.handleChange} required/>&nbsp;&nbsp;&nbsp;&nbsp;
                                                Ankle &nbsp;&nbsp;<input className="fill-size" type="number" name="ankle" value={this.state.ankle} onChange={this.handleChange} required/><br/><br/>  
                                                Knee &nbsp;&nbsp;<input className="fill-size" type="number" name="knee" value={this.state.knee} onChange={this.handleChange} required/>&nbsp;&nbsp;&nbsp;&nbsp;
                                                Calf &nbsp;&nbsp;<input className="fill-size" type="number" name="calf" value={this.state.calf} onChange={this.handleChange} required/><br/><br/>  
                                                <button className="des-submit-fill" onClick={this.handleSubmit}> SUBMIT </button>
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