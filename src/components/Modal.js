import React, { Component } from 'react';

const ModalCloseButton = (props) => {
    return (
        <button className='modal-close' onClick={props.handleClose}>
            <div className='modal-close-line'></div>
            <div className='modal-close-line'></div>
        </button>            
    )
}

const Modal = ({show, handleClose, text }) => {
    let modalClasses = show ? 'modal-viewport-visible' : 'modal-viewport-hidden';
    return (
        <div className={`modal-viewport ${modalClasses}`}>
            <section className='modal'>
                {text}
                <ModalCloseButton handleClose={handleClose} />
            </section>
        </div>
    )
}

export default Modal;