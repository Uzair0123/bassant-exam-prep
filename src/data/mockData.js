export const getQuestions = (section, mode) => {
  // We will expand this to 30 questions per mode per section.
  // For UI development, providing a sample set.
  const sampleBank = {
    english: {
      easy: [
        { id: "eng_e_1", question: "She ___ to the airport every morning.", options: ["go", "goes", "going", "gone"], correct: 1, explanation: "For third-person singular (she), we use 'goes' in the simple present tense.", tag: "Tenses" },
        { id: "eng_e_2", question: "Choose the correct spelling:", options: ["Accomodation", "Accommodation", "Acommodation", "Acomodation"], correct: 1, explanation: "Accommodation has two C's and two M's.", tag: "Vocabulary" }
      ],
      medium: [
        { id: "eng_m_1", question: "If the flight is delayed, we ___ the passengers.", options: ["will notify", "would notify", "notified", "notifying"], correct: 0, explanation: "First conditional: If + present simple, will + base verb.", tag: "Conditionals" }
      ],
      hard: [
        { id: "eng_h_1", question: "By the time we arrived at the gate, the plane ___.", options: ["has already left", "already left", "had already left", "was leaving"], correct: 2, explanation: "Past perfect (had + past participle) is used for an action completed before another action in the past.", tag: "Past Perfect" }
      ],
      exam: [
        { id: "eng_x_1", question: "Which sentence is the most polite way to ask a passenger to wait?", options: ["Wait here.", "You must wait here.", "Would you mind waiting here for a moment, please?", "Wait here, please."], correct: 2, explanation: "'Would you mind + V-ing' is standard polite customer service English.", tag: "Customer Service English" }
      ]
    },
    computer: {
      easy: [
        { id: "com_e_1", question: "Which Microsoft program is best for creating a presentation?", options: ["Word", "Excel", "PowerPoint", "Access"], correct: 2, explanation: "PowerPoint is Microsoft's presentation software.", tag: "General Knowledge" }
      ],
      medium: [
        { id: "com_m_1", question: "In Excel, what does the VLOOKUP function do?", options: ["Adds numbers", "Searches for a value in the first column of a table", "Changes text to uppercase", "Creates a chart"], correct: 1, explanation: "VLOOKUP stands for Vertical Lookup, used to find data in a table.", tag: "Excel Formulas" }
      ],
      hard: [
        { id: "com_h_1", question: "How do you apply a macro to multiple Word documents?", options: ["Copy and paste", "Using the Normal.dotm template", "It is impossible", "Using Excel"], correct: 1, explanation: "Saving a macro in Normal.dotm makes it available to all new documents.", tag: "Word Macros" }
      ],
      exam: [
        { id: "com_x_1", question: "Which formula properly handles a VLOOKUP error by displaying 'Not Found'?", options: ["=IFERROR(VLOOKUP(A1, B:C, 2, FALSE), 'Not Found')", "=VLOOKUP(A1, B:C, 2, FALSE, 'Not Found')", "=IF(VLOOKUP(A1, B:C, 2, FALSE)='Error', 'Not Found')", "=ERROR(VLOOKUP)"], correct: 0, explanation: "IFERROR is used to catch and handle errors in Excel formulas.", tag: "Advanced Excel" }
      ]
    },
    airport: {
      easy: [
        { id: "air_e_1", question: "What does VIP stand for?", options: ["Very Important Person", "Very Interesting Person", "Valid In Passport", "Visa In Progress"], correct: 0, explanation: "VIP stands for Very Important Person.", tag: "Terminology" }
      ],
      medium: [
        { id: "air_m_1", question: "What is the primary role of Customs at an Egyptian airport?", options: ["Checking boarding passes", "Regulating goods entering or leaving the country", "Fueling the aircraft", "Selling duty-free items"], correct: 1, explanation: "Customs controls the flow of goods into and out of a country.", tag: "Customs & Security" }
      ],
      hard: [
        { id: "air_h_1", question: "According to standard IATA codes, what is the code for Cairo International Airport?", options: ["CAI", "CIR", "CRO", "CIA"], correct: 0, explanation: "CAI is the IATA code for Cairo International.", tag: "IATA Codes" }
      ],
      exam: [
        { id: "air_x_1", question: "What is the correct procedure if a passenger leaves baggage unattended in the terminal?", options: ["Open it to find ID", "Move it to lost and found", "Immediately notify airport security and do not touch it", "Ignore it"], correct: 2, explanation: "Unattended baggage is a security risk and must be reported immediately.", tag: "Security Procedures" }
      ]
    }
  };

  // Handle combined section logic
  if (section === 'combined') {
    const combined = [];
    ['english', 'computer', 'airport'].forEach(sec => {
      if(sampleBank[sec] && sampleBank[sec][mode]) {
        combined.push(...sampleBank[sec][mode]);
      }
    });
    return combined.sort(() => Math.random() - 0.5); // Shuffle
  }

  return sampleBank[section]?.[mode] || [];
};
