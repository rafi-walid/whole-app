import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './ModalBody.css';
//import ModalProgress from './modal-left/modal-progress/ModalProgress';
import ModalLeft from './modal-left/ModalLeft';
import ModalBar from './modal-bar/ModalBar';
import ModalRight from './modal-right/ModalRight';

export default function ModalBody(){
    const [pageNum, setPageNum] = useState(0);
    return(
        <>
            <Modal.Body className='body'>
                <ModalLeft pageNum={pageNum}/>
                <ModalBar pageNum={pageNum}/>
                <ModalRight pageNum={pageNum} setPageNum={setPageNum}/>
            </Modal.Body>
        </>
    )
}