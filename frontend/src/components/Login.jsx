// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Snowfall from 'react-snowfall';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/v1/login', {
        email,
        password,
      });
      // Navigate to another page upon successful login
      navigate('/dashboard'); // Adjust route based on your app's structure
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Login failed! Please check your credentials.');
    }
  };

  return (
    <div className="flex items-center  justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="bg-gray-800 scale-125 rounded-lg shadow-lg p-8 z-50 max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6 duolingo-font">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4 nunito-font">
          <div>
            <label className="block text-gray-100 mb-2">Email</label>
            <input
              type="email"
              value={email}
              placeholder='tonystark@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-100 mb-2">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='********'
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-100 hover:text-gray-200"
              >
                {passwordVisible ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-200"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-gray-100 mt-4">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-blue-400 hover:underline"
          >
            Create Account
          </button>
        </p>
      </div>
      <Snowfall />
    </div>
  );
};

export default Login;
