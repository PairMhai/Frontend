import React , {Component} from 'react'
import '../CSS/Card.css';

class ProdCard extends Component {

    render(){
        return (
            <div className="row justify-content-start">
                <div className="col-xd-6 col-lg-3 prod-card">
                   <img src={ require('../img/logomain.png') } width="100%" alt="product pic" />
                   <h4>Green silk dress</h4>
                   <p>1500 Baht-</p>
                </div>
                <div className="col-xd-6 col-lg-3 prod-card">
                   <img src={ require('../img/logomain.png') } width="100%" alt="product pic" />
                   <h4>Green silk dress</h4>
                   <p>1500 Baht-</p>
                </div>
                <div className="col-xd-6 col-lg-3 prod-card">
                   <img src={ require('../img/logomain.png') } width="100%" alt="product pic" />
                   <h4>Green silk dress</h4>
                   <p>1500 Baht-</p>
                </div>
                <div className="col-xd-6 col-lg-3 prod-card">
                   <img src={ require('../img/logomain.png') } width="100%" alt="product pic" />
                   <h4>Green silk dress</h4>
                   <p>1500 Baht-</p>
                </div>
                <div className="col-xd-6 col-lg-3 prod-card">
                   <img src={ require('../img/logomain.png') } width="100%" alt="product pic" />
                   <h4>Green silk dress</h4>
                   <p>1500 Baht-</p>
                </div>
                <div className="col-xd-6 col-lg-3 prod-card">
                   <img src={ require('../img/logomain.png') } width="100%" alt="product pic" />
                   <h4>Green silk dress</h4>
                   <p>1500 Baht-</p>
                </div>
            </div>
        );
    }
}

export default ProdCard