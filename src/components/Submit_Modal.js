import React , {Component} from 'react'
import modal from 'react-modal'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Submit_Modal extends React.Component {

    openModal() {
        this.setState({ isModalOpen: true })
      }
    
    closeModal() {
        this.setState({ isModalOpen: false })
      }

    render() {
        if(!this.props.show) {
            return null
        }

        return (
        
              <div className="modal" style>
                {this.props.children}
      
                <div className="footer">
                  <button onClick={this.props.onClose}>
                    Close
                  </button>
                </div>
              </div>
            
          );
        }
      }
      
      modal.propTypes = {
        onClose: PropTypes.func.isRequired,
        show: PropTypes.bool,
        children: PropTypes.node
    }

    export default Submit_Modal