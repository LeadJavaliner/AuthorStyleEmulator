import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';

const AnswerDisplay = ({ questions, answers }) => {
  const saveAnswers = () => {
    const content = questions.map((question, index) => `${question}: ${answers[index]}`).join('\n');
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'answers.txt';
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
        
        <Button variant='contained' color="primary" onClick={saveAnswers}>
          Download Answers As Text File
        </Button>
      </div>
    </div>
  );
};

const QuestionWizard = () => {
  const questions = [
    'What is the title of your event?',
    'What is the date and time for your event?',
    'What is the duration for your event?',
    'What kind of event is this?',
    // Rest of the questions...
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered
      setCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerChange = (event) => {
    const { value } = event.target;
    setAnswers({ ...answers, [currentQuestionIndex]: value });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleNextQuestion();
    }
  };


  const renderQuestions = () => {
    if (completed) {
      return <AnswerDisplay questions={questions} answers={answers} />;
    } else {
      return (
        <div className="container mt-5">
          <div className="hero-box p-3">
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              <h3>{questions[currentQuestionIndex]}</h3>
              <Input
                className="form-control mb-3"
                type="text"
                value={answers[currentQuestionIndex] || ''}
                onChange={handleAnswerChange}
                onKeyPress={handleKeyPress}
              />
              <Button variant="contained" color="primary" onClick={handleNextQuestion}>
                Next
              </Button>
              {currentQuestionIndex > 0 && (
                <Button
                  variant="contained" color="primary"
                  onClick={handlePreviousQuestion}
                >
                  Previous
                </Button>
                
              )}
            </Typography>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="text-center">
      <Typography variant="h2" align="center" color="textSecondary" paragraph>
        Event Creator
      </Typography>
      {renderQuestions()}
      <footer className="footer mt-auto py-3">
        <div className="container">
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://turinglimited.com/">
              Turing Limited
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </div>
      </footer>
    </div>
  );
};

export default QuestionWizard;
