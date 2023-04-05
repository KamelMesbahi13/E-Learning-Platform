import React, { useState } from 'react';
import { CourseList, Header } from './INDEX';

const Home = () => {
  const [windowValue, setWindowValue] = useState(false);

  window.addEventListener('load', () => {
    setWindowValue(true);
  });
  return (
    <>
      <div className={windowValue ? 'activeClass' : 'nonActiveClass'}>
        <Header />
        <CourseList />
      </div>
    </>
  );
};

export default Home;
