import Header from './Header.jsx'
import Main from './Main_Content.jsx'
import Footer from './Footer.jsx'
import Style from './Style.css'

const Layout=()=>{
    return(
        <div className='Layout_Container'>
            <Header></Header>
            <Main></Main>
            <div className='Layout_Container_Footer'>

                <Footer></Footer>
            </div>
        </div>
    )
}

export  default Layout; 