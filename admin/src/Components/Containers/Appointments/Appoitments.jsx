import React from 'react';

const Appointments = ({ className, onSelectAppointment, appointments, completedAppointments }) => {
  return (
    <div className={`mx-1 bg-custom-light-blue rounded-xl p-4 ${className}`}>
      <h2 className='text-xl font-semibold text-gray-800'>Appointments</h2>
      <ul className="mt-4 space-y-2">
        {appointments.map((appointment) => (
          <li
            key={appointment.id}
            className={`relative p-4 rounded-xl cursor-pointer bg-white ${
              completedAppointments.includes(appointment.id) ? 'border-r-4 border-green-500' : ''
            }`}
            onClick={() => onSelectAppointment(appointment)}
          >
            <h3 className='text-lg font-semibold text-gray-800'>{appointment.title}</h3>
            <p className='text-sm text-gray-600'>{new Date(appointment.start).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
