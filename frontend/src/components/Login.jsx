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
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Login failed! Please check your credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-8 z-50 max-w-sm w-full">
        <h2 className="text-4xl font-bold text-center duolingo-font text-blue-600 mb-6">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              placeholder="tonystark@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-blue-100 text-gray-700 border border-blue-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="********"
                className="w-full px-4 py-2 bg-blue-100 text-gray-700 border border-blue-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
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
        <p className="text-center text-gray-700 mt-4">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-blue-600 hover:underline"
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
