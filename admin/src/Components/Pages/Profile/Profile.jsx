import React, { useEffect, useState } from "react";
import HeaderBar from "../../Containers/Header/Header";
import SideNavBar from "../../Containers/SideNavBar/SideNavBar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "", // Assuming you have a password input in the form
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/api/users/me", {
          headers: {
            "x-auth-token": token,
          },
        });
        setProfile(response.data);
      } catch (error) {
        const errorMessage = error.response
          ? error.response.data
          : error.message;
        toast.error(`Error fetching profile: ${errorMessage}`, toastOptions);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a payload with only the fields that can be updated
    const updatePayload = {
      name: profile.name,
      email: profile.email,
    };

    // Only add password if it is not empty
    if (profile.password) {
      updatePayload.password = profile.password;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "http://localhost:3000/api/users",
        updatePayload, // Only send the fields that are allowed for update
        {
          headers: {
            "x-auth-token": token,
            "Content-Type": "application/json", // Ensure correct content type
          },
        }
      );
      toast.success("Profile Updated Successfully", toastOptions);
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      toast.error(`Error fetching profile: ${errorMessage}`, toastOptions);
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden">
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
            {/* Email */}
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border"
                readOnly // Assuming email is not editable
              />
            </div>
            {/* Password Change */}
            <div>
              <label className="block mb-1">Change Password</label>
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
                placeholder="Enter new password"
                className="w-full px-3 py-2 border"
              />
            </div>
            {/* Save Button */}
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
