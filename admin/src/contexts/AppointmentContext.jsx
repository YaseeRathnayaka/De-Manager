import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/appointment/all', {
          headers: {
            'x-auth-token': token,
          },
        });
        const appointmentsData = response.data.map((appointment) => ({
          ...appointment,
          start: new Date(appointment.preferredDate),
          end: new Date(moment(appointment.preferredDate).add(2, 'hours')),
        }));
        setAppointments(appointmentsData);
        console.log('Fetched Appointments:', appointmentsData); // Debugging log
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <AppointmentContext.Provider value={{ appointments, requests, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};
