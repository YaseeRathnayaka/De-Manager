import React from 'react';
import { FaBell } from 'react-icons/fa'; // Example: using the FaBell icon from Font Awesome

const HeaderBar = () => {
  return (
    <div className='flex items-center w-11/12 h-12 mt-3 ml-5 text-black bg-custom-gray rounded-xl'>
      <div className=' pl-14'>
        Dashboard
      </div>
      <FaBell style={{ fontSize: '1.2rem', marginLeft: 'auto', marginRight: '1rem' }} />
    </div>
  );
}

export default HeaderBar;
