import React from 'react';
import { Modal } from 'react-bootstrap';
import '../css/CloseModalBody.css';

export default function CloseModalBody ({setIsShowCloseConf, setIsShow}) {
    const handleCloseSModal = () => {
        setIsShowCloseConf(false);
    }
    const handleCloseBModal = () => {
        setIsShowCloseConf(false);
        setIsShow(false);
    }
    return(
        <>
            <Modal.Body className='close-modal-body'>
                <div className='close-modal-body-upper-div' onClick={() => setIsShowCloseConf(false)}>
                    <i className="bi bi-x-circle"></i>
                </div>
                <div className='close-modal-body-middle-div'>
                    <p>Vous voulez vraiment arrêter de créer le rapport</p>
                </div>
                <div className='close-modal-body-bottom-div'>
                    <button className='btn-annuler-closing-modal' onClick={() => handleCloseSModal()}>Annuler</button>
                    <button className='btn-arreter-closing-modal' onClick={() => handleCloseBModal()}>Arrêter</button>
                </div>
            </Modal.Body>
        </>
    )
}