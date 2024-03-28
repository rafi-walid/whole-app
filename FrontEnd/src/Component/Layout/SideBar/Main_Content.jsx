import './Style.css'

const Main_Content =(props)=>{
return(
        <>
            {
                props.isOpen?
                <div className="Main_Content_Container">
            <div className="Main_Content_items">
                <p className='navbar_Section_name'>Rapport</p>
                <div className="Main_Content_item">
                    <button >
                        <i className="bi bi-folder"></i>
                        <span className="Main_Content_Navbar_text">Tous les Rapport</span>
                    </button>
                </div>
                <div className="Main_Content_item">
                    <button >
                        <i className="bi bi-star"></i>                            
                        <span className="Main_Content_Navbar_text">Favoris</span>
                    </button>
                </div>
            </div>
        </div>:
        <div className="Main_Content_Container2">
        <div className="Main_Content_items2">
        <p className='navbar_Section_name'>Rapport</p>
            <div className="Main_Content_item2">
                <button >
                    <i className="bi bi-folder"></i>
                </button>
            </div>
            <div className="Main_Content_item2">
                <button >
                    <i className="bi bi-star"></i>                            
                </button>
            </div>
        </div>
    </div>
            }

        </>
        
    )
}

export default Main_Content;