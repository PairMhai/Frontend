import React , {Component} from 'react'
import '../CSS/Card.css';

class ProdCard extends Component {

    render(){
        return (
            <div className="prod-layout">
            <div className="row justify-content-start">
                <div className="col-xd-6 col-lg-2 prod-card">
                   <img src={ require('../img/logomain.png') } width="100%" alt="product pic" />
                   <p>Green silk dress</p>
                   <p>1500 Baht-</p>
                </div>

                <div className="col-xd-6 col-lg-2 prod-card">
                   <img src={ require('../img/logomain.png') } width="100%" alt="product pic" />
                   <p>Green silk dress</p>
                   <p>1500 Baht-</p>
                </div>

                <div className="col-xd-6 col-lg-2 prod-card">
                   <img src={ require('../img/logomain.png') } width="100%" alt="product pic" />
                   <p>Green silk dress</p>
                   <p>1500 Baht-</p>
                </div>

                <div className="col-xd-6 col-lg-2 prod-card">
                   <img src={ require('../img/logomain.png') } width="100%" alt="product pic" />
                   <p>Green silk dress</p>
                   <p>1500 Baht-</p>
                </div>

                <div className="col-xd-6 col-lg-2 prod-card">
                   <img src={ require('../img/logomain.png') } width="100%" alt="product pic" />
                   <p>Green silk dress</p>
                   <p>1500 Baht-</p>
                </div>

                <div className="col-xd-6 col-lg-2 prod-card">
                   <img src={ require('../img/logomain.png') } width="100%" alt="product pic" />
                   <p>Green silk dress</p>
                   <p>1500 Baht-</p>
                </div>
            </div>
            </div>
        );
    }
}

export default ProdCard