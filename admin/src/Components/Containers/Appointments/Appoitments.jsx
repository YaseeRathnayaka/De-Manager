import React from 'react';

const Appointments = ({ className, onSelectAppointment, appointments }) => {
  return (
    <div className={`mx-1 bg-custom-light-blue rounded-xl p-4 ${className}`}>
      <h2 className='text-xl font-semibold text-gray-800'>Appointments</h2>
      <ul className="mt-4 space-y-2">
        {appointments.map((appointment) => (
          <li
            key={appointment._id}
            className={`relative p-4 rounded-xl cursor-pointer bg-white`}
            onClick={() => onSelectAppointment(appointment)}
          >
            {appointment.isCompleted && (
              <div className="absolute px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded top-2 right-2">
                Completed
              </div>
            )}
            <h3 className='text-lg font-semibold text-gray-800'>{appointment.vehicleNumber}</h3>
            <p className='text-sm text-gray-600'>{new Date(appointment.preferredDate).toLocaleDateString()}</p>
            <p className='text-sm text-gray-600'>{appointment.timeSlot}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
