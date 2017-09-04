import React , {Component} from 'react'

class Navbar extends Component {
    render(){
        return (
            <div>
                <div>
                    <img src="../images/maxresdefault.jpg" alt="Error" width="100" height="100" />
                    <a className="btn" href="/material" role="button">Material</a>
                    <a className="btn" href="/designed" role="button">Designed</a>
                    <a className="btn" href="/info" role="button">Thai Silk's History</a>
                    <a className="btn" href="/contact" role="button">Contact Us</a>
                </div> 
            </div>
        );
    }
}

export default Navbar