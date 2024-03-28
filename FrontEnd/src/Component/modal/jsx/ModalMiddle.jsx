import React from 'react';
import '../css/ModalMiddle.css';

export default function ModalMiddle({pageNum}){
    return(
        <>
            <div className='body-progress-bar-div'>
                <div className='f-bar-div'>
                    <div className={`f-bar ${pageNum >= 1 ? 'active' : ''}`}></div>
                </div>
                <div className='f-circle-div'>
                    <div className={`f-circle ${pageNum >= 1 ? 'active' : ''}`}></div>
                </div>

                <div className='s-bar-div'>
                    <div className={`s-bar ${pageNum >= 2 ? 'active' : ''}`}></div>
                </div>
                <div className='s-circle-div'>
                    <div className={`s-circle ${pageNum >= 2 ? 'active' : ''}`}></div>
                </div>

                <div className='t-bar-div'>
                    <div className={`t-bar ${pageNum >= 3 ? 'active' : ''}`}></div>
                </div>
                <div className='t-circle-div'>
                    <div className={`t-circle ${pageNum >= 3 ? 'active' : ''}`}></div>
                </div>

                <div className='fo-bar-div'>
                    <div className={`fo-bar ${pageNum >= 4 ? 'active' : ''}`}></div>
                </div>
                <div className='fo-circle-div'>
                    <div className={`fo-circle ${pageNum >= 4 ? 'active' : ''}`}></div>
                </div>

                <div className='fi-bar-div'>
                    <div className='fi-bar'></div>
                </div>
            </div>
        </>
    )
}