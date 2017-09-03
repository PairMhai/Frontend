import React , {Component} from 'react'

class LeftTab extends Component {
   
    render(){
        return (
            <div>
                <div className="left-tab">
                <br></br>
                <br></br>
                   <a className="head">&nbsp;&nbsp;SORT BY :</a>
                   <br></br>
                   
                   &nbsp;&nbsp;<input type="radio" name="radio-btn" />&nbsp;&nbsp;PRICE
                   &nbsp;&nbsp;<input type="radio" name="radio-btn" />&nbsp;&nbsp;ALPHABET
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

export default LeftTab