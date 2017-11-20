import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css';

class Navbar extends Component {
    render(){
        return (
            <div className="nav-container container-fluid">
                <Link to="/home"><img className="nb-logo" src={ require('../img/icon/logomain.png') } alt="Logo-Error"/></Link>
                <Link to="/material"  className="nb-btn" role="button">Material</Link>
                <Link to="/design" className="nb-btn" role="button">Design</Link>
                <Link to="/promotion" className="nb-btn" role="button">Promotion</Link>
                <Link to="/info" className="nb-btn" role="button">Thai Silk's History</Link>
                <Link to="/contactus" className="nb-btn" role="button">Contact Us</Link>          
            </div>
        );
    }
}

export default Navbar