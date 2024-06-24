import React, { useState } from 'react';
import SideNavBar from '../../Containers/SideNavBar/SideNavBar';
import HeaderBar from '../../Containers/Header/Header';

const Schedule = () => {
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

  const serviceOptions = [
    "Oil Change",
    "Tire Rotation",
    "Brake Inspection",
    "Battery Check",
    // Add more services as needed
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentId = `APPT-${Date.now()}`;
    const newAppointment = { ...form, appointmentId };
    // Add the new appointment to the calendar (implementation depends on your calendar system)
    console.log(newAppointment);
  };

  return (
    <div className='relative flex flex-row overflow-hidden'>
      <SideNavBar />
      <div className="flex flex-col flex-1">
        <HeaderBar />
        <div className="pt-2 pl-6 mr-3">
          <h2 className="mb-3 text-2xl font-bold">Schedule an Appointment</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Service Types</label>
              <div className="mt-1">
                {serviceOptions.map(service => (
                  <label key={service} className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      name="serviceTypes"
                      value={service}
                      checked={form.serviceTypes.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="form-checkbox"
                    />
                    <span className="ml-2">{service}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="pt-4 md:col-span-2">
              <button
                type="submit"
                className="w-full p-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Schedule Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
