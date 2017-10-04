import React , {Component} from 'react'
import '../CSS/Highlight.css';

class Highlight extends Component {

    render(){
        return (
            <div className="row container-fluid">
                <div className="col-lg-6"> 
                    <img className="hl-center" src={ require('../img/Logo/Promo.png') } alt="logo"/>
                    <a className="hl-btn" href="/home" role="button">Home</a>
                </div>
                <div className="col-lg-6">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExample" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIn" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img className="d-block img-fluid hl-img" src={ require('../img/Promotion/pro-1.png') } alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid hl-img" src={ require('../img/Promotion/pro-2.png') } alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid hl-img" src={ require('../img/Promotion/pro-3.png') } alt="Third slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Highlight