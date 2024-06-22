import React, { useState } from 'react';
import { FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';
import totalcar from '../../../assets/car.png';
import Appointmentpic from '../../../assets/car-service.png'
import { format, isSameDay } from 'date-fns';
import events from '../../../assets/Data/EventsData'; // Replace with your actual events data import

const TopCards = () => {
  
  const [completed, setCompleted] = useState(0)
  const totalVehicles = 120; // Replace with your actual data fetching logic
  
   // Replace with your actual data fetching logic

  // Get today's date
  const today = new Date();
  const todayFormatted = format(today, 'MMMM dd, yyyy'); // e.g., "June 21, 2024"

  // Filter events to get the count for today
  const todayEvents = events.filter(event => isSameDay(new Date(event.start), today));
  const totalAppointmentsToday = todayEvents.length;

  
  return (
    <div className="flex justify-between mx-4 my-4">
      <div className="flex items-center w-1/3 h-32 pl-12 bg-custom-light-blue rounded-xl">
        <img src={totalcar} alt="total" className="w-16 h-16" />
        <div className="ml-10">
          <p className="text-xl font-semibold">Total Vehicles</p>
          <p className="text-4xl font-semibold">{totalVehicles}</p>
          <p className="text-md">Till {todayFormatted}</p> 
        </div>
      </div>
      <div className="flex items-center w-1/3 h-32 pl-12 mx-2 bg-custom-light-blue rounded-xl">
        <img src={Appointmentpic} alt="total-today-appointments" className="w-16 h-16" />
        <div className="ml-10">
          <p className="text-xl font-semibold">Total Appointments</p>
          <p className="text-4xl font-semibold">{totalAppointmentsToday}</p>
          <p className="text-md">Till {todayFormatted}</p> 
        </div>
      </div>
      <div className="flex items-center justify-center w-1/3 h-32 p-4 bg-custom-light-blue rounded-xl">
        <FaCheckCircle size={50} className="mr-4 text-blue-500" />
        <div>
          <h2 className="text-xl font-semibold">Completed Today</h2>
          <p className="text-2xl">{setCompleted}</p>
        </div>
      </div>
    </div>
  );
}

export default TopCards;
