import "./Favorites.css";

const Favorites=()=>{
    return(
    <div className='Favorites_Container'>
        <div className="Favorites_items">
            <i className="bi bi-star-fill"></i>
            <p>Favoris (10)</p>
            <div className="horizontal-line"></div>
        </div>
    </div>
    );
}

export default Favorites ;