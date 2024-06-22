import React from 'react';
import { FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';
import totalcar from '../../../assets/car.png';
import { format } from 'date-fns';

const TopCards = () => {
  const totalVehicles = 120; // Replace with your actual data fetching logic
  const totalAppointmentsToday = 10; // Replace with your actual data fetching logic
  const completedAppointmentsToday = 5; // Replace with your actual data fetching logic

  // Get today's date
  const today = format(new Date(), 'MMMM dd, yyyy'); // e.g., "June 21, 2024"

  return (
    <div className="flex justify-between mx-4 my-4">
      <div className="flex items-center w-1/3 h-32 pl-12 bg-custom-light-blue rounded-xl">
        <img src={totalcar} alt="total" className="w-16 h-16" />
        <div className="ml-10">
          <p className="text-xl font-semibold">Total Vehicles</p>
          <p className="text-4xl font-semibold">{totalVehicles} +</p>
          <p className="text-md">Till {today}</p> 
        </div>
      </div>
      <div className="flex items-center justify-center w-1/3 h-32 p-4 mx-2 bg-custom-light-blue rounded-xl">
        <FaCalendarCheck size={50} className="mr-4 text-blue-500" />
        <div>
          <h2 className="text-xl font-semibold">Appointments Today</h2>
          <p className="text-2xl">{totalAppointmentsToday}</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/3 h-32 p-4 bg-custom-light-blue rounded-xl">
        <FaCheckCircle size={50} className="mr-4 text-blue-500" />
        <div>
          <h2 className="text-xl font-semibold">Completed Today</h2>
          <p className="text-2xl">{completedAppointmentsToday}</p>
        </div>
      </div>
    </div>
  );
}

export default TopCards;
