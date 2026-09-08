import { useLocation, useNavigate } from 'react-router-dom';
import { Home, RefreshCw, XCircle, CheckCircle2, Award } from 'lucide-react';

export default function ReportCard() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center mt-20">
        <p>No results found.</p>
        <button onClick={() => navigate('/')} className="mt-4 text-blue-600">Go Home</button>
      </div>
    );
  }

  const { questions, answers, mode, section } = state;

  let score = 0;
  const mistakes = [];
  const weakTags = {};

  questions.forEach((q, idx) => {
    const userAnswer = answers[idx];
    if (userAnswer === q.correct) {
      score++;
    } else {
      mistakes.push({ q, userAnswer });
      weakTags[q.tag] = (weakTags[q.tag] || 0) + 1;
    }
  });

  const percentage = Math.round((score / questions.length) * 100);
  
  let feedbackMessage = "";
  if (percentage >= 90) feedbackMessage = "Outstanding performance! You are definitely ready for the real exam.";
  else if (percentage >= 75) feedbackMessage = "Great job! A little more review and you'll be perfect.";
  else if (percentage >= 50) feedbackMessage = "Good effort. Review your mistakes below to improve your score next time.";
  else feedbackMessage = "Don't give up! Every mistake is a learning opportunity. Keep practicing.";

  const weakAreas = Object.entries(weakTags).sort((a, b) => b[1] - a[1]).map(e => e[0]);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
        <Award className={`w-20 h-20 mx-auto mb-4 ${percentage >= 75 ? 'text-yellow-500' : 'text-slate-400'}`} />
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Report Card: Bassant Reda Salim Ibrahim</h1>
        <p className="text-slate-500 uppercase tracking-widest text-sm mb-8">{section} - {mode} Mode</p>
        
        <div className="flex justify-center items-center gap-12 mb-8">
          <div className="text-center">
            <div className="text-5xl font-black text-blue-600 mb-1">{percentage}%</div>
            <div className="text-slate-500 font-medium">Final Score</div>
          </div>
          <div className="w-px h-16 bg-slate-200"></div>
          <div className="text-center">
            <div className="text-5xl font-black text-slate-700 mb-1">{score}/{questions.length}</div>
            <div className="text-slate-500 font-medium">Correct Answers</div>
          </div>
        </div>
        
        <p className="text-lg font-medium text-slate-700 bg-slate-50 py-4 px-6 rounded-xl inline-block">
          Bassant, {feedbackMessage}
        </p>
      </div>

      {/* Weak Areas */}
      {weakAreas.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-amber-900 mb-3">Areas to Improve</h2>
          <div className="flex flex-wrap gap-2">
            {weakAreas.map(tag => (
              <span key={tag} className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Mistake Review */}
      {mistakes.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Review Your Mistakes</h2>
          {mistakes.map((m, i) => (
            <div key={i} className="bg-white border border-red-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <h3 className="font-semibold text-lg text-slate-800">{m.q.question}</h3>
              </div>
              
              <div className="pl-9 space-y-4">
                <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                  <div className="text-xs font-bold uppercase text-red-600 mb-1">Your Answer</div>
                  <div className="text-red-900 line-through">
                    {m.userAnswer !== undefined ? m.q.options[m.userAnswer] : "Skipped"}
                  </div>
                </div>
                
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                  <div className="text-xs font-bold uppercase text-emerald-600 mb-1">Correct Answer</div>
                  <div className="text-emerald-900 font-medium">
                    {m.q.options[m.q.correct]}
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <div className="text-xs font-bold uppercase text-blue-600 mb-1">Explanation</div>
                  <div className="text-blue-900">
                    {m.q.explanation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-center gap-4 py-8">
        <button 
          onClick={() => navigate(`/quiz/${section}/${mode}`)}
          className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-bold rounded-xl transition-colors"
        >
          <RefreshCw className="w-5 h-5" /> Retake Test
        </button>
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-sm transition-colors"
        >
          <Home className="w-5 h-5" /> Back to Home
        </button>
      </div>

    </div>
  );
}
