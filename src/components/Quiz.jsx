import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Flag, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { getQuestions } from '../data/mockData';

export default function Quiz() {
  const { section, mode } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flags, setFlags] = useState({});
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const qData = getQuestions(section, mode);
    if (!qData || qData.length === 0) {
      alert("No questions available for this section yet.");
      navigate('/');
      return;
    }
    setQuestions(qData);

    if (mode === 'hard') setTimeLeft(30 * 60);
    else if (mode === 'exam') setTimeLeft(20 * 60);
  }, [section, mode, navigate]);

  useEffect(() => {
    if (timeLeft === null) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSelect = (optionIndex) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: optionIndex }));
  };

  const toggleFlag = () => {
    setFlags(prev => ({ ...prev, [currentIndex]: !prev[currentIndex] }));
  };

  const handleSubmit = () => {
    navigate('/report', { state: { questions, answers, mode, section } });
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQ = questions[currentIndex];
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in">
      
      {/* Top Bar with Progress */}
      <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-sm font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-md">
            {section} <span className="text-blue-500 mx-1">•</span> {mode} Mode
          </div>
          {timeLeft !== null && (
            <div className={`flex items-center gap-2 font-mono text-xl font-bold bg-slate-50 px-4 py-2 rounded-lg border ${timeLeft < 300 ? 'text-red-600 border-red-200 bg-red-50' : 'text-slate-700 border-slate-200'}`}>
              <Clock className="w-5 h-5" />
              {formatTime(timeLeft)}
            </div>
          )}
        </div>
        
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm font-medium text-slate-600">
            <span>Question {currentIndex + 1} of {questions.length}</span>
            <span>{Math.round(progressPercentage)}% Completed</span>
          </div>
          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 opacity-50"></div>
        
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 leading-relaxed max-w-2xl">
            {currentQ.question}
          </h2>
          <button 
            onClick={toggleFlag}
            className={`p-3 rounded-xl transition-all shadow-sm ${flags[currentIndex] ? 'bg-amber-100 text-amber-600 border border-amber-200' : 'bg-white border border-slate-200 text-slate-400 hover:border-slate-300'}`}
            title="Flag for review"
          >
            <Flag className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {currentQ.options.map((opt, idx) => {
            const isSelected = answers[currentIndex] === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all group ${isSelected ? 'border-blue-500 bg-blue-50/50 text-blue-900 font-semibold shadow-md transform -translate-y-0.5' : 'border-slate-100 hover:border-blue-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-300'}`}>
                    {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <span className="text-lg">{opt}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <button 
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-5 py-3 text-slate-600 disabled:opacity-30 hover:bg-slate-50 rounded-xl font-bold transition-colors"
        >
          <ChevronLeft className="w-5 h-5" /> Back
        </button>

        {currentIndex === questions.length - 1 ? (
          <button 
            onClick={handleSubmit}
            className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Submit Exam <CheckCircle className="w-5 h-5" />
          </button>
        ) : (
          <button 
            onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Next Question <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

    </div>
  );
}
