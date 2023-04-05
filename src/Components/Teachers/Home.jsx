import React, { useState } from 'react';
import { Header, TeachersList } from './INDEX';

const Home = () => {
  const [windowValue, setWindowValue] = useState(false);

  window.addEventListener('load', () => {
    setWindowValue(true);
  });
  return (
    <>
      <div className={windowValue ? 'activeClass' : 'nonActiveClass'}>
        <Header />
        <TeachersList />
      </div>
    </>
  );
};

export default Home;
