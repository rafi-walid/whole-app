import React from 'react';
import '../css/ModalRight.css';
import FirstPage from './pages/jsx/FirstPage';
import SecondPage from './pages/jsx/SecondPage';
import ThirdPage from './pages/jsx/ThirdPage';
import FourthPage from './pages/jsx/FourthPage';
import FifthPage from './pages/jsx/FifthPage';

export default function ModalRight({pageNum, setPageNum}){
    return(
        <>
            <div className='body-right-container'>
                {pageNum === 0 && <FirstPage pageNum={pageNum} setPageNum={setPageNum}/>}
                {pageNum === 1 && <SecondPage pageNum={pageNum} setPageNum={setPageNum}/>}
                {pageNum === 2 && <ThirdPage pageNum={pageNum} setPageNum={setPageNum}/>}
                {pageNum === 3 && <FourthPage pageNum={pageNum} setPageNum={setPageNum}/>}
                {pageNum === 4 && <FifthPage pageNum={pageNum} setPageNum={setPageNum}/>}
            </div>
        </>
    )
}