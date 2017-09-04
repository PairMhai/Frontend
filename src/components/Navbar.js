import React , {Component} from 'react'

class Navbar extends Component {
    render(){
        return (

          
          <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
            </div>
            <ul class="nav navbar-nav">
            <img src="../src/img/logomain.png" alt="Error" width="300" height="100"  />
            <a className="btn btn-primary btn-lg sharp" href="/material" role="button">Material</a>
            <a className="btn btn-primary btn-lg sharp" href="/designed" role="button">Designed</a>
            <a className="btn btn-primary btn-lg sharp" href="/info" role="button">Thai Silk's History</a>
            <a className="btn btn-primary btn-lg sharp" href="/contact" role="button">Contact Us</a>
            </ul>
            
          </div>
        </nav>

            
        );
    }
}

export default Navbar