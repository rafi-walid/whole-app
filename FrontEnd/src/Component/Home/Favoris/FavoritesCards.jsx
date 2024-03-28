import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "./Favorites_Cards.css";
import rapportpng from "../../../Assets/image/Rapport.png";

const FavoritesCards = () => {
    const [rapport, setRapport] = useState([
        {id:1,file:'Exel',title:'Bilan de Génération de Prospects',description:'Rapport des leads',date:'17 novembre 2023'},
        {id:2,file:'PDF',title:"État d'Avancement des Clients Potentiels",description:'Rapport des leads',date:'17 novembre 2023'},
        {id:4,file:'Word',title:'Rapport de Développement des Prospects',description:'Rapport des leads',date:'17 novembre 2023'},
        {id:5,file:'CSV',title:'Examen des Clients Potentiels',description:'Rapport des leads',date:'17 novembre 2023'},
        {id:6,file:'XLS',title:'Synthèse des Prospects',description:'Rapport des leads',date:'17 novembre 2023'},
        {id:7,file:'Exel',title:'Rapport de Développement des Prospects',description:'Rapport des leads',date:'17 novembre 2023'},
        {id:8,file:'Word',title:'Rapport de Développement des Prospects',description:'Rapport des leads',date:'17 novembre 2023'},
        {id:9,file:'PDF',title:'Rapport de Développement des Prospects',description:'Rapport des leads',date:'17 novembre 2023'},
        {id:10,file:'CSV',title:'Rapport de Développement des Prospects',description:'Rapport des leads',date:'17 novembre 2023'}
    ]);

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(rapport);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setRapport(items);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="rapport" direction="horizontal">
                {(provided) => (
                    <div className='Card-Container' ref={provided.innerRef} {...provided.droppableProps}>
                        {rapport.map((rapport, index) => (
                            <Draggable key={rapport.id} draggableId={rapport.id.toString()} index={index}>
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef} {...provided.draggableProps}>
                                    <div className="Card">
                                        <div className='Left_Part'>
                                            <div className="Card-header">
                                                <h3 className="Muted-title">File: {rapport.file}</h3>
                                            </div>
                                            <div className="Card-body">
                                                <h2 className="Black-title">{rapport.title}</h2>
                                                <h5 className='Description-text'>{rapport.description}</h5>
                                                <p className="Muted-text">{rapport.date}</p>
                                            </div>
                                        </div>
                                        <div className='Right-Part'>
                                            <img src={rapportpng} alt="rapport" />
                                            <div {...provided.dragHandleProps}>
                                                <i className="bi bi-grip-vertical text-secondary"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Draggable>                        
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default FavoritesCards;
