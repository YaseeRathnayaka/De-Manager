import React, { useState } from 'react';
import SideNavBar from '../../Containers/SideNavBar/SideNavBar';
import HeaderBar from '../../Containers/Header/Header';
import TopCards from '../../Containers/TopCards/TopCards';
import Feedback from '../../Containers/Feedback/Feedback';
import Appointments from '../../Containers/Appointments/Appoitments';
import AppointmentDetails from '../../Containers/AppointmentDetails/AppointmentDetails';

const Home = () => {
  const [analyticsSwitch, setAnalyticsSwitch] = useState(false);
  const [appointmentsSwitch, setAppointmentsSwitch] = useState(false);
  const [detailsSwitch, setDetailsSwitch] = useState(false);

  return (
    <div className='flex flex-row h-screen overflow-hidden'>
      <SideNavBar 
        analyticsSwitch={analyticsSwitch}
        setAnalyticsSwitch={setAnalyticsSwitch}
        appointmentsSwitch={appointmentsSwitch}
        setAppointmentsSwitch={setAppointmentsSwitch}
        detailsSwitch={detailsSwitch}
        setDetailsSwitch={setDetailsSwitch}
      />
      <div className="flex flex-col flex-1">
        <HeaderBar />
        <TopCards />
        <div className="flex flex-row mt-1 mb-5 ml-3 mr-3 h-4/5">
          {analyticsSwitch && <Feedback className="flex-1 h-full" />}
          {appointmentsSwitch && <Appointments className="flex-1 h-full" />}
          {detailsSwitch && <AppointmentDetails className="flex-1 h-full" />}
        </div>
      </div>
    </div>
  );
}

export default Home;
