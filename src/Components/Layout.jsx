import React from 'react';
import Navbar from './Navbar';
import { navs } from '../data/data';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {

  const location = useLocation();
  const {pathname} = location
  
  
  return (
    <div className='w-screen  bg-slate-200'>
      <Navbar />
      <div className={`mt-[12vh]  `}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
