import React, { useEffect, useState } from 'react';
import { format, isToday } from 'date-fns';
import HeaderBar from '../../Containers/Header/Header';
import SideNavBar from '../../Containers/SideNavBar/SideNavBar';
import events from '../../../assets/Data/EventsData';
import axios from 'axios';
import moment from 'moment';

const ListView = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/appointment/all', {
          headers: {
            'x-auth-token': token,
          },
        });
        const appointments = response.data.map((appointment) => ({
          title: appointment.vehicleNumber,
          start: new Date(appointment.preferredDate),
          end: new Date(moment(appointment.preferredDate).add(2, 'hours')),
          ...appointment,
        }));
        setEvents(appointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchData();
  }, []);

  const today = new Date();
  // Filter events to only show those happening today
  const todayEvents = events.filter(event => isToday(new Date(event.start)));

  return (
    <div className="relative flex flex-row h-screen overflow-hidden">
      <SideNavBar />
      <div className="flex flex-col flex-1 h-full">
        <HeaderBar />
        <div className="flex-1 p-3 ml-3 overflow-y-auto">
          <h2 className="mb-4 text-2xl">Today's Events</h2>
          {todayEvents.length === 0 ? (
            <p>No events scheduled for today.</p>
          ) : (
            todayEvents.map(event => (
              <div key={event._id} className="p-4 mb-4 bg-gray-100 rounded-lg shadow">
                <h3 className="text-xl">{event.title}</h3>
                <p><strong>Start:</strong> {format(new Date(event.start), 'PPpp')}</p>
                <p><strong>End:</strong> {format(new Date(event.end), 'PPpp')}</p>
                <p><strong>Description:</strong> {event.description}</p>
                <p><strong>Vehicle Number:</strong> {event.vehicleNumber}</p>
                <p><strong>Customer Service:</strong> {event.customerService}</p>
                <button 
                  className="mt-2 text-blue-500 underline"
                  onClick={() => alert(`More details about ${event.title}...`)}
                >
                  More Details
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ListView;
