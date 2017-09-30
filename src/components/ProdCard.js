import React , {Component} from 'react'
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
    render(){
        return (
            <div className="row justify-content-start">
                <div className="col-xd-6 col-lg-3 prod-card" data-id="2" data-type="mat"  onClick={this.clickDetail}>
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