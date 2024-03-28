import React from 'react';
import '../css/Montant.css';

export default function Montant({inputMontant, isMontantChecked, setIsMontantChecked, setIsEntreMontantChecked, isEntreMontantChecked, setSelectedOptionMontant, firstInputMontant, secondInputMontant}){

    const handleMontantChange = (e) =>{
        setIsMontantChecked(e.target.checked);
    }
    const handleEntreChange = (e) => {
        setSelectedOptionMontant(e.target.value);
        setIsEntreMontantChecked(e.target.checked);
    }
    const handleFalseEntreChange = (e) => {
        setSelectedOptionMontant(e.target.value);
        setIsEntreMontantChecked(false);
    }
    return(
        <>
            <div className='middle-content-first'>
                <div className='first-checkbox-container'>
                    <input type="checkbox" id='checkbox-montant' name='checkbox-montant' className='checkboxes' ref={inputMontant} onChange={(e)=>handleMontantChange(e)}/>
                    <label htmlFor="checkbox-montant" className='the-checkbox'></label>
                    <label htmlFor="checkbox-montant" className='checkbox-label'>Montant</label>
                </div>  
                {isMontantChecked ?
                 <div className='first-checkbox-choices'>
                        <div className='f-checkbox-f-choice'>
                            <input name="montant-radio" id="radio-egale" className="radio-buttons" value="Egale" type="radio" defaultChecked onChange={(e) => handleFalseEntreChange(e)}/>
                            <label htmlFor="radio-egale" className="radio-button-label">
                                <span className="radio-button-span"></span>
                                Egale
                            </label>
                        </div>
                        <div className='f-checkbox-s-choice'>
                            <input name="montant-radio" id="radio-plus" className="radio-buttons" value="Plus" type="radio" onChange={(e) => handleFalseEntreChange(e)}/>
                            <label htmlFor="radio-plus" className="radio-button-label">
                                <span className="radio-button-span"></span>
                                Plus que
                            </label>
                        </div>
                        <div className='f-checkbox-t-choice'>
                            <input name="montant-radio" id="radio-moin" className="radio-buttons" value="Moins" type="radio" onChange={(e) => handleFalseEntreChange(e)}/>
                            <label htmlFor="radio-moin" className="radio-button-label">
                                <span className="radio-button-span"></span>
                                Moins que
                            </label>
                        </div>
                        <div className='f-checkbox-t-choice'>
                            <input name="montant-radio" id="radio-entre" className="radio-buttons" value="Entre" type="radio" onChange={(e) => handleEntreChange(e)}/>
                            <label htmlFor="radio-entre" className="radio-button-label">
                                <span className="radio-button-span"></span>
                                Entre
                            </label>
                        </div>
                        {!isEntreMontantChecked ? 
                        <div className='inputs-container'>
                            <div className='first-input-non-enter'>
                                <input type="text" name="f-value-non-enter" id="f-value-non-enter-montant" ref={firstInputMontant} className='inputs-filter' placeholder='Veuillez entrer le montant'/>
                            </div>
                        </div> 
                        : 
                        <div className='inputs-container'>
                            <div className='first-input-enter'>
                                <input type="text" name="f-value-enter" id="f-value-enter-montant" ref={firstInputMontant} className='inputs-filter' placeholder='Veuillez entrer le montant minimum'/>
                            </div>
                            <div className='second-input-enter'>
                                <input type="text" name="s-value-enter" id="s-value-enter-montant" ref={secondInputMontant} className='inputs-filter' placeholder='Veuillez entrer le montant maximum'/>
                            </div>
                        </div>}
                </div>: null} 
            </div>
        </>
    )
}