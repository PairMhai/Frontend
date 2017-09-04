import React , {Component} from 'react'

class Navbar extends Component {
    render(){
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <img src={ require('../img/logomain.png') } alt="Logo-Error" height="80px"/>
                    <a className="btn btn-primary btn-lg sharp" href="/material" role="button">Material</a>
                    <a className="btn btn-primary btn-lg sharp" href="/design" role="button">Des</a>
                    <a className="btn btn-primary btn-lg sharp" href="/info" role="button">Thai Silk's History</a>
                    <a className="btn btn-primary btn-lg sharp" href="/contact" role="button">Contact Us</a>            
                </div>
            </nav>        
        );
    }
}

export default Navbar