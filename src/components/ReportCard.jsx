import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, RefreshCw, XCircle, Award } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import confetti from 'canvas-confetti';

export default function ReportCard() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      const score = state.questions.filter((q, i) => state.answers[i] === q.correct).length;
      const percentage = (score / state.questions.length) * 100;
      if (percentage >= 80) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#10b981', '#f59e0b']
        });
      }
    }
  }, [state]);

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
  const tagPerformance = {};

  // Initialize tags
  questions.forEach(q => {
    if (!tagPerformance[q.tag]) {
      tagPerformance[q.tag] = { total: 0, correct: 0 };
    }
    tagPerformance[q.tag].total += 1;
  });

  questions.forEach((q, idx) => {
    const userAnswer = answers[idx];
    if (userAnswer === q.correct) {
      score++;
      tagPerformance[q.tag].correct += 1;
    } else {
      mistakes.push({ q, userAnswer });
    }
  });

  const percentage = Math.round((score / questions.length) * 100);
  
  // Format data for radar chart
  const radarData = Object.keys(tagPerformance).map(tag => ({
    subject: tag,
    A: Math.round((tagPerformance[tag].correct / tagPerformance[tag].total) * 100),
    fullMark: 100,
  }));

  let feedbackMessage = "";
  if (percentage >= 90) feedbackMessage = "Outstanding performance! You are definitely ready for the real exam.";
  else if (percentage >= 75) feedbackMessage = "Great job! A little more review and you'll be perfect.";
  else if (percentage >= 50) feedbackMessage = "Good effort. Review your mistakes below to improve your score next time.";
  else feedbackMessage = "Don't give up! Every mistake is a learning opportunity. Keep practicing.";

  const weakAreas = Object.keys(tagPerformance).filter(tag => (tagPerformance[tag].correct / tagPerformance[tag].total) < 0.7);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
        <Award className={`w-20 h-20 mx-auto mb-4 ${percentage >= 80 ? 'text-yellow-500' : 'text-slate-400'}`} />
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Performance Analytics: Bassant Reda Salim Ibrahim</h1>
        <p className="text-slate-500 uppercase tracking-widest text-sm mb-8 font-semibold">{section} - {mode} Mode</p>
        
        <div className="flex justify-center items-center gap-12 mb-8">
          <div className="text-center">
            <div className="text-6xl font-black text-blue-600 mb-1">{percentage}%</div>
            <div className="text-slate-500 font-medium">Final Score</div>
          </div>
          <div className="w-px h-16 bg-slate-200"></div>
          <div className="text-center">
            <div className="text-6xl font-black text-slate-700 mb-1">{score}/{questions.length}</div>
            <div className="text-slate-500 font-medium">Correct Answers</div>
          </div>
        </div>
        
        <p className="text-lg font-medium text-slate-700 bg-slate-50 py-4 px-6 rounded-xl inline-block shadow-inner">
          Bassant, {feedbackMessage}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Radar Chart */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center">
          <h2 className="text-xl font-bold text-slate-800 mb-4 w-full text-left">Skill Breakdown Visualization</h2>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Score" dataKey="A" stroke="#3b82f6" fill="#60a5fa" fillOpacity={0.5} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-slate-500 text-center mt-2">This chart visualizes your accuracy across different topics.</p>
        </div>

        {/* Weak Areas */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Targeted Improvement Plan</h2>
          {weakAreas.length > 0 ? (
            <div className="flex-1 bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <p className="text-amber-800 font-medium mb-4">Based on your answers, you should focus your studies on these specific topics:</p>
              <div className="flex flex-wrap gap-2">
                {weakAreas.map(tag => (
                  <span key={tag} className="bg-amber-200 text-amber-900 px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex-1 bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center text-center">
              <div>
                <div className="text-emerald-600 font-bold text-lg mb-2">Perfect Balance!</div>
                <p className="text-emerald-800 text-sm">You didn't show any major weaknesses across the tested topics. Keep up the great work!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mistake Review */}
      {mistakes.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Review Your Mistakes</h2>
          {mistakes.map((m, i) => (
            <div key={i} className="bg-white border-2 border-red-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <h3 className="font-semibold text-lg text-slate-800">{m.q.question}</h3>
              </div>
              
              <div className="pl-9 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                    <div className="text-xs font-bold uppercase text-red-600 mb-1">Your Answer</div>
                    <div className="text-red-900 line-through">
                      {m.userAnswer !== undefined ? m.q.options[m.userAnswer] : "Skipped"}
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                    <div className="text-xs font-bold uppercase text-emerald-600 mb-1">Correct Answer</div>
                    <div className="text-emerald-900 font-bold">
                      {m.q.options[m.q.correct]}
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <div className="text-xs font-bold uppercase text-blue-600 mb-1">Explanation</div>
                  <div className="text-blue-900 font-medium">
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
          className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-700 font-bold rounded-xl transition-all shadow-sm"
        >
          <RefreshCw className="w-5 h-5" /> Retake Test
        </button>
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
        >
          <Home className="w-5 h-5" /> Back to Home
        </button>
      </div>

    </div>
  );
}
