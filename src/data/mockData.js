import { englishData } from './english';
import { computerData } from './computer';
import { airportData } from './airport';

// Convert compressed array format [q, options, correct, exp, tag] to object format
const formatQuestions = (prefix, data) => {
  const formatted = {};
  for (const mode in data) {
    formatted[mode] = data[mode].map((q, idx) => ({
      id: `${prefix}_${mode}_${idx}`,
      question: q[0],
      options: q[1],
      correct: q[2],
      explanation: q[3],
      tag: q[4]
    }));
  }
  return formatted;
};

const bank = {
  english: formatQuestions('eng', englishData),
  computer: formatQuestions('com', computerData),
  airport: formatQuestions('air', airportData)
};

export const getQuestions = (section, mode) => {
  if (section === 'combined') {
    const combined = [];
    ['english', 'computer', 'airport'].forEach(sec => {
      if(bank[sec] && bank[sec][mode]) {
        // Shuffle the 20 questions and pick a subset, or just combine all 60
        combined.push(...bank[sec][mode]);
      }
    });
    // Shuffle combined array
    return combined.sort(() => Math.random() - 0.5);
  }

  return bank[section]?.[mode] || [];
};
