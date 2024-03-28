import React, { useState } from 'react'
import { ReactComponent as ArrowDown } from '../../../Assets/image/Arrow-Down.svg';
import { ReactComponent as ArrowRight } from '../../../Assets/image/Arrow-Right.svg';
import FRTable from './FRTable';
import './FichiersRecents.css'
const FichiersRecents = () => {
  const [fropen, setFropen] = useState(true);
  const toggleArrow = () => {
    setFropen(!fropen)
  }
  return (
    <div className='FR_Container'>
        <div className="FR_items">
        <button onClick={toggleArrow}>
          {fropen? <ArrowDown/>:<ArrowRight/>}
        </button>

            <p>Fichiers récents (10)</p>
            <div className="horizontal-line2"></div>
            <input type="date" name="date" id='date-fichier-recent'/>
            <div className="horizontal-line3"></div>
        </div>
        <div className='Fichirs_Recents_Body'>
            <FRTable fropen={fropen}/>
        </div>
    </div>
  )
}

export default FichiersRecents