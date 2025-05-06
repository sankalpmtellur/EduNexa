import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import Quiz from './pages/HomePage/Quiz';
import ScoreCard from './pages/HomePage/ScoreCard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/scorecard" element={<ScoreCard />} />
    </Routes>
  );
}

export default App;