// src/components/Requests.js
import React, { useContext } from 'react';
import { AppointmentContext } from '../../../contexts/AppointmentContext';

const Requests = ({ onRequestSelect }) => {
  const { requests } = useContext(AppointmentContext);

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Requests</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {requests.map((request) => (
          <div
            key={request.id}
            className="p-4 border rounded-md cursor-pointer"
            onClick={() => onRequestSelect(request)}
          >
            <h3 className="text-lg font-bold">{request.customerName}</h3>
            <p>{request.email}</p>
            <p>{request.mobile}</p>
            <p>{request.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
