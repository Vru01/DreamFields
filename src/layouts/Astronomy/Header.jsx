import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex justify-between p-4 bg-black/20 text-white">
    <h1 className="text-2xl font-bold">DreamFields</h1>
    <nav className="flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  </header>
);

export default Header;
