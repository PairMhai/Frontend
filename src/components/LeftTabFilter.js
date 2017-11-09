import React , {Component} from 'react'
import axios from 'axios';
import '../CSS/LeftTabFilter.css';

class LeftTabFilter extends Component {
    constructor(props){
        super(props);
        this.state = {matSel: [],}
    }

    componentWillMount(){
        axios.get('https://pairmhai-api.herokuapp.com/catalog/materials')
        .then((response) => {
            console.log(response);
            this.setState({matSel: response.data});
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }
   
    render(){
        const mat = this.state.matSel.map((matVal, index) => {           
            return  <option key={matVal.name} value={matVal.name}>&nbsp; {matVal.name}</option>
        });

        return (
            <div className="left-tab">
                <h3>SORT BY:</h3>
                <input type="radio" name="optradio"/><label className="radio-sort">&nbsp;PRICE (Min->Max)</label>
                <br/><input type="radio" name="optradio"/><label className="radio-sort">&nbsp;ALPHABET (A->Z)</label>
                <br></br><br></br>
                <form action="" method="get" className="search">
                    <div className="form__field">
                        <input className="searchbar" type="search" name="search" placeholder="Enter here"/>
                        <button type="submit" className="search_btn" >Search</button>                  
                    </div>
                </form><br></br>
                <div>
                   <h4>PRICE RANGE:</h4>
                    <select className="classic2" id="pricerange" >
                        <option value="pricer1">0 - 1,000 Baht.-</option>
                        <option value="pricer1">1,001 - 2,000 Baht.-</option>
                        <option value="pricer2">2,001 - 3,000 Baht.-</option>
                        <option value="pricer2">3,001 - 4,000 Baht.-</option>
                        <option value="pricer2">4,001 - 5,000 Baht.-</option>
                        <option value="pricer2">> 5,000 Baht.-</option>
                    </select>
                </div><br></br>
                <h4>COLOR:</h4>
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
                </div><br/>                                  
            <div>
                <h4>MATERIAL:</h4>   
                <select className="classic2" id="pricerange" >
                       {mat}
                </select>
                </div>    
            </div>         
        );
    }
}

export default LeftTabFilter