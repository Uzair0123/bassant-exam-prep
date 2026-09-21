import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'questions.json'), 'utf-8'));

function validateCategory(categoryName, questions) {
  if (!Array.isArray(questions)) {
    throw new Error(`Category ${categoryName} must be an array`);
  }

  const ids = new Set();
  
  questions.forEach((q, index) => {
    if (!q.id || !q.topic || !q.question || !q.options || !q.correctAnswer || !q.explanation) {
      throw new Error(`Question at index ${index} in ${categoryName} is missing required fields.`);
    }
    if (ids.has(q.id)) {
      throw new Error(`Duplicate ID found in ${categoryName}: ${q.id}`);
    }
    ids.add(q.id);
    
    if (q.options.length !== 4) {
      throw new Error(`Question ${q.id} does not have exactly 4 options.`);
    }
    
    if (!q.options.includes(q.correctAnswer)) {
      throw new Error(`Question ${q.id} has a correctAnswer that is not in the options array.`);
    }
  });
  
  console.log(`✅ Category '${categoryName}' is valid. (${questions.length} questions)`);
}

try {
  validateCategory('english', data.english);
  validateCategory('computer', data.computer);
  console.log('🎉 All questions validated successfully!');
} catch (error) {
  console.error('❌ Validation Failed:', error.message);
  process.exit(1);
}
