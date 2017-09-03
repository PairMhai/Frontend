import React , {Component} from 'react'

class Navbar extends Component {
 
      render(){
        return (
            <div>
              <div className="nav-container">
             <img src="../src/img/logomain.png" alt="Error" width="300" height="100"  />
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