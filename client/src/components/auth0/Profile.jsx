import styles from "./Profile.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import {useState, useEffect} from 'react'

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  console.log (user)

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
  return (
    isAuthenticated && (
      <div className={styles.profileContainer}>
        <img className={styles.profileImage} src={user.picture} alt={user.name} />
        <h4>Bienvenido: {user.given_name ? user.given_name : user.nickname}</h4>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  );
};

export default Profile;