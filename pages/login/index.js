"use client"
import { useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-darkcolor">
      {/* Your custom SVG icon here */}
      {/* Use the desired React Icons here, e.g., <FaUser /> for user icon */}
      <FaUser className="w-16 h-16 mb-6 text-white" />

      <div className="w-full max-w-xs">
        <form className="bg-darkcolor shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="w-4 h-4 text-gray-500" />
              </span>
              <input
                className="pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="w-4 h-4 text-gray-500" />
              </span>
              <input
                className="pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <button
                className="absolute top-0 right-0 mt-3 mr-3 text-white"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="border border-white hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            {/* Add a "Forgot Password?" link or other actions if needed */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
