import React from 'react';
import '../css/MainModal.css';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import CloseModalHeader from '../modal-close/jsx/CloseModalHeader';
import CloseModalBody from '../modal-close/jsx/CloseModalBody';

export default function MainModal({setIsShow, isShow, setIsShowCloseConf, isShowCloseConf}){
    return(
        <>
            <Modal dialogClassName="custom-modal-dialog"  show={isShow} size='lg' className='the-main-modal' animation={false} centered>
                <ModalHeader setIsShow={setIsShow} setIsShowCloseConf={setIsShowCloseConf}/>
                <ModalBody setIsShow={setIsShow} />
            </Modal>
            <Modal dialogClassName="custom-close-modal-dialog" show={isShowCloseConf} size='sm' className='closing-modal' backdropClassName="custom-backdrop-close-class" centered>
                <CloseModalHeader setIsShow={setIsShow} setIsShowCloseConf={setIsShowCloseConf}/>
                <CloseModalBody setIsShow={setIsShow} setIsShowCloseConf={setIsShowCloseConf}/>
            </Modal>
        </>
    )
}