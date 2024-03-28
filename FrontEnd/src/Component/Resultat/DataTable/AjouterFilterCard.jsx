import React, { useState, useEffect, useRef } from 'react';
import './AjouterFilterCard.css'
const AjouterFilterCard = () => {
    const [showCard, setShowCard] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target) && event.target.id !== "showCardButton") {
                setShowCard(false);
            }
        };
        if (showCard) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCard]);

    const toggleCard = () => {
        setShowCard(!showCard);
    };

    return (
        <div className=''>
            <button id="showCardButton" className='btn btn-outline-primary border border-secondary btn-lg btn-ajouter-filtre' onClick={toggleCard}>
                ajouter un filtre
            </button>

            {showCard && (
                <div ref={cardRef} className='AF_Card_Container'>
                    <div className="card">
                        <div className="card-header">
                            <h1>Filtration Personnalisée</h1>
                        </div>
                        <div className="card-body">
                        <div className='d-flex flex-row first_last_row'>
                            <select className="form-select" aria-label="Default select example">
                                <option >Type</option>
                            </select>
                            <select className="form-select" aria-label="Default select example">
                                <option >All</option>
                            </select>
                            <select className="form-select" aria-label="Default select example">
                                <option >All</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <button className='reset_button'><i className="bi bi-x display-6 text-primary"></i></button>
                        </div>
                        <div className='d-flex flex-row'>
                            <select className="form-select" aria-label="Default select example">
                                <option >Date</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select" aria-label="Default select example">
                                <option >Between</option>
                            </select>
                            <select className="form-select" aria-label="Default select example">
                                <option >2014</option>

                            </select>
                            <select className="form-select" aria-label="Default select example">
                                <option >2023</option>

                            </select>
                            <button className='reset_button'><i className="bi bi-x display-6 text-primary"></i></button>
                        </div>
                        <div className='d-flex flex-row first_last_row'>
                            <select className="form-select" aria-label="Default select example">
                                <option >Status</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select" aria-label="Default select example">
                                <option >is not</option>
                            </select>
                            <select className="form-select" aria-label="Default select example">
                                <option >closed</option>

                            </select>
                            <button className='reset_button'><i className="bi bi-x display-6 text-primary"></i></button>
                        </div>
                        <div>
                            <button className='btn btn-outline-dark btn-lg '><i className="bi bi-plus text-primary plus-icon"></i> Add More Filter</button>
                        </div>
                        </div>
                        <div className="card-footer">
                            <button id="cancelButton" className='btn border-secondary btn-lg' onClick={toggleCard}>Cancel</button>
                            <button id="applyFilterButton" className='btn btn-primary btn-lg'>Apply Filter</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AjouterFilterCard;
