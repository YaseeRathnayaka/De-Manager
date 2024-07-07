import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AppointmentDetails = ({ className, appointment, onCompleteAppointment }) => {
  const [servicesCompleted, setServicesCompleted] = useState([]);

  useEffect(() => {
    if (appointment) {
      setServicesCompleted([]);
    }
  }, [appointment]);

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

  const handleMarkAsCompleted = async () => {
  try {
    if (servicesCompleted.length === appointment.serviceTypes.length) {
      onCompleteAppointment(appointment._id);
      console.log(appointment._id)
      const token = localStorage.getItem("token");
      
      const response = await axios.put(`http://localhost:3000/api/appointment/${appointment._id}`, {
        isCompleted: true,
      }, {
        headers: {
          "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhMjc4NTU2NTc2NTQxMmNiMmFkNzEiLCJpYXQiOjE3MjAzMzA2MzN9.lm4edYXkkMAU5ffumtEeNAJLnrJfG-J0qu1h_QMZeds"
        }
      });

      if (response.status === 200) {
        alert('Appointment marked as completed!');
      } else {
        console.error('Error marking appointment as completed:', response);
      }
    } else {
      alert('Not all services are completed.');
    }
  } catch (error) {
    console.error('Error marking appointment as completed:', error);
    alert('Failed to mark appointment as completed.');
  }
};

  return (
    <div className={`mx-1 bg-custom-light-blue rounded-xl p-4 ${className}`}>
      <h2 className='text-xl font-semibold text-gray-800'>Appointment Details</h2>
      <div className="mt-4">
        <h3 className='text-lg font-semibold text-gray-800'>{appointment.vehicleNumber}</h3>
        <p className='text-sm text-gray-600'>{new Date(appointment.preferredDate).toLocaleDateString()}</p>
        <p className='text-sm text-gray-600'>{appointment.timeSlot}</p>
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
              checked={appointment.isCompleted || servicesCompleted.includes(service)}
              onChange={() => toggleServiceCompletion(service)}
              className="form-checkbox"
              disabled={appointment.isCompleted}
            />
            <span className="ml-2">{service}</span>
          </li>
        ))}
      </ul>
      {servicesCompleted.length === appointment.serviceTypes.length && !appointment.isCompleted &&(
        <button
          className="w-full p-2 mt-4 text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-600"
          onClick={handleMarkAsCompleted}
        >
          Mark as Completed
        </button>
      )}
    </div>
  );
};

export default AppointmentDetails;
