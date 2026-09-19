import englishData from './final_english.json';
import computerData from './final_computer.json';
import airportData from './final_airport.json';

const bank = {
  english: englishData,
  computer: computerData,
  airport: airportData
};

export const getQuestions = (section, mode) => {
  if (section === 'combined') {
    const combined = [];
    ['english', 'computer', 'airport'].forEach(sec => {
      if(bank[sec] && bank[sec][mode]) {
        combined.push(...bank[sec][mode]);
      }
    });
    return combined.sort(() => Math.random() - 0.5);
  }

  return bank[section]?.[mode] || [];
};
