import React from 'react';
import './FourthPage.css';

export default function FourthPage({pageNum, setPageNum}) {
    const incrementPageNum = () => {
        setPageNum(pageNum + 1);
    }
    const decrementPageNum = () =>{
        setPageNum(pageNum - 1);
    }
    return(
        <>
            <div className='p4-body-content'>
                <div className='p4-upper-content'>
                    <h4>Filter :</h4>
                    <p>Traduit de l'anglais-DataSource est un nom donné à la connexion établie à une base de données depuis un serveur. Le nom est couramment utilisé lors de la création d'une requête dans la base de données.</p>
                </div>
                <div className='p4-middle-content'>
                    <button type="button" class="btn btn-primary">Ajouter un filtre</button>
                </div>
                <div className='p4-bottom-content'>
                    <button type="button" class="btn btn-outline-dark" onClick={()=> decrementPageNum()}>Précedent</button>
                    <button type="button" class="btn btn-outline-primary" onClick={()=> incrementPageNum()}>Suivant</button>
                </div>
            </div>
        </>
    )
}