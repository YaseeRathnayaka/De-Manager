import React from 'react';
import { format } from 'date-fns';
import totalcar from '../../../assets/car.png';
import Appointmentpic from '../../../assets/car-service.png';
import carpic from '../../../assets/car.png';

const TopCards = ({ totalAppointmentsToday, completedTodayCount }) => {
  const totalVehicles = 120; // Replace with your actual data fetching logic

  // Get today's date
  const today = new Date();
  const todayFormatted = format(today, 'MMMM dd, yyyy'); // e.g., "June 21, 2024"

  return (
    <div className="flex justify-between mx-4 my-4">
      <div className="flex items-center w-1/3 h-32 pl-12 bg-custom-light-blue rounded-xl">
        <img src={totalcar} alt="total" className="w-16 h-16" />
        <div className="ml-10">
          <p className="text-xl font-semibold">Total Vehicles</p>
          <p className="text-4xl font-semibold">{totalVehicles} +</p>
          <p className="text-md">Till {todayFormatted}</p>
        </div>
      </div>
      <div className="flex items-center w-1/3 h-32 pl-12 mx-2 bg-custom-light-blue rounded-xl">
        <img src={Appointmentpic} alt="total-today-appointments" className="w-16 h-16" />
        <div className="ml-10">
          <p className="text-xl font-semibold">Total Appointments</p>
          <p className="text-4xl font-semibold">{totalAppointmentsToday}</p>
          <p className="text-md">{todayFormatted}</p>
        </div>
      </div>
      <div className="flex items-center w-1/3 h-32 pl-12 bg-custom-light-blue rounded-xl">
        <img src={carpic} alt="completed-today" className="w-16 h-16" />
        <div className="ml-10">
          <h2 className="text-xl font-semibold">Completed Today</h2>
          <p className="text-4xl font-semibold">{completedTodayCount}</p>
          <p className="text-md">{todayFormatted}</p>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
