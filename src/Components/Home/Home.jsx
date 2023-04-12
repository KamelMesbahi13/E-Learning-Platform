import React from 'react';
import { AboutUs, Best, Courses, Header, Teachers } from './INDEX';

const Home = () => {
  return (
    <>
      <div>
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
