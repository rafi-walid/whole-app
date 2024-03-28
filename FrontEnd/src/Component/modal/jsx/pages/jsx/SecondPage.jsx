import React from 'react';
import '../css/SecondPage.css';

export default function SecondPage({pageNum, setPageNum}){
    const incrementPageNum = () => {
        setPageNum(pageNum + 1);
    }
    const decrementPageNum = () =>{
        setPageNum(pageNum - 1);
    }
    return(
        <>
            <div className='p2-body-content'>
                <div className='p2-upper-content'>
                    <h4>Source de données:</h4>
                    <p>Traduit de l'anglais-DataSource est un nom donné à la connexion établie à une base de données depuis un serveur. Le nom est couramment utilisé lors de la création d'une requête dans la base de données.</p>
                    <select className="form-select first-select" aria-label="Default select example">
                        <option selected>source de données:</option>
                        <option value="1">First Option</option>
                        <option value="2">Second Option</option>
                        <option value="3">Third Option</option>
                    </select>
                </div>
                <div className='p2-bottom-content'>
                    <button type="button" className="btn-bottom btn-previous" onClick={()=> decrementPageNum()}><i class="bi bi-arrow-left"></i><label className='previous-label'>Précédente</label></button>
                    <button type="button" className="btn-bottom btn-next" onClick={()=> incrementPageNum()}><label className='next-label'>Suivant</label><i className="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </>
    )
}