import React from 'react';

const Home = () => {
  React.useEffect(() => {
    document.title = 'Home';
  }, []);
  return <h1>Home</h1>;
};
export default Home;
