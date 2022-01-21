import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalWindow } from "./Modal.styled";
import PropTypes from "prop-types";
const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown)
    }
    handleKeyDown = event => {
        if (event.code === 'Escape') {
        this.props.onClose()
        }
    }
    handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
           this.props.onClose() 
        }
    }
    
    render() {
    return createPortal(<Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>{this.props.children}</ModalWindow>
    </Overlay>,  modalRoot)
    }
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}