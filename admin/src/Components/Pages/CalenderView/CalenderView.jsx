import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import HeaderBar from '../../Containers/Header/Header';
import SideNavBar from '../../Containers/SideNavBar/SideNavBar';
import events from '../../../assets/Data/EventsData'; 

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [panelIsOpen, setPanelIsOpen] = useState(false);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setPanelIsOpen(true);
  };

  const closePanel = () => {
    setPanelIsOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className='relative flex flex-row overflow-hidden'>
      <SideNavBar />
      <div className="flex flex-col flex-1">
        <HeaderBar />
        <div className="p-4">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            onSelectEvent={handleSelectEvent}
          />
        </div>
      </div>

      <div className={`fixed top-0 right-0 h-full bg-white shadow-lg p-6 transition-transform duration-300 z-50 ${panelIsOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ width: '30%' }}>
        {selectedEvent && (
          <>
            <h2 className="mb-4 text-2xl">{selectedEvent.title}</h2>
            <p><strong>Start:</strong> {new Date(selectedEvent.start).toLocaleString()}</p>
            <p><strong>End:</strong> {new Date(selectedEvent.end).toLocaleString()}</p>
            <p><strong>Description:</strong> {selectedEvent.description}</p>
            <p><strong>Vehicle Number:</strong> {selectedEvent.vehicleNumber}</p>
            <p><strong>Customer Service:</strong> {selectedEvent.customerService}</p>
            <button
              onClick={closePanel}
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
