import React from 'react';
import './SecondPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                        <option selected>Source de données:</option>
                        <option value="1">First Option</option>
                        <option value="2">Second Option</option>
                        <option value="3">Third Option</option>
                    </select>
                </div>
                <div className='p2-bottom-content'>
                    <button type="button" class="btn btn-outline-dark" onClick={()=> decrementPageNum()}>Précedent</button>
                    <button type="button" class="btn btn-outline-primary" onClick={()=> incrementPageNum()}>Suivant</button>
                </div>
            </div>
        </>
    )
}