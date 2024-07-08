import React, { useEffect, useState } from "react";
import profile from "./../../../assets/Login2.jpg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { password, email } = values;
    if (password === "") {
      toast.error("Username and Password are required", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Username and Password are required", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        const { password, email } = values;
        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          {
            email,
            password,
          }
        );
        const token = response.headers["x-auth-token"];
        if (token) {
          localStorage.setItem("token", token);
          navigate("/");
        } else {
          toast.error("No token found in response", toastOptions);
        }
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data, toastOptions);
        } else {
          toast.error(error.message, toastOptions);
        }
        console.error("Error: ", error);
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-3/5 h-full bg-gray-800">
        <div className="w-full mt-20 ml-20 bg-purple-100 h-4/5">
          <img src={profile} alt="Profile" className="w-auto h-full" />
        </div>
      </div>

      <div className="w-2/5 h-full">
        <div className="w-11/12 mt-20 mr-40 bg-gray-300 h-4/5">
          <div className="flex flex-col items-center justify-center w-3/5 p-32 ml-28">
            <h2 className="mb-4 text-2xl font-bold">Login Your Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  className="p-3 bg-purple-100 border rounded-md w-96 focus:outline-none focus:border-gray-800"
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  className="p-3 bg-purple-100 border rounded-md focus:outline-none focus:border-gray-800 w-96"
                />
              </div>
              <button
                type="submit"
                className="p-3 mb-4 text-white bg-purple-800 rounded-md w-96 hover:bg-purple-900"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
