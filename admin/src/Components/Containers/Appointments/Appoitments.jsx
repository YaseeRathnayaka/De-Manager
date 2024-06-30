import React, { useState } from 'react';
import { isToday } from 'date-fns';
import events from '../../../assets/Data/EventsData';

const Appointments = ({ className, onSelectAppointment }) => {
  // Filter events to show only today's events
  const todayEvents = events.filter(event => isToday(new Date(event.start)));

  return (
    <div className={`mx-1 bg-custom-light-blue rounded-xl p-4 ${className}`}>
      <p className='text-xl font-semibold text-gray-800'>Appointments Today</p>
      {todayEvents.length === 0 ? (
        <p className='mt-3 text-gray-600'>No events scheduled for today.</p>
      ) : (
        <div className="mt-4 space-y-3 overflow-y-auto h-96">
          {todayEvents.map(event => (
            <div key={event.id} className="flex items-center p-3 bg-white rounded-lg shadow-md hover:bg-gray-100">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full">
                <span className="text-lg font-semibold text-white">{event.title.charAt(0)}</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-600">{new Date(event.start).toLocaleString()}</p>
                <button
                  className="mt-2 text-sm text-blue-500 underline"
                  onClick={() => onSelectAppointment(event)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;
