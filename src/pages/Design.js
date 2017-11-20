import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import {Cookies} from 'react-cookie';
import LeftTabFilter from '../components/LeftTabFilter'
import ProdCard from '../components/ProdCard'
import LoginNav from '../components/LoginNav'
import ProfileNav from '../components/ProfileNav'
import Footer from '../components/Footer'
class Design extends Component {
    
    constructor(props){
        super(props);
        this.state = {keyword: '', sort: 'price', color: 'all', range:'all', mat: 'all'}
        this.checkLogin =  this.checkLogin = this.checkLogin.bind(this);
        this.setKeyword = this.setKeyword.bind(this)
        this.setSort = this.setSort.bind(this)
        this.setRange = this.setRange.bind(this)
        this.setColor = this.setColor.bind(this)
        this.setMat = this.setMat.bind(this)
    }

    setRange(range){
        this.setState({range: range})
    }
    
    setColor(color){
        this.setState({color: color})
    }

    setMat(mat){
        this.setState({mat: mat})
    }

    setKeyword(word){
        this.setState({keyword: word})
    }

    setSort(type){
        this.setState({sort: type})
    }

    checkLogin(){
        const cookies = new Cookies();
        var key = cookies.get('key');
        if(key === 'null' || key === undefined)
            return <LoginNav />;
        return <ProfileNav />;
    }

    render(){
        return (
            <div>
                <Navbar /> 
                {this.checkLogin()}
                <div className="row container-fluid">
                    <div className="col-md-3 push-md-9 ">
                        <LeftTabFilter color={this.setColor} range={this.setRange} mat={this.setMat} 
                        search={this.setKeyword} sorting={this.setSort}/>
                    </div>
                    <div id="prod" className="col-md-9 push-md-3">
                        
                        <ProdCard type="des" sort={this.state.sort} search={this.state.keyword} color={this.state.color} 
                        range={this.state.range} mat={this.state.mat} />
                    </div>
                </div>
                <div >
                <Footer />
                </div>
            </div>
        );
    }
}

export default Design