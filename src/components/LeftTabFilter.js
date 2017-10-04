import React , {Component} from 'react'
import '../CSS/LeftTabFilter.css';
import sr_icon from '../img/search.png'
class LeftTabFilter extends Component {
   
    render(){
        return (
            <div>
                <div className="left-tab">
                    <br/>
                        <a className="head"><h3>SORT BY:</h3></a>
                    
                        <input type="radio" name="optradio"/><label className="radio-sort">&nbsp;PRICE 
                        &nbsp;&nbsp;</label><input type="radio" name="optradio"/><label className="radio-sort">&nbsp;ALPHABET</label>
                   <br></br>
                   <br></br>
                    <form action="" method="get" className="search">

                    <div className="form__field">

                        <input className="searchbar" type="search" name="search" placeholder="Enter here"/>
                        
                        <button type="submit" className="search_btn" >
                        Search
                        </button>

                  
                    </div>
                    </form>
                    <br></br>
                   <div>
                    <a className="head"><h4>PRICE RANGE:</h4></a>
                   <select className="classic2" id="pricerange" >
                        <option value="pricer1">1000-2000 </option>
                        <option value="pricer2">2000-5000</option>
                    </select>
                    </div>
                    <br></br>
                    <a className="head"><h4>COLOR:</h4></a>
                    <div className="custom-radios">
                    <div>
                        <input type="radio" id="color-1" name="color" value="color-1" />
                        <label htmlFor="color-1">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                        </span>
                        </label>
                    </div>
                    
                    <div>
                        <input type="radio" id="color-2" name="color" value="color-2"/>
                        <label htmlFor="color-2">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                        </span>
                        </label>
                    </div>
                    
                    <div>
                        <input type="radio" id="color-3" name="color" value="color-3"/>
                        <label htmlFor="color-3">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                        </span>
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="color-4" name="color" value="color-4"/>
                        <label htmlFor="color-4">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                        </span>
                        </label>
                    </div>
                    </div>
                    <br/>                                  
                    <div>
                    <a className="head"><h4>MATERIAL:</h4></a>
                   
                  <select className="classic2" id="pricerange" >
                        <option value="Mudmee Silk">&nbsp; Mudmee Silk </option>
                        <option value="normal silk">&nbsp; Normal Silk</option>
                    </select>
                    </div>

                    
                
                </div>
                </div>

                
        );
    }
}

export default LeftTabFilter