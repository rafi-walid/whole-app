import React from 'react'
import { Dropdown } from 'react-bootstrap';
import calculatorimg from '../../../Assets/image/calculator.png'
import securitypng from '../../../Assets/image/security.png'
import './MontantDDM.css'
const MontantDDM = () => {
    const MontantButoon = React.forwardRef(({ children, onClick }, ref) => (
        <button
          className="thead_buttons"
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          <span>{children}</span>
          <i className="bi bi-arrow-down-up"></i>
        </button>
      ));

  return (
    <div className='Montant_DDM_Container'>
        <Dropdown>
            <Dropdown.Toggle as={MontantButoon} id="dropdown-custom-components">
                 Montant
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <button className="dropdown-item" >↑ Sort ascending</button>
                    <button className="dropdown-item" >↓ Sort descending</button>
                    <button className="dropdown-item submenu-trigger">
                      <img src={calculatorimg} alt="Résumé" className='padding_img' />
                      Résumé 
                      <span className='gt_span'>&gt;</span>
                      <div className="submenu-content">
                        <button className="dropdown-item">Sum</button>
                        <button className="dropdown-item">Avrege</button>
                        <button className="dropdown-item">Max</button>
                        <button className="dropdown-item">Min</button>
                        <button className="dropdown-item">Median</button>

                      </div>
                    </button>
                    <div className='card_horizontalline'></div>
                    <button className="dropdown-item" >← To left</button>
                    <button className="dropdown-item" >→ To Rigth</button>
                    <div className='card_horizontalline'></div>
                    <button className="dropdown-item" ><img src={securitypng} alt="security eye" className='padding_img' />Hide column</button>
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default MontantDDM