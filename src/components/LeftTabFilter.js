import React , {Component} from 'react'
import '../CSS/LeftTabFilter.css';
class LeftTabFilter extends Component {
   
    render(){
        return (
            <div>
                <div className="left-tab">
                    <br></br>
                    <br></br>
                        <a className="head">&nbsp;&nbsp;SORT BY :</a>
                        <br></br>
                        &nbsp;<input type="radio" name="optradio"/>&nbsp;&nbsp;PRICE
                        &nbsp;<input type="radio" name="optradio"/>&nbsp;ALPHABET
                      
                        
                 
                   
                  
                   <br></br>
                   <br></br>
                    <form action="" method="get" class="search">

                    <div className="form__field">
                        &nbsp;&nbsp;<input className="searchbar" type="search" name="search" placeholder="Enter here" class="form__input"></input>
                        <input className="buttonsearch" type="submit" value="Search" class="button"></input>
                  
                    </div>
                    </form>
                    <br></br>
                   <div>
                    <a className="head">&nbsp;&nbsp;&nbsp;PRICE RANGE :&nbsp;</a>
                   <br></br>
                   <select className="classic2" id="pricerange" onchange="">
                        <option value="pricer1">&nbsp; 1000-2000 </option>
                        <option value="pricer2">&nbsp; 2000-5000</option>
                    </select>
                    </div>
                    <br></br>
                    <a className="head" >&nbsp;&nbsp;&nbsp;COLOR :&nbsp;</a>
                    <div class="custom-radios">
                    <div>
                        <input type="radio" id="color-1" name="color" value="color-1" checked/>
                        <label for="color-1">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                        </span>
                        </label>
                    </div>
                    
                    <div>
                        <input type="radio" id="color-2" name="color" value="color-2"/>
                        <label for="color-2">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                        </span>
                        </label>
                    </div>
                    
                    <div>
                        <input type="radio" id="color-3" name="color" value="color-3"/>
                        <label for="color-3">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                        </span>
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="color-4" name="color" value="color-4"/>
                        <label for="color-4">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                        </span>
                        </label>
                    </div>
                    </div>

                    
                    <br></br>

                    <br></br>                                        
                    <div>
                    <a className="head">&nbsp;&nbsp;&nbsp;MATERIAL :&nbsp;</a>
                   
                   &nbsp;<select className="classic2" id="pricerange" onchange="">
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