# Project State: Airport Staff Exam Simulator (v2)

## Current Phase: Iteration 2 - Feature Additions (Levels & Advanced Analytics)

## Active Tasks
- [x] Update `validateData.js` to support nested levels (beginner, intermediate, advanced).
- [ ] Generate 180 highly-curated questions (30 per level, per subject) using independent Subagents to prevent AI hallucination.
- [ ] Update `useExamSession.js` to support level selection and track mistakes by topic.
- [ ] Update Dashboard UI to allow selecting a Level.
- [ ] Update Results UI to use Recharts (Pie Chart for correct/incorrect, Bar Chart for accuracy by topic) for stunning visual feedback.

## Known Problems & Blockers
- Generating 180 flawless questions in one go is guaranteed to cause duplicates and errors. We will strictly use a divide-and-conquer strategy with subagents, each writing a small 30-question file, and then validating them before merging.
