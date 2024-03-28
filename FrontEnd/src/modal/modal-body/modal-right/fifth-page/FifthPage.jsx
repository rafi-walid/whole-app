import React from 'react';
import './FifthPage.css';

export default function FifthPage({pageNum, setPageNum}){
    const decrementPageNum = () =>{
        setPageNum(pageNum - 1);
    }

    return(
        <>
            <div className='p5-body-content'>
                <div className='p5-bottom-content'>
                    <button type="button" class="btn btn-outline-dark" onClick={()=> decrementPageNum()}>Précedent</button>
                    <a className="btn btn-outline-primary" href="/result">Create Rapport</a>
                </div>
            </div>
        </>
    )
}