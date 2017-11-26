import React , {Component} from 'react'
import axios from 'axios'
import loadGIF from '../img/icon/loading.gif'
import '../CSS/Card.css'

class ProdCard extends Component {

    constructor(props){
        super(props)
        this.state = { prod: [], origin: [], type: '', loading: true}

        this.clickDetail = this.clickDetail.bind(this)
        this.search = this.search.bind(this)
    }

    clickDetail(e){
        const id = e.currentTarget.dataset.key
        const type = e.currentTarget.dataset.type
        window.location = '/' + type + '/' + id
    }

    componentWillMount(){
        var typeProd = ''
        if(this.props.type === 'mat'){
            this.setState({type: 'mat'})
            typeProd = 'materials'
        } else {
            this.setState({type: 'des'})
            typeProd = 'designs' 
        }

        axios.get('https://pairmhai-api.herokuapp.com/catalog/'+typeProd)
        .then((response) => {
            console.log(response)
            this.setState({prod: response.data.sort(function(a, b){return a.price - b.price}), origin: response.data, loading: false})
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    componentWillReceiveProps(nextProps){
        this.search(nextProps)
    }

    search(value){
        var currProd
        if(value.sort === 'price')
            currProd = this.state.origin.sort(function(a, b){return a.price - b.price})
        else {
            currProd = this.state.origin.sort(function(a, b){ 
                var nameA = a.name.toLowerCase()
                var nameB = b.name.toLowerCase() 
                return nameA.localeCompare(nameB)}
            )
        }

        if(value.search !== ''){
            currProd = currProd.filter(function(item){
                var name = item.name.toLowerCase()
                var lowerWord = value.search.toLowerCase()
                return name.includes(lowerWord)})
        }

        if(value.range !== 'all' && value.range < 5001 ){
            currProd = currProd.filter(function(item){
                return item.price > value.range-1000 && item.price-value.range <= 0})
        } else if (value.range > 5000){
            currProd = currProd.filter(function(item){
                return item.price >= value.range})
        }

        
        if(value.color !== 'all' ){
            if(this.state.type === 'des'){
                currProd = currProd.filter(function(item){
                    return item.material.color === value.color})
            } else {
                currProd = currProd.filter(function(item){
                    return item.color === value.color})
            }
        }
        
        if(value.mat !== 'all' ){
            if(this.state.type === 'des'){
                currProd = currProd.filter(function(item){
                    return item.material.name === value.mat})
            } else {
                currProd = currProd.filter(function(item){
                    return item.name === value.mat})
            }
        }

        this.setState({prod: currProd})
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
        })

        if(this.state.loading)
            return <div className="load"><h1>Loading...</h1></div>
        else
            return <div id="procon" className="row justify-content-start">{allProd}</div>
    }
}

export default ProdCard