import React from 'react';

const Profile = ({ name, photo, description }) => {
  return (
    <div style={styles.container}>
      <img src={photo} alt={`${name}'s profile`} style={styles.image} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '250px',
    margin: '0 auto'
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px'
  }
};

export default Profile;