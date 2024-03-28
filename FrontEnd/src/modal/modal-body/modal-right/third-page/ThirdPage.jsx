import React,{ useRef, useState }  from 'react';
import "./ThirdPage.css";
import Arrow from '../../../../images/chevron-down.svg';
import Search from '../../../../images/search-icon.svg';

export default function ThirdPage({pageNum, setPageNum}) {
    const incrementPageNum = () => {
        setPageNum(pageNum + 1);
    }
    const decrementPageNum = () =>{
        setPageNum(pageNum - 1);
    }
    const [showCard, setShowCard] = useState(false);
    const inputName = useRef(false);
    const inputPrenom = useRef(false);
    const inputEmail = useRef(false);
    const inputId = useRef(false);
    const inputNumero = useRef(false);
    const inputAge = useRef(false);
    const [mainObject, setMainObject] = useState([]);

    const changeAppearance = () => {
        setShowCard(!showCard);
    }
    const changeDisappearance = () => {
        setShowCard(false);
    }
    const changeDisappearanceApply = () => {
        setMainObject([]);
        setShowCard(false);
        if(inputName.current.checked){
            setMainObject(prevState=>[...prevState, {name: inputName.current.id.toUpperCase()}]);
        }
        if(inputPrenom.current.checked){
            setMainObject(prevState=>[...prevState, {name: inputPrenom.current.id.toUpperCase()}]);
        }
        if(inputEmail.current.checked){
            setMainObject(prevState=>[...prevState, {name: inputEmail.current.id.toUpperCase()}]);
        }
        if(inputId.current.checked){
            setMainObject(prevState=>[...prevState, {name: inputId.current.id.toUpperCase()}]);
        }
        if(inputNumero.current.checked){
            setMainObject(prevState=>[...prevState, {name: inputNumero.current.id.toUpperCase()}]);
        }
        if(inputAge.current.checked){
            setMainObject(prevState=>[...prevState, {name: inputAge.current.id.toUpperCase()}]);
        }
    }
    return(
        <>
            <div className='p3-body-content'>
                <div className='p3-upper-content'>
                    <h4>Champs:</h4>
                    <p>Traduit de l'anglais-DataSource est un nom donné à la connexion établie à une base de données depuis un serveur. Le nom est couramment utilisé lors de la création d'une requête dans la base de données.</p>
                </div>
                <div className='p3-middle-content'>
                    <div className='p3-middle-left-content'>
                        <button className="select-button" onClick={() => changeAppearance()}>
                            <span className="button-text">Champs</span>
                            <img src={Arrow} alt="Arrow" className="arrow-icon" />
                        </button>
                        <div className={`card ${!showCard ? 'hidden':''}`}>
                            <div className="card-body">
                                <div className="search-div">
                                    <input className="search-input" type="text" placeholder="recherche" />
                                    <span className="search-icon-span">
                                        <img src={Search} alt="Search Icon" />
                                    </span>
                                </div>
                                <div className='checking-div'>
                                    <span>Checked:</span>
                                    <button type="button" className="btn btn-link">Check All</button>
                                </div>
                                <div className='db-champs'>
                                    <div className='db-champs-g1'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" ref={inputName} id="nom"/>
                                            <label className="form-check-label" htmlFor="nom">
                                                Nom
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" ref={inputPrenom} id="prenom"/>
                                            <label className="form-check-label" htmlFor="prenom">
                                                Prenom
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" ref={inputEmail} id="email" />
                                            <label className="form-check-label" htmlFor="email">
                                                Email
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" ref={inputId} id="id"/>
                                            <label className="form-check-label" htmlFor="id">
                                                ID
                                            </label>
                                        </div>
                                    </div>
                                    <div className='db-champs-g2'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" ref={inputNumero} id="numero"/>
                                            <label className="form-check-label" htmlFor="numero">
                                                Numero
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" ref={inputAge} id="age"/>
                                            <label className="form-check-label" htmlFor="age">
                                                Age
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='div-buttons'>
                                    <div className='div-button-apply'>
                                        <button className='btn btn-primary apply-btn' onClick={()=>changeDisappearanceApply()}>Appliquer</button>
                                    </div>
                                    <div className='div-button-decline'>
                                        <button className='btn decline-btn' onClick={()=>changeDisappearance()}>Annuler</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p3-middle-right-content'>
                        <div className='upper-middle-right-content'>
                            <span className='middle-right-content-checked'>Checked</span>
                            <span className='middle-right-content-selected'>Sélectionné ({mainObject.length})</span>
                        </div>
                        <div className='bottom-middle-right-content'>
                            {mainObject.map((object) => (
                                <div key={object.name} className='divs-middle-right-content'>{object.name}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='p3-bottom-content'>
                    <button type="button" class="btn btn-outline-dark" onClick={()=> decrementPageNum()}>Précedent</button>
                    <button type="button" class="btn btn-outline-primary" onClick={()=> incrementPageNum()}>Suivant</button>
                </div>
            </div>
        </>
    )
}