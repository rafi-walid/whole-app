import React from 'react'
import './FRTable.css';
import RapportRecent from './RapportRecent';
const FRTable = ({fropen}) => {
  return (
      <>
        {fropen?
        <div className='p-2'>
          <ul>
          {[1,2,3,4,5,6,7,8,9,10].map((item) => (
              <li key={item}>
                <RapportRecent />
              </li>
            ))}
          </ul>
        </div>:null}
      </>


    
  )
}

export default FRTable