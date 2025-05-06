import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1 className="landing-title">EduNexa</h1>
      <p className="landing-tagline">Smart Practice. Smarter You.</p>
      <button className="start-button" onClick={() => navigate('/login')}>
        Let's Start
      </button>
    </div>
  );
}

export default LandingPage;