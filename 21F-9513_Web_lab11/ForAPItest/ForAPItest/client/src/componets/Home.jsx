import React from 'react';
import homepage from '../image/homepage.png';
const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.heading}>
        <h1>Book Shop SE Department</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac purus sit amet nisi ullamcorper condimentum. Mauris eu nisl nec lorem lacinia finibus.</p>
      </div>
      <div style={styles.image}>
        <img src={homepage} alt="Placeholder" style={styles.imageStyle} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px',
  },
  heading: {
    flex: 1,
    paddingRight: '20px',
  },
  image: {
    flex: 1,
  },
  imageStyle: {
    maxWidth: '100%',
    height: 'auto',
  },
  h1: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  p: {
    fontSize: '18px',
    color: '#555',
  }
};

export default Home;
