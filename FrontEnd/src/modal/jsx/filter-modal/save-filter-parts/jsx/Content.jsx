import React from 'react';
import '../css/Content.css';

export default function Content({content}){
    return(
        <>
            <div className='middle-content-first'>
                <div className='save-filter-f-choice'>
                    <input name="save-filter-radio" id={content} className="radio-buttons-save" type="radio" />
                    <label htmlFor={content} className="radio-button-label-save">
                        <span className="radio-button-span-save"></span>
                        {content}
                    </label>
                </div>          
            </div>
        </>
    )
}