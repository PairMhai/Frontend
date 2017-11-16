import React, { Component } from 'react'
import axios from 'axios';
import { Cookies } from 'react-cookie';
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import '../CSS/History.css'

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prodhis: [], id: '', productid: '',
            design: '', material: '', quantity: ''
        }


    }

    clickOrder(e) {

    }

    searhOrder(e) {

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
        const allhis = this.state.prodhis.map((prodhisval, index) => {
            console.error(prodhisval);
            return <div className="row" key={prodhisval.id} onClick={this.clickOrder}>
                <div className="first-col-his">{prodhisval.id}</div>
                <div className="second-col-his" >Total price : {prodhisval.final_price} Baht.<br /> Date : {prodhisval.created_at.substring(0, 10)} </div>
                <div className="second-col-his">
                    {
                        prodhisval.products.map((product, ind) => {
                            if (product.product.material) {
                                return <div key={ind}> <label>{product.product.material.name} </label>        <label className="quantity">quantity : {product.quantity} </label></div>
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