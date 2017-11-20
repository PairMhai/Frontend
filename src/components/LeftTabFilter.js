import React , {Component} from 'react'
import axios from 'axios';
import '../CSS/LeftTabFilter.css';

class LeftTabFilter extends Component {
    
    constructor(props){
        super(props);
        console.log(props)
        this.state = {matSel: [], keyword: '', }
        this.rangeChange = this.rangeChange.bind(this)
        this.sortChange = this.sortChange.bind(this)
        this.keyChange = this.keyChange.bind(this)
        this.colorChange = this.colorChange.bind(this)
        this.matChange = this.matChange.bind(this)
        this.handleKeyChange = this.handleKeyChange.bind(this)
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

    sortChange(e) {  
        this.props.sorting(e.target.value)
    }

    handleKeyChange(e){
        this.setState({keyword: e.target.value})
    }

    keyChange(){
        this.props.search(this.state.keyword)
    }

    rangeChange(e) {
        this.props.range(e.target.value)
    }

    colorChange(e){
        this.props.color(e.target.value)
    }

    matChange(e){
        this.props.mat(e.target.value)
    }

   
    render(){
        const mat = this.state.matSel.map((matVal, index) => {           
            return  <option key={matVal.id} value={matVal.name}>{matVal.name}</option>
        });

        return (
            <div className="left-tab">
                <h3>SORT BY:</h3>
                <input type="radio" name="sort" value="price" onChange={this.sortChange} defaultChecked /><label className="radio-sort" >&nbsp;PRICE (Min->Max)</label>
                <br/><input type="radio" name="sort" value="alpha" onChange={this.sortChange}/><label className="radio-sort">&nbsp;ALPHABET (A->Z)</label>
                <br></br><br></br>
                <div className="form__field">
                    <input className="searchbar" type="search" name="search" placeholder="Keyword" value={this.state.keyword} onChange={this.handleKeyChange} />
                    <button type="submit" className="search_btn" onClick={this.keyChange} >Search</button>                  
                </div>
                <br></br>
                <div>
                   <h4>PRICE RANGE:</h4>
                    <select className="classic2" id="pricerange" onChange={this.rangeChange} >
                        <option value="all">All</option>
                        <option value="1000">0 - 1,000 Baht.-</option>
                        <option value="2000">1,001 - 2,000 Baht.-</option>
                        <option value="3000">2,001 - 3,000 Baht.-</option>
                        <option value="4000">3,001 - 4,000 Baht.-</option>
                        <option value="5000">4,001 - 5,000 Baht.-</option>
                        <option value="5001">> 5,000 Baht.-</option>
                    </select>
                </div><br></br>
                <h4>COLOR:</h4>
                <div className="custom-radios">
                    <div>
                        <input type="radio" id="color-5" name="color" value="all" onChange={this.colorChange}/>
                        <label htmlFor="color-5">
                            <span>
                               All
                            </span>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="color-1" name="color" value="green" onChange={this.colorChange} />
                        <label htmlFor="color-1">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="color-2" name="color" value="blue" onChange={this.colorChange}/>
                        <label htmlFor="color-2">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="color-3" name="color" value="yellow" onChange={this.colorChange}/>
                        <label htmlFor="color-3">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="color-4" name="color" value="red" onChange={this.colorChange}/>
                        <label htmlFor="color-4">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>
                </div><br/>                                  
            <div>
                <h4>MATERIAL:</h4>   
                <select className="classic2" id="pricerange" onChange={this.matChange} >
                    <option value="all">All</option>
                    {mat}
                </select>
                </div>    
            </div>         
        );
    }
}

export default LeftTabFilter