import { useState, useEffect, useCallback } from 'react';
import questionsData from '../data/questions.json';

export function useExamSession() {
  const [examType, setExamType] = useState(null); // 'english' or 'computer'
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'running' | 'completed'
  const [timeRemaining, setTimeRemaining] = useState(0); // seconds

  const startExam = useCallback((type, durationSeconds = 600) => {
    if (!questionsData[type]) {
      console.error(`Invalid exam type: ${type}`);
      return;
    }
    setExamType(type);
    setQuestions(questionsData[type]);
    setCurrentIndex(0);
    setUserAnswers({});
    setStatus('running');
    setTimeRemaining(durationSeconds);
  }, []);

  const endExam = useCallback(() => {
    setStatus('completed');
  }, []);

  const submitAnswer = useCallback((questionId, answer) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  }, []);

  const nextQuestion = useCallback(() => {
    setCurrentIndex(prev => Math.min(prev + 1, questions.length - 1));
  }, [questions.length]);

  const prevQuestion = useCallback(() => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  }, []);

  const reset = useCallback(() => {
    setStatus('idle');
    setExamType(null);
    setQuestions([]);
    setCurrentIndex(0);
    setUserAnswers({});
    setTimeRemaining(0);
  }, []);

  // Timer logic
  useEffect(() => {
    let timer;
    if (status === 'running' && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            endExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [status, timeRemaining, endExam]);

  // Calculate score when completed
  let score = 0;
  if (status === 'completed') {
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
  }

  return {
    examType,
    questions,
    currentIndex,
    currentQuestion: questions[currentIndex] || null,
    userAnswers,
    status,
    timeRemaining,
    score,
    totalQuestions: questions.length,
    startExam,
    submitAnswer,
    nextQuestion,
    prevQuestion,
    endExam,
    reset
  };
}
