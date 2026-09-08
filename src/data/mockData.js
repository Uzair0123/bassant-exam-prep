export const getQuestions = (section, mode) => {
  const bank = {
    english: {
      easy: [
        { id: "eng_e_1", question: "She ___ to the airport every morning.", options: ["go", "goes", "going", "gone"], correct: 1, explanation: "For third-person singular (she), we use 'goes'.", tag: "Tenses" },
        { id: "eng_e_2", question: "Choose the correct spelling:", options: ["Accomodation", "Accommodation", "Acommodation", "Acomodation"], correct: 1, explanation: "Accommodation has two C's and two M's.", tag: "Spelling" },
        { id: "eng_e_3", question: "The passengers ___ waiting at gate 4.", options: ["is", "am", "are", "be"], correct: 2, explanation: "'Passengers' is plural, so we use 'are'.", tag: "Subject-Verb" },
        { id: "eng_e_4", question: "I need to check ___ my luggage.", options: ["in", "on", "at", "to"], correct: 0, explanation: "The correct phrasal verb is 'check in'.", tag: "Prepositions" }
      ],
      medium: [
        { id: "eng_m_1", question: "If the flight is delayed, we ___ the passengers.", options: ["will notify", "would notify", "notified", "notifying"], correct: 0, explanation: "First conditional: If + present simple, will + base verb.", tag: "Conditionals" },
        { id: "eng_m_2", question: "The flight attendant asked me where ___.", options: ["was I going", "I was going", "am I going", "I am going"], correct: 1, explanation: "Reported speech changes the word order to subject-verb.", tag: "Reported Speech" },
        { id: "eng_m_3", question: "We apologize ___ the inconvenience.", options: ["for", "about", "to", "with"], correct: 0, explanation: "We always 'apologize for' something.", tag: "Prepositions" },
        { id: "eng_m_4", question: "Neither the pilot nor the crew ___ aware of the issue.", options: ["was", "were", "are", "has"], correct: 0, explanation: "With 'neither/nor', the verb matches the noun closest to it (crew is singular collective here, or 'was').", tag: "Advanced Grammar" }
      ],
      hard: [
        { id: "eng_h_1", question: "By the time we arrived at the gate, the plane ___.", options: ["has already left", "already left", "had already left", "was leaving"], correct: 2, explanation: "Past perfect is used for an action completed before another past action.", tag: "Past Perfect" },
        { id: "eng_h_2", question: "Seldom ___ such severe turbulence.", options: ["I have experienced", "have I experienced", "I experienced", "I did experience"], correct: 1, explanation: "Negative inversion requires auxiliary verb before subject.", tag: "Inversion" },
        { id: "eng_h_3", question: "I would rather you ___ smoking in the lavatory.", options: ["stop", "stopped", "stopping", "had stopped"], correct: 1, explanation: "'Would rather' followed by a pronoun uses the past simple.", tag: "Subjunctive" },
        { id: "eng_h_4", question: "The manual, ___ is on the desk, contains the protocols.", options: ["that", "which", "who", "whom"], correct: 1, explanation: "Non-defining relative clauses use 'which', not 'that'.", tag: "Relative Clauses" }
      ],
      exam: [
        { id: "eng_x_1", question: "Which sentence is the most polite way to ask a passenger to wait?", options: ["Wait here.", "You must wait here.", "Would you mind waiting here for a moment, please?", "Wait here, please."], correct: 2, explanation: "'Would you mind + V-ing' is standard polite customer service.", tag: "Customer Service" },
        { id: "eng_x_2", question: "Identify the error: 'The amount of passengers on the delayed flight were staggering.'", options: ["amount -> number", "were -> was", "Both A and B", "No error"], correct: 2, explanation: "Use 'number' for countable nouns (passengers), and 'number' takes a singular verb (was).", tag: "Error Spotting" },
        { id: "eng_x_3", question: "If he ___ the boarding pass, he wouldn't be stuck at security.", options: ["hasn't lost", "didn't lose", "hadn't lost", "wouldn't lose"], correct: 2, explanation: "Mixed conditional: Past action (hadn't lost) affecting present result (wouldn't be stuck).", tag: "Mixed Conditionals" },
        { id: "eng_x_4", question: "It is imperative that the captain ___ informed immediately.", options: ["is", "be", "was", "has been"], correct: 1, explanation: "The subjunctive mood uses the base form 'be' after 'imperative that'.", tag: "Subjunctive" }
      ]
    },
    computer: {
      easy: [
        { id: "com_e_1", question: "Which program is best for presentations?", options: ["Word", "Excel", "PowerPoint", "Access"], correct: 2, explanation: "PowerPoint creates presentations.", tag: "General Knowledge" },
        { id: "com_e_2", question: "What is the shortcut to copy text?", options: ["Ctrl + C", "Ctrl + V", "Ctrl + P", "Ctrl + X"], correct: 0, explanation: "Ctrl + C is for Copy.", tag: "Shortcuts" },
        { id: "com_e_3", question: "Which symbol starts a formula in Excel?", options: ["+", "-", "=", "*"], correct: 2, explanation: "All Excel formulas must begin with an equals sign (=).", tag: "Excel Basics" },
        { id: "com_e_4", question: "What does CC stand for in an email?", options: ["Carbon Copy", "Creative Commons", "Copy Cat", "Computer Code"], correct: 0, explanation: "CC stands for Carbon Copy in email terminology.", tag: "Email/Outlook" }
      ],
      medium: [
        { id: "com_m_1", question: "In Excel, what does VLOOKUP do?", options: ["Adds numbers", "Searches for a value vertically", "Formats text", "Creates a chart"], correct: 1, explanation: "VLOOKUP stands for Vertical Lookup.", tag: "Excel Formulas" },
        { id: "com_m_2", question: "How do you freeze the top row in Excel?", options: ["View > Freeze Panes", "Insert > Freeze", "Home > Format", "Data > Lock"], correct: 0, explanation: "Freeze Panes is located under the View tab.", tag: "Excel Navigation" },
        { id: "com_m_3", question: "What is the primary function of Microsoft Teams?", options: ["Word processing", "Database management", "Communication and collaboration", "Graphic design"], correct: 2, explanation: "Teams is Microsoft's communication and collaboration platform.", tag: "Teams" },
        { id: "com_m_4", question: "In Word, what does 'Format Painter' do?", options: ["Paints the background", "Copies formatting from one text to another", "Changes the font color", "Inserts images"], correct: 1, explanation: "Format painter copies text formatting styles.", tag: "Word Formatting" }
      ],
      hard: [
        { id: "com_h_1", question: "How do you apply a macro to multiple Word documents?", options: ["Copy and paste", "Save in Normal.dotm", "It is impossible", "Using Excel"], correct: 1, explanation: "Saving in the Normal.dotm template makes it globally available.", tag: "Word Macros" },
        { id: "com_h_2", question: "Which formula handles a VLOOKUP error by displaying 'Not Found'?", options: ["=IFERROR(VLOOKUP(A1,B:C,2,0), 'Not Found')", "=VLOOKUP(A1,B:C,2,0, 'Not Found')", "=IF(ERROR, 'Not Found')", "=ISERROR(VLOOKUP)"], correct: 0, explanation: "IFERROR catches formula errors and outputs a custom string.", tag: "Advanced Excel" },
        { id: "com_h_3", question: "What is a Pivot Table primarily used for?", options: ["Creating animations", "Summarizing and analyzing large datasets", "Writing code", "Sending mass emails"], correct: 1, explanation: "Pivot Tables summarize complex data.", tag: "Excel Analysis" },
        { id: "com_h_4", question: "In PowerPoint, what is the 'Slide Master'?", options: ["The first slide", "The person presenting", "A template that controls the layout of all slides", "A transition effect"], correct: 2, explanation: "The Slide Master controls global design elements.", tag: "PowerPoint" }
      ],
      exam: [
        { id: "com_x_1", question: "What is the difference between COUNT and COUNTA in Excel?", options: ["COUNT counts text, COUNTA counts numbers", "COUNT counts numbers, COUNTA counts non-empty cells", "They are identical", "COUNTA is used only for arrays"], correct: 1, explanation: "COUNT only counts numerical values; COUNTA counts any non-empty cell.", tag: "Advanced Excel" },
        { id: "com_x_2", question: "How do you execute a mail merge using an Excel list in Word?", options: ["Mailings > Select Recipients > Use an Existing List", "Insert > Excel Table", "Data > Import", "File > Share"], correct: 0, explanation: "Mail Merge requires linking an existing Excel list via the Mailings tab.", tag: "Mail Merge" },
        { id: "com_x_3", question: "What is the correct syntax for an INDEX/MATCH formula?", options: ["=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))", "=MATCH(INDEX(return_range, lookup_value))", "=INDEX(MATCH(lookup_value))", "=MATCH(return_range, INDEX(lookup_range))"], correct: 0, explanation: "INDEX returns the value, MATCH provides the row number.", tag: "Advanced Excel" },
        { id: "com_x_4", question: "Which feature prevents users from entering text into a number-only cell in Excel?", options: ["Conditional Formatting", "Data Validation", "Protect Sheet", "Format Cells"], correct: 1, explanation: "Data Validation restricts the type of data that can be typed into a cell.", tag: "Excel Security" }
      ]
    },
    airport: {
      easy: [
        { id: "air_e_1", question: "What does VIP stand for?", options: ["Very Important Person", "Very Interesting Person", "Valid In Passport", "Visa In Progress"], correct: 0, explanation: "VIP stands for Very Important Person.", tag: "Terminology" },
        { id: "air_e_2", question: "Where do passengers pick up their luggage?", options: ["Check-in", "Baggage Claim", "Security", "The Gate"], correct: 1, explanation: "Luggage is retrieved at Baggage Claim.", tag: "Terminal Layout" },
        { id: "air_e_3", question: "What document is absolutely required for international travel?", options: ["Driver's License", "Birth Certificate", "Passport", "Credit Card"], correct: 2, explanation: "A Passport is mandatory for international travel.", tag: "Travel Docs" },
        { id: "air_e_4", question: "What does ETA mean?", options: ["Estimated Time of Arrival", "Extra Time Allowed", "Egyptian Transport Authority", "Emergency Takeoff Area"], correct: 0, explanation: "ETA stands for Estimated Time of Arrival.", tag: "Acronyms" }
      ],
      medium: [
        { id: "air_m_1", question: "What is the primary role of Customs at an airport?", options: ["Checking boarding passes", "Regulating goods entering the country", "Fueling the aircraft", "Selling duty-free items"], correct: 1, explanation: "Customs regulates imports and exports.", tag: "Customs" },
        { id: "air_m_2", question: "What does 'Standby' mean for a passenger?", options: ["They are standing near the gate", "They are waiting for an available seat on a full flight", "They missed their flight", "They are VIP"], correct: 1, explanation: "Standby passengers wait for no-show seats to become available.", tag: "Ticketing" },
        { id: "air_m_3", question: "What is a 'Layover'?", options: ["A delay on the runway", "A connection point between flights", "A type of luggage", "A security check"], correct: 1, explanation: "A layover is a stop between flights.", tag: "Terminology" },
        { id: "air_m_4", question: "In aviation time, what is 15:00?", options: ["5:00 PM", "3:00 PM", "3:00 AM", "5:00 AM"], correct: 1, explanation: "Aviation uses the 24-hour clock. 15:00 is 3:00 PM.", tag: "Aviation Time" }
      ],
      hard: [
        { id: "air_h_1", question: "According to IATA, what is the code for Cairo International Airport?", options: ["CAI", "CIR", "CRO", "CIA"], correct: 0, explanation: "CAI is the IATA code for Cairo.", tag: "IATA Codes" },
        { id: "air_h_2", question: "What is the difference between a direct flight and a non-stop flight?", options: ["They are the same", "Direct flights make a stop but keep the same flight number; non-stop flights make zero stops", "Non-stop flights are faster", "Direct flights require changing planes"], correct: 1, explanation: "Direct flights may touch down for fuel or passengers, but non-stop flights do not.", tag: "Aviation Logistics" },
        { id: "air_h_3", question: "What is the 'Sterile Area' in an airport?", options: ["The hospital clinic", "The area past the security checkpoints", "The VIP lounge", "The runway"], correct: 1, explanation: "The sterile area is the secure zone past TSA/security.", tag: "Security" },
        { id: "air_h_4", question: "What does UM stand for in airline passenger coding?", options: ["Unaccompanied Minor", "Unruly Member", "Upper Management", "Unknown Manifest"], correct: 0, explanation: "UM stands for Unaccompanied Minor.", tag: "Passenger Codes" }
      ],
      exam: [
        { id: "air_x_1", question: "What is the correct procedure if a passenger leaves a bag unattended?", options: ["Open it to find ID", "Move it to lost and found", "Immediately notify security and do not touch it", "Ignore it"], correct: 2, explanation: "Unattended baggage is a bomb threat risk and must be reported without touching it.", tag: "Security Procedures" },
        { id: "air_x_2", question: "What does the phonetic alphabet letter 'Zulu' represent?", options: ["Z", "X", "Zero", "Zone"], correct: 0, explanation: "Zulu is the NATO phonetic word for the letter Z.", tag: "Phonetic Alphabet" },
        { id: "air_x_3", question: "A passenger traveling with a 'PRM' code requires what?", options: ["A special meal", "Assistance due to reduced mobility", "A pet in the cabin", "A weapon permit"], correct: 1, explanation: "PRM stands for Passenger with Reduced Mobility.", tag: "Special Assistance" },
        { id: "air_x_4", question: "If a flight is overbooked, what is the sequence of denied boarding?", options: ["Volunteers first, then involuntary based on fare/status", "First come first serve", "Alphabetical order", "Families first"], correct: 0, explanation: "Airlines must seek volunteers before involuntarily denying boarding.", tag: "Airline Policies" }
      ]
    }
  };

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
