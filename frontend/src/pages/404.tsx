import React from 'react';

const NotFound = () => {
  React.useEffect(() => {
    document.title = '404';
  }, []);
  return <h1>404</h1>;
};

export default NotFound;
