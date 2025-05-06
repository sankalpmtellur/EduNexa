import React, { useState, useEffect } from 'react';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: "What is 12 + 8?",
    options: ["18", "20", "21", "22"],
    answer: "20"
  },
  {
    question: "What is 7 × 6?",
    options: ["42", "36", "48", "40"],
    answer: "42"
  },
  {
    question: "What is 15 ÷ 3?",
    options: ["4", "5", "6", "3"],
    answer: "5"
  },
  {
    question: "What is 9²?",
    options: ["81", "72", "64", "99"],
    answer: "81"
  },
  {
    question: "What is the square root of 144?",
    options: ["12", "14", "16", "10"],
    answer: "12"
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState('');
  const [time, setTime] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    let newScore = score;
    if (selected === questions[currentQ].answer) {
      newScore += 1;
    }

    const updatedAnswers = [...userAnswers, selected];
    setScore(newScore);
    setUserAnswers(updatedAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected('');
    } else {
      navigate('/scorecard', {
        state: {
          score: newScore,
          correctAnswers: questions.map(q => q.answer),
          userAnswers: updatedAnswers,
          totalQuestions: questions.length
        }
      });
    }
  };

  return (
    <div className="quiz-container">
      <div className="top-bar">
        <span>Question {currentQ + 1} of {questions.length}</span>
        <span>Time: {time}s</span>
      </div>

      <h2>{questions[currentQ].question}</h2>
      <div className="options">
        {questions[currentQ].options.map((option, idx) => (
          <button
            key={idx}
            className={`option-button ${selected === option ? 'selected' : ''}`}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <button className="next-button" onClick={handleNext} disabled={!selected}>
        {currentQ === questions.length - 1 ? "Submit Quiz" : "Next"}
      </button>
    </div>
  );
};

export default Quiz;