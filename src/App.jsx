import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import ReportCard from './components/ReportCard';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-slate-900 font-sans selection:bg-blue-200">
        <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10 shadow-lg">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5-3.5 3.5L3 16l1 1 3.5-3.5 5 6 1.8-.7c.4-.2.7-.6.6-1.1z"/></svg>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">AeroPrep <span className="text-blue-400 font-medium">Training</span></h1>
            </div>
            <div className="text-sm font-medium text-slate-300 bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700 hidden md:block">
              Candidate: Bassant
            </div>
          </div>
        </header>
        
        <main className="max-w-5xl mx-auto px-4 py-8 md:py-12">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/quiz/:section/:mode" element={<Quiz />} />
            <Route path="/report" element={<ReportCard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
