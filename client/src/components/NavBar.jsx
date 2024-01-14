import style from './styles/NavBar.module.css'
import {useAuth0} from '@auth0/auth0-react'
import {LoginButton, LogoutButton, Profile} from '../components/auth0/IndexAuth'

const NavBar = () => {
  const {isAuthenticated }= useAuth0();
  console.log(isAuthenticated)
  return (

    <div className={style.navbarContainer}>
      {!isAuthenticated ? <LoginButton /> :<LogoutButton /> }
     
     {isAuthenticated && <Profile />}
      NavBar
    </div>
  )
}

export default NavBar