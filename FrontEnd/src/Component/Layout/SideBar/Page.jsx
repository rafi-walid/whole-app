import Header from './Header.jsx';
import Main from './Main_Content.jsx';
import Footer from './Footer.jsx';
import './Style.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSwitch } from '../../../features/toggleSlice.jsx';
const Layout=()=>{

    const dispatch = useDispatch();
    const isToggled = useSelector(state => state.toggle);

    const handleToggle = () => {
        dispatch(toggleSwitch());
    };
    return(
        <div className='Layout_Container' style={{width: isToggled ? "18rem":"7rem"}}>
            <div>
                <Header toggleNavbar={handleToggle} isOpen={isToggled}></Header>
            </div>
            <div>
                <Main isOpen={isToggled}></Main>
            </div>
            
            <div className='Layout_Container_Footer'>
                <Footer isOpen={isToggled}></Footer>
            </div>
        </div>
    )
}

export  default Layout; 