import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import eye from  '../../../Assets/image/eye.png'
import './OptionAffichageDDM.css'
import eyeslash from '../../../Assets/image/eye-slash.png'

const OptionAffichageDDM = () => {
    const OptionButton = React.forwardRef(({ children, onClick }, ref) => (
        <button
            className="btn btn-outline-primary border border-secondary button_icon_hover btn-lg m-2"
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
        <i className="bi bi-three-dots-vertical icon text-primary"></i>
        </button>
      ));
    const attributesSelected = useSelector((state) => state.attributesSelected);
    const [attributeVisibility, setAttributeVisibility] = useState({});

    // Initialize visibility state for each attribute
    useEffect(() => {
        const initialVisibilityState = {};
        attributesSelected.forEach(attribute => {
            initialVisibilityState[attribute] = true;
        });
        setAttributeVisibility(initialVisibilityState);
    }, [attributesSelected]);

    const toggleAttributeVisibility = (attribute) => {
        setAttributeVisibility(prevState => ({
            ...prevState,
            [attribute]: !prevState[attribute]
        }));
    }

    const Masquertout = () =>{
        const visibilityState = {};
        Object.keys(attributeVisibility).forEach(attribute => {
            visibilityState[attribute] = false;
        });
        setAttributeVisibility(visibilityState);
    }

    const Affichertout = () => {
        const visibilityState = {};
        Object.keys(attributeVisibility).forEach(attribute => {
            visibilityState[attribute] = true;
        });
        setAttributeVisibility(visibilityState);
    }

    return (
        <div className='Option_DDM_Container'>
            <Dropdown>
                <Dropdown.Toggle as={OptionButton} />
                <Dropdown.Menu style={{width: '300px'}} >
                    <h3 className='option_h2'>Options d'affichage</h3>
                    <div className='default_view'>Default view</div>
                    <div className='options_header'>
                        <span>Colonnes présentées</span>
                        <a href='#'onClick={Masquertout}>Masquer Tout</a>
                    </div>
                    <div className='main_options'>
                        {attributesSelected.map(attribute => (
                            attributeVisibility[attribute] ?
                                <button key={attribute} className='dropdown-item option_button' onClick={() => toggleAttributeVisibility(attribute)}>
                                    <span>{attribute}</span><img src={eye} alt="eye" />
                                </button> :
                                null
                        ))}
                    </div>
                    <div className='options_HL'></div>
                    <div className='options_header'>
                        <span>Colonnes masquées</span>
                        <a href="#" onClick={Affichertout}>Afficher Tout</a>
                    </div>
                    <div className='main_options'>
                        {attributesSelected.map(attribute => (
                            !attributeVisibility[attribute] ?
                                <button key={attribute} className='dropdown-item option_button' onClick={() => toggleAttributeVisibility(attribute)}>
                                    <span>{attribute}</span><img src={eyeslash} alt="eyeslash" />
                                </button> :
                                null
                        ))}
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default OptionAffichageDDM;
