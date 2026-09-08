import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, RefreshCw, XCircle, Award, Lightbulb, Target, TrendingUp, TrendingDown, BookOpen } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, Legend, PieChart, Pie, Cell } from 'recharts';
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
          particleCount: 200,
          spread: 90,
          origin: { y: 0.5 },
          colors: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6']
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
      tagPerformance[q.tag] = { total: 0, correct: 0, incorrect: 0 };
    }
    tagPerformance[q.tag].total += 1;
  });

  questions.forEach((q, idx) => {
    const userAnswer = answers[idx];
    if (userAnswer === q.correct) {
      score++;
      tagPerformance[q.tag].correct += 1;
    } else {
      tagPerformance[q.tag].incorrect += 1;
      mistakes.push({ q, userAnswer });
    }
  });

  const percentage = Math.round((score / questions.length) * 100);
  
  // Format data for radar & bar charts
  const chartData = Object.keys(tagPerformance).map(tag => ({
    subject: tag,
    Score: Math.round((tagPerformance[tag].correct / tagPerformance[tag].total) * 100),
    Correct: tagPerformance[tag].correct,
    Incorrect: tagPerformance[tag].incorrect,
    fullMark: 100,
  }));

  // Pie chart data
  const pieData = [
    { name: 'Correct', value: score, color: '#10b981' },
    { name: 'Incorrect', value: questions.length - score, color: '#ef4444' }
  ];

  // Dynamic Summary Generation
  const sortedTags = Object.entries(tagPerformance).sort((a, b) => (b[1].correct / b[1].total) - (a[1].correct / a[1].total));
  const strongest = sortedTags.filter(t => (t[1].correct / t[1].total) >= 0.8).map(t => t[0]);
  const weakest = sortedTags.filter(t => (t[1].correct / t[1].total) < 0.6).map(t => t[0]);
  
  let dynamicSummary = `You answered ${score} out of ${questions.length} questions correctly. `;
  if (percentage === 100) {
    dynamicSummary += "Flawless execution! You have completely mastered this section.";
  } else {
    if (strongest.length > 0) {
      dynamicSummary += `You demonstrated excellent mastery in ${strongest.join(', ')}. `;
    }
    if (weakest.length > 0) {
      dynamicSummary += `To improve your score next time, you need to focus your studies specifically on: ${weakest.join(', ')}.`;
    } else if (percentage < 100) {
      dynamicSummary += "Your knowledge is well-balanced, but reviewing your minor mistakes will push you to perfection.";
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
        <Award className={`w-20 h-20 mx-auto mb-4 ${percentage >= 80 ? 'text-yellow-500' : 'text-slate-400'}`} />
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Advanced Analytics: Bassant Reda Salim</h1>
        <p className="text-slate-500 uppercase tracking-widest text-sm mb-8 font-semibold">{section} - {mode} Mode</p>
        
        <div className="flex justify-center items-center gap-12 mb-8">
          <div className="text-center">
            <div className={`text-6xl font-black mb-1 ${percentage >= 80 ? 'text-emerald-600' : percentage >= 50 ? 'text-blue-600' : 'text-red-600'}`}>
              {percentage}%
            </div>
            <div className="text-slate-500 font-medium">Final Score</div>
          </div>
          <div className="w-px h-16 bg-slate-200"></div>
          <div className="text-center">
            <div className="text-6xl font-black text-slate-700 mb-1">{score}/{questions.length}</div>
            <div className="text-slate-500 font-medium">Correct Answers</div>
          </div>
        </div>
      </div>

      {/* Dynamic Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-lg flex gap-6 items-center">
        <div className="hidden md:flex bg-white/20 p-4 rounded-full">
          <Target className="w-10 h-10 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Performance Summary</h2>
          <p className="text-blue-100 text-lg leading-relaxed">{dynamicSummary}</p>
        </div>
      </div>

      {/* Advanced Charts Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Accuracy Pie */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold text-slate-800 mb-2">Overall Accuracy</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center justify-center lg:col-span-2">
          <h2 className="text-lg font-bold text-slate-800 mb-2">Skill Breakdown (Radar)</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Score %" dataKey="Score" stroke="#3b82f6" fill="#60a5fa" fillOpacity={0.6} />
                <RechartsTooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Topic Bar Chart */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm lg:col-span-3">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Detailed Topic Performance</h2>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12 }} interval={0} />
                <YAxis allowDecimals={false} />
                <RechartsTooltip cursor={{fill: '#f1f5f9'}} />
                <Legend />
                <Bar dataKey="Correct" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
                <Bar dataKey="Incorrect" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Mistake Review - Enhanced Explanations */}
      {mistakes.length > 0 && (
        <div className="space-y-6 mt-8">
          <div className="flex items-center gap-3 border-b-2 border-slate-200 pb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-800">Learning & Corrections</h2>
          </div>
          
          {mistakes.map((m, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-red-100 p-2 rounded-full mt-1 shrink-0">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-xl text-slate-800 leading-snug">{m.q.question}</h3>
              </div>
              
              <div className="ml-12 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50/50 border border-red-100 rounded-xl p-4">
                    <div className="text-xs font-black uppercase text-red-500 mb-1 tracking-wider">You Chose</div>
                    <div className="text-red-900 font-medium">
                      {m.userAnswer !== undefined ? m.q.options[m.userAnswer] : "Skipped"}
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4">
                    <div className="text-xs font-black uppercase text-emerald-600 mb-1 tracking-wider">Correct Answer</div>
                    <div className="text-emerald-900 font-bold text-lg">
                      {m.q.options[m.q.correct]}
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Explanation Box */}
                <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl p-5 mt-4 relative">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-indigo-600 shrink-0" />
                    <div>
                      <div className="text-xs font-black uppercase text-indigo-600 mb-1 tracking-wider">Easy Explanation</div>
                      <div className="text-indigo-900 font-medium text-lg leading-relaxed">
                        {m.q.explanation}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-center gap-4 pt-8">
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
