import React from 'react';
import '../css/Date.css';

export default function Date({isDateChecked, setIsDateChecked, isEntreDateChecked, setIsEntreDateChecked, inputDate, setSelectedOptionDate, firstInputDate, secondInputDate}){
    const handleDateChange = (e) =>{
        setIsDateChecked(e.target.checked);
    }
    const handleEntreChange = (e) => {
        setSelectedOptionDate(e.target.value);
        setIsEntreDateChecked(e.target.checked);
    }
    const handleFalseEntreChange = (e) => {
        setSelectedOptionDate(e.target.value);
        setIsEntreDateChecked(false);
    }
    return(
        <>
            <div className='middle-content-second'>
                <div className='second-checkbox-container'>
                    <input type="checkbox" id='checkbox-date' name='checkbox-date' ref={inputDate} className='checkboxes' onChange={(e)=>handleDateChange(e)}/>
                    <label htmlFor="checkbox-date" className='the-checkbox'></label>
                    <label htmlFor="checkbox-date" className='checkbox-label'>Date</label>
                </div>  
                {isDateChecked ?
                 <div className='second-checkbox-choices'>
                        <div className='s-checkbox-f-choice'>
                            <input name="date-radio" id="radio-egale-date" className="radio-buttons" value="Egale" type="radio" defaultChecked onChange={(e) => handleFalseEntreChange(e)}/>
                            <label htmlFor="radio-egale-date" className="radio-button-label">
                                <span className="radio-button-span"></span>
                                Egale
                            </label>
                        </div>
                        <div className='s-checkbox-s-choice'>
                            <input name="date-radio" id="radio-plus-date" className="radio-buttons" value="Plus" type="radio" onChange={(e) => handleFalseEntreChange(e)}/>
                            <label htmlFor="radio-plus-date" className="radio-button-label">
                                <span className="radio-button-span"></span>
                                Plus que
                            </label>
                        </div>
                        <div className='s-checkbox-t-choice'>
                            <input name="date-radio" id="radio-moin-date" className="radio-buttons" value="Moins" type="radio" onChange={(e) => handleFalseEntreChange(e)}/>
                            <label htmlFor="radio-moin-date" className="radio-button-label">
                                <span className="radio-button-span"></span>
                                Moins que
                            </label>
                        </div>
                        <div className='s-checkbox-t-choice'>
                            <input name="date-radio" id="radio-entre-date" className="radio-buttons" value="Entre" type="radio" onChange={(e) => handleEntreChange(e)}/>
                            <label htmlFor="radio-entre-date" className="radio-button-label">
                                <span className="radio-button-span"></span>
                                Entre
                            </label>
                        </div>
                        {!isEntreDateChecked ? 
                        <div className='inputs-container'>
                            <div className='first-input-non-enter'>
                                <input type="text" name="f-value-non-enter" id="f-value-non-enter-date" ref={firstInputDate} className='inputs-filter' placeholder='Veuillez entrer la date'/>
                            </div>
                        </div> 
                        : 
                        <div className='inputs-container'>
                            <div className='first-input-enter'>
                                <input type="text" name="f-value-enter" id="f-value-enter-date" ref={firstInputDate} className='inputs-filter' placeholder='Veuillez entrer la date départ "jj/mm/aaaa"'/>
                            </div>
                            <div className='second-input-enter'>
                                <input type="text" name="s-value-enter" id="s-value-enter-date" ref={secondInputDate} className='inputs-filter' placeholder='Veuillez entrer la date fin "jj/mm/aaaa"'/>
                            </div>
                        </div>}
                </div>: null} 
            </div>
        </>
    )
}