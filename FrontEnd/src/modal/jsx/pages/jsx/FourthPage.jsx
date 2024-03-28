import React, { useState } from 'react';
import '../css/FourthPage.css';
import FilterModal from '../../filter-modal/jsx/FilterModal';

export default function FourthPage({pageNum, setPageNum, filtersArray, setFiltersArray}){
    const [filterIsShow, setFilterIsShow] = useState(false);

    const incrementPageNum = () => {
        setPageNum(pageNum + 1);
    }
    const decrementPageNum = () =>{
        setPageNum(pageNum - 1);
    }
    const toggleShow = () => {
        setFilterIsShow(true);
    }
    return(
        <>
            <div className='p4-body-content'>
                <div className='p4-upper-content'>
                    <h4>Filter :</h4>
                    <p>Traduit de l'anglais-DataSource est un nom donné à la connexion établie à une base de données depuis un serveur. Le nom est couramment utilisé lors de la création d'une requête dans la base de données.</p>
                </div>
                <div className='p4-middle-content'>
                    <button type="button" className="button-filter" onClick={() => toggleShow()}>
                        <i className="bi bi-plus icon-plus"></i>
                        <label className='filter-label'>Ajouter un filtre</label>
                        <i className="bi bi-funnel p4-bi-funnel"></i>
                    </button>
                    <FilterModal filterIsShow={filterIsShow} setFilterIsShow={setFilterIsShow} setFiltersArray={setFiltersArray} filtersArray={filtersArray} />
                </div>
                <div className='p4-bottom-content'>
                    <button type="button" className="btn-bottom btn-previous" onClick={()=> decrementPageNum()}>
                        <i className="bi bi-arrow-left"></i>
                        <label className='previous-label'>Précédente</label>
                    </button>
                    <button type="button" className="btn-bottom btn-next" onClick={()=> incrementPageNum()}>
                        <label className='next-label'>Suivant</label>
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}