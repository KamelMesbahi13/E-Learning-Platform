import React, { useState } from 'react';
import { ContactUsBox, Header } from './INDEX';

const Home = () => {
  const [windowValue, setWindowValue] = useState(false);

  window.addEventListener('load', () => {
    setWindowValue(true);
  });

  return (
    <>
      <div className={windowValue ? 'activeClass' : 'nonActiveClass'}>
        <Header />
        <ContactUsBox />
      </div>
    </>
  );
};

export default Home;
