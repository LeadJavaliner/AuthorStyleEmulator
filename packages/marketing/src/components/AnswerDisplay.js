import React from 'react';
import { Typography, Button } from '@material-ui/core';

const AnswerDisplay = ({ questions, answers }) => {
  const saveAnswers = () => {
    const content = JSON.stringify(
      questions.reduce((acc, question, index) => {
        acc[question] = answers[index];
        return acc;
      }, {}),
      null,
      2
    );
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = 'answers.json';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="container mt-5">
      <div className="hero-box p-3">
        <Typography variant="h5" color="textSecondary" paragraph>
          Answers:
        </Typography>
        <Typography variant="body" color="textSecondary" paragraph>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                <strong>{question}</strong>: {answers[index]}
              </li>
            ))}
          </ul>
        </Typography>

        <Button variant="contained" color="primary" onClick={saveAnswers}>
          Download Answers As JSON File
        </Button>
      </div>
    </div>
  );
};

export default AnswerDisplay;
