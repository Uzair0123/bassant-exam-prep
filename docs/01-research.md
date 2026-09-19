# Research & Discovery — Bassant Exam Prep Upgrade

## Problem statement
The user wants to upgrade an existing React/Vite-based exam preparation application ("Bassant Exam Prep"). The current app has 20 question sets across different difficulty levels for English, Computer, and Airport/Aviation sections.
The goals are to:
1. Increase the question bank to 30 unique questions per section (English, Computer, Mock Test/Airport).
2. Generate completely new questions specifically tailored to an Airport Ground Staff / Aviation Customer Service role.
3. Redesign the web application to have a newer, more professional, beautiful, and stunning look.
4. Apply a disciplined software engineering process to execute this upgrade.

## Who it's for / usage scenario
The primary user is a friend ("Bassant") preparing for an upcoming aviation/airport job examination (likely Ground Staff or Customer Service). The app needs to provide a highly realistic, visually appealing, and encouraging environment for taking practice tests.

## Existing solutions surveyed
| Option | What it does | Strengths | Gaps / why not just use this |
|---|---|---|---|
| Existing App | Basic React-based quiz UI | Already functional | Question bank is too small (20), design is basic, needs a professional upgrade |
| Generic Quiz Apps | Online platforms like Quizlet or Kahoot | Lots of features, animations | Not customized for this specific exam; generic branding |

## Constraints
- Time: Need a solid plan and steady execution.
- Stack / environment: React 19, Vite, Tailwind CSS 4, Recharts, Lucide React (based on existing `package.json`).
- Must integrate with: The existing `src/data/mockData.js` structure (or refactor it to a better JSON/JS module structure).
- Other: The Python script `generate_data.py` was previously used to seed the data; we might need to modify it or rewrite the data generation using Python or a Node script to produce 30 *new* highly relevant questions per section.

## Definition of done
- The app features a completely redesigned, professional, "stunning" UI (verified by user).
- The English, Computer, and Airport sections each contain 30 brand-new questions directly relevant to Airport Ground Staff duties (e.g., aviation English, GDS/Reservation system basics, customer service handling).
- The app successfully compiles, runs locally, and correctly tracks scores using the new question sets.

## Open questions for the user
- To ensure the 30 new questions are perfect, can you confirm the exact role your friend is applying for? (e.g., Airport Ground Staff, Cabin Crew, Ticketing Agent, Security?)
- Do you have any specific color schemes or design inspirations in mind for the "stunning and professional" look? (e.g., Airline colors like Blue/White/Gold, or dark mode?)
