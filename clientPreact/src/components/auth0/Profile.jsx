import styles from "./Profile.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import {useState, useEffect} from 'react'

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  console.log (user.sub)

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = import.meta.env.VITE_DOMAIN;;
  
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });
       // console.log(accessToken)
       localStorage.setItem('accessToken', accessToken);
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message,'soy el error de autenticacion');
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);
  
console.log('metadatos ', userMetadata)
 const data = userMetadata&& userMetadata

  return (
    isAuthenticated && ( // Solo renderiza si está autenticado
      <div className={styles.profileContainer}>
        <img
          className={styles.profileImage}
          src={data?.picture} // Usa el operador opcional para manejar datos faltantes
          alt='Not found'
        />
        <h4>Bienvenido: {data?.given_name}</h4>
        {/* <h3>User Metadata</h3>
        {userMetadata ? ( // Renderiza solo si userMetadata existe
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )} */}
      </div>
    )
  )
};

export default Profile;
