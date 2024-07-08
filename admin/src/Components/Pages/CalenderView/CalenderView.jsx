import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import HeaderBar from '../../Containers/Header/Header';
import SideNavBar from '../../Containers/SideNavBar/SideNavBar';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [panelIsOpen, setPanelIsOpen] = useState(false);
  const [events, setEvents] = useState([]);

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

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setPanelIsOpen(true);
  };

  const closePanel = () => {
    setPanelIsOpen(false);
    setSelectedEvent(null);
  };

  const handleDeleteAppointment = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3000/api/appointment/${selectedEvent._id}`, {
        headers: {
          'x-auth-token': token,
        },
      });
      // Remove the deleted appointment from events state
      setEvents(events.filter((event) => event._id !== selectedEvent._id));
      // Close the panel after deletion
      closePanel();
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <div className='relative flex flex-row overflow-hidden'>
      <SideNavBar />
      <div className='flex flex-col flex-1'>
        <HeaderBar />
        <div className='p-4'>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor='start'
            endAccessor='end'
            style={{ height: 600 }}
            onSelectEvent={handleSelectEvent}
          />
        </div>
      </div>

      {selectedEvent && (
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-lg p-6 transition-transform duration-300 z-50 ${
            panelIsOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ width: '30%' }}
        >
          <>
            <h2 className='mb-4 text-2xl'>{selectedEvent.title}</h2>
            <p>
              <strong>Start:</strong> {new Date(selectedEvent.preferredDate).toLocaleString()}
            </p>
            <p>
              <strong>Vehicle Number:</strong> {selectedEvent.vehicleNumber}
            </p>
            <p>
              <strong>Service Types:</strong> {selectedEvent.serviceTypes.join(', ')}
            </p>
            <button
              onClick={handleDeleteAppointment}
              className='px-4 py-2 mt-4 mr-2 text-white bg-red-500 rounded'
            >
              Delete
            </button>
            <button
              onClick={closePanel}
              className='px-4 py-2 mt-4 text-white bg-blue-500 rounded'
            >
              Close
            </button>
          </>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
