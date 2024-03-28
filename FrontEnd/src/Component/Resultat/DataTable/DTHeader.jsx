import React from 'react';
import './DTHeader.css';
import AjouterFilterCard from './AjouterFilterCard';
import { Dropdown } from 'react-bootstrap';
import OptionAffichageDDM from './OptionAffichageDDM';
import  {useEffect,useState,useRef} from 'react'
import jsPDF from 'jspdf';
const DTHeader = ({ rowsPerPage, updateRowsPerPage,searchInput,setSearchInput,filteredData, exportToPDF,exportToXLS}) => {
    const [showAddToFav, setShowAddToFav] = useState(false);
    const popUpRefFav = useRef(null);
      const CustomToggle = React.forwardRef(({ children, onClick  }, ref) => (
        <button
          className="btn btn-outline-primary border border-secondary button_icon_hover btn-lg"
          ref={ref}
          onClick={(e) => {
            onClick(e);
          }}
        >
          <i className="bi bi-save icon text-primary p-2"></i>
          {children}
        </button>
      ));
      useEffect(() => {
        function handleClickOutsideFav(event) {
          if (popUpRefFav.current && !popUpRefFav.current.contains(event.target)) {
            setShowAddToFav(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutsideFav);
        
        return () => {
          document.removeEventListener('mousedown', handleClickOutsideFav);
        };
      }, []);
      
    
    return (
        <div>
            <div className='table_header '>
                <div className='Left_Side'> 
                    <h3 className='m-3'>Rapport / nouvelle général rapport</h3>
                    <div className='SearchBar'>
                        <input type="text" placeholder='Export' className='ml-3 ' value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)} />
                        <button><i className="bi bi-search"></i></button>
                    </div>
                    <div className='filter_buttons m-3'>
                        <div className="card-container d-flex flex-row "> 
                        <AjouterFilterCard/>
                        <select className=' text-dark border border-secondary rounded mx-2 type-all'>
                                <option >Type All</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <input type="date" className='border border-secondary rounded mx-2 input-date-dtheader'/>
                            <select className='text-dark border border-secondary rounded status-all'>
                                <option >Status All</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className='Right_Side'>
                    <div className='right_btns'>
                        <button className='btn btn-primary btn-lg' onClick={() => setShowAddToFav(true)}>Ajouter aux favoris</button>
                        <div className={`add-to-fav-div ${showAddToFav ? '':'hidden'}`} ref={popUpRefFav}>
                            <div className='upper-content-add-to-fav'>
                                <h4>Ajouter aux favoris:</h4>
                            </div>
                            <div className='middle-content-add-to-fav'>
                                <input type="text" id='input-fav' name='input-fav'placeholder='Veuillez entrer un nom'/>
                            </div>
                            <div className='bottom-content-add-to-fav'>
                                <button className='btn-ajouter-fav'>Ajouter</button>
                            </div>
                        </div>
                        <button className="btn btn-outline-primary border border-secondary ">Save</button>
                        <div className='Export_DDmenu'>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                    Export
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ Width: '1rem' }}>
                                    <button className='dropdown-item' onClick={()=>{exportToPDF()}}>PDF file</button>
                                    <button className='dropdown-item ' onClick={()=>{exportToXLS()}}>XLS file</button>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <OptionAffichageDDM/>

                    </div>
                    <div className="rows-per-page-dropdown">
                        <select
                            id="rowsPerPage"
                            className="text-dark border border-secondary rounded status-all"
                            aria-label=".form-select-sm example"
                            value={rowsPerPage}
                            onChange={e => updateRowsPerPage(Number(e.target.value))}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                        <label htmlFor="rowsPerPage">Lignes par page :</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DTHeader;
