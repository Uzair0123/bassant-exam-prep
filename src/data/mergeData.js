import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const subjects = ['english', 'computer'];
const levels = ['beginner', 'intermediate', 'advanced'];
const finalData = { english: {}, computer: {} };

function validateCategory(subject, level, questions) {
  if (!Array.isArray(questions)) throw new Error(`[${subject}-${level}] must be an array`);
  if (questions.length < 30) throw new Error(`[${subject}-${level}] must have at least 30 questions (has ${questions.length})`);

  const ids = new Set();
  
  questions.forEach((q, index) => {
    if (!q.id || !q.topic || !q.question || !q.options || !q.correctAnswer || !q.explanation) {
      throw new Error(`Question at index ${index} in ${subject}-${level} is missing required fields.`);
    }
    if (ids.has(q.id)) {
      throw new Error(`Duplicate ID found in ${subject}-${level}: ${q.id}`);
    }
    ids.add(q.id);
    
    if (q.options.length !== 4) {
      throw new Error(`Question ${q.id} does not have exactly 4 options.`);
    }
    
    if (!q.options.includes(q.correctAnswer)) {
      throw new Error(`Question ${q.id} has a correctAnswer that is not in the options array.`);
    }
  });
  
  console.log(`✅ [${subject}-${level}] is valid. (${questions.length} questions)`);
}

let allValid = true;

subjects.forEach(subject => {
  levels.forEach(level => {
    const filename = `${subject}_${level}.json`;
    const filepath = path.join(__dirname, filename);
    
    if (!fs.existsSync(filepath)) {
      console.error(`❌ File not found: ${filename}`);
      allValid = false;
      return;
    }

    try {
      const data = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
      validateCategory(subject, level, data);
      finalData[subject][level] = data;
    } catch (err) {
      console.error(`❌ Validation Failed for ${filename}:`, err.message);
      allValid = false;
    }
  });
});

if (allValid) {
  fs.writeFileSync(path.join(__dirname, 'questions.json'), JSON.stringify(finalData, null, 2));
  console.log('🎉 All questions merged successfully into questions.json!');
} else {
  console.error('⚠️ Merge aborted due to validation errors.');
  process.exit(1);
}
