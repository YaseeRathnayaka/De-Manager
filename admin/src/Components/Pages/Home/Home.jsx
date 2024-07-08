import React, { useState, useEffect } from 'react';
import SideNavBar from '../../Containers/SideNavBar/SideNavBar';
import HeaderBar from '../../Containers/Header/Header';
import TopCards from '../../Containers/TopCards/TopCards';
import Feedback from '../../Containers/Feedback/Feedback';
import Appointments from '../../Containers/Appointments/Appoitments';
import AppointmentDetails from '../../Containers/AppointmentDetails/AppointmentDetails';
import events from '../../../assets/Data/EventsData'; // Replace with your actual events data import
import { isSameDay } from 'date-fns';
import axios from 'axios';

const Home = () => {
  const [analyticsSwitch, setAnalyticsSwitch] = useState(true);
  const [appointmentsSwitch, setAppointmentsSwitch] = useState(true);
  const [detailsSwitch, setDetailsSwitch] = useState(true);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [completedAppointments, setCompletedAppointments] = useState([]);
  const [data, setData] = useState([])
  const [todayEvents, setTodayEvents] = useState([]);
  const [totalCompletedVehicles, setTotalCompletedVehicles] = useState([])
  const [todayTotalCompletedVehicles, setTodayTotalCompletedVehicles] = useState([])

  const calculateWidth = () => {
    const activeComponents = [analyticsSwitch, appointmentsSwitch, detailsSwitch].filter(Boolean).length;
    if (activeComponents === 1) return 'w-full';
    if (activeComponents === 2) return 'w-1/2';
    if (analyticsSwitch && appointmentsSwitch && detailsSwitch) return { feedback: 'w-1/5', others: 'w-2/5' };
    return '';
  };

  const widths = calculateWidth();

  // Get today's date
  const today = new Date();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get('http://localhost:3000/api/appointment/all',{
          headers: {
            "x-auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhMjc4NTU2NTc2NTQxMmNiMmFkNzEiLCJpYXQiOjE3MjAzMzA2MzN9.lm4edYXkkMAU5ffumtEeNAJLnrJfG-J0qu1h_QMZeds"
          }
        })
        console.log(response.data);
        setData(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata()
  },[])

  useEffect(() => {
    const today = new Date();
    const filteredEvents = data.filter((event) => isSameDay(new Date(event.preferredDate), today));
    setTodayEvents(filteredEvents);
    console.log(todayEvents)
  }, [data]);

  useEffect(() => {
    const totalCompletedVehicles = data.filter((appointment) => appointment.isCompleted && isSameDay(new Date(appointment.preferredDate), today)).length;
    setTodayTotalCompletedVehicles(totalCompletedVehicles)
  }, [data]);

  useEffect(() => {
    const totalCompletedVehicles = data.filter((appointment) => appointment.isCompleted).length;
    setTotalCompletedVehicles(totalCompletedVehicles)
  }, [data]);

  // Filter events to get today's appointments
  // const todayEvents = events.filter((event) => isSameDay(new Date(event.start), today));

  // Handle completion of an appointment
  const handleCompleteAppointment = (appointmentId) => {
    setCompletedAppointments((prev) => {
      const newCompleted = [...prev, appointmentId];

      // Check if all today's appointments are completed
      if (newCompleted.length === todayEvents.length) {
        alert('All appointments for today are completed!');
      }

      return newCompleted;
    });
  };

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
        <TopCards totalAppointmentsToday={todayEvents.length} completedTodayCount={todayTotalCompletedVehicles} totalVehicles={totalCompletedVehicles}/>
        <div className="flex flex-row mt-1 mb-5 ml-3 mr-3 h-4/5">
          {analyticsSwitch && (
            <Feedback className={`h-full ${widths.feedback || widths}`} />
          )}
          {appointmentsSwitch && (
            <Appointments 
              className={`h-full overflow-y-auto ${widths.others || widths}`}
              appointments={todayEvents}
              onSelectAppointment={setSelectedAppointment}
              completedAppointments={completedAppointments}
            />
          )}
          {detailsSwitch && (
            <AppointmentDetails 
              className={`h-full ${widths.others || widths}`}
              appointment={selectedAppointment}
              onCompleteAppointment={handleCompleteAppointment}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
