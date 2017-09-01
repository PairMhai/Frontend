import React , {Component} from 'react'
import logo from '../img/logomain.png'
import '../CSS/Highlight.css';

class Highlight extends Component {

    render(){
        return (
            <div>
                <div className="col-lg-6"> 
                    <img src= {logo} width="100%" height="100%"/>
                    <a className="btn btn-primary" href="/home" role="button">Home</a>
                </div>
               
                <div className="col-lg-6">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img className="d-block img-fluid" src={logo} alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src={logo} alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src={logo} alt="Third slide"/>
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