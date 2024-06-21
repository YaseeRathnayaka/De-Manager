import React from 'react'
import SideNavBar from '../../Containers/SideNavBar/SideNavBar.jsx';
import HeaderBar from '../../Containers/Header/Header.jsx';
const Home = () => {
  return (
    <div className='flex flex-rowoverflow-y-hidden'>
      <SideNavBar />
      <HeaderBar />

    </div>
  )
}

export default Home
