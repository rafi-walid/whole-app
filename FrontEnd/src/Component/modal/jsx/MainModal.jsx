import React from 'react';
import '../css/MainModal.css';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';

export default function MainModal({setIsShow, isShow}){
    return(
        <>
            <Modal dialogClassName="custom-modal-dialog" onHide={() => setIsShow(false)} show={isShow} size='lg' className='the-main-modal' animation={false} centered>
                <ModalHeader setIsShow={setIsShow}/>
                <ModalBody />
            </Modal>
        </>
    )
}