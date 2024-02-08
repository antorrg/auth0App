import style from './styles/NavBar.module.css'
import {useAuth0} from '@auth0/auth0-react'
import {LoginButton, LogoutButton, Profile} from '../components/auth0/IndexAuth'
import GenericButton from './Buttons/GenericButton';

const NavBar = ({page, setPage, finalPage}) => {
  const {isAuthenticated }= useAuth0();
  console.log(isAuthenticated)
  return (

    <div className={style.navbarContainer}>
      <div className={style.navMain}>
      {!isAuthenticated ? <LoginButton /> :<LogoutButton /> }
     
     {isAuthenticated && <Profile />}
     </div>
      NavBar



      <div className={style.navNavigate}>
      <GenericButton buttonText= 'First' onClick={() => setPage(Number(1))} disabled = {page === 1} className={style.button}/>
      <GenericButton onClick= {()=>(setPage(Number(page-1)))} disabled = {page ===Number(1)} buttonText={'Prev'} className={style.button}/>
      <span className={style.span}>Página {page} de {finalPage}</span>
      <GenericButton onClick= {()=>(setPage(Number(page+1)))} disabled = {page ===finalPage} buttonText={'Next'} className={style.button}/>
      <GenericButton buttonText= 'Last' onClick={() => setPage(finalPage)} disabled = {page === finalPage} className={style.button}/>
      </div>
      <br></br>
      <br></br>
    </div>
  )
}

export default NavBar

//(➡️⬅️)