# Module Plan — Bassant Exam Prep Upgrade

## Build order
1. **Data Module (`mockData.js`)** — Because everything else depends on the new 90 unique questions. We will use an LLM (agent) to generate 30 high-quality Airport Customer Service questions for English, Computer, and Airport Knowledge.
2. **Dashboard UI Module** — Redesign to a modern LMS look.
3. **Quiz Engine UI** — Upgrade the question cards, typography, and progress tracking.
4. **Report Card UI** — Improve the charts and review screens.

## Module contracts

### Data Module (`mockData.js`)
- Responsibility: Provide the static array of exam questions per section and difficulty.
- Public interface: `getQuestions(section, mode)` returning an array of `{ id, question, options, correct, explanation, tag }` objects.
- Depends on: None.
- Owns data: All question data.
- Status: not started

### Dashboard Module (`Dashboard.jsx`)
- Responsibility: Serve as the entry point, allowing users to select a section and difficulty.
- Public interface: React Component.
- Depends on: React Router (for navigation).
- Owns data: Local selection state.
- Status: not started

### Quiz Engine Module (`Quiz.jsx`)
- Responsibility: Render questions one by one, handle timers, track user answers.
- Public interface: React Component. Route params `:section` and `:mode`.
- Depends on: Data Module, React Router.
- Owns data: `answers` object, `timeLeft`.
- Status: not started

### Report Card Module (`ReportCard.jsx`)
- Responsibility: Show final score, analytics charts, and question review.
- Public interface: React Component. Route state containing `questions`, `answers`.
- Depends on: Recharts, Canvas Confetti.
- Owns data: None (derives score from props).
- Status: not started
