import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import Clean from '../components/CleanInfo'
import Care from '../components/CareInfo'
import Type from '../components/TypeInfo'
import SilkHis from '../components/SilkHis'
import Genuine from '../components/GenuineInfo'
import '../CSS/Info.css'
import Footer from '../components/Footer'

class Information extends Component {
    constructor(props){
        super(props)
        this.state = { info: 'his' }

        this.renderInfo = this.renderInfo.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(content){
        this.setState({info: content})
    }

    renderInfo(){
        if(this.state.info === 'clean')
            return <Clean />
        else if (this.state.info === 'care')
            return <Care />
        else if (this.state.info === 'type')
            return <Type />
        else if (this.state.info === 'genuine')
            return <Genuine />
        else 
            return <SilkHis />
    }

    render(){
        return (
            <div>
                <Navbar /> 
                <div className="info-row">
                    <div>
                        <div className="info-btn" role="button" onClick={() => this.handleChange('his')}>History</div >
                        <div className="info-btn" role="button" onClick={() => this.handleChange('clean')}>Clean</div>
                        <div className="info-btn" role="button" onClick={() => this.handleChange('care')}>Care</div>
                        <div className="info-btn" role="button" onClick={() => this.handleChange('type')}>Type</div>
                        <div className="info-btn" role="button" onClick={() => this.handleChange('genuine')}>Genuine</div>      
                    </div>   
                    {this.renderInfo()}
                </div>
                <div >
                <Footer />
                </div>
            </div>         
        )
    }
}

export default Information