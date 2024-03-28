import React from 'react';
import FirstPage from './first-page/FirstPage';
import './ModalRight.css';
import SecondPage from './second-page/SecondPage';
import ThirdPage from './third-page/ThirdPage';
import FourthPage from './fourth-page/FourthPage';
import FifthPage from './fifth-page/FifthPage';

export default function ModalRight({pageNum, setPageNum}){
    return(
        <div className='body-right-div'>
            {pageNum === 0 && <FirstPage pageNum={pageNum} setPageNum={setPageNum}/>}
            {pageNum === 1 && <SecondPage pageNum={pageNum} setPageNum={setPageNum}/>}
            {pageNum === 2 && <ThirdPage pageNum={pageNum} setPageNum={setPageNum}/>}
            {pageNum === 3 && <FourthPage pageNum={pageNum} setPageNum={setPageNum}/>}
            {pageNum === 4 && <FifthPage pageNum={pageNum} setPageNum={setPageNum}/>}
        </div>
    )
}