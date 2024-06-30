import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import HeaderBar from '../Header/Header';
import SideNavBar from '../SideNavBar/SideNavBar';


const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='flex flex-row h-screen overflow-hidden'>
      <SideNavBar />
      <div className="flex flex-col flex-1">
        <HeaderBar />
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Settings</h2>
      <div className="flex items-center">
        <span className="mr-2">Theme:</span>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Settings;
