import React , {Component} from 'react'
import Modal from 'react-modal'

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                    <div>
                        <p className="add-card-info">CARD INFORMATION</p>
                    </div><br/>
                    <div type="container" className="info-box">
                        <div className="card-box"><input type="radio" name="card"/>Visa</div>
                        <div className="card-box"><input type="radio" name="card"/>Master-Card</div>   
                        <br/><br/>
                        Card Number &nbsp;&nbsp;<input className="card-number"/>&nbsp;&nbsp;
                        Bank &nbsp;&nbsp;<input className="bank"/>&nbsp;&nbsp;
                        CVV &nbsp;&nbsp;<input className="cvv"/><br/><br/>            
                        Card Holder &nbsp;&nbsp;<input className="card-holder"/>&nbsp;&nbsp;
                        EXP &nbsp;&nbsp;<input type="month" className="exp"/>
                    </div><br/>
                    <div>
                        <button className="signup_btn pull-right" onChange={this.handleChange} onClick={this.toggleModal}>ADD</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default AddCard