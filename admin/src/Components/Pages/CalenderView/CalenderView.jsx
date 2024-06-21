import React from 'react'
import HeaderBar from '../../Containers/Header/Header'
import SideNavBar from '../../Containers/SideNavBar/SideNavBar'
const CalenderView = () => {
  return (
    <div className='flex flex-row overflow-hidden'>
      <SideNavBar />
      <div className="flex flex-col flex-1">
        <HeaderBar />
      </div>
    </div>
    )
}

export default CalenderView
