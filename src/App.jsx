import React, { useState } from 'react';
import { useExamSession } from './hooks/useExamSession';
import { Plane, Monitor, Clock, CheckCircle, XCircle, ArrowRight, ArrowLeft, RefreshCw, Award, BarChart2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function App() {
  const session = useExamSession();

  if (session.status === 'idle') {
    return <Dashboard startExam={session.startExam} />;
  }

  if (session.status === 'running') {
    return <ExamRunner session={session} />;
  }

  if (session.status === 'completed') {
    return <ResultsSummary session={session} />;
  }

  return null;
}

function Dashboard({ startExam }) {
  const [selectedSubject, setSelectedSubject] = useState(null); // 'english' or 'computer'

  const handleStart = (level) => {
    startExam(selectedSubject, level, 600); // 10 minutes default
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transition-all">
        <div className="bg-slate-900 p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <Plane className="w-16 h-16 text-blue-400 mx-auto mb-4 relative z-10" />
          <h1 className="text-3xl font-bold text-white relative z-10">Airport Staff Exam Simulator</h1>
          <p className="text-slate-300 mt-2 relative z-10">Professional Readiness Assessment</p>
        </div>
        
        <div className="p-8">
          {!selectedSubject ? (
            <>
              <h2 className="text-xl font-semibold text-slate-800 mb-6 text-center">Step 1: Select Subject</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button 
                  onClick={() => setSelectedSubject('english')}
                  className="group flex flex-col items-center p-8 bg-blue-50 hover:bg-blue-600 rounded-2xl transition-all duration-300 border border-blue-100 hover:border-transparent shadow-sm hover:shadow-lg text-blue-900 hover:text-white"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-blue-600 group-hover:text-blue-600 shadow-sm">
                    <span className="text-2xl font-bold">En</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">English Proficiency</h3>
                  <p className="text-sm text-center opacity-80">Grammar, Vocabulary, & Communication</p>
                </button>

                <button 
                  onClick={() => setSelectedSubject('computer')}
                  className="group flex flex-col items-center p-8 bg-emerald-50 hover:bg-emerald-600 rounded-2xl transition-all duration-300 border border-emerald-100 hover:border-transparent shadow-sm hover:shadow-lg text-emerald-900 hover:text-white"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-emerald-600 group-hover:text-emerald-600 shadow-sm">
                    <Monitor className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Computer Skills</h3>
                  <p className="text-sm text-center opacity-80">Microsoft 365 (Word, Excel, PowerPoint)</p>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-slate-800">Step 2: Select Difficulty Level</h2>
                <button 
                  onClick={() => setSelectedSubject(null)}
                  className="text-sm text-blue-600 hover:underline flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back to Subjects
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button onClick={() => handleStart('beginner')} className="p-6 bg-white border-2 border-slate-200 hover:border-blue-500 rounded-xl transition-all hover:shadow-md group">
                  <h4 className="text-lg font-bold text-slate-700 group-hover:text-blue-600 mb-1">Beginner</h4>
                  <p className="text-sm text-slate-500">Foundation concepts</p>
                </button>
                <button onClick={() => handleStart('intermediate')} className="p-6 bg-white border-2 border-slate-200 hover:border-orange-500 rounded-xl transition-all hover:shadow-md group">
                  <h4 className="text-lg font-bold text-slate-700 group-hover:text-orange-600 mb-1">Intermediate</h4>
                  <p className="text-sm text-slate-500">Standard operational scenarios</p>
                </button>
                <button onClick={() => handleStart('advanced')} className="p-6 bg-white border-2 border-slate-200 hover:border-red-500 rounded-xl transition-all hover:shadow-md group">
                  <h4 className="text-lg font-bold text-slate-700 group-hover:text-red-600 mb-1">Advanced</h4>
                  <p className="text-sm text-slate-500">Complex problem solving</p>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function ExamRunner({ session }) {
  const { currentQuestion, currentIndex, totalQuestions, userAnswers, submitAnswer, nextQuestion, prevQuestion, endExam, timeRemaining, examType, examLevel } = session;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
            {examType === 'english' ? <span className="text-white font-bold">En</span> : <Monitor className="text-white w-5 h-5" />}
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-800 capitalize">{examType} - {examLevel}</h2>
            <p className="text-xs text-slate-500">Question {currentIndex + 1} of {totalQuestions}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full">
          <Clock className={`w-4 h-4 ${timeRemaining < 60 ? 'text-red-500 animate-pulse' : 'text-slate-600'}`} />
          <span className={`font-mono font-bold ${timeRemaining < 60 ? 'text-red-500' : 'text-slate-800'}`}>
            {formatTime(timeRemaining)}
          </span>
        </div>
      </header>

      <div className="w-full bg-slate-200 h-1">
        <div className="bg-blue-600 h-1 transition-all duration-300" style={{ width: `${progress}%` }}></div>
      </div>

      <main className="flex-1 max-w-3xl w-full mx-auto p-6 md:p-8 flex flex-col justify-center">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-4">
            {currentQuestion.topic}
          </div>
          <h3 className="text-2xl font-medium text-slate-900 mb-8 leading-relaxed">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = userAnswers[currentQuestion.id] === option;
              return (
                <button
                  key={idx}
                  onClick={() => submitAnswer(currentQuestion.id, option)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center space-x-4
                    ${isSelected 
                      ? 'border-blue-600 bg-blue-50 shadow-sm' 
                      : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50 bg-white'
                    }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0
                    ${isSelected ? 'border-blue-600' : 'border-slate-300'}
                  `}>
                    {isSelected && <div className="w-3 h-3 bg-blue-600 rounded-full" />}
                  </div>
                  <span className={`text-lg ${isSelected ? 'text-blue-900 font-medium' : 'text-slate-700'}`}>
                    {option}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 p-4">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <button 
            onClick={prevQuestion}
            disabled={currentIndex === 0}
            className="px-6 py-3 rounded-xl font-medium flex items-center space-x-2 text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          {currentIndex === totalQuestions - 1 ? (
            <button 
              onClick={endExam}
              className="px-8 py-3 rounded-xl font-bold flex items-center space-x-2 bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-md"
            >
              <span>Submit Exam</span>
              <CheckCircle className="w-4 h-4" />
            </button>
          ) : (
            <button 
              onClick={nextQuestion}
              className="px-6 py-3 rounded-xl font-medium flex items-center space-x-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}

function ResultsSummary({ session }) {
  const { score, totalQuestions, questions, userAnswers, reset } = session;
  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = percentage >= 70;

  React.useEffect(() => {
    if (passed) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#f59e0b']
      });
    }
  }, [passed]);

  // Analytics Preparation
  const topicStats = {};
  questions.forEach(q => {
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { total: 0, correct: 0 };
    }
    topicStats[q.topic].total += 1;
    if (userAnswers[q.id] === q.correctAnswer) {
      topicStats[q.topic].correct += 1;
    }
  });

  const barData = Object.keys(topicStats).map(topic => ({
    name: topic,
    accuracy: Math.round((topicStats[topic].correct / topicStats[topic].total) * 100)
  }));

  const pieData = [
    { name: 'Correct', value: score, color: '#10b981' },
    { name: 'Incorrect', value: totalQuestions - score, color: '#ef4444' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 border border-slate-100">
          <div className="p-12 text-center border-b border-slate-100">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-50 mb-6 border-8 border-slate-100">
              {passed ? (
                <Award className="w-12 h-12 text-emerald-500" />
              ) : (
                <XCircle className="w-12 h-12 text-red-500" />
              )}
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-2">
              {passed ? 'Outstanding Performance!' : 'Keep Practicing'}
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              You scored <strong className="text-slate-900">{score}</strong> out of <strong className="text-slate-900">{totalQuestions}</strong>
            </p>
            <button 
              onClick={reset}
              className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold inline-flex items-center space-x-2 hover:bg-slate-800 transition-colors shadow-lg"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Return to Dashboard</span>
            </button>
          </div>
          
          <div className="bg-slate-50 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center"><BarChart2 className="w-5 h-5 mr-2 text-blue-500" /> Accuracy Breakdown</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-6 mt-4">
                <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div><span className="text-sm font-medium">Correct ({score})</span></div>
                <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div><span className="text-sm font-medium">Incorrect ({totalQuestions - score})</span></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Topic Performance (%)</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} layout="vertical" margin={{ top: 0, right: 0, left: 40, bottom: 0 }}>
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12}} />
                    <Tooltip cursor={{fill: '#f8fafc'}} />
                    <Bar dataKey="accuracy" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-6 px-2">Detailed Review & Improvements</h3>
        <div className="space-y-6">
          {questions.map((q, idx) => {
            const userAnswer = userAnswers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            const isUnanswered = !userAnswer;

            return (
              <div key={q.id} className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${isCorrect ? 'border-emerald-500' : 'border-red-500'}`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                    Question {idx + 1} • {q.topic}
                  </span>
                  {isCorrect ? (
                    <span className="flex items-center text-emerald-600 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full"><CheckCircle className="w-4 h-4 mr-1"/> Correct</span>
                  ) : (
                    <span className="flex items-center text-red-600 text-sm font-bold bg-red-50 px-3 py-1 rounded-full"><XCircle className="w-4 h-4 mr-1"/> {isUnanswered ? 'Skipped' : 'Incorrect'}</span>
                  )}
                </div>
                
                <h4 className="text-lg font-medium text-slate-900 mb-4">{q.question}</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Your Answer</p>
                    <p className={`font-medium ${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                      {userAnswer || 'None'}
                    </p>
                  </div>
                  {!isCorrect && (
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Correct Answer</p>
                      <p className="font-medium text-emerald-600">{q.correctAnswer}</p>
                    </div>
                  )}
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex">
                  <div className="mr-3 text-blue-500"><Award className="w-6 h-6" /></div>
                  <div>
                    <p className="text-xs text-blue-800 font-bold uppercase tracking-wider mb-1">Improvement Guide</p>
                    <p className="text-sm text-blue-900 leading-relaxed">{q.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
