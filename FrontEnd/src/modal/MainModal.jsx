import React from 'react';
import { Modal} from 'react-bootstrap';
import ModalHeader from './modal-header/ModalHeader';
import ModalBody from './modal-body/ModalBody';

export default function MainModal({setIsShow, isShow}){
    return(
        <>
            <Modal show={isShow} size='xl' animation={false} centered>
                <ModalHeader isShown={(value)=>{setIsShow(value)}}/>
                <ModalBody />
            </Modal>
        </>
    )
}