import GCFullLogo from '../../Assets/image/GC full logo.png';
import { useState } from 'react';
import Style from '../Style.css'
import MainModal from '../../modal/MainModal';


const Header=()=>{
    const [isShow, setIsShow] = useState(false);
    return(
        <div className="Header_Container">
            <div className="Header_items">
                <div className="Header_item">
                    <img src={GCFullLogo} alt="" className='Header_Logo' />
                </div>
                <div className="Header_item">
                    <button>
                    <button>
                        <i class="bi bi-arrows-collapse-vertical"></i>                           
                        <span className="Header_Navbar_text">Effondrement</span>
                    </button>
                    
                    
                </div>

                <div className="Header_item">
                    <button onClick={()=>{
                        setIsShow(true)
                    }}>
                        <i className="bi bi-plus"></i>                           
                        <span className="Header_Navbar_text">Creer un Rapport</span>
                    </button>
                    <MainModal isShow={isShow} setIsShow={setIsShow}/>
                </div>
            </div>
        </div>
    )
}

export default Header; 