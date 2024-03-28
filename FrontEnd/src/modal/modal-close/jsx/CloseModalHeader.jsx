import React from 'react';
import { Modal } from 'react-bootstrap';
import '../css/CloseModalHeader.css';

export default function CloseModalHeader({setIsShowCloseConf}) {
    const handleClose = () => {
        setIsShowCloseConf(false);
    }
    return(
        <>
            <Modal.Header className='modal-close-header'>
                <div className='button-div'>
                    <button onClick={handleClose} className='header-right-button'><i className="bi bi-x-lg button-close"></i></button>
                </div>
            </Modal.Header>
        </>
    )
}