# Risks & Tradeoffs — Airport Staff Exam Simulator (v2)

## Assumptions carried from research
- We assume React + Tailwind (the existing stack in `package.json`) is suitable for a rapid 2-day build.
- We assume the JSON format is sufficient for storing the question bank.
- We assume we can generate a perfectly accurate question bank without manual review by the user.

## Counter-argument against the leading approach
- **Wrong approach risk:** Generating massive amounts of questions directly into a large JSON file via AI usually leads to the exact problem the user warned about: incorrect, messy, and repeatable questions. AI tends to lose context over large generations.
- **Scaling limits:** A single massive JSON file for all questions will become hard to maintain. If we try to dynamically fetch questions, we risk network failure. For a 2-day timeline, static bundling is safer.
- **Maintenance burden:** If the state management for the exam (timer, answers, score) is too complex, we might introduce bugs right before the exam.
- **Simpler alternative:** A simple scrolling list of questions. But this violates the "real exam simulation" requirement. We *must* build a paginated or single-question-at-a-time view with a timer.

## Alternative(s) considered
| Option | Pros | Cons | Verdict |
|---|---|---|---|
| Use existing v1 codebase and patch it | Faster, less setup | Code might be messy, user explicitly said "do not touch the existing one" | **REJECTED.** We will wipe `src/` in this branch and build fresh. |
| Fetch questions from an external API | Dynamic, decoupled | Takes time to set up backend, risk of failure during the actual exam | **REJECTED.** We will use statically bundled JSON modules. |
| AI generates 100 questions in one go | Fast | High hallucination/repetition risk (the core problem) | **REJECTED.** We will generate a small, highly-curated set of 20-30 impeccable questions first, structured carefully. |

## Edge cases & failure scenarios
- User refreshes the page mid-exam (state is lost).
- Timer runs out before submission.
- Mobile screen is too small for complex question layouts or data tables (for Excel questions).

## Risk register
| Risk | Likelihood | Impact | Response |
|---|---|---|---|
| Question data is incorrect/messy | High | Critical | We will write a validation script to check JSON structure, and I will generate questions in small, focused batches (e.g., 5 at a time) to ensure zero hallucinations. |
| Mid-exam state loss on refresh | Medium | High | Save exam progress in `localStorage`. |
| UI feels cheap/unprofessional | Low | High | We will strictly use Tailwind + Lucide icons to build a clean, minimalist UI resembling Pearson VUE or standardized testing centers. |
| Deadline (2 days) missed | Medium | Critical | Strictly scope the MVP: 1 English Test, 1 Computer Test. No complex user authentication. Just take test -> see score. |
