import React, { useState } from 'react';
import axios from 'axios';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://your-backend-url/login', {
        email,
        password,
      });
      // Handle successful login here
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error here
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              value={email}
              placeholder='tonystark@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                placeholder=''
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {passwordVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-200"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-blue-600 hover:underline"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;