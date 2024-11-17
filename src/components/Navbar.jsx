// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = ({ username, setUsername }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    setUsername('');
    localStorage.removeItem('username'); // Remove username from local storage
    navigate('/');
  };

  if (!username) return null; // Only show navbar if the user is logged in

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/homepage" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Homepage</Link></li>
        <li><Link to="/homepage/performance" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Leistung</Link></li>
        <li><button onClick={handleSignOut} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Abmelden</button></li>
      </ul>
    </nav>
  );
};
