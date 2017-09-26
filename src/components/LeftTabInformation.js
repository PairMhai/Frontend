import React , {Component} from 'react'
import '../CSS/LeftTabInformation.css';
import { Link } from 'react-router-dom'
class LeftTabInformation extends Component {
   
    render(){
        return (
            <div>
                <div className="left-tab">
                    <br></br>

                    <Link to="/"  className="nb-btn-1" role="button">History</Link>
                    <br/><br/>
                    <Link to="/" className="nb-btn-1" role="button">Care</Link>
                    <br/><br/>
                    <Link to="/" className="nb-btn-1" role="button">Type</Link>
                    <br/><br/>
                    <Link to="/" className="nb-btn-1" role="button">Genuine</Link>  
                    <br/><br/>
                        
                    </div>

                    
                
                </div>
                

                
        );
    }
}

export default LeftTabInformation