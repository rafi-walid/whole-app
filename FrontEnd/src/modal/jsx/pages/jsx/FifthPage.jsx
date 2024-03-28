import React, { useEffect,useState } from 'react';
import '../css/FifthPage.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addAttribute } from '../../../../features/attributesSelectedSlice'; 
import { fetchData } from '../../../../features/dataSlice';
import { useNavigate } from 'react-router-dom';
import {resetAttributes} from '../../../../features/attributesSelectedSlice'



export default function FifthPage({pageNum, setPageNum, filtersArray, mainObject,setMainObject,setIsShow}){
    const selectedOption = useSelector((state) => state.selectedOption.value);
    const attributesSelected = useSelector((state) => state.attributesSelected);
    const data = useSelector(state => state.data);
    const [loading, setLoading] = useState(false); 
    // const [attr,setAttr] = useState([]);
    const [leadsAttr,setLeadsAttr] = useState([]);
    const [commercialesAttr,setcommercialesAttr] = useState([]);
    const [opportunitiesAttr,setOpportunitiesAttr] = useState([]);
    const [rdvAttr,setRdvAttr] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleshowModal = () => {
        setIsShow(false);
    }


    // useEffect(() => {
    //     const newAttributes = mainObject.map(object => object.name);
    //     setAttr(newAttributes);
    // }, [dispatch, mainObject]);

    useEffect(()=>{
        console.log(data);
        mainObject.map((item)=>{
            if(item.tablename === 'leads'){
                setLeadsAttr(prevState =>[...prevState,item.name])
            }
            if(item.tablename === 'commerciales'){
                setcommercialesAttr(prevState =>[...prevState,item.name])
            }
            if(item.tablename === 'opportunities'){
                setOpportunitiesAttr(prevState =>[...prevState,item.name])
            }
            if(item.tablename === 'rdv'){
                setRdvAttr(prevState =>[...prevState,item.name])
            }
            
        })
    },[])
    useEffect(()=>{
        console.log(data);
    },[data])
    


    const decrementPageNum = () =>{
        setPageNum(pageNum - 1);
    }
    const sendAttributsToBackend = async () => {
        try {
            setLoading(true);
            dispatch(resetAttributes());
            mainObject.forEach((object) => {
                dispatch(addAttribute(object.name));
            });
            const response = await axios.post('http://127.0.0.1:8000/api/fetch-data', {
                tableName: selectedOption,
                leadsattr: leadsAttr,
                commercialesattr: commercialesAttr,
                opportunitiesattr : opportunitiesAttr,
                rdvattr : rdvAttr
            });
            dispatch(fetchData(response.data));
            dispatch(resetAttributes());
            mainObject.forEach((object) => {
                dispatch(addAttribute(object.name));
                });
            setMainObject([]);
            setLoading(false);
            handleshowModal()
            navigate('/result',  );

        } catch (error) {
            console.error('Error sending dependencies(tableattributs or tableName) to backend:', error);
            setLoading(false);
        }
    };
    const SDlabel = () => {
        if(selectedOption === "rdv" ) {
            return "Rendez-Vous"
        }
        if(selectedOption === "Opportunity" ) {
            return "Opportunité"
        }
        else{
            return selectedOption ;
        }
    }
    return(
        <>

            <div className='p5-body-content'>
                <div className='p5-upper-content'>
                    <h4>Source de données :</h4>
                    <p>
                    {SDlabel()}
                    
                    </p>
                    <h4>Champs :</h4>
                        <p>
                        {mainObject.map((object, index) => (
                            <span className='span-p5-x' key={index}>{object.name}, </span>
                        ))}
                        </p>
                    <h4>Filters</h4>
                    {filtersArray.map((object, index) => (
                        <p key={index}><span className='span-p5'>{object.name}</span> {object.option} {object.fvalue} {object.svalue}</p>
                    ))}
                </div>
                <div className='p5-bottom-content'>
                    <button type="button" className="btn-bottom btn-previous" onClick={()=> decrementPageNum()}><i class="bi bi-arrow-left"></i><label className='previous-label'>Précédente</label></button>
                    <button href="/result" onClick={()=>{sendAttributsToBackend(selectedOption,attributesSelected)}} className="btn-bottom btn-next"><label className='next-label'>{loading ? 'Loading...' : 'Create Rapport'}</label></button>
                </div>
            </div>
        </>
    )
}