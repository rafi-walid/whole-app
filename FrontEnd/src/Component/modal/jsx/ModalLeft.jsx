import React from 'react';
import '../css/ModalLeft.css';
import ModalProgress from './ModalProgress';

export default function ModalLeft({pageNum}){
    return(
        <>
            <div className='body-left-container'>
                <ModalProgress title="Source de données" description="Indiquez La Provenance" icon="bi bi-database" pagenum="1" pageNum={pageNum}/>
                <ModalProgress title="Champs" description="Choisissez Les Champs" icon="bi bi-list" pagenum="2" pageNum={pageNum}/>
                <ModalProgress title="Filtre" description="Affichez Les Résultats" icon="bi bi-funnel" pagenum="3" pageNum={pageNum}/>
                <ModalProgress title="Examiner et Vérifier" description="Revérifiez Vos Choix" icon="bi bi-clipboard2" pagenum="4" pageNum={pageNum}/>
            </div>
        </>
    )
}