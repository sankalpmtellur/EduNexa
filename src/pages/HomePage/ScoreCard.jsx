import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ScoreCard.css';

const ScoreCard = () => {
  const location = useLocation();

  if (!location.state) {
    return (
      <div className="scorecard-container">
        <h2>Error</h2>
        <p>Quiz data not found. Please take the quiz first.</p>
        <Link to="/quiz"><button>Go to Quiz</button></Link>
      </div>
    );
  }

  const { score, correctAnswers, userAnswers, totalQuestions } = location.state;

  return (
    <div className="scorecard-container">
      <h1>Quiz Completed!</h1>
      <div className="score-info">
        <p><strong>Score:</strong> {score} / {totalQuestions}</p>
        <p><strong>Correct Answers:</strong> {correctAnswers.length}</p>
      </div>

      <div className="answers-section">
        <h2>Your Answers:</h2>
        {userAnswers.map((answer, index) => (
          <div key={index} className="answer">
            <p><strong>Q{index + 1}:</strong> {answer}</p>
            {answer === correctAnswers[index] ? (
              <p className="correct">✔ Correct</p>
            ) : (
              <p className="incorrect">❌ Incorrect (Correct: {correctAnswers[index]})</p>
            )}
          </div>
        ))}
      </div>

      <div className="buttons">
        <Link to="/quiz">
          <button className="retry-button">Retry Quiz</button>
        </Link>
        <Link to="/home">
          <button className="home-button">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ScoreCard;