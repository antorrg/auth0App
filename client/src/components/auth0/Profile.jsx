import styles from "./Profile.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log (user)

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className={styles.profileContainer}>
        <img className={styles.profileImage} src={user.picture} alt={user.name} />
        <h4>Bienvenido: {user.given_name ? user.given_name : user.nickname}</h4>
      </div>
    )
  );
};

export default Profile;