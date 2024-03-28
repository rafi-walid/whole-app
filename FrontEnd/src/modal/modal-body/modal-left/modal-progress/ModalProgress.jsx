import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalProgress.css';

export default function ModalProgress({title, description, icon, blue}){
    return(
        <>
        {/*            <div className='body-progress-child'>*/}
                <div className='body-progress-child-content'>
                    <div className='progress-title-desc'>
                        <h6>{title}</h6>
                        <small className="text-muted">{description}</small>
                    </div>
                    <div className='progress-pic-div'>
                        <div className={`progress-icon-div ${blue}`}>
                            <img src={icon} alt='data source'></img>
                        </div>
                    </div>
                    
                </div>
        </>
    )
}