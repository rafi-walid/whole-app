import { useEffect, useState } from 'react';
import './Style.css';
import { useRef } from 'react';

const Header=({title})=>{
    const [showNotif, setShowNotif] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const popupRefNotif = useRef(null);
    const popupRefAcnt = useRef(null);
    const handleNotifClick = () => {
        setShowNotif(!showNotif);
    };
    const handleAccountClick = () => {
        setShowAccount(!showAccount);
        if(!showAccount){
            setShowNotif(false);
        }
    }
    const toggleDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    }
    const toggleLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    }
    const handleSwitch = (e) => {
        if(e.target.checked) toggleDarkMode();
        else toggleLightMode();
    }
    useEffect(() => {
        function handleClickOutsideNotif(event) {
          if (popupRefNotif.current && !popupRefNotif.current.contains(event.target)) {
            setShowNotif(false);
          }
        }
        function handleClickOutsideAccount(event) {
            if (popupRefAcnt.current && !popupRefAcnt.current.contains(event.target)) {
              setShowAccount(false);
            }
          }
        document.addEventListener('mousedown', handleClickOutsideAccount);
        document.addEventListener('mousedown', handleClickOutsideNotif);
        
        return () => {
          document.removeEventListener('mousedown', handleClickOutsideNotif);
          document.removeEventListener('mousedown', handleClickOutsideAccount);
        };
      }, []);

    return(
    <div className='Home_Header_Container' >
        <div className='title-container'>
            <h1>{title}</h1>
        </div>
        <div className="FiltresForm">
            <div className="Searching_Form_container">
                <input type="text"  placeholder="Recherchez ..." name=""/>
                <i class="bi bi-search"></i>
            </div>
            <div className='right_of_header'>
                <input type="checkbox" className="theme-checkbox" onChange={(e) => handleSwitch(e)}></input>
                <div className='notif-account-container'>
                    <i className="bi bi-bell-fill notif-icon" onClick={()=>handleNotifClick()}></i>
                    <div className={`notif-div ${showNotif ? '' : 'hidden'}`} ref={popupRefNotif}>
                        <div className='upper-content-notif'>
                            <h4>Notifications</h4>
                        </div>
                        <div className='middle-content-notif'>
                            <div className='f-m-content-notif'>
                                <div className='f-m-content-left-notif'>
                                    <i className="bi bi-exclamation-square"></i>
                                </div>
                                <div className='f-m-content-right-notif'>
                                    <h4>Attention!</h4>
                                    <p>Un de vos fichiers récent est presque épuisé.</p>
                                </div>
                            </div>
                            <div className='s-m-content-notif'>
                                <div className='s-m-content-left-notif'>
                                    <i className="bi bi-info-square"></i>
                                </div>
                                <div className='s-m-content-right-notif'>
                                    <h4>Nouveauté</h4>
                                    <p>Un nouveau source de données est ajouté.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <i className="bi bi-person-circle bi-person-out" onClick={()=> handleAccountClick()}></i>
                    <div className={`account-div ${showAccount ? '' : 'hidden'}`} ref={popupRefAcnt}>
                        <div className='upper-content-account'>
                            <i className="bi bi-person-circle bi-person-account-div"></i>
                            <h4>Account</h4>
                            
                        </div>
                        <div className='middle-content-account'>
                            <div className='f-m-content-account'>
                                <div className='f-m-content-left-account'>
                                    <i class="bi bi-box-arrow-right sign-out-bi"></i>
                                </div>
                                <div className='f-m-content-right-account'>
                                    <span><a href="/result">Se déconnecter</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Header ;