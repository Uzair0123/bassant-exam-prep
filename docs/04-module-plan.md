# Module Plan — Airport Staff Exam Simulator (v2)

## Build order
1. **Data Model & Validator** — because if the data is wrong, the app fails the core requirement.
2. **State Manager (`useExamSession`)** — because the UI needs this to function.
3. **Dashboard & Results UI** — simple views.
4. **Exam Runner UI** — the most complex view (timer, pagination, layout).

## Module contracts

### Data Model & Validator
- **Responsibility:** Define the JSON schema for English and Computer questions and validate it.
- **Public interface:** `questions.json` and a `validateData.js` script.
- **Depends on:** Nothing.
- **Owns data:** The actual question content, options, correct answers, and explanations.
- **Status:** done

### State Manager (`useExamSession`)
- **Responsibility:** Track user progress, timer, and answers during an active exam.
- **Public interface:** `{ startExam, submitAnswer, endExam, currentQuestion, timer, score }`
- **Depends on:** Data Model (to load questions).
- **Owns data:** User's transient session state.
- **Status:** done

### Exam Runner UI
- **Responsibility:** Render the beautiful, real-exam simulation interface for a single question.
- **Public interface:** A React Component `<ExamRunner />`.
- **Depends on:** State Manager, TailwindCSS.
- **Owns data:** Internal UI state (like confirm dialogs).
- **Status:** done

### Results Summary UI
- **Responsibility:** Show the final score and detailed explanations for missed questions.
- **Public interface:** A React Component `<ResultsSummary />`.
- **Depends on:** State Manager.
- **Owns data:** None.
- **Status:** done
