import React from "react";
import style from '../Buttons/GenericButton.module.css'
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className={style.button}>
      Log Out
    </button>
  );
};

export default LogoutButton;