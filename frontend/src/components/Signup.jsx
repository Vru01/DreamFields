import React, { useState } from 'react';
import axios from 'axios';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Snowfall from 'react-snowfall';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/v1/signup', {
        name,
        email,
        age,
        password,
      });

      // Reset form fields after successful signup
      setName('');
      setEmail('');
      setAge('');
      setPassword('');
      setConfirmPassword('');
      
      // Handle successful signup here
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle error here
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900">
      <div className="bg-gray-800 scale-105 text-white rounded-lg shadow-lg p-8 z-50 max-w-md w-full">
        <h2 className="text-4xl font-bold text-center duolingo-font text-gray-200 mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4 nunito-font">
          <div>
            <label className="block text-gray-100 mb-2">Name</label>
            <input
              type="text"
              value={name}
              placeholder='Tony Stark'
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-700 bg-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-100 mb-2">Email</label>
            <input
              type="email"
              value={email}
              placeholder='tonystark@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-700 bg-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-100 mb-2">Age</label>
            <input
              type="number"
              value={age}
              placeholder='12'
              onChange={(e) => setAge(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-700 bg-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-100 mb-2">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                placeholder=''
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-700 bg-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-100 hover:text-gray-200"
              >
                {passwordVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-gray-100 mb-2">Confirm Password</label>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                value={confirmPassword}
                placeholder=''
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-700 bg-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-100 hover:text-gray-200"
              >
                {confirmPasswordVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-100 mt-4">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-blue-400 hover:text-blue-500 hover:underline"
          >
            Log In
          </button>
        </p>
      </div>
      <Snowfall/>
    </div>
  );
};

export default Signup;
