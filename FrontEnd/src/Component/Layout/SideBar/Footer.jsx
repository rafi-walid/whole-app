import './Style.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer=(props)=>{
    return(
        <>
        {
            props.isOpen?
            <div className="Footer_Container ">
                <div className="Footer_items">
                    <p className='navbar_Section_name'>Account</p>
                    <div className="Footer_item">
                        <button >
                            <i className="bi bi-info-circle"></i>
                            <span className="Navbar_text">Aide</span>
                        </button>
                    </div>
                    <div className="Footer_item">
                        <button >
                            <i className="bi bi-gear"></i>                            
                            <span className="Navbar_text">Paramètre</span>
                        </button>
                    </div>
                    <div className="Footer_item">
                        <button className='lastNavbar'>
                            <i className="bi bi-box-arrow-in-left"></i>
                            <span className="Navbar_text">Se deconnecter</span>
                        </button>
                    </div>
                </div>
            </div>:
            <div className="Footer_Container2 ">
            <div className="Footer_items2">
                <div className='Footer_first_section'>
                    <p className='navbar_Section_name'>Account</p>
                    <div className="Footer_item2">
                        <button >
                            <i className="bi bi-info-circle"></i>

                        </button>
                    </div>
                    <div className="Footer_item2">
                        <button >
                            <i className="bi bi-gear"></i>                            
                        </button>
                </div>
                </div>
                <div className="Footer_item2">
                    <button className='lastNavbar2'>
                        <i className="bi bi-box-arrow-in-left"></i>
                        
                    </button>
                </div>
            </div>
        </div>

        }
            
        </>
    )
}

export default Footer;