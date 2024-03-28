import React, { useState } from 'react';
import "../css/ModalBody.css";
import { Modal } from 'react-bootstrap';
import ModalRight from './ModalRight';
import ModalLeft from './ModalLeft';
import ModalMiddle from './ModalMiddle';

export default function ModalBody(){
    const [pageNum, setPageNum] = useState(1);
    return(
        <>
            <Modal.Body className='body'>
                <ModalLeft pageNum={pageNum}/>
                <ModalMiddle pageNum={pageNum}/>
                <ModalRight pageNum={pageNum} setPageNum={setPageNum}/>
            </Modal.Body>
        </>
    )
}