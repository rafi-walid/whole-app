import React, { useCallback, useEffect, useState } from 'react';
import '../css/ThirdPage.css';
import Arrow from '../../images/arrow';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
export default function ThirdPage({setPageNum, pageNum, mainObject, setMainObject}){
    const attributes = useSelector(state => state.attributes);
    

    

    const incrementPageNum = () => {
        setPageNum(pageNum + 1);
    }
    const decrementPageNum = () =>{
        setPageNum(pageNum - 1);
    }

    /* STATES */
    const [showCard, setShowCard] = useState(false);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [themax, setThemax] = useState(0);

    /* FUNCTIONS */
    const uncheckEverything = () => {
        attributes.forEach((attr) => {
            const checkbox = document.getElementById(attr.Name);
            if (checkbox) {
                checkbox.checked = false;
            }
        },
        
        );
    };
    
    const CheckAll = () => {
        attributes.forEach((attr) => {
            const checkbox = document.getElementById(attr.Name);
            if (!checkbox.checked) {
                checkbox.checked = true;
            }
        },
        
        );
    };
    
    

    const CheckUncheckButton = () => {
        if(isCheckAll){
            setMainObject([]);
            setThemax(0);
            uncheckEverything();
            setIsCheckAll(false);
            
        }
        else{
            
            CheckAll();
            setIsCheckAll(true);
        }
    }

    useEffect(() => {
        if (isCheckAll === true) {
            CheckUncheck();
            setMainObject([]);
            const updateMainObject = (element, id) => {
                
                if (element.checked) {
                    setThemax(prevMax => {
                        
                        const newMax = prevMax + 1;
                        element.checked = true;
                        const newObject = { id: newMax, name: element.id.toUpperCase(), type : element.getAttribute("typevalue"),tablename : element.getAttribute("tablename") };
                        setMainObject(prevMainObject => [...prevMainObject, newObject]);
                        return newMax;
                    });
                }
            };
            
            attributes.forEach(attr => {
                const checkboxElement = document.getElementById(attr.Name);
                updateMainObject(checkboxElement);
            });
            CheckUncheck();
            
        }
    }, [isCheckAll])

    const changeAppearance = () => {
        setShowCard(!showCard);
    }

    const changeDisappearance = () => {
        setShowCard(false);
        setMainObject([]);
        uncheckEverything();
    }

    const changeDisappearanceApply = (value) => {
        CheckUncheck();
        
        value.cheked = true;
        if(value.checked){
            if (mainObject.length <= 0) {
                
                const newObject = { id: themax, name: value.id.toUpperCase(), type : value.getAttribute("typevalue"),tablename : value.getAttribute("tablename")  };
                setThemax(prevValue => prevValue + 1);
                setMainObject(prevValue => [...prevValue, newObject]);

            } else {
                setThemax(prevValue => prevValue + 1)
                const newObject = { id: themax, name: value.id.toUpperCase(),type : value.getAttribute("typevalue"),tablename : value.getAttribute("tablename") };
                setMainObject([...mainObject, newObject]);
            }
           
        }
        else{
            const updatedItems = mainObject.filter(object => object.name !== value.id.toUpperCase());
            setMainObject(updatedItems);
        }
    }
    const CheckUncheck = useCallback(() => {
        const checkboxes = [];
        attributes.forEach(attr => {
            const checkboxElement = document.getElementById(attr.Name);
            checkboxes.push({ checkbox: checkboxElement });
        });
        for (let i = 0; i < checkboxes.length; i++) {
            if (!checkboxes[i].checkbox.checked) {
                setIsCheckAll(false);
                break
            }
            else{
                setIsCheckAll(true);
            }

        }

        }
    
    , [setIsCheckAll,attributes]);

    useEffect(() => {
        console.log(mainObject);
        CheckUncheck();
    
        mainObject.forEach(object => {
            attributes.forEach(attr => {
                const checkboxElement = document.getElementById(attr.Name);
                if (object.name.toLowerCase() === checkboxElement.id.toLowerCase()) {
                    checkboxElement.checked = true;
                }
            });
        });
    }, [showCard, isCheckAll, mainObject,CheckUncheck,attributes]);
    
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(mainObject);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setMainObject(items);
    };
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
                            <Arrow color={'black'} width={'16'} height={'16'}/>
                        </button>
                        <div className={`pop-up-container ${!showCard ? 'hidden':''}`}>
                            <div className="pop-up-body">
                                <div className="search-div">
                                    <input className="search-input" type="text" placeholder="recherche"/>
                                    <span className="search-icon-span">
                                        <i className="bi bi-search"></i>
                                    </span>
                                </div>
                                <div className='checking-div'>
                                    <span>Checked:</span>
                                    <button type="button" className="button-check-all" onClick={()=> CheckUncheckButton()}>{`${isCheckAll ? 'Uncheck All' : 'Check All'}`}</button>
                                </div>
                                <div className='db-champs'>
                                    <div className='db-champs-g1'>
                                        {attributes.map((attr,index)=>{
                                            return(
                                            <div className="form-check" key={index}>
                                            <input className="form-check-input" type="checkbox" typevalue={attr.Type} tableName={attr.TableName}  onChange={() => changeDisappearanceApply(document.getElementById(attr.Name))} id={attr.Name}/>
                                            <label className="form-check-label" htmlFor={attr.Name}>
                                                {attr.Name}
                                            </label>
                                        </div>
                                        )}
                                        )}
                                    
                                    </div>
                                </div>
                                <div className='div-buttons'>
                                    <div className='div-button-apply'>
                                        <button className='apply-btn' onClick={() => changeAppearance()}>Appliquer</button>
                                    </div>
                                    <div className='div-button-decline'>
                                        <button className='decline-btn' onClick={()=>changeDisappearance()}>Annuler</button>
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
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="mainObject" direction="vertical">
                            {(provided) => (
                                <div className='bottom-middle-right-content' ref={provided.innerRef} {...provided.droppableProps}>
                                    {mainObject.map((object, index) => (
                                        <Draggable key={object.id} draggableId={object.id.toString()} index={index}>
                                            {(provided, snapshot) => (
                                                <div key={object.id} className='divs-middle-right-content' ref={provided.innerRef} {...provided.draggableProps}>
                                                    <div className='left-part'>
                                                        <div {...provided.dragHandleProps}>
                                                            <i className="bi bi-grip-vertical text-secondary"></i>
                                                        </div>
                                                    </div>
                                                    <div className='right-part'>{object.name}</div>
                                                </div>)}
                                        </Draggable>  
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                            </Droppable>
                        </DragDropContext>
                        
                    </div>
                </div>
                <div className={`p3-bottom-content ${showCard ? 'to-the-right' : ''}`}>
                    <button type="button" className="btn-bottom btn-previous space" onClick={()=> decrementPageNum()}>
                        <i className="bi bi-arrow-left"></i>
                        <label className='previous-label'>Précédente</label>
                    </button>
                    <button type="button" className="btn-bottom btn-next" disabled={mainObject.length === 0}  onClick={()=> incrementPageNum()}>
                        <label className='next-label'>Suivant</label>
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}