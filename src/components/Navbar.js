import React , {Component} from 'react'

class Navbar extends Component {
  handleOnClick() {

  }
  handleOnClick = () => {
    console.log("HI");
  }
    render(){
        return (
            <div>
              <div className="nav-container">
                <img src="../images/maxresdefault.jpg" width="100" height="100"  />
                <button className="col-md-2 nav-button" id="fabric">Fabric</button>
                <button className="col-md-2 nav-button" id="designed">Designed</button>
                <button className="col-md-2 nav-button" id="info">Information</button>
                <button className="col-md-2 nav-button" id="contact" >Contact Us</button>
              </div>
             
            </div>
        );
    }
}

export default Navbar