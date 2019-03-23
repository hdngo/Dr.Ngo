import React, { Component } from 'react';
import Modal from './Modal';

class ModalLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }

    toggleModal = (e) => { 
        e.preventDefault();
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    };

    render() {
        return (
            <React.Fragment>
                <a href='#' className='modal-link' onClick={this.toggleModal}>{this.props.text}</a>
                <Modal show={this.state.showModal} handleClose={this.toggleModal} text={this.props.modalText}/>
            </React.Fragment>
        )
    }
}

export default ModalLink;