import React , {Component} from 'react'
import '../CSS/Navbar.css';

class Navbar extends Component {
    render(){
        return (
            <div className="nb-bottom container-fluid">
                <img className="nb-logo" src={ require('../img/logomain.png') } alt="Logo-Error"/>
                <a className="nb-btn" href="/material" role="button">Material</a>
                <a className="nb-btn" href="/design" role="button">Description</a>
                <a className="nb-btn" href="/info" role="button">Thai Silk's History</a>
                <a className="nb-btn" href="/contact" role="button">Contact Us</a>            
            </div>
        );
    }
}

export default Navbar