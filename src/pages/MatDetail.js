import React , {Component} from 'react'
import Navbar from '../components/Navbar'

class MatDetail extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Navbar /> 
                <h1>Material</h1>
                <div className="content row">
                    <img src={ require('../img/logomain.png') } alt="mat-pic" width="20%" height="20%" />
                    <div>
                        <p>NAME: Red silk </p>
                        <p>DESCRIPTION: Made in Thailand </p> 
                        <p>MATERIAL: Mudmee Silk  </p>
                        <p>COLOR: Dark Red </p>
                        <p>PRICE: 500 Baht / Yard of fabric  </p>
                        <button>-</button>
                        <input type="text"/>
                        <button>+</button>
                        <br/>
                        <button>ADD TO CARD</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MatDetail