import React, { useState } from 'react';
import { BlogList, Header } from './INDEX';

const Home = () => {
  const [windowValue, setWindowValue] = useState(false);

  window.addEventListener('load', () => {
    setWindowValue(true);
  });
  return (
    <>
      <div className={windowValue ? 'activeClass' : 'nonActiveClass'}>
        <Header />
        <BlogList />
      </div>
    </>
  );
};

export default Home;
