import React, { useState } from 'react';
import HeaderBar from '../../Containers/Header/Header';
import SideNavBar from '../../Containers/SideNavBar/SideNavBar';

const Profile = () => {
  // Example state to hold profile information
  const [profile, setProfile] = useState({
    name: 'John Doe',
    age: 30,
    photoUrl: 'path/to/default/photo.jpg',
    // other profile details
  });

  const [newPhoto, setNewPhoto] = useState(null); // State for new photo upload

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to save updated profile data and photo (e.g., API call)
    console.log('Profile updated:', profile);
    console.log('New photo:', newPhoto); // Handle new photo upload separately
    // Optionally, show success message or update UI
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  // Function to handle photo upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setNewPhoto(file);
  };

  return (
    <div className='flex flex-row h-screen overflow-hidden'>
      <SideNavBar />
      <div className="flex flex-col flex-1">
        <HeaderBar />
        <div className="p-4">
          <h2 className="mb-4 text-xl font-semibold">Edit Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border"
              />
            </div>
            {/* Age */}
            <div>
              <label className="block mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={profile.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border"
              />
            </div>
            {/* Current Photo Preview */}
            <div className="flex items-center space-x-4">
              <img
                src={profile.photoUrl}
                alt="Current Profile"
                className="object-cover w-16 h-16 rounded-full"
              />
              <label className="block mb-1">Current Photo</label>
            </div>
            {/* New Photo Upload */}
            <div>
              <label className="block mb-1">Upload New Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="w-full px-3 py-2 border"
              />
            </div>
            {/* Password Change */}
            <div>
              <label className="block mb-1">Change Password</label>
              <input
                type="password"
                name="password"
                // Add onChange and value if you manage password state
                placeholder="Enter new password"
                className="w-full px-3 py-2 border"
              />
            </div>
            {/* Save Button */}
            <button type="submit" className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
