import React from 'react';

const Contacts = () => {
  React.useEffect(() => {
    document.title = 'Contacts';
  }, []);
  return <h1>Contacts</h1>;
};
export default Contacts;
