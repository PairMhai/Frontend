import React , {Component} from 'react'
import axios from 'axios';
import { Cookies } from 'react-cookie';
import Navbar from '../components/Navbar'
import LeftTabProfile from '../components/LeftTabProfile'
import '../CSS/History.css'

class History extends Component {

    constructor(props){
        super(props);
        this.state = { prodhis: [] ,id:'',productid:'',
        design:'', material:'',quantity:''}

        
    }

    clickOrder(e){
        
    }

    searhOrder(e){

    }
    

    componentWillMount(){
        

        const cookies = new Cookies();
        var key = cookies.get('key')
        axios.get('https://pairmhai-api.herokuapp.com/cart/history/'+key)
        .then((response)=> {
            this.setState({ prodhis: response.data 
            });
            console.log(this.state.prodhis)
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    

    render(){
        const allhis = this.state.prodhis.map((prodhisval, index) => {
            return <div className="row" key={prodhisval.id} onClick={this.clickOrder}>
            <div className="first-col-his">{prodhisval.id}</div>
            <div className="second-col-his" >{prodhisval.products.map((detail,ind)=> {return <div>{detail.product.id}</div>})}<br/>{prodhisval.design}<br/>{prodhisval.material}</div>
            <div className="second-col-his">{prodhisval.quantity}</div>
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
                        <input className="searchbar-2" type="search" name="search" placeholder="Enter here"/>
                        
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