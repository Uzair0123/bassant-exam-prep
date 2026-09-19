# Risks & Tradeoffs — Bassant Exam Prep Upgrade

## Assumptions carried from research
- The user is preparing for an Airport Ground Staff / Customer Service role.
- Generating the questions via the existing `generate_data.py` script is the best way to handle data.
- The UI can be modernized without changing the core React/Vite/Tailwind tech stack.

## Counter-argument against the leading approach (using Python script)
- Wrong approach risk: The current `generate_data.py` takes a small set of base questions (4 per difficulty) and simply swaps pronouns/subjects to reach the desired count. This results in highly repetitive and low-quality exam prep. The user specifically asked for "completely new" and high-quality questions. Writing 90 truly unique, detailed questions inside Python string arrays is cumbersome and prone to syntax errors.
- Scaling limits: 90 questions is small enough that a client-side bundle won't suffer. 
- Maintenance burden: Having a Python script generate a JavaScript data file adds an unnecessary build step for a static client-side app.
- Simpler alternative that gets most of the value: Write the 90 unique questions directly into a JSON file or `mockData.js`, bypassing the Python script completely.

## Alternative(s) considered
| Option | Pros | Cons | Verdict |
|---|---|---|---|
| A: Keep `generate_data.py` and expand it | Retains existing workflow | Questions will either be repetitive or Python file becomes a massive, hard-to-maintain string dictionary. | Rejected. |
| B: Deprecate Python script, write data directly to JSON/JS | Much cleaner data management, easier to edit questions later, removes a language dependency. | Requires migrating the existing format directly to JS. | **Accepted.** |

## Edge cases & failure scenarios
- The UI redesign breaks existing screen sizes (mobile responsiveness is critical for study apps).
- The JSON structure for the new questions doesn't exactly match what the React components expect, causing runtime crashes.
- Question text is too long and overflows the UI cards.

## Risk register
| Risk | Likelihood | Impact | Response |
|---|---|---|---|
| Repetitive questions due to generation logic | High | High | Mitigate by deprecating the generator script and writing 90 bespoke questions manually. |
| Mobile layout breakage | Medium | High | Mitigate by implementing mobile-first Tailwind design in Phase 4 and testing on small viewports. |
| Data structure mismatch | Low | High | Mitigate by strictly typing or mapping the new data to the exact schema expected by the `Quiz` component. |
