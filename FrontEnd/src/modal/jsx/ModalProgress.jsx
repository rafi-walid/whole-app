import React from 'react';
import '../css/ModalProgress.css';
import { useSelector } from 'react-redux';
export default function ModalProgress({title, description, icon, pagenum, pageNum, setPageNum,mainObject}){
    const selectedOption = useSelector((state) => state.selectedOption.value);

    const handleClick = () => {
        //if (selectedOption !== null && pageNum <= pagenum){
            setPageNum(pagenum);
            
        //}
    }
    return(
        <>
            <div className='body-progress-child-content'>
                <div className='progress-title-desc'>
                    <h6>{title}</h6>
                    <small className="text-muted">{description}</small>
                </div>
                <div className='progress-pic-div' onClick={()=>handleClick() }  >
                    <div className={`progress-icon-div ${pageNum >= pagenum ? "active-icon":""}` } >
                        <i className={`${icon} ${pageNum >= pagenum ? "white":null}`}></i>
                    </div>
                </div>     
            </div>
        </>
    )
}