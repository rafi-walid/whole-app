import React from 'react';
import '../css/ModalProgress.css';
export default function ModalProgress({title, description, icon, pagenum, pageNum}){
    return(
        <>
            <div className='body-progress-child-content'>
                <div className='progress-title-desc'>
                    <h6>{title}</h6>
                    <small className="text-muted">{description}</small>
                </div>
                <div className='progress-pic-div'>
                    <div className={`progress-icon-div ${pageNum >= pagenum ? "active":""}`}>
                        <i className={`${icon} ${pageNum >= pagenum ? "white":""}`}></i>
                    </div>
                </div>
                    
            </div>
        </>
    )
}