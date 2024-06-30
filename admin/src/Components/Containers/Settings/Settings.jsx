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
        <div className="flex items-center justify-center flex-1 p-4">
          <div className="space-y-8">
            <h2 className="mb-8 text-4xl font-bold text-center">Select Theme</h2>
            <div className="flex space-x-8">
              <button
                onClick={() => theme !== 'light' && toggleTheme()}
                className={`w-48 h-48 text-2xl font-bold text-white transition-transform transform rounded-full bg-blue-500 hover:bg-blue-600 hover:scale-105 ${theme === 'light' ? 'animate-pulse' : ''}`}
              >
                Light Theme
              </button>
              <button
                onClick={() => theme !== 'dark' && toggleTheme()}
                className={`w-48 h-48 text-2xl font-bold text-white transition-transform transform rounded-full bg-gray-800 hover:bg-gray-900 hover:scale-105 ${theme === 'dark' ? 'animate-pulse' : ''}`}
              >
                Dark Theme
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
