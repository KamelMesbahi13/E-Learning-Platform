import React from 'react';
import { Header, OurStory, Statistics, Testimonials, WhyUs } from './INDEX';

const Home = () => {
  return (
    <>
      <div>
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
