import React , {Component} from 'react'
import {Cookies} from 'react-cookie';
import Navbar from '../components/Navbar'
import LeftTabFilter from '../components/LeftTabFilter'
import ProdCard from '../components/ProdCard'
import LoginNav from '../components/LoginNav'
import ProfileNav from '../components/ProfileNav'
import Footer from '../components/Footer'

class Material extends Component {

    constructor(props){
        super(props);
        this.state = {keyword: '', sort: 'price', filter: [{color: '', range:'', mat: ''}]}
        this.checkLogin =  this.checkLogin = this.checkLogin.bind(this);
        this.setFillter = this.setFillter.bind(this)
        this.setKeyword = this.setKeyword.bind(this)
        this.setSort = this.setSort.bind(this)
    }

    checkLogin(){
        const cookies = new Cookies();
        var key = cookies.get('key');
        if(key === 'null' || key === undefined)
            return <LoginNav />;
        return <ProfileNav />;
    }

    setFillter(data){
        console.log(data)
        this.setState({filter: data})
    }

    setKeyword(word){
        console.log(word)
        this.setState({keyword: word})
    }

    setSort(type){
        alert(type)
        this.setState({sort: type})
    }

    render(){
        return (
            <div>
                <Navbar /> 
                {this.checkLogin()}
                <div className="row container-fluid">
                    <div className="col-md-3 push-md-9 ">
                        <LeftTabFilter test="df" filter={this.setFillter} keyword={this.setKeyword} sorting={this.setSort}/>
                    </div>
                    <div id="prod" className="col-md-9 push-md-3">
                        <ProdCard type="mat" sort={this.state.sort} search={this.state.keyword} filter={this.state.filter}  />
                    </div>
                </div>
                <div >
                <Footer />
                </div>
            </div>
        );
    }
}

export default Material