import React from 'react';
import './ModalLeft.css';
import ModalProgress from './modal-progress/ModalProgress';
import Data from "../../../images/data-source.svg";
import Champs from "../../../images/champs.svg";
import Filtre from '../../../images/filter.svg';
import Verif from '../../../images/verification.svg';

export default function ModalLeft({pageNum}){
    return(
        <>
            <div className='body-progress-div'>
                <ModalProgress title="Source de données" description="Indiquez La Provenance" icon={Data} blue={`${pageNum >= 1 ? 'active' : ''}`}/>
                <ModalProgress title="Champs" description="Choisissez Les Champs" icon={Champs} blue={`${pageNum >= 2 ? 'active' : ''}`}/>
                <ModalProgress title="Filtre" description="Affichez Les Résultats" icon={Filtre} blue={`${pageNum >= 3 ? 'active' : ''}`}/>
                <ModalProgress title="Examiner et Vérifier" description="Revérifiez Vos Choix" icon={Verif} blue={`${pageNum >= 4 ? 'active' : ''}`}/>
            </div>  
        </>
    )
}