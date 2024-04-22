import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className=' bg-slate-200'>
      <Navbar />
      <div className='mt-[12vh]'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
