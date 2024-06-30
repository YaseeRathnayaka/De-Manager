import React, { useState } from 'react';

const ThirdPage = () => {
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
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2 style={styles.header}>Make Your Reservation Here</h2>
            
            <div style={styles.section}>
                <h3>VEHICLE DETAILS</h3>
                <label style={styles.label}>
                    Vehicle Make*:
                    <input type="text" name="vehicleMake" value={formData.vehicleMake} onChange={handleChange} required style={styles.input} />
                </label>
                <label style={styles.label}>
                    Vehicle Model:
                    <input type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required style={styles.input} />
                </label>
                <label style={styles.label}>
                    Vehicle Number*:
                    <input type="text" name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} required style={styles.input} />
                </label>
                <label style={styles.label}>
                    Manufactured Year*:
                    <input type="text" name="manufacturedYear" value={formData.manufacturedYear} onChange={handleChange} required style={styles.input} />
                </label>
                <label style={styles.label}>
                    Preferred Date*:
                    <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required style={styles.input} />
                </label>
                <label style={styles.label}>
                    Preferred Branch*:
                    <select name="preferredBranch" value={formData.preferredBranch} onChange={handleChange} required style={styles.input}>
                        <option value="">Balangoda</option>
                        <option value="">Kurunegala</option>
                        <option value="">Colombo</option>
                    </select>
                </label>
                <label style={styles.label}>
                    Preferred Time*:
                    <input type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} required style={styles.input} />
                </label>
            </div>

            <div style={styles.section}>
                <h3>OWNER’S DETAILS</h3>
                <label style={styles.label}>
                    Name*:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={styles.input} />
                </label>
                <label style={styles.label}>
                    E-mail*:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
                </label>
                <label style={styles.label}>
                    Mobile Number*:
                    <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required style={styles.input} />
                </label>
                <label style={styles.label}>
                    Address*:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required style={styles.input} />
                </label>
                <label style={{ ...styles.label, ...styles.fullWidth }}>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} style={styles.textarea} />
                </label>
            </div>
            
            <button type="submit" style={styles.button}>Submit</button>
        </form>
    );
};

const styles = {
    form: {
        maxWidth: '100%',
        margin: '0 auto',
        padding: '30px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    section: {
        marginBottom: '20px',
        paddingRight: '20px',
        flex: '0 0 48%',
        boxSizing: 'border-box'
    },
    fullWidth: {
        flex: '0 0 100%'
    },
    label: {
        display: 'block',
        marginBottom: '10px',
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        padding: '16px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box'
    },
    textarea: {
        width: '100%',
        padding: '16px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        resize: 'none', 
        height: '210px'
    },
    button: {
        display: 'block',
        width: '100%',
        padding: '15px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        marginLeft:'25%',
        marginRight:'25%',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
        flex: '0 0 100%'
    }
};

export default ThirdPage;
