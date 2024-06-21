import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbarcomponent = () => {
  return (
    <>
      <ul>
        <li><Link to="/home">Home Page</Link></li>
        <li><Link to="/studyguide">Self Study Guide</Link></li>
        <li><Link to="/flashcards">Flashcards</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
      <Outlet />
    </>
  );
};

export default Navbarcomponent;
