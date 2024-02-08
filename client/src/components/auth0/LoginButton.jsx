import React from "react";
import style from '../Buttons/GenericButton.module.css'
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (<button onClick={() => loginWithRedirect()} className={style.button}>Log In</button>);
};

export default LoginButton;