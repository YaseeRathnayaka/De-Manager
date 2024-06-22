import React from 'react';
import { isToday } from 'date-fns';
import events from '../../../assets/Data/EventsData';

const Appointments = ({ className }) => {
  // Filter events to show only today's events
  const todayEvents = events.filter(event => isToday(new Date(event.start)));

  return (
    <div className={`mx-1 bg-custom-light-blue rounded-xl p-4 ${className} w-2/5`}>
        <p className='pb-3'>Appointemnts Today</p>
      {todayEvents.length === 0 ? (
        <p>No events scheduled for today.</p>
      ) : (
        <div className="space-y-2">
          {todayEvents.map(event => (
            <div key={event.id} className="flex items-center p-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
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
