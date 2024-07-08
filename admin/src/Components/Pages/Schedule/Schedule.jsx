// src/components/Schedule.js
import React, { useState, useContext } from 'react';
import SideNavBar from '../../Containers/SideNavBar/SideNavBar';
import HeaderBar from '../../Containers/Header/Header';
import { AppointmentContext } from '../../../contexts/AppointmentContext';
import axios from 'axios';
import Requests from '../Requests/Requests';

const Schedule = () => {
  const { addAppointment } = useContext(AppointmentContext);
  const [form, setForm] = useState({
    customerName: '',
    email: '',
    mobile: '',
    address: '',
    NIC: '',
    vehicleNumber: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleType: '',
    preferredDate: '',
    timeSlot: '',
    serviceTypes: [],
  });
  const [newService, setNewService] = useState('');
  const [isServicePanelOpen, setIsServicePanelOpen] = useState(false);
  const [serviceOptions, setServiceOptions] = useState([
    "Oil Change",
    "Tire Rotation",
    "Brake Inspection",
    "Battery Check",
  ]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const timeSlots = [
    "08:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 02:00 PM",
    "02:00 PM - 04:00 PM",
    "04:00 PM - 06:00 PM",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleServiceChange = (service) => {
    setForm((prevForm) => {
      const { serviceTypes } = prevForm;
      if (serviceTypes.includes(service)) {
        return {
          ...prevForm,
          serviceTypes: serviceTypes.filter((s) => s !== service),
        };
      } else {
        return {
          ...prevForm,
          serviceTypes: [...serviceTypes, service],
        };
      }
    });
  };

  const handleAddService = () => {
    if (newService && !serviceOptions.includes(newService)) {
      setServiceOptions([...serviceOptions, newService]);
      setForm({
        ...form,
        serviceTypes: [...form.serviceTypes, newService],
      });
      setNewService('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentId = `APPT-${Date.now()}`;
    const newAppointment = { ...form, appointmentId, start: new Date(form.preferredDate), end: new Date(form.preferredDate), title: form.customerName };
    addAppointment(newAppointment);
    console.log(newAppointment);
    try {
      const token = localStorage.getItem("token")
      const response = await axios.post('http://localhost:3000/api/appointment/dashboard', form, {
        headers : {
          "x-auth-token": token
        }
      })
    } catch (error) {
      console.error(error)
    }

    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const handleRequestSelect = (request) => {
    setForm(request);
  };

  return (
    <div className='relative flex flex-row overflow-hidden'>
      <SideNavBar />
      <div className="flex flex-col flex-1">
        <HeaderBar />
        <div className="p-6">
          <Requests onRequestSelect={handleRequestSelect} />
          <h2 className="mb-6 text-2xl font-bold">Schedule an Appointment</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Customer Name</label>
              <input
                type="text"
                name="customerName"
                value={form.customerName}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">NIC</label>
              <input
                type="text"
                name="NIC"
                value={form.NIC}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Number</label>
              <input
                type="text"
                name="vehicleNumber"
                value={form.vehicleNumber}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Model</label>
              <input
                type="text"
                name="vehicleModel"
                value={form.vehicleModel}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Year</label>
              <input
                type="number"
                name="vehicleYear"
                value={form.vehicleYear}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
              <input
                type="text"
                name="vehicleType"
                value={form.vehicleType}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time Slot</label>
              <select
                name="timeSlot"
                value={form.timeSlot}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                required
              >
                <option value="" disabled>Select a time slot</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-between pt-4 md:col-span-2">
              <button
                type="button"
                className="w-1/2 p-2 mr-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={() => setIsServicePanelOpen(true)}
              >
                Select Service Types
              </button>
              <button
                type="submit"
                className="w-1/2 p-2 ml-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Schedule Appointment
              </button>
            </div>
          </form>
        </div>
      </div>

      {isServicePanelOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-gray-900 bg-opacity-50">
          <div className="w-1/3 h-full p-4 bg-white">
            <h3 className="mb-4 text-lg font-bold">Select Service Types</h3>
            <div className="grid md:grid-cols-2">
              {serviceOptions.map(service => (
                <label key={service} className="">
                  <input
                    type="checkbox"
                    name="serviceTypes"
                    value={service}
                    checked={form.serviceTypes.includes(service)}
                    onChange={() => handleServiceChange(service)}
                    className="form-checkbox"
                  />
                  <span className="ml-3">{service}</span>
                </label>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="text"
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                className="form-input"
                placeholder="Enter a new service"
              />
              <button
                onClick={handleAddService}
                className="ml-2 btn btn-primary"
              >
                Add Service
              </button>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="w-full p-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={() => setIsServicePanelOpen(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="p-4 bg-white rounded-md shadow-md animate-bounce">
            <h3 className="text-lg font-bold">Appointment Scheduled!</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
