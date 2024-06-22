import React from 'react';
import { isToday } from 'date-fns';
import events from '../../../assets/Data/EventsData';

const Appointments = ({ className }) => {
  // Filter events to show only today's events
  const todayEvents = events.filter(event => isToday(new Date(event.start)));

  return (
    <div className={`mx-1 bg-custom-light-blue rounded-xl pr-3 pl-3 ${className} w-2/5`}>
      <p className='mt-3 '>Appointments Today</p>
      {todayEvents.length === 0 ? (
        <p>No events scheduled for today.</p>
      ) : (
        <div className="mt-5 space-y-2 overflow-y-auto h-4/5">
          {todayEvents.map(event => (
            <div key={event.id} className="flex items-center p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full">
                <span className="text-lg font-semibold text-white">{event.title.charAt(0)}</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600">{new Date(event.start).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Appointments;
