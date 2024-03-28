import React, { useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import '../css/FilterModal.css';
import Montant from '../parts/jsx/Montant';
import Date from '../parts/jsx/Date';
import Nom from '../parts/jsx/Nom';
import Active from '../parts/jsx/Active';
import Content from '../save-filter-parts/jsx/Content';

export default function FilterModal({filterIsShow, setFilterIsShow, filtersArray, setFiltersArray}){
    /* States for other components */
    const [selectedOptionActive, setSelectedOptionActive] = useState(null);
    const [selectedOptionMontant, setSelectedOptionMontant] = useState(null);
    const [selectedOptionDate, setSelectedOptionDate] = useState(null);
    const [selectedOptionNom, setSelectedOptionNom] = useState(null);
    const [isMontantChecked, setIsMontantChecked] = useState(null);
    const inputMontant = useRef(null);
    const [isEntreMontantChecked, setIsEntreMontantChecked] = useState(null);
    const [isDateChecked, setIsDateChecked] = useState(null);
    const inputDate = useRef(null);
    const [isEntreDateChecked, setIsEntreDateChecked] = useState(null);
    const [isNomChecked, setIsNomChecked] = useState(null);
    const inputNom = useRef(null);
    const [isActiveChecked, setIsActiveChecked] = useState(null);
    const inputActive = useRef(null);
    const firstInputMontant = useRef(null);
    const secondInputMontant = useRef(null);
    const firstInputDate = useRef(null);
    const secondInputDate = useRef(null);
    const firstInputNom = useRef(null);

    /* States for this components */
    const [isFilterChecked, setIsFilterChecked] = useState(true);
    const [isSaveChecked, setIsSaveChecked] = useState(false);

    const UnchackAllCheckboxes = () => {
        setIsMontantChecked(false);
        setIsDateChecked(false);
        setIsNomChecked(false);
        setIsActiveChecked(false);
        inputMontant.current.checked = false;
        inputDate.current.checked = false;
        inputNom.current.checked = false;
        inputActive.current.checked = false;
    }
    const handleCheckbox1Change = () => {
        setIsFilterChecked(true);
        setIsSaveChecked(false);
    };
    const handleCloseModal = () => {
        setFilterIsShow(false);
    }
    const handleCheckbox2Change = () => {
        setIsFilterChecked(!isFilterChecked);
        setIsSaveChecked(!isSaveChecked);
    };
    const onApplyClick = () => {
        setFiltersArray([]);
        if(isMontantChecked){
            if(selectedOptionMontant === null){
                setFiltersArray(prevState => [...prevState, {name: "Montant", option: 'Egale', fvalue: firstInputMontant.current.value, svalue: null}]);
            }
            else if(selectedOptionMontant === 'Entre'){
                setFiltersArray(prevState => [...prevState, {name: "Montant", option: selectedOptionMontant, fvalue: firstInputMontant.current.value, svalue: secondInputMontant.current.value}]);
            }
            else{
                setFiltersArray(prevState => [...prevState, {name: "Montant", option: selectedOptionMontant, fvalue: firstInputMontant.current.value, svalue: null}])
            }
        }
        if(isDateChecked){
            if(selectedOptionDate === null){
                setFiltersArray(prevState => [...prevState, {name: "Date", option: 'Egale', fvalue: firstInputDate.current.value, svalue: null}]);
            }
            else if(selectedOptionDate === 'Entre'){
                setFiltersArray(prevState => [...prevState, {name: "Date", option: selectedOptionDate, fvalue: firstInputDate.current.value, svalue: secondInputDate.current.value}]);
            }
            else{
                setFiltersArray(prevState => [...prevState, {name: "Date", option: selectedOptionDate, fvalue: firstInputDate.current.value, svalue: null}])
            }
        }
        if(isNomChecked){
            if(selectedOptionNom === null){
                setFiltersArray(prevState => [...prevState, {name: "Nom", option: 'Egale', fvalue: firstInputNom.current.value, svalue: null}]);
            }
            else{
                setFiltersArray(prevState => [...prevState, {name: "Nom", option: selectedOptionNom, fvalue: firstInputNom.current.value, svalue: null}]);
            }
        }
        if(isActiveChecked){
            if(selectedOptionActive === null){
                setFiltersArray(prevState => [...prevState, {name: "Active", option: 'Oui', fvalue: null, svalue: null}]);
            }
            else{
                setFiltersArray(prevState => [...prevState, {name: "Active", option: selectedOptionActive, fvalue: null, svalue: null}]);
            }
                }
        setFilterIsShow(false);
    }
    return(
        <>
            <Modal show={filterIsShow} size='sm' animation={false} centered dialogClassName="custom-modal-content" className='filter-modal-class' backdropClassName="custom-backdrop-class" onHide={() => handleCloseModal()}>
                <Modal.Body className='filter-modal-body'>
                    <div className='filter-modal-upper-content'>
                        <div className="first-customCheckBoxHolder">
                            <input type="checkbox" checked={isFilterChecked} onChange={handleCheckbox1Change} id="filter" className="first-customCheckBoxInput" disabled={isFilterChecked}/>
                            <label for="filter" className="first-customCheckBoxWrapper">
                                <div className="first-customCheckBox">
                                    <div className="first-inner">Filter</div>
                                </div>
                            </label>
                        </div>
                        <div className="second-customCheckBoxHolder">
                            <input type="checkbox" checked={isSaveChecked} onChange={handleCheckbox2Change} id="save-filter" className="second-customCheckBoxInput" disabled={isSaveChecked}/>
                            <label for="save-filter" className="second-customCheckBoxWrapper">
                                <div className="second-customCheckBox">
                                    <div className="second-inner">Saved Filters</div>
                                </div>
                            </label>
                        </div>
                    </div>
                    {isFilterChecked ? 
                        <div className='filter-modal-middle-content'>
                            <Montant firstInputMontant={firstInputMontant} secondInputMontant={secondInputMontant} isMontantChecked={isMontantChecked} setIsMontantChecked={setIsMontantChecked} isEntreMontantChecked={isEntreMontantChecked} setIsEntreMontantChecked={setIsEntreMontantChecked} inputMontant={inputMontant} setSelectedOptionMontant={setSelectedOptionMontant} />
                            <Date firstInputDate={firstInputDate} secondInputDate={secondInputDate} isDateChecked={isDateChecked} setIsDateChecked={setIsDateChecked} isEntreDateChecked={isEntreDateChecked} setIsEntreDateChecked={setIsEntreDateChecked} inputDate={inputDate} setSelectedOptionDate={setSelectedOptionDate}/>
                            <Nom firstInputNom={firstInputNom} isNomChecked={isNomChecked} setIsNomChecked={setIsNomChecked} inputNom={inputNom} setSelectedOptionNom={setSelectedOptionNom} />
                            <Active isActiveChecked={isActiveChecked} setIsActiveChecked={setIsActiveChecked} inputActive={inputActive} setSelectedOptionActive={setSelectedOptionActive} />
                        </div>
                    :
                    null}
                    {isSaveChecked ? 
                        <div className='save-filter-modal-middle-content'>
                            <Content content='Mon Filtre Personnalisé 1'/>
                            <Content content='Spécial Week-End'/>
                            <Content content='Projet A : En Cours'/>
                            <Content content='Liste de Souhaits Personnelle'/>
                            <Content content='Sélections Préférées'/>
                            <Content content='Mes Tâches - En Attente'/>
                        </div>
                    :
                    null}

                    <div className='filter-modal-bottom-content'>
                        <div className='btn-clear-container'>
                            <button 
                            className={`btn-clear-not-ready ${isMontantChecked || isDateChecked || isNomChecked || isActiveChecked ? 'btn-clear-ready' : null}` }
                            disabled={isMontantChecked || isDateChecked || isNomChecked || isActiveChecked ? false : true}
                            onClick={() => UnchackAllCheckboxes()}
                            >
                                Clear filter
                            </button>
                        </div>
                        <div className='btn-apply-container'>
                            <button 
                            className={`btn-apply-not-ready ${isMontantChecked || isDateChecked || isNomChecked || isActiveChecked ? 'btn-apply-ready' : null}`}
                            disabled={isMontantChecked || isDateChecked || isNomChecked || isActiveChecked ? false : true}
                            onClick={()=> onApplyClick()}
                            >
                                Apply filter
                            </button>
                        </div>
                        <div className='btn-save-container'>
                            <button
                                className={`btn-save-not-ready ${isMontantChecked || isDateChecked || isNomChecked || isActiveChecked ? 'btn-save-ready' : null}`}
                                disabled={isMontantChecked || isDateChecked || isNomChecked || isActiveChecked ? false : true}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}