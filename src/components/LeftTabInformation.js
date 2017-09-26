import React , {Component} from 'react'
import '../CSS/LeftTabInformation.css';
import { Link } from 'react-router-dom'
class LeftTabInformation extends Component {
   
    render(){
        return (
            <div>
                <div className="left-tab">
                    <br></br>

                    <Link to="/info/his"  className="nb-btn-1" role="button">History</Link>
                    <br/><br/>
                    <Link to="/info/care" className="nb-btn-1" role="button">Care</Link>
                    <br/><br/>
                    <Link to="/info/clean" className="nb-btn-1" role="button">Care</Link>
                    <br/><br/>
                    <Link to="/info/type" className="nb-btn-1" role="button">Type</Link>
                    <br/><br/>
                    <Link to="/info/genuine" className="nb-btn-1" role="button">Genuine</Link>  
                    <br/><br/>
                        
                    </div>

                    
                
                </div>
                

                
        );
    }
}

export default LeftTabInformation