import React from 'react';
import { format, isToday } from 'date-fns';
import HeaderBar from '../../Containers/Header/Header';
import SideNavBar from '../../Containers/SideNavBar/SideNavBar';
import events from '../../../assets/Data/EventsData';

const ListView = () => {
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
              <div key={event.id} className="p-4 mb-4 bg-gray-100 rounded-lg shadow">
                <h3 className="text-xl">{event.title}</h3>
                <p><strong>Start:</strong> {format(new Date(event.start), 'PPpp')}</p>
                <p><strong>End:</strong> {format(new Date(event.end), 'PPpp')}</p>
                <p><strong>Description:</strong> {event.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ListView;
