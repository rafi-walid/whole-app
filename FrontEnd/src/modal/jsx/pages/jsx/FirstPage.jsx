import React from 'react';
import fimage from '../../images/fpage-image.svg';
import '../css/FirstPage.css';

export default function FistPage({pageNum, setPageNum}){
    const incrementPageNum = () => {
        setPageNum(pageNum + 1);
    }
    return(
        <>
            <div className='p1-body-content'>
                <div className='upper-content'>
                    <div className='fcontent'>
                        <h2>Bienvenue dans le Générateur de Rapports</h2>
                    </div>
                    <div className='scontent'>
                        <img src={fimage} alt="welcomeImage" className='welcomeimage'/>
                    </div>
                </div>
                <div className='middle-content'>
                    <div className='tcontent'>
                        <h5>Processus simple en 4 étapes :</h5>
                        <p>Suivez un processus en quatre étapes simple pour générer votre rapport personnalisé. Chaque étape est conçue pour vous aider à spécifier les détails et les filtres pour des résultats pertinents et instructifs.</p>
                    </div>
                </div>
                <div className='bottom-content'>
                    <button type="button" className="continue-btn" onClick={()=>incrementPageNum()}>Commencer la Génération de Rapports</button>
                </div>
                
            </div>
        </>
    )
}