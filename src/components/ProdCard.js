import React , {Component} from 'react'
import axios from 'axios';
import '../CSS/Card.css'

class ProdCard extends Component {

    constructor(props){
        super(props);
        this.state = { prod: [], origin: [], type: ''};

        this.clickDetail = this.clickDetail.bind(this);
        this.sort = this.sort.bind(this)
        this.search = this.search.bind(this)
    }

    clickDetail(e){
        const id = e.currentTarget.dataset.key;
        const type = e.currentTarget.dataset.type;
        window.location = '/'+type+'/'+id;
    }

    sort(type){
        if(type === 'price')
            this.setState({prod: this.state.prod.sort(function(a, b){return a.price - b.price})})
        else {
            this.setState({prod: this.state.prod.sort(
                function(a, b){ 
                    var nameA = a.name.toLowerCase(); 
                    var nameB = b.name.toLowerCase(); 
                    return nameA.localeCompare(nameB)}
                )
            })
        }  
    }

    search(word){
        if(word !== ''){
            this.setState({prod: this.state.origin.filter(function(item){
                var name = item.name.toLowerCase(); 
                var lowerWord = word.toLowerCase();
                return name.includes(lowerWord)})})
        }
        else {
            this.setState({prod: this.state.origin})
        }
    }

    componentWillMount(){
        var typeProd = '';
        if(this.props.type === 'mat'){
            this.setState({type: 'mat'})
            typeProd = 'materials';
        } else {
            this.setState({type: 'des'})
            typeProd = 'designs' 
        }

        axios.get('https://pairmhai-api.herokuapp.com/catalog/'+typeProd)
        .then((response) => {
            console.log(response);
            this.setState({prod: response.data.sort(function(a, b){return a.price - b.price}), origin: response.data});
        })
        .catch(function (error) {
            console.log(error);
        }); 
        console.log(this.props.sort)
    }

    componentWillReceiveProps(nextProps){
        this.sort(nextProps.sort)
        this.search(nextProps.search)
     
    }


    render(){
        const allProd = this.state.prod.map((prodVal, index) => {
            if(this.state.type === 'mat'){
                return  <div id="product" className="col-xd-6 col-lg-3 prod-card" key={prodVal.product_id} data-key={prodVal.id} data-type='mat' onClick={this.clickDetail}>
                            <img className="imgproduct" src={require('../img/mat/'+ prodVal.image_name)} width="100%" alt="product pic" />
                            <h4><p></p>{prodVal.name}</h4>
                            <p>{prodVal.price} Baht.-</p>
                        </div>
            } else {
                return  <div id="product" className="col-xd-6 col-lg-3 prod-card" key={prodVal.product_id} data-key={prodVal.id} data-type='des' onClick={this.clickDetail}>
                            <img className="imgproduct" src={require('../img/des/'+ prodVal.images[0].file_name)} width="100%" alt="product pic" />
                            <h4><p></p>{prodVal.name}</h4>
                            <p>{prodVal.price} Baht.-</p>
                        </div>
            }
        });
        
        return <div id="procon" className="row justify-content-start">{allProd}</div>
    }
}

export default ProdCard