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
    // Navigate to report card, passing the data
    navigate('/report', { state: { questions, answers, mode, section } });
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQ = questions[currentIndex];
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          {section} / {mode}
        </div>
        {timeLeft !== null && (
          <div className={`flex items-center gap-2 font-mono text-lg font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-slate-700'}`}>
            <Clock className="w-5 h-5" />
            {formatTime(timeLeft)}
          </div>
        )}
      </div>

      {/* Question Card */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-medium text-slate-800">
            <span className="text-blue-600 font-bold mr-2">Q{currentIndex + 1}.</span> 
            {currentQ.question}
          </h2>
          <button 
            onClick={toggleFlag}
            className={`p-2 rounded-lg transition-colors ${flags[currentIndex] ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
            title="Flag for review"
          >
            <Flag className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {currentQ.options.map((opt, idx) => {
            const isSelected = answers[currentIndex] === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${isSelected ? 'border-blue-500 bg-blue-50 text-blue-900 font-medium' : 'border-slate-100 hover:border-slate-300 bg-slate-50 text-slate-700'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-blue-500' : 'border-slate-300'}`}>
                    {isSelected && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />}
                  </div>
                  {opt}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button 
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-4 py-2 text-slate-600 disabled:opacity-50 hover:text-slate-900 font-medium"
        >
          <ChevronLeft className="w-5 h-5" /> Previous
        </button>

        <div className="flex gap-1">
          {questions.map((_, idx) => (
            <div key={idx} className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-blue-600' : answers[idx] !== undefined ? 'bg-blue-300' : 'bg-slate-200'}`} />
          ))}
        </div>

        {currentIndex === questions.length - 1 ? (
          <button 
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium transition-colors shadow-sm"
          >
            Submit <CheckCircle className="w-5 h-5" />
          </button>
        ) : (
          <button 
            onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-sm"
          >
            Next <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

    </div>
  );
}
