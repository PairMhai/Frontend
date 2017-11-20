import React, { Component } from 'react'
import axios from 'axios';
import { Cookies } from 'react-cookie';
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import '../CSS/History.css'
import Modal from 'react-modal'

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prodhis: [], id: '', productid: '',
            design: '', material: '', quantity: '' 
           
        }
        this.clickDetail = this.clickDetail.bind(this);
        const orderid = null ;
    }

   
    

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        })

        console.log(4);
       
    }

    clickDetail(e){
        this.orderid = e.currentTarget.dataset.key;
        console.log(""+ this.orderid);
        this.toggleModal();
       
    }
   

    componentWillMount() {


        const cookies = new Cookies();
        var key = cookies.get('key')
        axios.get('https://pairmhai-api.herokuapp.com/cart/history/' + key)
            .then((response) => {
                this.setState({
                    prodhis: response.data
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    

    render() {

        const allhis = this.state.prodhis.map((prodhisval,index) => {
           
            
            return <div className="row-1" key={prodhisval.id} data-key={prodhisval.id} onClick={this.clickDetail}>
                {
                     this.state.prodhis.map((prodhisval,index) => {
                        console.log(prodhisval.id);
                    if(prodhisval.id == this.orderid){
                        
                        
                    return <Modal key={prodhisval.id} contentLabel="modal" isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                            <div>
                            <div>
                                <p className="Detail-header">Order Detail</p>
                            </div>
                            
                            <br/>
                            <div className="search-con">
                            <input className="searchbar-3" type="search" name="search" placeholder="Enter here" />
                            <button type="submit" className="search_btn-2" >Search </button>
                            </div>
                            <br/>
                            <div className="det-con"><label className="Detail">Order ID : {prodhisval.id}</label><label className="Detail">Date : {prodhisval.created_at.substring(0, 10)} </label><label className="Detail">Total Price : {prodhisval.final_price}  </label>
                             </div>
                             <div className="his-info-det">
                             {
                                 
                                prodhisval.products.map((product, ind) => {
                                    
                             if (product.product.material == true) {
                                
                                 return<div className="row-1" key={ind}>
                                 <div className="second-col-his-det"> <img className="imgproduct" src={require('../img/mat/'+ product.product.material.image_name)} width="10%" alt="product pic" /><label className="product-name">{product.product.material.name}</label></div>
                                 
                                 <div className="second-col-his-det"><label className="product-name">{product.product.material.price} Baht.-</label><label className="product-name">quantity : {product.quantity}</label></div>
                                 </div>
                             } else {
                                
                                return<div className="row-1" key={ind}>
                                <div className="second-col-his-det"><img className="imgproduct" src={require('../img/des/'+ product.product.design.images[0].file_name)} width="10%" alt="product pic" /><label className="product-name">{product.product.design.name}</label></div>
                                
                                <div className="second-col-his-det"><label className="product-name">PRICE : {product.product.design.price} Baht.-</label><label className="product-name">quantity : {product.quantity}</label></div>
                                </div>
                             }
                             
                         })
                     }
                             </div>
                     <button className="signup_btn modal-btn" onClick={this.toggleModal}>CANCEL</button>
                     </div>
                     </Modal>
            
                    }
                      })

                }
               
              
                    
           
                <div className="first-col-his">{prodhisval.id}</div>
                <div className="second-col-his" >Total price : {prodhisval.final_price} Baht.<br /> Date : {prodhisval.created_at.substring(0, 10)} </div>
                <div className="second-col-his">
                    
                    {
                        prodhisval.products.map((product, ind) => {
                            if (product.product.material) {
                                
                                return <div key={ind}> <label>{product.product.material.name} </label>        
                                <label className="quantity">quantity : {product.quantity} </label>
                                </div>
                                
                            } else {
                                return <div key={ind}> <label>{product.product.design.name} </label>        <label> quantity : {product.quantity} </label> </div>
                            }
                        })
                    }
                </div>

                
            </div>
                    
            
        });


        return (
            <div>
                <Navbar />
                <div className="row">
                    <div className="col-md-3 push-md-9">
                        <LeftTabProfile />
                    </div>
                    <div className="col-md-9 push-md-3 cus-con">
                        <p className="his-header">HISTORY</p>
                        <input className="searchbar-2" type="search" name="search" placeholder="Enter here" />

                        <button type="submit" className="search_btn" >
                            Search
                        </button>
                        <div className="his-info">
                            {allhis}
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default History