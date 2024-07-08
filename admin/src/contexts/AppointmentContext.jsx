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
      mobile: '123456789',
      address: '123 Main St',
      NIC: '123456789V',
      vehicleNumber: 'AB-1234',
      vehicleModel: 'Toyota Corolla',
      vehicleYear: '2020',
      vehicleType: 'Sedan',
      preferredDate: '2023-12-01',
      timeSlot: '08:00 AM - 10:00 AM',
      serviceTypes: ['Oil Change'],
    },
    
  ]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment, requests }}>
      {children}
    </AppointmentContext.Provider>
  );
};
