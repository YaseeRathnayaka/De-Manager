import React, { useState } from 'react';

const AppointmentDetails = ({ className, appointment }) => {
  const [servicesCompleted, setServicesCompleted] = useState([]);

  if (!appointment) {
    return (
      <div className={`mx-1 bg-custom-light-blue rounded-xl p-4 ${className}`}>
        <p className='text-xl font-semibold text-gray-800'>Select an appointment to view details</p>
      </div>
    );
  }

  const toggleServiceCompletion = (service) => {
    setServicesCompleted((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className={`mx-1 bg-custom-light-blue rounded-xl p-4 ${className}`}>
      <h2 className='text-xl font-semibold text-gray-800'>Appointment Details</h2>
      <div className="mt-4">
        <h3 className='text-lg font-semibold text-gray-800'>{appointment.title}</h3>
        <p className='text-sm text-gray-600'>{new Date(appointment.start).toLocaleString()}</p>
        <button
          className="mt-2 text-sm text-blue-500 underline"
          onClick={() => alert(`Owner Details:\nName: ${appointment.customerName}\nEmail: ${appointment.email}\nMobile: ${appointment.mobile}\nAddress: ${appointment.address}\nNIC: ${appointment.NIC}\nVehicle Number: ${appointment.vehicleNumber}\nVehicle Model: ${appointment.vehicleModel}\nVehicle Year: ${appointment.vehicleYear}\nVehicle Type: ${appointment.vehicleType}`)}
        >
          View Owner Details
        </button>
      </div>
      <h3 className='mt-4 text-lg font-semibold text-gray-800'>Services To Be Done</h3>
      <ul className="mt-2 space-y-2">
        {appointment.serviceTypes.map((service, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={servicesCompleted.includes(service)}
              onChange={() => toggleServiceCompletion(service)}
              className="form-checkbox"
            />
            <span className="ml-2">{service}</span>
          </li>
        ))}
      </ul>
      {servicesCompleted.length === appointment.serviceTypes.length && (
        <button
          className="w-full p-2 mt-4 text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-600"
          onClick={() => alert('All services completed!')}
        >
          Mark as Completed
        </button>
      )}
    </div>
  );
};

export default AppointmentDetails;
