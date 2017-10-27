import React , {Component} from 'react'
import Modal from 'react-modal'

class AddAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false, address: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                    <div>
                        <p className="add-card-info">ADD NEW ADDRESS</p>
                    </div><br/>
                    <div type="container" className="info-box">
                    <a className="address">ADDRESS:</a>
                    <br/><textarea className="addr" name="address" value={this.state.address} onChange={this.handleChange}/><br/><br/>
                    </div><br/>
                    <div>
                        <button className="signup_btn pull-right" onClick={this.toggleModal}>ADD</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default AddAddress