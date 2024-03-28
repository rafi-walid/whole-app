import React from 'react';
import '../css/Nom.css';

export default function Nom({isNomChecked, setIsNomChecked, inputNom, setSelectedOptionNom, firstInputNom}){
    const handleNomChange = (e) =>{
        setIsNomChecked(e.target.checked);
    }
    const handleChange = (e) => {
        setSelectedOptionNom(e.target.value);
    }
    return(
        <>
            <div className='middle-content-third'>
                <div className='third-checkbox-container'>
                    <input type="checkbox" id='checkbox-nom' name='checkbox-nom' ref={inputNom} className='checkboxes' onChange={(e)=>handleNomChange(e)}/>
                    <label htmlFor="checkbox-nom" className='the-checkbox'></label>
                    <label htmlFor="checkbox-nom" className='checkbox-label'>Nom</label>
                </div>
                {isNomChecked ? 
                <div className='third-checkbox-choices'>
                    <div className='t-checkbox-f-choice'>
                        <input name="nom-radio" id="radio-egale-nom" className="radio-buttons" value="Egale" type="radio" defaultChecked onChange={(e) => handleChange(e)} />
                        <label htmlFor="radio-egale-nom" className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Egale
                        </label>
                    </div>
                    <div className='t-checkbox-s-choice'>
                        <input name="nom-radio" id="radio-contient-nom" className="radio-buttons" value="Contient" type="radio" onChange={(e) => handleChange(e)}/>
                        <label htmlFor="radio-contient-nom" className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Contient
                        </label>
                    </div>
                    <div className='inputs-container'>
                        <div className='first-input-nom'>
                            <input type="text" name="f-value-nom" id="f-value-nom" className='inputs-filter' ref={firstInputNom} placeholder='Veuillez entrer le nom'/>
                        </div>
                    </div> 
                </div>
                : null}
            </div>
        </>
    )
}