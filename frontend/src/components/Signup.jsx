import React, { useState } from 'react';
import axios from 'axios';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Snowfall from 'react-snowfall';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://dreamfields-nj62.onrender.com/api/v1/signup', {
        name,
        email,
        age,
        city,
        password,
      });

      // Reset form fields after successful signup
      setName('');
      setEmail('');
      setAge('');
      setCity('');
      setPassword('');
      setConfirmPassword('');

      // Redirect or show success message after signup
      navigate('/dashboard'); // Adjust route based on your app's structure
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 z-50 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center duolingo-font text-blue-600 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-8 gap-y-4 nunito-font">
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              placeholder="Tony Stark"
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              placeholder="tonystark@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700 mb-1">Age</label>
            <input
              type="number"
              value={age}
              placeholder="12"
              onChange={(e) => setAge(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700 mb-1">City of India</label>
            <input
              type="text"
              value={city}
              placeholder="Mumbai"
              onChange={(e) => setCity(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
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
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                value={confirmPassword}
                placeholder="********"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
              >
                {confirmPasswordVisible ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="col-span-2 w-1/2 mx-auto bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-700 mt-6">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-blue-600 hover:text-blue-700 hover:underline"
          >
            Log In
          </button>
        </p>
      </div>
      <Snowfall />
    </div>
  );
};

export default Signup;
