import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Monitor, Plane, LayoutList, PlayCircle, Clock, Trophy, CheckCircle2, ChevronRight, BarChart } from 'lucide-react';

const SECTIONS = [
  { id: 'english', title: 'Aviation English', desc: 'Grammar, vocabulary, and passenger communication.', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-200' },
  { id: 'computer', title: 'Microsoft 365 & IT', desc: 'Excel, Word, PowerPoint, GDS, and cybersecurity.', icon: Monitor, color: 'text-indigo-600', bg: 'bg-indigo-100', border: 'border-indigo-200' },
  { id: 'airport', title: 'Ground Operations', desc: 'IATA codes, security, baggage, and boarding.', icon: Plane, color: 'text-sky-600', bg: 'bg-sky-100', border: 'border-sky-200' },
  { id: 'combined', title: 'Final Certification Exam', desc: 'A randomized mix of all topics under time pressure.', icon: Trophy, color: 'text-emerald-600', bg: 'bg-emerald-100', border: 'border-emerald-200' }
];

const MODES = [
  { id: 'easy', title: 'Foundation', desc: 'No timer. Basic definitions and recall.', icon: BookOpen, color: 'text-slate-500' },
  { id: 'medium', title: 'Scenarios', desc: 'No timer. Customer service situations.', icon: PlayCircle, color: 'text-blue-500' },
  { id: 'hard', title: 'Advanced', desc: '30m timer. Complex logic & edge cases.', icon: Clock, color: 'text-indigo-500' },
  { id: 'exam', title: 'Mock Exam', desc: '20m timer. Strict rules. Pass/Fail.', icon: CheckCircle2, color: 'text-emerald-500' }
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl border border-slate-800">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 text-slate-800 opacity-50">
          <Plane className="w-64 h-64 transform rotate-45" />
        </div>
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold border border-blue-500/30">
            <CheckCircle2 className="w-4 h-4" /> Syllabus Updated for Ground Staff
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ready for takeoff, Bassant?</h2>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            Your comprehensive training module for Airport Customer Service, IT Systems, and Aviation English. Select a module below to begin your session.
          </p>
        </div>
      </div>

      {/* Stats/Quick Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Questions', value: '360', icon: LayoutList, color: 'text-blue-600' },
          { label: 'Modules', value: '3', icon: BookOpen, color: 'text-indigo-600' },
          { label: 'Difficulty Levels', value: '4', icon: BarChart, color: 'text-emerald-600' },
          { label: 'Target Role', value: 'Ground Staff', icon: Plane, color: 'text-sky-600' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-2">
            <div className={`p-2 rounded-lg bg-slate-50 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Modules Selection */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          Training Modules
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {SECTIONS.map(sec => {
            const Icon = sec.icon;
            const isSelected = selectedSection === sec.id;
            
            return (
              <div 
                key={sec.id} 
                className={`relative overflow-hidden rounded-3xl transition-all duration-300 cursor-pointer border-2 
                  ${isSelected ? 'border-blue-500 shadow-lg bg-white ring-4 ring-blue-50' : 'border-slate-200 hover:border-slate-300 hover:shadow-md bg-white'}`}
                onClick={() => setSelectedSection(isSelected ? null : sec.id)}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-2xl ${sec.bg} ${sec.color} ${sec.border} border`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className={`p-2 rounded-full transition-colors ${isSelected ? 'bg-blue-100 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                      <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isSelected ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{sec.title}</h3>
                  <p className="text-slate-500 font-medium">{sec.desc}</p>
                </div>
                
                <div className={`transition-all duration-500 ease-in-out bg-slate-50 border-t border-slate-100 ${isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {MODES.map(mode => (
                      <button 
                        key={mode.id}
                        onClick={(e) => { e.stopPropagation(); navigate(`/quiz/${sec.id}/${mode.id}`); }}
                        className="group flex flex-col items-start p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all text-left"
                      >
                        <div className="flex items-center gap-2 font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors">
                          <mode.icon className={`w-4 h-4 ${mode.color}`} />
                          {mode.title}
                        </div>
                        <span className="text-xs font-medium text-slate-500 leading-relaxed">{mode.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
