import React, { useState } from 'react';
import { FaQuestion, Header } from './INDEX';

const Home = () => {
  const [windowValue, setWindowValue] = useState(false);

  window.addEventListener('load', () => {
    setWindowValue(true);
  });
  return (
    <>
      <div className={windowValue ? 'activeClass' : 'nonActiveClass'}>
        <Header />
        <FaQuestion />
      </div>
    </>
  );
};

export default Home;
