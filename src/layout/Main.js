import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNav from './MainNav';

const Main = () => {
  return (
    <div>
      <MainNav />
      <Outlet />
    </div>
  );
};

export default Main;
