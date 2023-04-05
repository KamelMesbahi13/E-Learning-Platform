import React, { useState } from 'react';
import { AboutUs, Best, Courses, Header, Teachers } from './INDEX';

const Home = () => {
  const [windowValue, setWindowValue] = useState(false);

  window.addEventListener('load', () => {
    setWindowValue(true);
  });
  return (
    <>
      <div className={windowValue ? 'activeClass' : 'nonActiveClass'}>
        <Header />
        <Best />
        <Courses />
        <Teachers />
        <AboutUs />
      </div>
    </>
  );
};

export default Home;
