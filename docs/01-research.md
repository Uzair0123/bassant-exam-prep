# Research & Discovery — Airport Staff Exam Simulator (v2)

## Problem statement
The user wants to create a highly professional, beautiful mobile-first website for a friend taking the Airport Staff Exam in Egypt in 2 days. The exam covers English (grammar, articles, questions, comparisons, tenses, and job-related vocabulary) and Computer skills (Microsoft 365: Excel, Word, PowerPoint). 
A previous attempt or existing system suffered from messy, incorrect, and repeated questions. We need to build a brand new application (without touching the old codebase on the main branch) that simulates a real exam, has stunning graphics and architecture, and flawlessly manages the question data.

## Who it's for / usage scenario
**Primary User:** Bassant (the user's friend), preparing for her Airport Staff Exam in 2 days.
**Scenario:** She will open the web app on her mobile device. She expects a beautiful, intuitive, and realistic exam simulation interface. She will take practice tests in English and Computer Science, view her results, and review explanations for any grammatical or technical questions she missed.

## Existing solutions surveyed
| Option | What it does | Strengths | Gaps / why not just use this |
|---|---|---|---|
| Existing v1 codebase | Current exam prep app | Exists in repository | User explicitly reported it has messy, incorrect, and repeatable questions. Needs a fresh architecture. |
| Standard online mock exams | Generic aviation prep | Large question banks | Not personalized, often lack the specific Microsoft 365 + English focus tailored for the Egyptian Airport Staff exam. Lacks the requested "stunning" bespoke UI. |

## Constraints
- **Time:** Extremely tight. The exam is in **2 days**. The MVP must be functional, live, and shared almost immediately.
- **Environment:** Mobile-first web application. Must be easily deployable (likely via Git Pages, Vercel, or Netlify) from the repository.
- **Data Integrity:** Question data must be clean, non-repeating, and correct. This is a hard constraint based on past failures.
- **Scope:** Must cover specific English grammar (Articles, Tenses, Comparisons, Question forms, Job Vocab) and Computer (MS Word, Excel, PowerPoint).

## Definition of done
- A new mobile-responsive web application is built and running on the `v2-airport-exam` branch.
- The UI simulates a professional exam environment with high-quality styling.
- A robust, validated JSON/data structure holds at least a starter set of clean, correct, non-repeating questions for both English and MS 365.
- The application is pushed to Git and live for the friend to use.

## Open questions for the user
1. Do you have a preferred tech stack for this new version (e.g., React, Vue, or just Vanilla HTML/CSS/JS like the current repo seems to use)? Given the 2-day timeline, a lightweight framework (like React with Tailwind or Vite+Vanilla) is recommended.
2. How many questions do you want us to seed initially for each category to ensure a good test run?
