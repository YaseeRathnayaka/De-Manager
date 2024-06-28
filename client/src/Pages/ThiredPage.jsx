import React, { useState } from 'react';

const ThiredPage = () => {
    const [formData, setFormData] = useState({
        vehicleMake: '',
        vehicleModel: '',
        vehicleNumber: '',
        manufacturedYear: '',
        preferredDate: '',
        preferredBranch: '',
        preferredTime: '',
        name: '',
        email: '',
        mobileNumber: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // You can send this formData to your server or use it as needed
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Make Your Reservation Here</h2>
            
            <div>
                <h3>VEHICLE DETAILS</h3>
                <label>
                    Vehicle Make*:
                    <input type="text" name="vehicleMake" value={formData.vehicleMake} onChange={handleChange} required />
                </label>
                <label>
                    Vehicle Model*:
                    <input type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required />
                </label>
                <label>
                    Vehicle Number*:
                    <input type="text" name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} required />
                </label>
                <label>
                    Manufactured Year*:
                    <input type="text" name="manufacturedYear" value={formData.manufacturedYear} onChange={handleChange} required />
                </label>
                <label>
                    Preferred Date*:
                    <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required />
                </label>
                <label>
                    Preferred Branch*:
                    <select name="preferredBranch" value={formData.preferredBranch} onChange={handleChange} required>
                        <option value="">Select Branch</option>
                        {/* Add options here */}
                    </select>
                </label>
                <label>
                    Preferred Time*:
                    <input type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} required />
                </label>
            </div>

            <div>
                <h3>OWNER’S DETAILS</h3>
                <label>
                    Name*:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    E-mail*:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Mobile Number*:
                    <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
                </label>
                <label>
                    Address*:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} />
                </label>
            </div>
            
            <button type="submit">Submit</button>
        </form>
    );
};

export default ThiredPage;
