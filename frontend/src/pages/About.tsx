import React from 'react';

const About = () => {
  React.useEffect(() => {
    document.title = 'About';
  }, []);

  return <h1>About</h1>;
};
export default About;
