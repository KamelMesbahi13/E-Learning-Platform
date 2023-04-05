import React, { useState } from 'react';
import { Header, OurStory, Statistics, Testimonials, WhyUs } from './INDEX';

const Home = () => {
  const [windowValue, setWindowValue] = useState(false);

  window.addEventListener('load', () => {
    setWindowValue(true);
  });
  return (
    <>
      <div className={windowValue ? 'activeClass' : 'nonActiveClass'}>
        <Header />
        <OurStory />
        <WhyUs />
        <Statistics />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
