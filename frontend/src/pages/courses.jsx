// Dashboard.js
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Profile from './Homepage';
import Courses from './Dashboard';
import Quiz from '../components/Quiz/QuizPage';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white fixed h-full flex flex-col p-5 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <NavLink to="profile" className={({ isActive }) => isActive ? "text-blue-200 font-semibold" : "text-white hover:text-blue-200"}>
            Profile
          </NavLink>
          <NavLink to="courses" className={({ isActive }) => isActive ? "text-blue-200 font-semibold" : "text-white hover:text-blue-200"}>
            Courses
          </NavLink>
          <NavLink to="quiz" className={({ isActive }) => isActive ? "text-blue-200 font-semibold" : "text-white hover:text-blue-200"}>
            Quiz
          </NavLink>
          <NavLink to="/" className="text-red-400 hover:text-red-500 font-semibold">
            Logout
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-10 w-full">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="courses" element={<Courses />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
