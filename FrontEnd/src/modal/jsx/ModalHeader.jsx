import React from 'react';
import "../css/ModalHeader.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';

export default function ModalHeader({setIsShow, setIsShowCloseConf}){
    const handleShowModalClose = () => {
        setIsShowCloseConf(true);
    }
    return(
        <>
            <Modal.Header className='header'>
                    <Modal.Title className='main-header-title'>Créer un rapport</Modal.Title>
                    <div className='button-div'>
                        <button onClick={handleShowModalClose} className='header-right-button'><i className="bi bi-x-lg button-close"></i></button>
                    </div>
            </Modal.Header>
        </>
    )
}