import React , {Component} from 'react'
import axios from 'axios';
import '../CSS/Card.css'

class ProdCard extends Component {

    constructor(props){
        super(props);
        this.state = { };

        this.clickDetail = this.clickDetail.bind(this);
    }

    clickDetail(e){
        const id = e.currentTarget.dataset.id;
        const type = e.currentTarget.dataset.type;
        window.location = '/'+type+'/'+id;
    }

    componentWillMount(){
        var typeProd = '';
        if(this.props.type === 'mat'){
            typeProd = 'materials';
        } else {
            typeProd = 'designs' 
        }

        axios.get('http://127.0.0.1:8000/catalog/'+typeProd)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }

    render(){
        return (
            <div className="row justify-content-start">
                <div className="col-xd-6 col-lg-3 prod-card" data-id="2" data-type="mat" onClick={this.clickDetail}>
                    <img src={ require('../img/Logo/logomain.png') } width="100%" alt="product pic" />
                    <h4>Green silk dress</h4>
                    <p>1500 Baht-</p>
                </div>
                <div className="col-xd-6 col-lg-3 prod-card" data-id="2" data-type="des" onClick={this.clickDetail}>
                    <img src={ require('../img/Logo/logomain.png') } width="100%" alt="product pic" />
                    <h4>Green silk dress</h4>
                    <p>1500 Baht-</p>
                </div>
                <div className="col-xd-6 col-lg-3 prod-card">
                   <img src={ require('../img/Logo/logomain.png') } width="100%" alt="product pic" />
                   <h4>Green silk dress</h4>
                   <p>1500 Baht-</p>
                </div>
                <div className="col-xd-6 col-lg-3 prod-card">
                   <img src={ require('../img/Logo/logomain.png') } width="100%" alt="product pic" />
                   <h4>Green silk dress</h4>
                   <p>1500 Baht-</p>
                </div>
                <div className="col-xd-6 col-lg-3 prod-card">
                   <img src={ require('../img/Logo/logomain.png') } width="100%" alt="product pic" />
                   <h4>Green silk dress</h4>
                   <p>1500 Baht-</p>
                </div>
                <div className="col-xd-6 col-lg-3 prod-card">
                   <img src={ require('../img/Logo/logomain.png') } width="100%" alt="product pic" />
                   <h4>Green silk dress</h4>
                   <p>1500 Baht-</p>
                </div>
            </div>
        );
    }
}

export default ProdCard