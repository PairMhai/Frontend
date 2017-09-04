import React , {Component} from 'react'
import '../CSS/Card.css';

class ProdCard extends Component {

    render(){
        return (
            <div>
                <div className="col-xd-12 col-lg-3 prod-card">
                   <img src={ require('../img/logomain.png') } width="100%" alt="product pic" />
                   <p>Green silk dress</p>
                   <p>1500 Baht-</p>
                </div>
            </div>
        );
    }
}

export default ProdCard