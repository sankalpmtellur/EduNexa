import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const rawName = localStorage.getItem('fullname') || 'User';
  const username = rawName.charAt(0).toUpperCase() + rawName.slice(1);

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <div className="home-container">
      <h1>Welcome, {username}!</h1>
      <p>Get ready to test your math skills!</p>

      <div className="difficulty-box">
        <label htmlFor="difficulty">Select Difficulty:</label>
        <select id="difficulty">
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <button className="start-button" onClick={handleStart}>
        Start Quiz
      </button>
    </div>
  );
};

export default HomePage;