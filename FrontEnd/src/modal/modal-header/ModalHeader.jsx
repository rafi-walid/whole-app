import React from 'react';
import { Modal } from 'react-bootstrap';
import "./ModalHeader.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CloseButton from '../../images/close-button.svg';

export default function ModalHeader({isShown}){
    const handleClose = () => {
        isShown(false);
    }
    return(
        <>
            <Modal.Header className='header'>
                    <Modal.Title className="w-modal-header">Créer un rapport</Modal.Title>
                    <div className='button-div ml-auto'>
                        <button onClick={handleClose} className='header-right-button'><img src={CloseButton} alt='Close' className='header-right-img'/></button>
                    </div>
            </Modal.Header>
        </>
    )
}