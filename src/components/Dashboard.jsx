import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Monitor, Plane, LayoutList, PlayCircle, Clock, Trophy } from 'lucide-react';

const SECTIONS = [
  { id: 'english', title: 'English Grammar', icon: BookOpen, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { id: 'computer', title: 'Microsoft 360', icon: Monitor, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { id: 'airport', title: 'Airport Awareness', icon: Plane, color: 'text-sky-600', bg: 'bg-sky-50' },
  { id: 'combined', title: 'Full Mock Exam', icon: LayoutList, color: 'text-purple-600', bg: 'bg-purple-50' }
];

const MODES = [
  { id: 'easy', title: 'Easy', desc: 'No timer. Basic recall.', icon: PlayCircle },
  { id: 'medium', title: 'Medium', desc: 'No timer. Scenarios.', icon: PlayCircle },
  { id: 'hard', title: 'Hard', desc: '30m timer. Complex logic.', icon: Clock },
  { id: 'exam', title: 'Real Exam', desc: '20m timer. Strict rules.', icon: Trophy }
];

const MOTIVATIONS = [
  "You've got this, Bassant! Every question brings you closer to your goal.",
  "Success is no accident, Bassant. It is hard work, perseverance, and learning.",
  "Bassant, believe you can and you're halfway there.",
  "Focus and consistency are your superpowers today, Bassant."
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState(null);
  
  const motivation = MOTIVATIONS[Math.floor(Math.random() * MOTIVATIONS.length)];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to study, Bassant?</h2>
        <p className="text-blue-100 italic">"{motivation}"</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {SECTIONS.map(sec => {
          const Icon = sec.icon;
          const isSelected = selectedSection === sec.id;
          
          return (
            <div key={sec.id} className={`border-2 rounded-2xl p-5 cursor-pointer transition-all ${isSelected ? 'border-blue-500 shadow-md bg-blue-50/50' : 'border-slate-200 hover:border-blue-300 hover:shadow-sm bg-white'}`}
                 onClick={() => setSelectedSection(sec.id)}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl ${sec.bg}`}>
                  <Icon className={`w-6 h-6 ${sec.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{sec.title}</h3>
              </div>
              
              {isSelected && (
                <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-2 gap-3 animate-in slide-in-from-top-2">
                  {MODES.map(mode => (
                    <button 
                      key={mode.id}
                      onClick={(e) => { e.stopPropagation(); navigate(`/quiz/${sec.id}/${mode.id}`); }}
                      className="flex flex-col items-start p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-2 font-semibold text-slate-800 mb-1">
                        <mode.icon className="w-4 h-4 text-blue-600" />
                        {mode.title}
                      </div>
                      <span className="text-xs text-slate-500">{mode.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
}
