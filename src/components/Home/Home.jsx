import React from 'react';
import Logout from '../Logout/Logout';

const Home = () => {
  return (
    <>
     <div>
      <h2>Welcome Home</h2>
      <p>You are logged in!</p>
    </div>
    <div>
        <Logout/>
    </div>
    </>
  );
};

export default Home;
