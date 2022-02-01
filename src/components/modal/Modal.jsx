// import React, { Component } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalWindow } from "./Modal.styled";
import PropTypes from "prop-types";
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({onClose, children}) => {
    useEffect(() => {
        const handleKeyDown = event => {
        if (event.code === 'Escape') {
            onClose()
        }
    }
        window.addEventListener("keydown", handleKeyDown);
        // useEffect повинна повертати функцію очищення або нічого
        return () => {
        window.removeEventListener("keydown", handleKeyDown);}
    })
    
    const handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
            onClose() 
        }
    }
    
    return createPortal(<Overlay onClick={handleBackdropClick}>
        <ModalWindow>{children}</ModalWindow>
    </Overlay>,  modalRoot)
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}