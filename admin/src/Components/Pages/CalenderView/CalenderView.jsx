import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import HeaderBar from '../../Containers/Header/Header';
import SideNavBar from '../../Containers/SideNavBar/SideNavBar';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const ConfirmationModal = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <p className="text-lg">{message}</p>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 mr-2 text-sm text-white bg-red-500 rounded-md"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const CalendarView = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [panelIsOpen, setPanelIsOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedAppointmentDetails, setSelectedAppointmentDetails] = useState(null);

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
    setSelectedAppointmentDetails(event); // Set selected appointment details
    setPanelIsOpen(true);
  };

  const closePanel = () => {
    setPanelIsOpen(false);
    setSelectedEvent(null);
    setSelectedAppointmentDetails(null); // Clear selected appointment details
  };

  const handleDeleteAppointment = () => {
    setShowConfirmation(true);
  };

  const confirmDeleteAppointment = async () => {
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
    } finally {
      setShowConfirmation(false);
    }
  };

  const cancelDeleteAppointment = () => {
    setShowConfirmation(false);
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
            {/* Display additional details */}
            <h3 className='mt-4 text-xl font-semibold text-gray-800'>Customer Details</h3>
            <p><strong>Name:</strong> {selectedAppointmentDetails.customerName}</p>
            <p><strong>Email:</strong> {selectedAppointmentDetails.email}</p>
            <p><strong>Mobile:</strong> {selectedAppointmentDetails.mobile}</p>
            <p><strong>Address:</strong> {selectedAppointmentDetails.address}</p>
            <p><strong>NIC:</strong> {selectedAppointmentDetails.NIC}</p>
            <p><strong>Vehicle Model:</strong> {selectedAppointmentDetails.vehicleModel}</p>
            <p><strong>Vehicle Year:</strong> {selectedAppointmentDetails.vehicleYear}</p>
            <p><strong>Vehicle Type:</strong> {selectedAppointmentDetails.vehicleType}</p>
            
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

      {showConfirmation && (
        <ConfirmationModal
          message="Are you sure you want to delete this appointment?"
          onCancel={cancelDeleteAppointment}
          onConfirm={confirmDeleteAppointment}
        />
      )}
    </div>
  );
};

export default CalendarView;
