import GCFullLogo from '../../../Assets/image/GC full logo.png'
import './Style.css'
import GCShourtLogo from '../../../Assets/image/GC logo.png'
import { useState } from 'react';
import MainModal from '../../../modal/jsx/MainModal';

const Header=(props)=>{
    const [isShow, setIsShow] = useState(false);
    const [isShowCloseConf, setIsShowCloseConf] = useState(false);
    const handleShow = () => {
        setIsShow(true);
    }
    
    return(
        <div className="Header_Container">
            <div className="Header_items">
                <div className="Header_item">
                    
                    <img src={props.isOpen?GCFullLogo:GCShourtLogo} alt="" className='Header_Logo' />
                </div>
                <div className="Header_item">
                    <button onClick={()=>{props.toggleNavbar()}}>
                        {props.isOpen? 
                        <>
                        <i className='bi bi-arrows-collapse-vertical'></i>
                        <span className="Header_Navbar_text">Effondrement</span> 
                        </>
                        :
                        <div className='sidebar_arrow'>
                            <i className="bi bi-arrow-bar-right"></i>
                        </div>
                        
                     }
                    </button>
                </div>
                {props.isOpen? 
                <div className="Header_item">
                    <button onClick={()=>handleShow()}>
                        <i className="bi bi-plus"></i>                           
                        <span className="Header_Navbar_text">Creer un Rapport</span>
                    </button>
                </div>:
                <div className="sidebar_plus">
                    <button onClick={()=>handleShow()}>
                        <i className="bi bi-plus "></i>                           
                    </button>
                </div>}
                <MainModal setIsShow={setIsShow} isShow={isShow} setIsShowCloseConf={setIsShowCloseConf} isShowCloseConf={isShowCloseConf} />
            </div>
        </div>
    )
}

export  default Header; 