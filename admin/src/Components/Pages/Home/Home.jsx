import React from 'react';
import SideNavBar from '../../Containers/SideNavBar/SideNavBar';
import HeaderBar from '../../Containers/Header/Header';
import TopCards from '../../Containers/TopCards/TopCards';
import Feedback from '../../Containers/Feedback/Feedback';
import Appointments from '../../Containers/Appointments/Appoitments';
import AppointmentDetails from '../../Containers/AppointmentDetails/AppointmentDetails';

const Home = () => {
  return (
    <div className='flex flex-row h-screen overflow-hidden'>
      <SideNavBar />
      <div className="flex flex-col flex-1">
        <HeaderBar />
        <TopCards />
        <div className="flex flex-row mt-3 mb-5 ml-3 mr-3 h-4/5">
          <Feedback className="h-full" />
          <Appointments className="h-full" />
          <AppointmentDetails className="h-full" />
        </div>
      </div>
    </div>
  );
}


export default Home;
