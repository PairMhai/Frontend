import React , {Component} from 'react'

class MatDetail extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Material</h1>
                <img src={ require('../img/logomain.png') } alt="mat-pic" />
                <div>
                    <p>NAME: Red silk </p>
                    <p>DESCRIPTION: Made in Thailand </p> 
                    <p>MATERIAL: Mudmee Silk  </p>
                    <p>COLOR: Dark Red </p>
                    <p>PRICE: 500 Baht / Yard of fabric  </p>
                    {this.props.params.id}
                    <button>-</button>
                    <input type="text"/>
                    <button>+</button>

                    <button>ADD TO CARD</button>
                </div>
            </div>
        );
    }
}

export default MatDetail