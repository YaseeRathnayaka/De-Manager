// src/contexts/AppointmentContext.js
import React, { createContext, useState } from 'react';

export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [requests, setRequests] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      email: 'john@example.com',
      mobile: '123-456-7890',
      address: '123 Main St',
      NIC: '123456789V',
      vehicleNumber: 'ABC1234',
      vehicleModel: 'Toyota Prius',
      vehicleYear: '2015',
      vehicleType: 'Sedan',
      preferredDate: '2023-07-10',
      timeSlot: '08:00 AM - 10:00 AM',
      serviceTypes: ['Oil Change'],
    },
    // Add more mock requests here
  ]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <AppointmentContext.Provider value={{ appointments, requests, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};
