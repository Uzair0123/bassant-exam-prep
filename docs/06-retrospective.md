# Retrospective — Airport Staff Exam Simulator (v2)

## What went well
- Building the data validation script (`validateData.js`) in Phase 4 gave immediate confidence that the questions were correct and formatted properly.
- Reusing the Vite + Tailwind infrastructure on a new branch allowed us to move incredibly fast without fighting configuration.
- The UI design using Tailwind and Lucide icons successfully met the "professional, beautiful exam simulator" requirement within a very tight timeframe.

## What didn't
- Relying strictly on a static JSON file means if the user wants to add 500 questions, the bundle size might grow. We should look into splitting the JSON chunks later if it gets huge.
- We did not write a robust testing suite for the React components due to the 2-day timeline, relying on manual testing.

## Assumptions that turned out wrong
- We assumed LocalStorage state saving was simple, but realizing the complexity of React lifecycle vs hot-reload meant we dropped it to ensure a stable MVP. 

## Metrics
- Requirements churned after Phase 1 sign-off: 0
- Defects found in testing vs. found later: 0 escaped so far
- Module contracts reworked: 0 (the `useExamSession` contract was solid)
- Time per phase (rough): 
  - Phase 1 & 2: 10 mins
  - Phase 3 & 4 (Code & Data): 15 mins
  - Phase 5 (Testing & Deploy): 5 mins

## Carry-forward note for next project
When generating data via AI, writing a small Node schema validation script *first* is a huge time-saver and instantly catches hallucinations before they break the React UI.
