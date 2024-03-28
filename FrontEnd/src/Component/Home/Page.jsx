import Header from '../Layout/Header/Header';
import Favorites from './Favoris/Favorites'
import FavoritesCards from "./Favoris/FavoritesCards";
import FichiersRecents from "./FichiersRecents/FichiersRecents";
import './Page.css'
import { useSelector } from 'react-redux';
const Home=()=>{
    const isToggled = useSelector(state => state.toggle);
    return(
    <div className='Home_Container' style={{marginLeft: isToggled? '18rem': '7rem'}}>
            <div>
                <Header title="Acces rapide"/>
            </div>
            <div>
                <div className='Favorites_Container_header'>
                    <Favorites></Favorites>
                </div>
                <div className="Favorites_Cards_Container" >
                    <FavoritesCards/>
                </div>
                <div className="Fichiers_Recents_header">
                    <FichiersRecents/>
                </div>
        </div>
        
    </div>
    );
}

export default Home ;