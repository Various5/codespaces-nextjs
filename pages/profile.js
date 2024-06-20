import { useSession } from 'next-auth/react';
import styles from '../styles/rofile.modul.css';

const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>You are not logged in. Please log in to view your profile.</p>;
  }

  return (
    <div className={styles.profile}>
      <h1>Profile</h1>
      <img src={session.user.image} alt="Profile Image" className={styles.profileImage} />
      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
      {session.user.username && <p>Username: {session.user.username}</p>}
    </div>
  );
};

export default Profile;
