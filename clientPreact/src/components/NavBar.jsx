import style from './styles/NavBar.module.css'
import { useState } from 'preact/hooks'
//import {useAuth0} from '@auth0/auth0-react'
//import {LoginButton, LogoutButton, Profile} from '../components/auth0/IndexAuth'
import GenericButton from './Buttons/GenericButton';

const NavBar = ({page, setPage, finalPage}) => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar si el menú está abierto

  const toggleMenu = () => {
      setMenuOpen(!menuOpen); // Cambia el estado del menú entre abierto y cerrado
  };
 
  return (

    <div className={style.navbarContainer}>
        <button className={style.hamburgerButton} onClick={toggleMenu}>
                <span className={style.hamburgerLine}></span>
                <span className={style.hamburgerLine}></span>
                <span className={style.hamburgerLine}></span>
            </button>
            <div className={menuOpen ? style.navNavigateOpen : style.navNavigate}>
                {/* Contenido de navegación (menú hamburguesa) */}
                <GenericButton buttonText= 'First' onClick={() => setPage(Number(1))} disabled = {page === 1} className={style.button}/>
                <GenericButton onClick= {()=>(setPage(Number(page-1)))} disabled = {page ===Number(1)} buttonText={'Prev'} className={style.button}/>
                 <span className={style.span}>Página {page} de {finalPage}</span>
                  <GenericButton onClick= {()=>(setPage(Number(page+1)))} disabled = {page ===finalPage} buttonText={'Next'} className={style.button}/>
                 <GenericButton buttonText= 'Last' onClick={() => setPage(finalPage)} disabled = {page === finalPage} className={style.button}/>
               </div>
      <div className={style.navMain}>
      
{/*      
      NavBar



      <div className={style.navNavigate}>
      <GenericButton buttonText= 'First' onClick={() => setPage(Number(1))} disabled = {page === 1} className={style.button}/>
      <GenericButton onClick= {()=>(setPage(Number(page-1)))} disabled = {page ===Number(1)} buttonText={'Prev'} className={style.button}/>
      <span className={style.span}>Página {page} de {finalPage}</span>
      <GenericButton onClick= {()=>(setPage(Number(page+1)))} disabled = {page ===finalPage} buttonText={'Next'} className={style.button}/>
      <GenericButton buttonText= 'Last' onClick={() => setPage(finalPage)} disabled = {page === finalPage} className={style.button}/>
      </div> */}
      
      {/* Botón de la hamburguesa para dispositivos móviles */}
      </div>
            <br></br>
      <br></br>
    </div>
  )
}

export default NavBar

//(➡️⬅️)