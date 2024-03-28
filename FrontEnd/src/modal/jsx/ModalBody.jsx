import React, { useState } from 'react';
import "../css/ModalBody.css";
import { Modal } from 'react-bootstrap';
import ModalRight from './ModalRight';
import ModalLeft from './ModalLeft';
import ModalMiddle from './ModalMiddle';

export default function ModalBody({setIsShow}){
    const [pageNum, setPageNum] = useState(0);
    const [mainObject, setMainObject] = useState([]);
    return(
        <>
            <Modal.Body className='body'>
                <ModalLeft pageNum={pageNum} setPageNum={setPageNum} mainObject={mainObject} />
                <ModalMiddle pageNum={pageNum}/>
                <ModalRight pageNum={pageNum} setPageNum={setPageNum} setIsShow={setIsShow} mainObject={mainObject} setMainObject={setMainObject}  />
            </Modal.Body>
        </>
    )
}