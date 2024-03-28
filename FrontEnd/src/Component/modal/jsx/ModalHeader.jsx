import React from 'react';
import "../css/ModalHeader.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';

export default function ModalHeader({setIsShow}){
    const handleClose = () => {
        setIsShow(false);
    }
    return(
        <>
            <Modal.Header className='header'>
                    <Modal.Title className='main-header-title'>Créer un rapport</Modal.Title>
                    <div className='button-div'>
                        <button onClick={handleClose} className='header-right-button'><i class="bi bi-x-lg button-close"></i></button>
                    </div>
            </Modal.Header>
        </>
    )
}