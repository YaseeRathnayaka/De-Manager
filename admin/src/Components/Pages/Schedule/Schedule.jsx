import React from 'react'
import SideNavBar from '../../Containers/SideNavBar/SideNavBar'
import HeaderBar from '../../Containers/Header/Header'
const Schedule = () => {
  return (
    <div className='relative flex flex-row overflow-hidden'>
    <SideNavBar />
    <div className="flex flex-col flex-1">
      <HeaderBar />
      </div>
      </div>
  )
}

export default Schedule
