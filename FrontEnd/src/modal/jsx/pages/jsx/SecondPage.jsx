import React, { useEffect,useState } from 'react';
import axios from 'axios';
import '../css/SecondPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedOption } from '../../../../features/selectedOptionSlice';
import { setAttributes } from '../../../../features/attributesSlice';


export default function SecondPage({pageNum, setPageNum,mainObject,setMainObject}){
    const dispatch = useDispatch();
    const selectedOption = useSelector((state) => state.selectedOption.value);
    const attributes = useSelector(state => state.attributes);
    const [loading, setLoading] = useState(false); 



    const fetchAttributes = async (type) => {
        try {
            setLoading(true);
            const response = await axios.post('http://127.0.0.1:8000/api/fetch-attributes', { type });
            dispatch(setAttributes(response.data));
            setLoading(false); 
        } catch (error) {
            console.error('There was an error fetching the attribute names:', error);
            setLoading(false);
            setAttributes([]);
        }
    };


    const SDOption = (event) => {
        const type = event.target.value;
        if (type !== selectedOption){
            setMainObject([]);
        }
        dispatch(setSelectedOption(type));
        if (type) {
            fetchAttributes(type);
        } else {
            setAttributes([]);
        }
    };
    useEffect(()=>{
        console.log(attributes);
    } ,[attributes]); 

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
                    <select
                        className="form-select first-select"
                        aria-label="Default select example"
                        value={selectedOption || ''}
                        onChange={SDOption}
                    >        
                    <option disabled hidden value="">
                    source de données:
                    </option>
                    <option value="Lead">Lead</option>
                    <option value="Opportunity">Oportunité</option>
                    <option value="rdv">Rendez-vous</option>
                    <option value="commerciale">commérciale</option>

                    </select>
                </div>
                <div className='p2-bottom-content'>
                    <button type="button" className="btn-bottom btn-previous" onClick={()=> decrementPageNum()}><i className="bi bi-arrow-left"></i><label className='previous-label'>Précédente</label></button>
                    <button type="button" className="btn-bottom btn-next" disabled={selectedOption === null || loading} onClick={()=> incrementPageNum()}><label className='next-label'>{loading ? 'Loading...' : 'Suivant'}</label><i className="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </>
    )
}