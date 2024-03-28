import React from 'react';
import '../css/Active.css';

export default function Active({isActiveChecked, setIsActiveChecked, inputActive, setSelectedOptionActive}){
    const handleActiveChange = (e) =>{
        setIsActiveChecked(e.target.checked);
    }
    const handleChange = (e) => {
        setSelectedOptionActive(e.target.value);
    }
    return(
        <>
            <div className='middle-content-fourth'>
                <div className='fourth-checkbox-container'>
                    <input type="checkbox" id='checkbox-active' name='checkbox-active' ref={inputActive} className='checkboxes' onChange={(e)=>handleActiveChange(e)}/>
                    <label htmlFor="checkbox-active" className='the-checkbox'></label>
                    <label htmlFor="checkbox-active" className='checkbox-label'>Active</label>
                </div>
                {isActiveChecked ? 
                    <div className='fourth-checkbox-choices'>
                        <div className='fo-checkbox-f-choice'>
                            <input name="active-radio" id="radio-oui-active" className="radio-buttons" value='Oui' type="radio" defaultChecked onChange={(e) => handleChange(e)}/>
                            <label htmlFor="radio-oui-active" className="radio-button-label">
                                <span className="radio-button-span"></span>
                                Oui
                            </label>
                        </div>
                        <div className='fo-checkbox-f-choice'>
                            <input name="active-radio" id="radio-non-active" className="radio-buttons" value='Non' type="radio" onChange={(e) => handleChange(e)}/>
                            <label htmlFor="radio-non-active" className="radio-button-label">
                                <span className="radio-button-span"></span>
                                Non
                            </label>
                        </div>
                    </div> : null}
            </div>
        </>
    )
}