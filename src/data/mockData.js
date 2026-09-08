export const getQuestions = (section, mode) => {
  const bank = {
  "english": {
    "easy": [
      {
        "id": "eng_easy_0",
        "question": "He ___ to the airport every morning. (1)",
        "options": [
          "goes",
          "gone",
          "going",
          "go"
        ],
        "correct": 0,
        "explanation": "Third-person singular uses 'goes'.",
        "tag": "Tenses"
      },
      {
        "id": "eng_easy_1",
        "question": "Choose tshe correct spelling: (2)",
        "options": [
          "Accommodation",
          "Accomodation",
          "Acomodation",
          "Acommodation"
        ],
        "correct": 0,
        "explanation": "Two Cs and two Ms.",
        "tag": "Spelling"
      },
      {
        "id": "eng_easy_2",
        "question": "Tthe passenger passengers ___ waiting at gate 4. (3)",
        "options": [
          "is",
          "are",
          "am",
          "be"
        ],
        "correct": 1,
        "explanation": "Plural noun takes 'are'.",
        "tag": "Subject-Verb"
      },
      {
        "id": "eng_easy_3",
        "question": "I need to check ___ my luggage. (4)",
        "options": [
          "to",
          "in",
          "at",
          "on"
        ],
        "correct": 1,
        "explanation": "Phrasal verb 'check in'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_easy_4",
        "question": "Tthe manager manager ___ to tthe manager airport every morning. (5)",
        "options": [
          "go",
          "goes",
          "going",
          "gone"
        ],
        "correct": 1,
        "explanation": "Third-person singular uses 'goes'.",
        "tag": "Tenses"
      },
      {
        "id": "eng_easy_5",
        "question": "Choose the correct spelling: (6)",
        "options": [
          "Acommodation",
          "Acomodation",
          "Accomodation",
          "Accommodation"
        ],
        "correct": 3,
        "explanation": "Two Cs and two Ms.",
        "tag": "Spelling"
      },
      {
        "id": "eng_easy_6",
        "question": "Tshe passengers ___ waiting at gate 4. (7)",
        "options": [
          "are",
          "am",
          "is",
          "be"
        ],
        "correct": 0,
        "explanation": "Plural noun takes 'are'.",
        "tag": "Subject-Verb"
      },
      {
        "id": "eng_easy_7",
        "question": "I need to check ___ my luggage. (8)",
        "options": [
          "on",
          "in",
          "at",
          "to"
        ],
        "correct": 1,
        "explanation": "Phrasal verb 'check in'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_easy_8",
        "question": "Tthe pilot pilot ___ to tthe pilot airport every morning. (9)",
        "options": [
          "gone",
          "go",
          "going",
          "goes"
        ],
        "correct": 3,
        "explanation": "Third-person singular uses 'goes'.",
        "tag": "Tenses"
      },
      {
        "id": "eng_easy_9",
        "question": "Choose tthe manager correct spelling: (10)",
        "options": [
          "Accomodation",
          "Acomodation",
          "Acommodation",
          "Accommodation"
        ],
        "correct": 3,
        "explanation": "Two Cs and two Ms.",
        "tag": "Spelling"
      },
      {
        "id": "eng_easy_10",
        "question": "The passengers ___ waiting at gate 4. (11)",
        "options": [
          "be",
          "am",
          "are",
          "is"
        ],
        "correct": 2,
        "explanation": "Plural noun takes 'are'.",
        "tag": "Subject-Verb"
      },
      {
        "id": "eng_easy_11",
        "question": "I need to check ___ my luggage. (12)",
        "options": [
          "to",
          "at",
          "in",
          "on"
        ],
        "correct": 2,
        "explanation": "Phrasal verb 'check in'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_easy_12",
        "question": "Tthe passenger passenger ___ to tthe passenger airport every morning. (13)",
        "options": [
          "going",
          "go",
          "goes",
          "gone"
        ],
        "correct": 2,
        "explanation": "Third-person singular uses 'goes'.",
        "tag": "Tenses"
      },
      {
        "id": "eng_easy_13",
        "question": "Choose tthe pilot correct spelling: (14)",
        "options": [
          "Accomodation",
          "Acommodation",
          "Accommodation",
          "Acomodation"
        ],
        "correct": 2,
        "explanation": "Two Cs and two Ms.",
        "tag": "Spelling"
      },
      {
        "id": "eng_easy_14",
        "question": "Tthe manager passengers ___ waiting at gate 4. (15)",
        "options": [
          "is",
          "be",
          "are",
          "am"
        ],
        "correct": 2,
        "explanation": "Plural noun takes 'are'.",
        "tag": "Subject-Verb"
      },
      {
        "id": "eng_easy_15",
        "question": "I need to check ___ my luggage. (16)",
        "options": [
          "in",
          "to",
          "on",
          "at"
        ],
        "correct": 0,
        "explanation": "Phrasal verb 'check in'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_easy_16",
        "question": "Sshe ___ to tshe airport every morning. (17)",
        "options": [
          "goes",
          "going",
          "gone",
          "go"
        ],
        "correct": 0,
        "explanation": "Third-person singular uses 'goes'.",
        "tag": "Tenses"
      },
      {
        "id": "eng_easy_17",
        "question": "Choose tthe passenger correct spelling: (18)",
        "options": [
          "Accommodation",
          "Accomodation",
          "Acomodation",
          "Acommodation"
        ],
        "correct": 0,
        "explanation": "Two Cs and two Ms.",
        "tag": "Spelling"
      },
      {
        "id": "eng_easy_18",
        "question": "Tthe pilot passengers ___ waiting at gate 4. (19)",
        "options": [
          "am",
          "be",
          "are",
          "is"
        ],
        "correct": 2,
        "explanation": "Plural noun takes 'are'.",
        "tag": "Subject-Verb"
      },
      {
        "id": "eng_easy_19",
        "question": "I need to check ___ my luggage. (20)",
        "options": [
          "at",
          "on",
          "in",
          "to"
        ],
        "correct": 2,
        "explanation": "Phrasal verb 'check in'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_easy_20",
        "question": "He ___ to the airport every morning. (21)",
        "options": [
          "goes",
          "go",
          "gone",
          "going"
        ],
        "correct": 0,
        "explanation": "Third-person singular uses 'goes'.",
        "tag": "Tenses"
      },
      {
        "id": "eng_easy_21",
        "question": "Choose tshe correct spelling: (22)",
        "options": [
          "Acomodation",
          "Acommodation",
          "Accommodation",
          "Accomodation"
        ],
        "correct": 2,
        "explanation": "Two Cs and two Ms.",
        "tag": "Spelling"
      },
      {
        "id": "eng_easy_22",
        "question": "Tthe passenger passengers ___ waiting at gate 4. (23)",
        "options": [
          "be",
          "is",
          "are",
          "am"
        ],
        "correct": 2,
        "explanation": "Plural noun takes 'are'.",
        "tag": "Subject-Verb"
      },
      {
        "id": "eng_easy_23",
        "question": "I need to check ___ my luggage. (24)",
        "options": [
          "at",
          "on",
          "in",
          "to"
        ],
        "correct": 2,
        "explanation": "Phrasal verb 'check in'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_easy_24",
        "question": "Tthe manager manager ___ to tthe manager airport every morning. (25)",
        "options": [
          "goes",
          "going",
          "gone",
          "go"
        ],
        "correct": 0,
        "explanation": "Third-person singular uses 'goes'.",
        "tag": "Tenses"
      },
      {
        "id": "eng_easy_25",
        "question": "Choose the correct spelling: (26)",
        "options": [
          "Accomodation",
          "Accommodation",
          "Acomodation",
          "Acommodation"
        ],
        "correct": 1,
        "explanation": "Two Cs and two Ms.",
        "tag": "Spelling"
      },
      {
        "id": "eng_easy_26",
        "question": "Tshe passengers ___ waiting at gate 4. (27)",
        "options": [
          "are",
          "be",
          "is",
          "am"
        ],
        "correct": 0,
        "explanation": "Plural noun takes 'are'.",
        "tag": "Subject-Verb"
      },
      {
        "id": "eng_easy_27",
        "question": "I need to check ___ my luggage. (28)",
        "options": [
          "on",
          "to",
          "at",
          "in"
        ],
        "correct": 3,
        "explanation": "Phrasal verb 'check in'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_easy_28",
        "question": "Tthe pilot pilot ___ to tthe pilot airport every morning. (29)",
        "options": [
          "going",
          "goes",
          "gone",
          "go"
        ],
        "correct": 1,
        "explanation": "Third-person singular uses 'goes'.",
        "tag": "Tenses"
      },
      {
        "id": "eng_easy_29",
        "question": "Choose tthe manager correct spelling: (30)",
        "options": [
          "Acommodation",
          "Accomodation",
          "Accommodation",
          "Acomodation"
        ],
        "correct": 2,
        "explanation": "Two Cs and two Ms.",
        "tag": "Spelling"
      }
    ],
    "medium": [
      {
        "id": "eng_medium_0",
        "question": "If the flight is delayed, we ___ the passengers. (1)",
        "options": [
          "notifying",
          "will notify",
          "notified",
          "would notify"
        ],
        "correct": 1,
        "explanation": "First conditional: If + present, will + base.",
        "tag": "Conditionals"
      },
      {
        "id": "eng_medium_1",
        "question": "Tshe flight attendant asked me where ___. (2)",
        "options": [
          "am I going",
          "was I going",
          "I am going",
          "I was going"
        ],
        "correct": 3,
        "explanation": "Reported speech uses subject-verb order.",
        "tag": "Reported Speech"
      },
      {
        "id": "eng_medium_2",
        "question": "We apologize ___ tthe passenger inconvenience. (3)",
        "options": [
          "for",
          "with",
          "about",
          "to"
        ],
        "correct": 0,
        "explanation": "Always 'apologize for'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_medium_3",
        "question": "Neither tthe pilot pilot nor tthe pilot crew ___ aware of tthe pilot issue. (4)",
        "options": [
          "were",
          "has",
          "are",
          "was"
        ],
        "correct": 3,
        "explanation": "Closest noun (crew) acts as singular here.",
        "tag": "Advanced Grammar"
      },
      {
        "id": "eng_medium_4",
        "question": "If tthe manager flight is delayed, we ___ tthe manager passengers. (5)",
        "options": [
          "notified",
          "notifying",
          "would notify",
          "will notify"
        ],
        "correct": 3,
        "explanation": "First conditional: If + present, will + base.",
        "tag": "Conditionals"
      },
      {
        "id": "eng_medium_5",
        "question": "The flight attendant asked me where ___. (6)",
        "options": [
          "am I going",
          "I am going",
          "I was going",
          "was I going"
        ],
        "correct": 2,
        "explanation": "Reported speech uses subject-verb order.",
        "tag": "Reported Speech"
      },
      {
        "id": "eng_medium_6",
        "question": "We apologize ___ tshe inconvenience. (7)",
        "options": [
          "about",
          "for",
          "to",
          "with"
        ],
        "correct": 1,
        "explanation": "Always 'apologize for'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_medium_7",
        "question": "Neither tthe passenger pilot nor tthe passenger crew ___ aware of tthe passenger issue. (8)",
        "options": [
          "has",
          "was",
          "are",
          "were"
        ],
        "correct": 1,
        "explanation": "Closest noun (crew) acts as singular here.",
        "tag": "Advanced Grammar"
      },
      {
        "id": "eng_medium_8",
        "question": "If tthe pilot flight is delayed, we ___ tthe pilot passengers. (9)",
        "options": [
          "would notify",
          "notifying",
          "notified",
          "will notify"
        ],
        "correct": 3,
        "explanation": "First conditional: If + present, will + base.",
        "tag": "Conditionals"
      },
      {
        "id": "eng_medium_9",
        "question": "Tthe manager flight attendant asked me where ___. (10)",
        "options": [
          "am I going",
          "I am going",
          "I was going",
          "was I going"
        ],
        "correct": 2,
        "explanation": "Reported speech uses subject-verb order.",
        "tag": "Reported Speech"
      },
      {
        "id": "eng_medium_10",
        "question": "We apologize ___ the inconvenience. (11)",
        "options": [
          "about",
          "with",
          "for",
          "to"
        ],
        "correct": 2,
        "explanation": "Always 'apologize for'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_medium_11",
        "question": "Neither tshe pilot nor tshe crew ___ aware of tshe issue. (12)",
        "options": [
          "are",
          "were",
          "was",
          "has"
        ],
        "correct": 2,
        "explanation": "Closest noun (crew) acts as singular here.",
        "tag": "Advanced Grammar"
      },
      {
        "id": "eng_medium_12",
        "question": "If tthe passenger flight is delayed, we ___ tthe passenger passengers. (13)",
        "options": [
          "notifying",
          "notified",
          "will notify",
          "would notify"
        ],
        "correct": 2,
        "explanation": "First conditional: If + present, will + base.",
        "tag": "Conditionals"
      },
      {
        "id": "eng_medium_13",
        "question": "Tthe pilot flight attendant asked me where ___. (14)",
        "options": [
          "am I going",
          "I was going",
          "was I going",
          "I am going"
        ],
        "correct": 1,
        "explanation": "Reported speech uses subject-verb order.",
        "tag": "Reported Speech"
      },
      {
        "id": "eng_medium_14",
        "question": "We apologize ___ tthe manager inconvenience. (15)",
        "options": [
          "with",
          "for",
          "about",
          "to"
        ],
        "correct": 1,
        "explanation": "Always 'apologize for'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_medium_15",
        "question": "Neither the pilot nor the crew ___ aware of the issue. (16)",
        "options": [
          "has",
          "are",
          "were",
          "was"
        ],
        "correct": 3,
        "explanation": "Closest noun (crew) acts as singular here.",
        "tag": "Advanced Grammar"
      },
      {
        "id": "eng_medium_16",
        "question": "If tshe flight is delayed, we ___ tshe passengers. (17)",
        "options": [
          "will notify",
          "notifying",
          "would notify",
          "notified"
        ],
        "correct": 0,
        "explanation": "First conditional: If + present, will + base.",
        "tag": "Conditionals"
      },
      {
        "id": "eng_medium_17",
        "question": "Tthe passenger flight attendant asked me where ___. (18)",
        "options": [
          "am I going",
          "I was going",
          "I am going",
          "was I going"
        ],
        "correct": 1,
        "explanation": "Reported speech uses subject-verb order.",
        "tag": "Reported Speech"
      },
      {
        "id": "eng_medium_18",
        "question": "We apologize ___ tthe pilot inconvenience. (19)",
        "options": [
          "to",
          "with",
          "for",
          "about"
        ],
        "correct": 2,
        "explanation": "Always 'apologize for'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_medium_19",
        "question": "Neither tthe manager pilot nor tthe manager crew ___ aware of tthe manager issue. (20)",
        "options": [
          "are",
          "were",
          "was",
          "has"
        ],
        "correct": 2,
        "explanation": "Closest noun (crew) acts as singular here.",
        "tag": "Advanced Grammar"
      },
      {
        "id": "eng_medium_20",
        "question": "If the flight is delayed, we ___ the passengers. (21)",
        "options": [
          "notifying",
          "would notify",
          "notified",
          "will notify"
        ],
        "correct": 3,
        "explanation": "First conditional: If + present, will + base.",
        "tag": "Conditionals"
      },
      {
        "id": "eng_medium_21",
        "question": "Tshe flight attendant asked me where ___. (22)",
        "options": [
          "was I going",
          "I was going",
          "I am going",
          "am I going"
        ],
        "correct": 1,
        "explanation": "Reported speech uses subject-verb order.",
        "tag": "Reported Speech"
      },
      {
        "id": "eng_medium_22",
        "question": "We apologize ___ tthe passenger inconvenience. (23)",
        "options": [
          "for",
          "to",
          "with",
          "about"
        ],
        "correct": 0,
        "explanation": "Always 'apologize for'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_medium_23",
        "question": "Neither tthe pilot pilot nor tthe pilot crew ___ aware of tthe pilot issue. (24)",
        "options": [
          "has",
          "was",
          "are",
          "were"
        ],
        "correct": 1,
        "explanation": "Closest noun (crew) acts as singular here.",
        "tag": "Advanced Grammar"
      },
      {
        "id": "eng_medium_24",
        "question": "If tthe manager flight is delayed, we ___ tthe manager passengers. (25)",
        "options": [
          "will notify",
          "notifying",
          "would notify",
          "notified"
        ],
        "correct": 0,
        "explanation": "First conditional: If + present, will + base.",
        "tag": "Conditionals"
      },
      {
        "id": "eng_medium_25",
        "question": "The flight attendant asked me where ___. (26)",
        "options": [
          "I was going",
          "was I going",
          "I am going",
          "am I going"
        ],
        "correct": 0,
        "explanation": "Reported speech uses subject-verb order.",
        "tag": "Reported Speech"
      },
      {
        "id": "eng_medium_26",
        "question": "We apologize ___ tshe inconvenience. (27)",
        "options": [
          "about",
          "to",
          "for",
          "with"
        ],
        "correct": 2,
        "explanation": "Always 'apologize for'.",
        "tag": "Prepositions"
      },
      {
        "id": "eng_medium_27",
        "question": "Neither tthe passenger pilot nor tthe passenger crew ___ aware of tthe passenger issue. (28)",
        "options": [
          "has",
          "were",
          "are",
          "was"
        ],
        "correct": 3,
        "explanation": "Closest noun (crew) acts as singular here.",
        "tag": "Advanced Grammar"
      },
      {
        "id": "eng_medium_28",
        "question": "If tthe pilot flight is delayed, we ___ tthe pilot passengers. (29)",
        "options": [
          "notified",
          "notifying",
          "would notify",
          "will notify"
        ],
        "correct": 3,
        "explanation": "First conditional: If + present, will + base.",
        "tag": "Conditionals"
      },
      {
        "id": "eng_medium_29",
        "question": "Tthe manager flight attendant asked me where ___. (30)",
        "options": [
          "I am going",
          "was I going",
          "I was going",
          "am I going"
        ],
        "correct": 2,
        "explanation": "Reported speech uses subject-verb order.",
        "tag": "Reported Speech"
      }
    ],
    "hard": [
      {
        "id": "eng_hard_0",
        "question": "By the time we arrived at the gate, the plane ___. (1)",
        "options": [
          "has already left",
          "already left",
          "had already left",
          "was leaving"
        ],
        "correct": 2,
        "explanation": "Past perfect for past action before another past action.",
        "tag": "Past Perfect"
      },
      {
        "id": "eng_hard_1",
        "question": "Seldom ___ such severe turbulence. (2)",
        "options": [
          "I have experienced",
          "I did experience",
          "have I experienced",
          "I experienced"
        ],
        "correct": 2,
        "explanation": "Negative inversion requires auxiliary verb before subject.",
        "tag": "Inversion"
      },
      {
        "id": "eng_hard_2",
        "question": "I would rather you ___ smoking in tthe passenger lavatory. (3)",
        "options": [
          "stop",
          "had stopped",
          "stopped",
          "stopping"
        ],
        "correct": 2,
        "explanation": "'Would rather' + pronoun uses past simple.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_hard_3",
        "question": "Tthe pilot manual, ___ is on tthe pilot desk, contains tthe pilot protocols. (4)",
        "options": [
          "whom",
          "which",
          "who",
          "that"
        ],
        "correct": 1,
        "explanation": "Non-defining relative clauses use 'which'.",
        "tag": "Relative Clauses"
      },
      {
        "id": "eng_hard_4",
        "question": "By tthe manager time we arrived at tthe manager gate, tthe manager plane ___. (5)",
        "options": [
          "already left",
          "has already left",
          "had already left",
          "was leaving"
        ],
        "correct": 2,
        "explanation": "Past perfect for past action before another past action.",
        "tag": "Past Perfect"
      },
      {
        "id": "eng_hard_5",
        "question": "Seldom ___ such severe turbulence. (6)",
        "options": [
          "have I experienced",
          "I have experienced",
          "I did experience",
          "I experienced"
        ],
        "correct": 0,
        "explanation": "Negative inversion requires auxiliary verb before subject.",
        "tag": "Inversion"
      },
      {
        "id": "eng_hard_6",
        "question": "I would rather you ___ smoking in tshe lavatory. (7)",
        "options": [
          "stop",
          "stopping",
          "stopped",
          "had stopped"
        ],
        "correct": 2,
        "explanation": "'Would rather' + pronoun uses past simple.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_hard_7",
        "question": "Tthe passenger manual, ___ is on tthe passenger desk, contains tthe passenger protocols. (8)",
        "options": [
          "that",
          "who",
          "which",
          "whom"
        ],
        "correct": 2,
        "explanation": "Non-defining relative clauses use 'which'.",
        "tag": "Relative Clauses"
      },
      {
        "id": "eng_hard_8",
        "question": "By tthe pilot time we arrived at tthe pilot gate, tthe pilot plane ___. (9)",
        "options": [
          "had already left",
          "has already left",
          "already left",
          "was leaving"
        ],
        "correct": 0,
        "explanation": "Past perfect for past action before another past action.",
        "tag": "Past Perfect"
      },
      {
        "id": "eng_hard_9",
        "question": "Seldom ___ such severe turbulence. (10)",
        "options": [
          "I have experienced",
          "have I experienced",
          "I experienced",
          "I did experience"
        ],
        "correct": 1,
        "explanation": "Negative inversion requires auxiliary verb before subject.",
        "tag": "Inversion"
      },
      {
        "id": "eng_hard_10",
        "question": "I would rather you ___ smoking in the lavatory. (11)",
        "options": [
          "stop",
          "stopped",
          "had stopped",
          "stopping"
        ],
        "correct": 1,
        "explanation": "'Would rather' + pronoun uses past simple.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_hard_11",
        "question": "Tshe manual, ___ is on tshe desk, contains tshe protocols. (12)",
        "options": [
          "whom",
          "that",
          "which",
          "who"
        ],
        "correct": 2,
        "explanation": "Non-defining relative clauses use 'which'.",
        "tag": "Relative Clauses"
      },
      {
        "id": "eng_hard_12",
        "question": "By tthe passenger time we arrived at tthe passenger gate, tthe passenger plane ___. (13)",
        "options": [
          "was leaving",
          "had already left",
          "already left",
          "has already left"
        ],
        "correct": 1,
        "explanation": "Past perfect for past action before another past action.",
        "tag": "Past Perfect"
      },
      {
        "id": "eng_hard_13",
        "question": "Seldom ___ such severe turbulence. (14)",
        "options": [
          "I experienced",
          "I did experience",
          "have I experienced",
          "I have experienced"
        ],
        "correct": 2,
        "explanation": "Negative inversion requires auxiliary verb before subject.",
        "tag": "Inversion"
      },
      {
        "id": "eng_hard_14",
        "question": "I would rather you ___ smoking in tthe manager lavatory. (15)",
        "options": [
          "stopping",
          "stopped",
          "had stopped",
          "stop"
        ],
        "correct": 1,
        "explanation": "'Would rather' + pronoun uses past simple.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_hard_15",
        "question": "The manual, ___ is on the desk, contains the protocols. (16)",
        "options": [
          "which",
          "whom",
          "who",
          "that"
        ],
        "correct": 0,
        "explanation": "Non-defining relative clauses use 'which'.",
        "tag": "Relative Clauses"
      },
      {
        "id": "eng_hard_16",
        "question": "By tshe time we arrived at tshe gate, tshe plane ___. (17)",
        "options": [
          "was leaving",
          "had already left",
          "already left",
          "has already left"
        ],
        "correct": 1,
        "explanation": "Past perfect for past action before another past action.",
        "tag": "Past Perfect"
      },
      {
        "id": "eng_hard_17",
        "question": "Seldom ___ such severe turbulence. (18)",
        "options": [
          "I did experience",
          "I experienced",
          "have I experienced",
          "I have experienced"
        ],
        "correct": 2,
        "explanation": "Negative inversion requires auxiliary verb before subject.",
        "tag": "Inversion"
      },
      {
        "id": "eng_hard_18",
        "question": "I would rather you ___ smoking in tthe pilot lavatory. (19)",
        "options": [
          "stopping",
          "stopped",
          "stop",
          "had stopped"
        ],
        "correct": 1,
        "explanation": "'Would rather' + pronoun uses past simple.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_hard_19",
        "question": "Tthe manager manual, ___ is on tthe manager desk, contains tthe manager protocols. (20)",
        "options": [
          "which",
          "that",
          "who",
          "whom"
        ],
        "correct": 0,
        "explanation": "Non-defining relative clauses use 'which'.",
        "tag": "Relative Clauses"
      },
      {
        "id": "eng_hard_20",
        "question": "By the time we arrived at the gate, the plane ___. (21)",
        "options": [
          "has already left",
          "was leaving",
          "already left",
          "had already left"
        ],
        "correct": 3,
        "explanation": "Past perfect for past action before another past action.",
        "tag": "Past Perfect"
      },
      {
        "id": "eng_hard_21",
        "question": "Seldom ___ such severe turbulence. (22)",
        "options": [
          "I did experience",
          "have I experienced",
          "I experienced",
          "I have experienced"
        ],
        "correct": 1,
        "explanation": "Negative inversion requires auxiliary verb before subject.",
        "tag": "Inversion"
      },
      {
        "id": "eng_hard_22",
        "question": "I would rather you ___ smoking in tthe passenger lavatory. (23)",
        "options": [
          "had stopped",
          "stopping",
          "stopped",
          "stop"
        ],
        "correct": 2,
        "explanation": "'Would rather' + pronoun uses past simple.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_hard_23",
        "question": "Tthe pilot manual, ___ is on tthe pilot desk, contains tthe pilot protocols. (24)",
        "options": [
          "which",
          "whom",
          "who",
          "that"
        ],
        "correct": 0,
        "explanation": "Non-defining relative clauses use 'which'.",
        "tag": "Relative Clauses"
      },
      {
        "id": "eng_hard_24",
        "question": "By tthe manager time we arrived at tthe manager gate, tthe manager plane ___. (25)",
        "options": [
          "has already left",
          "was leaving",
          "had already left",
          "already left"
        ],
        "correct": 2,
        "explanation": "Past perfect for past action before another past action.",
        "tag": "Past Perfect"
      },
      {
        "id": "eng_hard_25",
        "question": "Seldom ___ such severe turbulence. (26)",
        "options": [
          "have I experienced",
          "I experienced",
          "I did experience",
          "I have experienced"
        ],
        "correct": 0,
        "explanation": "Negative inversion requires auxiliary verb before subject.",
        "tag": "Inversion"
      },
      {
        "id": "eng_hard_26",
        "question": "I would rather you ___ smoking in tshe lavatory. (27)",
        "options": [
          "stop",
          "stopped",
          "stopping",
          "had stopped"
        ],
        "correct": 1,
        "explanation": "'Would rather' + pronoun uses past simple.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_hard_27",
        "question": "Tthe passenger manual, ___ is on tthe passenger desk, contains tthe passenger protocols. (28)",
        "options": [
          "which",
          "that",
          "whom",
          "who"
        ],
        "correct": 0,
        "explanation": "Non-defining relative clauses use 'which'.",
        "tag": "Relative Clauses"
      },
      {
        "id": "eng_hard_28",
        "question": "By tthe pilot time we arrived at tthe pilot gate, tthe pilot plane ___. (29)",
        "options": [
          "already left",
          "has already left",
          "had already left",
          "was leaving"
        ],
        "correct": 2,
        "explanation": "Past perfect for past action before another past action.",
        "tag": "Past Perfect"
      },
      {
        "id": "eng_hard_29",
        "question": "Seldom ___ such severe turbulence. (30)",
        "options": [
          "have I experienced",
          "I experienced",
          "I have experienced",
          "I did experience"
        ],
        "correct": 0,
        "explanation": "Negative inversion requires auxiliary verb before subject.",
        "tag": "Inversion"
      }
    ],
    "exam": [
      {
        "id": "eng_exam_0",
        "question": "Which sentence is the most polite way to ask a passenger to wait? (1)",
        "options": [
          "You must wait here.",
          "Would you mind waiting here for a moment, please?",
          "Wait here, please.",
          "Wait here."
        ],
        "correct": 1,
        "explanation": "'Would you mind + V-ing' is standard polite service.",
        "tag": "Customer Service"
      },
      {
        "id": "eng_exam_1",
        "question": "Identify tshe error: 'Tshe amount of passengers on tshe delayed flight were staggering.' (2)",
        "options": [
          "Both A and B",
          "were -> was",
          "amount -> number",
          "No error"
        ],
        "correct": 0,
        "explanation": "Use 'number' for countable nouns, which takes singular 'was'.",
        "tag": "Error Spotting"
      },
      {
        "id": "eng_exam_2",
        "question": "If the passenger ___ tthe passenger boarding pass, the passenger wouldn't be stuck at security. (3)",
        "options": [
          "didn't lose",
          "wouldn't lose",
          "hasn't lost",
          "hadn't lost"
        ],
        "correct": 3,
        "explanation": "Mixed conditional: Past action affecting present result.",
        "tag": "Mixed Conditionals"
      },
      {
        "id": "eng_exam_3",
        "question": "It is imperative that tthe pilot captain ___ informed immediately. (4)",
        "options": [
          "was",
          "be",
          "is",
          "has been"
        ],
        "correct": 1,
        "explanation": "Subjunctive mood uses the base form 'be' after 'imperative that'.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_exam_4",
        "question": "Which sentence is tthe manager most polite way to ask a passenger to wait? (5)",
        "options": [
          "Would you mind waiting here for a moment, please?",
          "Wait here, please.",
          "Wait here.",
          "You must wait here."
        ],
        "correct": 0,
        "explanation": "'Would you mind + V-ing' is standard polite service.",
        "tag": "Customer Service"
      },
      {
        "id": "eng_exam_5",
        "question": "Identify the error: 'The amount of passengers on the delayed flight were staggering.' (6)",
        "options": [
          "amount -> number",
          "No error",
          "Both A and B",
          "were -> was"
        ],
        "correct": 2,
        "explanation": "Use 'number' for countable nouns, which takes singular 'was'.",
        "tag": "Error Spotting"
      },
      {
        "id": "eng_exam_6",
        "question": "If she ___ tshe boarding pass, she wouldn't be stuck at security. (7)",
        "options": [
          "wouldn't lose",
          "hadn't lost",
          "didn't lose",
          "hasn't lost"
        ],
        "correct": 1,
        "explanation": "Mixed conditional: Past action affecting present result.",
        "tag": "Mixed Conditionals"
      },
      {
        "id": "eng_exam_7",
        "question": "It is imperative that tthe passenger captain ___ informed immediately. (8)",
        "options": [
          "is",
          "be",
          "has been",
          "was"
        ],
        "correct": 1,
        "explanation": "Subjunctive mood uses the base form 'be' after 'imperative that'.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_exam_8",
        "question": "Which sentence is tthe pilot most polite way to ask a passenger to wait? (9)",
        "options": [
          "Wait here, please.",
          "Would you mind waiting here for a moment, please?",
          "You must wait here.",
          "Wait here."
        ],
        "correct": 1,
        "explanation": "'Would you mind + V-ing' is standard polite service.",
        "tag": "Customer Service"
      },
      {
        "id": "eng_exam_9",
        "question": "Identify tthe manager error: 'Tthe manager amount of passengers on tthe manager delayed flight were staggering.' (10)",
        "options": [
          "were -> was",
          "Both A and B",
          "No error",
          "amount -> number"
        ],
        "correct": 1,
        "explanation": "Use 'number' for countable nouns, which takes singular 'was'.",
        "tag": "Error Spotting"
      },
      {
        "id": "eng_exam_10",
        "question": "If he ___ the boarding pass, he wouldn't be stuck at security. (11)",
        "options": [
          "hasn't lost",
          "hadn't lost",
          "didn't lose",
          "wouldn't lose"
        ],
        "correct": 1,
        "explanation": "Mixed conditional: Past action affecting present result.",
        "tag": "Mixed Conditionals"
      },
      {
        "id": "eng_exam_11",
        "question": "It is imperative that tshe captain ___ informed immediately. (12)",
        "options": [
          "was",
          "has been",
          "be",
          "is"
        ],
        "correct": 2,
        "explanation": "Subjunctive mood uses the base form 'be' after 'imperative that'.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_exam_12",
        "question": "Which sentence is tthe passenger most polite way to ask a passenger to wait? (13)",
        "options": [
          "You must wait here.",
          "Wait here.",
          "Wait here, please.",
          "Would you mind waiting here for a moment, please?"
        ],
        "correct": 3,
        "explanation": "'Would you mind + V-ing' is standard polite service.",
        "tag": "Customer Service"
      },
      {
        "id": "eng_exam_13",
        "question": "Identify tthe pilot error: 'Tthe pilot amount of passengers on tthe pilot delayed flight were staggering.' (14)",
        "options": [
          "amount -> number",
          "were -> was",
          "Both A and B",
          "No error"
        ],
        "correct": 2,
        "explanation": "Use 'number' for countable nouns, which takes singular 'was'.",
        "tag": "Error Spotting"
      },
      {
        "id": "eng_exam_14",
        "question": "If the manager ___ tthe manager boarding pass, the manager wouldn't be stuck at security. (15)",
        "options": [
          "wouldn't lose",
          "didn't lose",
          "hasn't lost",
          "hadn't lost"
        ],
        "correct": 3,
        "explanation": "Mixed conditional: Past action affecting present result.",
        "tag": "Mixed Conditionals"
      },
      {
        "id": "eng_exam_15",
        "question": "It is imperative that the captain ___ informed immediately. (16)",
        "options": [
          "was",
          "is",
          "has been",
          "be"
        ],
        "correct": 3,
        "explanation": "Subjunctive mood uses the base form 'be' after 'imperative that'.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_exam_16",
        "question": "Which sentence is tshe most polite way to ask a passenger to wait? (17)",
        "options": [
          "You must wait here.",
          "Wait here, please.",
          "Would you mind waiting here for a moment, please?",
          "Wait here."
        ],
        "correct": 2,
        "explanation": "'Would you mind + V-ing' is standard polite service.",
        "tag": "Customer Service"
      },
      {
        "id": "eng_exam_17",
        "question": "Identify tthe passenger error: 'Tthe passenger amount of passengers on tthe passenger delayed flight were staggering.' (18)",
        "options": [
          "Both A and B",
          "were -> was",
          "No error",
          "amount -> number"
        ],
        "correct": 0,
        "explanation": "Use 'number' for countable nouns, which takes singular 'was'.",
        "tag": "Error Spotting"
      },
      {
        "id": "eng_exam_18",
        "question": "If the pilot ___ tthe pilot boarding pass, the pilot wouldn't be stuck at security. (19)",
        "options": [
          "didn't lose",
          "hadn't lost",
          "hasn't lost",
          "wouldn't lose"
        ],
        "correct": 1,
        "explanation": "Mixed conditional: Past action affecting present result.",
        "tag": "Mixed Conditionals"
      },
      {
        "id": "eng_exam_19",
        "question": "It is imperative that tthe manager captain ___ informed immediately. (20)",
        "options": [
          "be",
          "has been",
          "is",
          "was"
        ],
        "correct": 0,
        "explanation": "Subjunctive mood uses the base form 'be' after 'imperative that'.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_exam_20",
        "question": "Which sentence is the most polite way to ask a passenger to wait? (21)",
        "options": [
          "Wait here.",
          "You must wait here.",
          "Wait here, please.",
          "Would you mind waiting here for a moment, please?"
        ],
        "correct": 3,
        "explanation": "'Would you mind + V-ing' is standard polite service.",
        "tag": "Customer Service"
      },
      {
        "id": "eng_exam_21",
        "question": "Identify tshe error: 'Tshe amount of passengers on tshe delayed flight were staggering.' (22)",
        "options": [
          "amount -> number",
          "No error",
          "Both A and B",
          "were -> was"
        ],
        "correct": 2,
        "explanation": "Use 'number' for countable nouns, which takes singular 'was'.",
        "tag": "Error Spotting"
      },
      {
        "id": "eng_exam_22",
        "question": "If the passenger ___ tthe passenger boarding pass, the passenger wouldn't be stuck at security. (23)",
        "options": [
          "didn't lose",
          "hasn't lost",
          "wouldn't lose",
          "hadn't lost"
        ],
        "correct": 3,
        "explanation": "Mixed conditional: Past action affecting present result.",
        "tag": "Mixed Conditionals"
      },
      {
        "id": "eng_exam_23",
        "question": "It is imperative that tthe pilot captain ___ informed immediately. (24)",
        "options": [
          "be",
          "was",
          "has been",
          "is"
        ],
        "correct": 0,
        "explanation": "Subjunctive mood uses the base form 'be' after 'imperative that'.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_exam_24",
        "question": "Which sentence is tthe manager most polite way to ask a passenger to wait? (25)",
        "options": [
          "Would you mind waiting here for a moment, please?",
          "Wait here.",
          "Wait here, please.",
          "You must wait here."
        ],
        "correct": 0,
        "explanation": "'Would you mind + V-ing' is standard polite service.",
        "tag": "Customer Service"
      },
      {
        "id": "eng_exam_25",
        "question": "Identify the error: 'The amount of passengers on the delayed flight were staggering.' (26)",
        "options": [
          "Both A and B",
          "were -> was",
          "amount -> number",
          "No error"
        ],
        "correct": 0,
        "explanation": "Use 'number' for countable nouns, which takes singular 'was'.",
        "tag": "Error Spotting"
      },
      {
        "id": "eng_exam_26",
        "question": "If she ___ tshe boarding pass, she wouldn't be stuck at security. (27)",
        "options": [
          "wouldn't lose",
          "didn't lose",
          "hadn't lost",
          "hasn't lost"
        ],
        "correct": 2,
        "explanation": "Mixed conditional: Past action affecting present result.",
        "tag": "Mixed Conditionals"
      },
      {
        "id": "eng_exam_27",
        "question": "It is imperative that tthe passenger captain ___ informed immediately. (28)",
        "options": [
          "is",
          "be",
          "was",
          "has been"
        ],
        "correct": 1,
        "explanation": "Subjunctive mood uses the base form 'be' after 'imperative that'.",
        "tag": "Subjunctive"
      },
      {
        "id": "eng_exam_28",
        "question": "Which sentence is tthe pilot most polite way to ask a passenger to wait? (29)",
        "options": [
          "Wait here, please.",
          "You must wait here.",
          "Would you mind waiting here for a moment, please?",
          "Wait here."
        ],
        "correct": 2,
        "explanation": "'Would you mind + V-ing' is standard polite service.",
        "tag": "Customer Service"
      },
      {
        "id": "eng_exam_29",
        "question": "Identify tthe manager error: 'Tthe manager amount of passengers on tthe manager delayed flight were staggering.' (30)",
        "options": [
          "amount -> number",
          "No error",
          "were -> was",
          "Both A and B"
        ],
        "correct": 3,
        "explanation": "Use 'number' for countable nouns, which takes singular 'was'.",
        "tag": "Error Spotting"
      }
    ]
  },
  "computer": {
    "easy": [
      {
        "id": "com_easy_0",
        "question": "Which program is best for presentations? (1)",
        "options": [
          "Word",
          "Access",
          "PowerPoint",
          "Excel"
        ],
        "correct": 2,
        "explanation": "PowerPoint creates presentations.",
        "tag": "General Knowledge"
      },
      {
        "id": "com_easy_1",
        "question": "What is the shortcut to copy text? (2)",
        "options": [
          "Ctrl + V",
          "Ctrl + C",
          "Ctrl + P",
          "Ctrl + X"
        ],
        "correct": 1,
        "explanation": "Ctrl + C is for Copy.",
        "tag": "Shortcuts"
      },
      {
        "id": "com_easy_2",
        "question": "Which symbol starts a formula in Excel? (3)",
        "options": [
          "*",
          "+",
          "-",
          "="
        ],
        "correct": 3,
        "explanation": "All Excel formulas must begin with an equals sign (=).",
        "tag": "Excel Basics"
      },
      {
        "id": "com_easy_3",
        "question": "What does CC stand for in an email? (4)",
        "options": [
          "Carbon Copy",
          "Creative Commons",
          "Copy Cat",
          "Computer Code"
        ],
        "correct": 0,
        "explanation": "CC stands for Carbon Copy in email terminology.",
        "tag": "Email/Outlook"
      },
      {
        "id": "com_easy_4",
        "question": "Which program is best for presentations? (5)",
        "options": [
          "PowerPoint",
          "Excel",
          "Word",
          "Access"
        ],
        "correct": 0,
        "explanation": "PowerPoint creates presentations.",
        "tag": "General Knowledge"
      },
      {
        "id": "com_easy_5",
        "question": "What is the shortcut to copy text? (6)",
        "options": [
          "Ctrl + X",
          "Ctrl + V",
          "Ctrl + C",
          "Ctrl + P"
        ],
        "correct": 2,
        "explanation": "Ctrl + C is for Copy.",
        "tag": "Shortcuts"
      },
      {
        "id": "com_easy_6",
        "question": "Which symbol starts a formula in Excel? (7)",
        "options": [
          "=",
          "-",
          "+",
          "*"
        ],
        "correct": 0,
        "explanation": "All Excel formulas must begin with an equals sign (=).",
        "tag": "Excel Basics"
      },
      {
        "id": "com_easy_7",
        "question": "What does CC stand for in an email? (8)",
        "options": [
          "Carbon Copy",
          "Creative Commons",
          "Computer Code",
          "Copy Cat"
        ],
        "correct": 0,
        "explanation": "CC stands for Carbon Copy in email terminology.",
        "tag": "Email/Outlook"
      },
      {
        "id": "com_easy_8",
        "question": "Which program is best for presentations? (9)",
        "options": [
          "Access",
          "Word",
          "Excel",
          "PowerPoint"
        ],
        "correct": 3,
        "explanation": "PowerPoint creates presentations.",
        "tag": "General Knowledge"
      },
      {
        "id": "com_easy_9",
        "question": "What is the shortcut to copy text? (10)",
        "options": [
          "Ctrl + V",
          "Ctrl + P",
          "Ctrl + X",
          "Ctrl + C"
        ],
        "correct": 3,
        "explanation": "Ctrl + C is for Copy.",
        "tag": "Shortcuts"
      },
      {
        "id": "com_easy_10",
        "question": "Which symbol starts a formula in Excel? (11)",
        "options": [
          "=",
          "-",
          "*",
          "+"
        ],
        "correct": 0,
        "explanation": "All Excel formulas must begin with an equals sign (=).",
        "tag": "Excel Basics"
      },
      {
        "id": "com_easy_11",
        "question": "What does CC stand for in an email? (12)",
        "options": [
          "Copy Cat",
          "Creative Commons",
          "Computer Code",
          "Carbon Copy"
        ],
        "correct": 3,
        "explanation": "CC stands for Carbon Copy in email terminology.",
        "tag": "Email/Outlook"
      },
      {
        "id": "com_easy_12",
        "question": "Which program is best for presentations? (13)",
        "options": [
          "Excel",
          "Access",
          "Word",
          "PowerPoint"
        ],
        "correct": 3,
        "explanation": "PowerPoint creates presentations.",
        "tag": "General Knowledge"
      },
      {
        "id": "com_easy_13",
        "question": "What is the shortcut to copy text? (14)",
        "options": [
          "Ctrl + C",
          "Ctrl + P",
          "Ctrl + V",
          "Ctrl + X"
        ],
        "correct": 0,
        "explanation": "Ctrl + C is for Copy.",
        "tag": "Shortcuts"
      },
      {
        "id": "com_easy_14",
        "question": "Which symbol starts a formula in Excel? (15)",
        "options": [
          "+",
          "*",
          "=",
          "-"
        ],
        "correct": 2,
        "explanation": "All Excel formulas must begin with an equals sign (=).",
        "tag": "Excel Basics"
      },
      {
        "id": "com_easy_15",
        "question": "What does CC stand for in an email? (16)",
        "options": [
          "Copy Cat",
          "Carbon Copy",
          "Computer Code",
          "Creative Commons"
        ],
        "correct": 1,
        "explanation": "CC stands for Carbon Copy in email terminology.",
        "tag": "Email/Outlook"
      },
      {
        "id": "com_easy_16",
        "question": "Which program is best for presentations? (17)",
        "options": [
          "PowerPoint",
          "Access",
          "Word",
          "Excel"
        ],
        "correct": 0,
        "explanation": "PowerPoint creates presentations.",
        "tag": "General Knowledge"
      },
      {
        "id": "com_easy_17",
        "question": "What is the shortcut to copy text? (18)",
        "options": [
          "Ctrl + V",
          "Ctrl + P",
          "Ctrl + X",
          "Ctrl + C"
        ],
        "correct": 3,
        "explanation": "Ctrl + C is for Copy.",
        "tag": "Shortcuts"
      },
      {
        "id": "com_easy_18",
        "question": "Which symbol starts a formula in Excel? (19)",
        "options": [
          "-",
          "=",
          "*",
          "+"
        ],
        "correct": 1,
        "explanation": "All Excel formulas must begin with an equals sign (=).",
        "tag": "Excel Basics"
      },
      {
        "id": "com_easy_19",
        "question": "What does CC stand for in an email? (20)",
        "options": [
          "Carbon Copy",
          "Copy Cat",
          "Computer Code",
          "Creative Commons"
        ],
        "correct": 0,
        "explanation": "CC stands for Carbon Copy in email terminology.",
        "tag": "Email/Outlook"
      },
      {
        "id": "com_easy_20",
        "question": "Which program is best for presentations? (21)",
        "options": [
          "PowerPoint",
          "Access",
          "Excel",
          "Word"
        ],
        "correct": 0,
        "explanation": "PowerPoint creates presentations.",
        "tag": "General Knowledge"
      },
      {
        "id": "com_easy_21",
        "question": "What is the shortcut to copy text? (22)",
        "options": [
          "Ctrl + P",
          "Ctrl + V",
          "Ctrl + C",
          "Ctrl + X"
        ],
        "correct": 2,
        "explanation": "Ctrl + C is for Copy.",
        "tag": "Shortcuts"
      },
      {
        "id": "com_easy_22",
        "question": "Which symbol starts a formula in Excel? (23)",
        "options": [
          "=",
          "+",
          "*",
          "-"
        ],
        "correct": 0,
        "explanation": "All Excel formulas must begin with an equals sign (=).",
        "tag": "Excel Basics"
      },
      {
        "id": "com_easy_23",
        "question": "What does CC stand for in an email? (24)",
        "options": [
          "Computer Code",
          "Carbon Copy",
          "Copy Cat",
          "Creative Commons"
        ],
        "correct": 1,
        "explanation": "CC stands for Carbon Copy in email terminology.",
        "tag": "Email/Outlook"
      },
      {
        "id": "com_easy_24",
        "question": "Which program is best for presentations? (25)",
        "options": [
          "PowerPoint",
          "Excel",
          "Word",
          "Access"
        ],
        "correct": 0,
        "explanation": "PowerPoint creates presentations.",
        "tag": "General Knowledge"
      },
      {
        "id": "com_easy_25",
        "question": "What is the shortcut to copy text? (26)",
        "options": [
          "Ctrl + V",
          "Ctrl + P",
          "Ctrl + X",
          "Ctrl + C"
        ],
        "correct": 3,
        "explanation": "Ctrl + C is for Copy.",
        "tag": "Shortcuts"
      },
      {
        "id": "com_easy_26",
        "question": "Which symbol starts a formula in Excel? (27)",
        "options": [
          "-",
          "+",
          "=",
          "*"
        ],
        "correct": 2,
        "explanation": "All Excel formulas must begin with an equals sign (=).",
        "tag": "Excel Basics"
      },
      {
        "id": "com_easy_27",
        "question": "What does CC stand for in an email? (28)",
        "options": [
          "Carbon Copy",
          "Creative Commons",
          "Copy Cat",
          "Computer Code"
        ],
        "correct": 0,
        "explanation": "CC stands for Carbon Copy in email terminology.",
        "tag": "Email/Outlook"
      },
      {
        "id": "com_easy_28",
        "question": "Which program is best for presentations? (29)",
        "options": [
          "Word",
          "Access",
          "PowerPoint",
          "Excel"
        ],
        "correct": 2,
        "explanation": "PowerPoint creates presentations.",
        "tag": "General Knowledge"
      },
      {
        "id": "com_easy_29",
        "question": "What is the shortcut to copy text? (30)",
        "options": [
          "Ctrl + C",
          "Ctrl + V",
          "Ctrl + P",
          "Ctrl + X"
        ],
        "correct": 0,
        "explanation": "Ctrl + C is for Copy.",
        "tag": "Shortcuts"
      }
    ],
    "medium": [
      {
        "id": "com_medium_0",
        "question": "In Excel, what does VLOOKUP do? (1)",
        "options": [
          "Adds numbers",
          "Formats text",
          "Creates a chart",
          "Searches for a value vertically"
        ],
        "correct": 3,
        "explanation": "VLOOKUP stands for Vertical Lookup.",
        "tag": "Excel Formulas"
      },
      {
        "id": "com_medium_1",
        "question": "How do you freeze the top row in Excel? (2)",
        "options": [
          "Data > Lock",
          "Insert > Freeze",
          "Home > Format",
          "View > Freeze Panes"
        ],
        "correct": 3,
        "explanation": "Freeze Panes is located under the View tab.",
        "tag": "Excel Navigation"
      },
      {
        "id": "com_medium_2",
        "question": "What is the primary function of Microsoft Teams? (3)",
        "options": [
          "Communication and collaboration",
          "Graphic design",
          "Database management",
          "Word processing"
        ],
        "correct": 0,
        "explanation": "Teams is Microsoft's communication and collaboration platform.",
        "tag": "Teams"
      },
      {
        "id": "com_medium_3",
        "question": "In Word, what does 'Format Painter' do? (4)",
        "options": [
          "Paints the background",
          "Inserts images",
          "Changes the font color",
          "Copies formatting from one text to another"
        ],
        "correct": 3,
        "explanation": "Format painter copies text formatting styles.",
        "tag": "Word Formatting"
      },
      {
        "id": "com_medium_4",
        "question": "In Excel, what does VLOOKUP do? (5)",
        "options": [
          "Adds numbers",
          "Formats text",
          "Creates a chart",
          "Searches for a value vertically"
        ],
        "correct": 3,
        "explanation": "VLOOKUP stands for Vertical Lookup.",
        "tag": "Excel Formulas"
      },
      {
        "id": "com_medium_5",
        "question": "How do you freeze the top row in Excel? (6)",
        "options": [
          "Home > Format",
          "View > Freeze Panes",
          "Insert > Freeze",
          "Data > Lock"
        ],
        "correct": 1,
        "explanation": "Freeze Panes is located under the View tab.",
        "tag": "Excel Navigation"
      },
      {
        "id": "com_medium_6",
        "question": "What is the primary function of Microsoft Teams? (7)",
        "options": [
          "Word processing",
          "Database management",
          "Communication and collaboration",
          "Graphic design"
        ],
        "correct": 2,
        "explanation": "Teams is Microsoft's communication and collaboration platform.",
        "tag": "Teams"
      },
      {
        "id": "com_medium_7",
        "question": "In Word, what does 'Format Painter' do? (8)",
        "options": [
          "Inserts images",
          "Changes the font color",
          "Copies formatting from one text to another",
          "Paints the background"
        ],
        "correct": 2,
        "explanation": "Format painter copies text formatting styles.",
        "tag": "Word Formatting"
      },
      {
        "id": "com_medium_8",
        "question": "In Excel, what does VLOOKUP do? (9)",
        "options": [
          "Searches for a value vertically",
          "Adds numbers",
          "Formats text",
          "Creates a chart"
        ],
        "correct": 0,
        "explanation": "VLOOKUP stands for Vertical Lookup.",
        "tag": "Excel Formulas"
      },
      {
        "id": "com_medium_9",
        "question": "How do you freeze the top row in Excel? (10)",
        "options": [
          "Data > Lock",
          "Insert > Freeze",
          "Home > Format",
          "View > Freeze Panes"
        ],
        "correct": 3,
        "explanation": "Freeze Panes is located under the View tab.",
        "tag": "Excel Navigation"
      },
      {
        "id": "com_medium_10",
        "question": "What is the primary function of Microsoft Teams? (11)",
        "options": [
          "Word processing",
          "Graphic design",
          "Database management",
          "Communication and collaboration"
        ],
        "correct": 3,
        "explanation": "Teams is Microsoft's communication and collaboration platform.",
        "tag": "Teams"
      },
      {
        "id": "com_medium_11",
        "question": "In Word, what does 'Format Painter' do? (12)",
        "options": [
          "Inserts images",
          "Copies formatting from one text to another",
          "Changes the font color",
          "Paints the background"
        ],
        "correct": 1,
        "explanation": "Format painter copies text formatting styles.",
        "tag": "Word Formatting"
      },
      {
        "id": "com_medium_12",
        "question": "In Excel, what does VLOOKUP do? (13)",
        "options": [
          "Formats text",
          "Searches for a value vertically",
          "Adds numbers",
          "Creates a chart"
        ],
        "correct": 1,
        "explanation": "VLOOKUP stands for Vertical Lookup.",
        "tag": "Excel Formulas"
      },
      {
        "id": "com_medium_13",
        "question": "How do you freeze the top row in Excel? (14)",
        "options": [
          "Data > Lock",
          "Insert > Freeze",
          "Home > Format",
          "View > Freeze Panes"
        ],
        "correct": 3,
        "explanation": "Freeze Panes is located under the View tab.",
        "tag": "Excel Navigation"
      },
      {
        "id": "com_medium_14",
        "question": "What is the primary function of Microsoft Teams? (15)",
        "options": [
          "Graphic design",
          "Communication and collaboration",
          "Word processing",
          "Database management"
        ],
        "correct": 1,
        "explanation": "Teams is Microsoft's communication and collaboration platform.",
        "tag": "Teams"
      },
      {
        "id": "com_medium_15",
        "question": "In Word, what does 'Format Painter' do? (16)",
        "options": [
          "Changes the font color",
          "Copies formatting from one text to another",
          "Inserts images",
          "Paints the background"
        ],
        "correct": 1,
        "explanation": "Format painter copies text formatting styles.",
        "tag": "Word Formatting"
      },
      {
        "id": "com_medium_16",
        "question": "In Excel, what does VLOOKUP do? (17)",
        "options": [
          "Formats text",
          "Creates a chart",
          "Searches for a value vertically",
          "Adds numbers"
        ],
        "correct": 2,
        "explanation": "VLOOKUP stands for Vertical Lookup.",
        "tag": "Excel Formulas"
      },
      {
        "id": "com_medium_17",
        "question": "How do you freeze the top row in Excel? (18)",
        "options": [
          "View > Freeze Panes",
          "Data > Lock",
          "Home > Format",
          "Insert > Freeze"
        ],
        "correct": 0,
        "explanation": "Freeze Panes is located under the View tab.",
        "tag": "Excel Navigation"
      },
      {
        "id": "com_medium_18",
        "question": "What is the primary function of Microsoft Teams? (19)",
        "options": [
          "Communication and collaboration",
          "Database management",
          "Word processing",
          "Graphic design"
        ],
        "correct": 0,
        "explanation": "Teams is Microsoft's communication and collaboration platform.",
        "tag": "Teams"
      },
      {
        "id": "com_medium_19",
        "question": "In Word, what does 'Format Painter' do? (20)",
        "options": [
          "Paints the background",
          "Inserts images",
          "Changes the font color",
          "Copies formatting from one text to another"
        ],
        "correct": 3,
        "explanation": "Format painter copies text formatting styles.",
        "tag": "Word Formatting"
      },
      {
        "id": "com_medium_20",
        "question": "In Excel, what does VLOOKUP do? (21)",
        "options": [
          "Searches for a value vertically",
          "Adds numbers",
          "Formats text",
          "Creates a chart"
        ],
        "correct": 0,
        "explanation": "VLOOKUP stands for Vertical Lookup.",
        "tag": "Excel Formulas"
      },
      {
        "id": "com_medium_21",
        "question": "How do you freeze the top row in Excel? (22)",
        "options": [
          "View > Freeze Panes",
          "Insert > Freeze",
          "Data > Lock",
          "Home > Format"
        ],
        "correct": 0,
        "explanation": "Freeze Panes is located under the View tab.",
        "tag": "Excel Navigation"
      },
      {
        "id": "com_medium_22",
        "question": "What is the primary function of Microsoft Teams? (23)",
        "options": [
          "Communication and collaboration",
          "Database management",
          "Graphic design",
          "Word processing"
        ],
        "correct": 0,
        "explanation": "Teams is Microsoft's communication and collaboration platform.",
        "tag": "Teams"
      },
      {
        "id": "com_medium_23",
        "question": "In Word, what does 'Format Painter' do? (24)",
        "options": [
          "Inserts images",
          "Copies formatting from one text to another",
          "Changes the font color",
          "Paints the background"
        ],
        "correct": 1,
        "explanation": "Format painter copies text formatting styles.",
        "tag": "Word Formatting"
      },
      {
        "id": "com_medium_24",
        "question": "In Excel, what does VLOOKUP do? (25)",
        "options": [
          "Searches for a value vertically",
          "Adds numbers",
          "Formats text",
          "Creates a chart"
        ],
        "correct": 0,
        "explanation": "VLOOKUP stands for Vertical Lookup.",
        "tag": "Excel Formulas"
      },
      {
        "id": "com_medium_25",
        "question": "How do you freeze the top row in Excel? (26)",
        "options": [
          "Data > Lock",
          "View > Freeze Panes",
          "Home > Format",
          "Insert > Freeze"
        ],
        "correct": 1,
        "explanation": "Freeze Panes is located under the View tab.",
        "tag": "Excel Navigation"
      },
      {
        "id": "com_medium_26",
        "question": "What is the primary function of Microsoft Teams? (27)",
        "options": [
          "Communication and collaboration",
          "Graphic design",
          "Database management",
          "Word processing"
        ],
        "correct": 0,
        "explanation": "Teams is Microsoft's communication and collaboration platform.",
        "tag": "Teams"
      },
      {
        "id": "com_medium_27",
        "question": "In Word, what does 'Format Painter' do? (28)",
        "options": [
          "Copies formatting from one text to another",
          "Changes the font color",
          "Inserts images",
          "Paints the background"
        ],
        "correct": 0,
        "explanation": "Format painter copies text formatting styles.",
        "tag": "Word Formatting"
      },
      {
        "id": "com_medium_28",
        "question": "In Excel, what does VLOOKUP do? (29)",
        "options": [
          "Searches for a value vertically",
          "Formats text",
          "Creates a chart",
          "Adds numbers"
        ],
        "correct": 0,
        "explanation": "VLOOKUP stands for Vertical Lookup.",
        "tag": "Excel Formulas"
      },
      {
        "id": "com_medium_29",
        "question": "How do you freeze the top row in Excel? (30)",
        "options": [
          "Data > Lock",
          "Home > Format",
          "View > Freeze Panes",
          "Insert > Freeze"
        ],
        "correct": 2,
        "explanation": "Freeze Panes is located under the View tab.",
        "tag": "Excel Navigation"
      }
    ],
    "hard": [
      {
        "id": "com_hard_0",
        "question": "How do you apply a macro to multiple Word documents? (1)",
        "options": [
          "It is impossible",
          "Using Excel",
          "Save in Normal.dotm",
          "Copy and paste"
        ],
        "correct": 2,
        "explanation": "Saving in the Normal.dotm template makes it globally available.",
        "tag": "Word Macros"
      },
      {
        "id": "com_hard_1",
        "question": "Which formula handles a VLOOKUP error by displaying 'Not Found'? (2)",
        "options": [
          "=IF(ERROR, 'Not Found')",
          "=IFERROR(VLOOKUP(A1,B:C,2,0), 'Not Found')",
          "=VLOOKUP(A1,B:C,2,0, 'Not Found')",
          "=ISERROR(VLOOKUP)"
        ],
        "correct": 1,
        "explanation": "IFERROR catches formula errors and outputs a custom string.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_hard_2",
        "question": "What is a Pivot Table primarily used for? (3)",
        "options": [
          "Writing code",
          "Summarizing and analyzing large datasets",
          "Creating animations",
          "Sending mass emails"
        ],
        "correct": 1,
        "explanation": "Pivot Tables summarize complex data.",
        "tag": "Excel Analysis"
      },
      {
        "id": "com_hard_3",
        "question": "In PowerPoint, what is the 'Slide Master'? (4)",
        "options": [
          "A transition effect",
          "A template that controls the layout of all slides",
          "The person presenting",
          "The first slide"
        ],
        "correct": 1,
        "explanation": "The Slide Master controls global design elements.",
        "tag": "PowerPoint"
      },
      {
        "id": "com_hard_4",
        "question": "How do you apply a macro to multiple Word documents? (5)",
        "options": [
          "Save in Normal.dotm",
          "It is impossible",
          "Using Excel",
          "Copy and paste"
        ],
        "correct": 0,
        "explanation": "Saving in the Normal.dotm template makes it globally available.",
        "tag": "Word Macros"
      },
      {
        "id": "com_hard_5",
        "question": "Which formula handles a VLOOKUP error by displaying 'Not Found'? (6)",
        "options": [
          "=IFERROR(VLOOKUP(A1,B:C,2,0), 'Not Found')",
          "=ISERROR(VLOOKUP)",
          "=IF(ERROR, 'Not Found')",
          "=VLOOKUP(A1,B:C,2,0, 'Not Found')"
        ],
        "correct": 0,
        "explanation": "IFERROR catches formula errors and outputs a custom string.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_hard_6",
        "question": "What is a Pivot Table primarily used for? (7)",
        "options": [
          "Writing code",
          "Summarizing and analyzing large datasets",
          "Creating animations",
          "Sending mass emails"
        ],
        "correct": 1,
        "explanation": "Pivot Tables summarize complex data.",
        "tag": "Excel Analysis"
      },
      {
        "id": "com_hard_7",
        "question": "In PowerPoint, what is the 'Slide Master'? (8)",
        "options": [
          "A transition effect",
          "The person presenting",
          "A template that controls the layout of all slides",
          "The first slide"
        ],
        "correct": 2,
        "explanation": "The Slide Master controls global design elements.",
        "tag": "PowerPoint"
      },
      {
        "id": "com_hard_8",
        "question": "How do you apply a macro to multiple Word documents? (9)",
        "options": [
          "Using Excel",
          "Copy and paste",
          "It is impossible",
          "Save in Normal.dotm"
        ],
        "correct": 3,
        "explanation": "Saving in the Normal.dotm template makes it globally available.",
        "tag": "Word Macros"
      },
      {
        "id": "com_hard_9",
        "question": "Which formula handles a VLOOKUP error by displaying 'Not Found'? (10)",
        "options": [
          "=IFERROR(VLOOKUP(A1,B:C,2,0), 'Not Found')",
          "=ISERROR(VLOOKUP)",
          "=IF(ERROR, 'Not Found')",
          "=VLOOKUP(A1,B:C,2,0, 'Not Found')"
        ],
        "correct": 0,
        "explanation": "IFERROR catches formula errors and outputs a custom string.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_hard_10",
        "question": "What is a Pivot Table primarily used for? (11)",
        "options": [
          "Sending mass emails",
          "Summarizing and analyzing large datasets",
          "Creating animations",
          "Writing code"
        ],
        "correct": 1,
        "explanation": "Pivot Tables summarize complex data.",
        "tag": "Excel Analysis"
      },
      {
        "id": "com_hard_11",
        "question": "In PowerPoint, what is the 'Slide Master'? (12)",
        "options": [
          "A transition effect",
          "The first slide",
          "A template that controls the layout of all slides",
          "The person presenting"
        ],
        "correct": 2,
        "explanation": "The Slide Master controls global design elements.",
        "tag": "PowerPoint"
      },
      {
        "id": "com_hard_12",
        "question": "How do you apply a macro to multiple Word documents? (13)",
        "options": [
          "It is impossible",
          "Copy and paste",
          "Save in Normal.dotm",
          "Using Excel"
        ],
        "correct": 2,
        "explanation": "Saving in the Normal.dotm template makes it globally available.",
        "tag": "Word Macros"
      },
      {
        "id": "com_hard_13",
        "question": "Which formula handles a VLOOKUP error by displaying 'Not Found'? (14)",
        "options": [
          "=IFERROR(VLOOKUP(A1,B:C,2,0), 'Not Found')",
          "=VLOOKUP(A1,B:C,2,0, 'Not Found')",
          "=ISERROR(VLOOKUP)",
          "=IF(ERROR, 'Not Found')"
        ],
        "correct": 0,
        "explanation": "IFERROR catches formula errors and outputs a custom string.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_hard_14",
        "question": "What is a Pivot Table primarily used for? (15)",
        "options": [
          "Summarizing and analyzing large datasets",
          "Sending mass emails",
          "Creating animations",
          "Writing code"
        ],
        "correct": 0,
        "explanation": "Pivot Tables summarize complex data.",
        "tag": "Excel Analysis"
      },
      {
        "id": "com_hard_15",
        "question": "In PowerPoint, what is the 'Slide Master'? (16)",
        "options": [
          "The first slide",
          "The person presenting",
          "A transition effect",
          "A template that controls the layout of all slides"
        ],
        "correct": 3,
        "explanation": "The Slide Master controls global design elements.",
        "tag": "PowerPoint"
      },
      {
        "id": "com_hard_16",
        "question": "How do you apply a macro to multiple Word documents? (17)",
        "options": [
          "Using Excel",
          "Save in Normal.dotm",
          "It is impossible",
          "Copy and paste"
        ],
        "correct": 1,
        "explanation": "Saving in the Normal.dotm template makes it globally available.",
        "tag": "Word Macros"
      },
      {
        "id": "com_hard_17",
        "question": "Which formula handles a VLOOKUP error by displaying 'Not Found'? (18)",
        "options": [
          "=IFERROR(VLOOKUP(A1,B:C,2,0), 'Not Found')",
          "=IF(ERROR, 'Not Found')",
          "=VLOOKUP(A1,B:C,2,0, 'Not Found')",
          "=ISERROR(VLOOKUP)"
        ],
        "correct": 0,
        "explanation": "IFERROR catches formula errors and outputs a custom string.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_hard_18",
        "question": "What is a Pivot Table primarily used for? (19)",
        "options": [
          "Writing code",
          "Creating animations",
          "Sending mass emails",
          "Summarizing and analyzing large datasets"
        ],
        "correct": 3,
        "explanation": "Pivot Tables summarize complex data.",
        "tag": "Excel Analysis"
      },
      {
        "id": "com_hard_19",
        "question": "In PowerPoint, what is the 'Slide Master'? (20)",
        "options": [
          "A transition effect",
          "A template that controls the layout of all slides",
          "The first slide",
          "The person presenting"
        ],
        "correct": 1,
        "explanation": "The Slide Master controls global design elements.",
        "tag": "PowerPoint"
      },
      {
        "id": "com_hard_20",
        "question": "How do you apply a macro to multiple Word documents? (21)",
        "options": [
          "Save in Normal.dotm",
          "It is impossible",
          "Using Excel",
          "Copy and paste"
        ],
        "correct": 0,
        "explanation": "Saving in the Normal.dotm template makes it globally available.",
        "tag": "Word Macros"
      },
      {
        "id": "com_hard_21",
        "question": "Which formula handles a VLOOKUP error by displaying 'Not Found'? (22)",
        "options": [
          "=ISERROR(VLOOKUP)",
          "=IFERROR(VLOOKUP(A1,B:C,2,0), 'Not Found')",
          "=VLOOKUP(A1,B:C,2,0, 'Not Found')",
          "=IF(ERROR, 'Not Found')"
        ],
        "correct": 1,
        "explanation": "IFERROR catches formula errors and outputs a custom string.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_hard_22",
        "question": "What is a Pivot Table primarily used for? (23)",
        "options": [
          "Writing code",
          "Sending mass emails",
          "Creating animations",
          "Summarizing and analyzing large datasets"
        ],
        "correct": 3,
        "explanation": "Pivot Tables summarize complex data.",
        "tag": "Excel Analysis"
      },
      {
        "id": "com_hard_23",
        "question": "In PowerPoint, what is the 'Slide Master'? (24)",
        "options": [
          "The first slide",
          "A template that controls the layout of all slides",
          "The person presenting",
          "A transition effect"
        ],
        "correct": 1,
        "explanation": "The Slide Master controls global design elements.",
        "tag": "PowerPoint"
      },
      {
        "id": "com_hard_24",
        "question": "How do you apply a macro to multiple Word documents? (25)",
        "options": [
          "It is impossible",
          "Save in Normal.dotm",
          "Copy and paste",
          "Using Excel"
        ],
        "correct": 1,
        "explanation": "Saving in the Normal.dotm template makes it globally available.",
        "tag": "Word Macros"
      },
      {
        "id": "com_hard_25",
        "question": "Which formula handles a VLOOKUP error by displaying 'Not Found'? (26)",
        "options": [
          "=IF(ERROR, 'Not Found')",
          "=VLOOKUP(A1,B:C,2,0, 'Not Found')",
          "=IFERROR(VLOOKUP(A1,B:C,2,0), 'Not Found')",
          "=ISERROR(VLOOKUP)"
        ],
        "correct": 2,
        "explanation": "IFERROR catches formula errors and outputs a custom string.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_hard_26",
        "question": "What is a Pivot Table primarily used for? (27)",
        "options": [
          "Summarizing and analyzing large datasets",
          "Sending mass emails",
          "Creating animations",
          "Writing code"
        ],
        "correct": 0,
        "explanation": "Pivot Tables summarize complex data.",
        "tag": "Excel Analysis"
      },
      {
        "id": "com_hard_27",
        "question": "In PowerPoint, what is the 'Slide Master'? (28)",
        "options": [
          "The first slide",
          "The person presenting",
          "A template that controls the layout of all slides",
          "A transition effect"
        ],
        "correct": 2,
        "explanation": "The Slide Master controls global design elements.",
        "tag": "PowerPoint"
      },
      {
        "id": "com_hard_28",
        "question": "How do you apply a macro to multiple Word documents? (29)",
        "options": [
          "Using Excel",
          "Save in Normal.dotm",
          "Copy and paste",
          "It is impossible"
        ],
        "correct": 1,
        "explanation": "Saving in the Normal.dotm template makes it globally available.",
        "tag": "Word Macros"
      },
      {
        "id": "com_hard_29",
        "question": "Which formula handles a VLOOKUP error by displaying 'Not Found'? (30)",
        "options": [
          "=ISERROR(VLOOKUP)",
          "=IFERROR(VLOOKUP(A1,B:C,2,0), 'Not Found')",
          "=VLOOKUP(A1,B:C,2,0, 'Not Found')",
          "=IF(ERROR, 'Not Found')"
        ],
        "correct": 1,
        "explanation": "IFERROR catches formula errors and outputs a custom string.",
        "tag": "Advanced Excel"
      }
    ],
    "exam": [
      {
        "id": "com_exam_0",
        "question": "What is the difference between COUNT and COUNTA in Excel? (1)",
        "options": [
          "COUNT counts numbers, COUNTA counts non-empty cells",
          "They are identical",
          "COUNT counts text, COUNTA counts numbers",
          "COUNTA is used only for arrays"
        ],
        "correct": 0,
        "explanation": "COUNT only counts numerical values; COUNTA counts any non-empty cell.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_1",
        "question": "How do you execute a mail merge using an Excel list in Word? (2)",
        "options": [
          "Mailings > Select Recipients > Use an Existing List",
          "Data > Import",
          "Insert > Excel Table",
          "File > Share"
        ],
        "correct": 0,
        "explanation": "Mail Merge requires linking an existing Excel list via the Mailings tab.",
        "tag": "Mail Merge"
      },
      {
        "id": "com_exam_2",
        "question": "What is the correct syntax for an INDEX/MATCH formula? (3)",
        "options": [
          "=MATCH(return_range, INDEX(lookup_range))",
          "=MATCH(INDEX(return_range, lookup_value))",
          "=INDEX(MATCH(lookup_value))",
          "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))"
        ],
        "correct": 3,
        "explanation": "INDEX returns the value, MATCH provides the row number.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_3",
        "question": "Which feature prevents users from entering text into a number-only cell in Excel? (4)",
        "options": [
          "Data Validation",
          "Protect Sheet",
          "Format Cells",
          "Conditional Formatting"
        ],
        "correct": 0,
        "explanation": "Data Validation restricts the type of data that can be typed into a cell.",
        "tag": "Excel Security"
      },
      {
        "id": "com_exam_4",
        "question": "What is the difference between COUNT and COUNTA in Excel? (5)",
        "options": [
          "COUNT counts text, COUNTA counts numbers",
          "COUNTA is used only for arrays",
          "They are identical",
          "COUNT counts numbers, COUNTA counts non-empty cells"
        ],
        "correct": 3,
        "explanation": "COUNT only counts numerical values; COUNTA counts any non-empty cell.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_5",
        "question": "How do you execute a mail merge using an Excel list in Word? (6)",
        "options": [
          "Data > Import",
          "Insert > Excel Table",
          "Mailings > Select Recipients > Use an Existing List",
          "File > Share"
        ],
        "correct": 2,
        "explanation": "Mail Merge requires linking an existing Excel list via the Mailings tab.",
        "tag": "Mail Merge"
      },
      {
        "id": "com_exam_6",
        "question": "What is the correct syntax for an INDEX/MATCH formula? (7)",
        "options": [
          "=MATCH(INDEX(return_range, lookup_value))",
          "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
          "=INDEX(MATCH(lookup_value))",
          "=MATCH(return_range, INDEX(lookup_range))"
        ],
        "correct": 1,
        "explanation": "INDEX returns the value, MATCH provides the row number.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_7",
        "question": "Which feature prevents users from entering text into a number-only cell in Excel? (8)",
        "options": [
          "Format Cells",
          "Conditional Formatting",
          "Data Validation",
          "Protect Sheet"
        ],
        "correct": 2,
        "explanation": "Data Validation restricts the type of data that can be typed into a cell.",
        "tag": "Excel Security"
      },
      {
        "id": "com_exam_8",
        "question": "What is the difference between COUNT and COUNTA in Excel? (9)",
        "options": [
          "They are identical",
          "COUNT counts numbers, COUNTA counts non-empty cells",
          "COUNT counts text, COUNTA counts numbers",
          "COUNTA is used only for arrays"
        ],
        "correct": 1,
        "explanation": "COUNT only counts numerical values; COUNTA counts any non-empty cell.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_9",
        "question": "How do you execute a mail merge using an Excel list in Word? (10)",
        "options": [
          "Data > Import",
          "Insert > Excel Table",
          "Mailings > Select Recipients > Use an Existing List",
          "File > Share"
        ],
        "correct": 2,
        "explanation": "Mail Merge requires linking an existing Excel list via the Mailings tab.",
        "tag": "Mail Merge"
      },
      {
        "id": "com_exam_10",
        "question": "What is the correct syntax for an INDEX/MATCH formula? (11)",
        "options": [
          "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
          "=MATCH(return_range, INDEX(lookup_range))",
          "=MATCH(INDEX(return_range, lookup_value))",
          "=INDEX(MATCH(lookup_value))"
        ],
        "correct": 0,
        "explanation": "INDEX returns the value, MATCH provides the row number.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_11",
        "question": "Which feature prevents users from entering text into a number-only cell in Excel? (12)",
        "options": [
          "Data Validation",
          "Protect Sheet",
          "Format Cells",
          "Conditional Formatting"
        ],
        "correct": 0,
        "explanation": "Data Validation restricts the type of data that can be typed into a cell.",
        "tag": "Excel Security"
      },
      {
        "id": "com_exam_12",
        "question": "What is the difference between COUNT and COUNTA in Excel? (13)",
        "options": [
          "COUNTA is used only for arrays",
          "COUNT counts text, COUNTA counts numbers",
          "COUNT counts numbers, COUNTA counts non-empty cells",
          "They are identical"
        ],
        "correct": 2,
        "explanation": "COUNT only counts numerical values; COUNTA counts any non-empty cell.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_13",
        "question": "How do you execute a mail merge using an Excel list in Word? (14)",
        "options": [
          "Data > Import",
          "File > Share",
          "Insert > Excel Table",
          "Mailings > Select Recipients > Use an Existing List"
        ],
        "correct": 3,
        "explanation": "Mail Merge requires linking an existing Excel list via the Mailings tab.",
        "tag": "Mail Merge"
      },
      {
        "id": "com_exam_14",
        "question": "What is the correct syntax for an INDEX/MATCH formula? (15)",
        "options": [
          "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
          "=MATCH(return_range, INDEX(lookup_range))",
          "=MATCH(INDEX(return_range, lookup_value))",
          "=INDEX(MATCH(lookup_value))"
        ],
        "correct": 0,
        "explanation": "INDEX returns the value, MATCH provides the row number.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_15",
        "question": "Which feature prevents users from entering text into a number-only cell in Excel? (16)",
        "options": [
          "Conditional Formatting",
          "Format Cells",
          "Protect Sheet",
          "Data Validation"
        ],
        "correct": 3,
        "explanation": "Data Validation restricts the type of data that can be typed into a cell.",
        "tag": "Excel Security"
      },
      {
        "id": "com_exam_16",
        "question": "What is the difference between COUNT and COUNTA in Excel? (17)",
        "options": [
          "They are identical",
          "COUNTA is used only for arrays",
          "COUNT counts numbers, COUNTA counts non-empty cells",
          "COUNT counts text, COUNTA counts numbers"
        ],
        "correct": 2,
        "explanation": "COUNT only counts numerical values; COUNTA counts any non-empty cell.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_17",
        "question": "How do you execute a mail merge using an Excel list in Word? (18)",
        "options": [
          "File > Share",
          "Mailings > Select Recipients > Use an Existing List",
          "Data > Import",
          "Insert > Excel Table"
        ],
        "correct": 1,
        "explanation": "Mail Merge requires linking an existing Excel list via the Mailings tab.",
        "tag": "Mail Merge"
      },
      {
        "id": "com_exam_18",
        "question": "What is the correct syntax for an INDEX/MATCH formula? (19)",
        "options": [
          "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
          "=MATCH(INDEX(return_range, lookup_value))",
          "=MATCH(return_range, INDEX(lookup_range))",
          "=INDEX(MATCH(lookup_value))"
        ],
        "correct": 0,
        "explanation": "INDEX returns the value, MATCH provides the row number.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_19",
        "question": "Which feature prevents users from entering text into a number-only cell in Excel? (20)",
        "options": [
          "Conditional Formatting",
          "Protect Sheet",
          "Format Cells",
          "Data Validation"
        ],
        "correct": 3,
        "explanation": "Data Validation restricts the type of data that can be typed into a cell.",
        "tag": "Excel Security"
      },
      {
        "id": "com_exam_20",
        "question": "What is the difference between COUNT and COUNTA in Excel? (21)",
        "options": [
          "COUNT counts text, COUNTA counts numbers",
          "COUNTA is used only for arrays",
          "COUNT counts numbers, COUNTA counts non-empty cells",
          "They are identical"
        ],
        "correct": 2,
        "explanation": "COUNT only counts numerical values; COUNTA counts any non-empty cell.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_21",
        "question": "How do you execute a mail merge using an Excel list in Word? (22)",
        "options": [
          "Insert > Excel Table",
          "File > Share",
          "Mailings > Select Recipients > Use an Existing List",
          "Data > Import"
        ],
        "correct": 2,
        "explanation": "Mail Merge requires linking an existing Excel list via the Mailings tab.",
        "tag": "Mail Merge"
      },
      {
        "id": "com_exam_22",
        "question": "What is the correct syntax for an INDEX/MATCH formula? (23)",
        "options": [
          "=MATCH(INDEX(return_range, lookup_value))",
          "=MATCH(return_range, INDEX(lookup_range))",
          "=INDEX(MATCH(lookup_value))",
          "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))"
        ],
        "correct": 3,
        "explanation": "INDEX returns the value, MATCH provides the row number.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_23",
        "question": "Which feature prevents users from entering text into a number-only cell in Excel? (24)",
        "options": [
          "Conditional Formatting",
          "Data Validation",
          "Protect Sheet",
          "Format Cells"
        ],
        "correct": 1,
        "explanation": "Data Validation restricts the type of data that can be typed into a cell.",
        "tag": "Excel Security"
      },
      {
        "id": "com_exam_24",
        "question": "What is the difference between COUNT and COUNTA in Excel? (25)",
        "options": [
          "COUNT counts numbers, COUNTA counts non-empty cells",
          "COUNT counts text, COUNTA counts numbers",
          "They are identical",
          "COUNTA is used only for arrays"
        ],
        "correct": 0,
        "explanation": "COUNT only counts numerical values; COUNTA counts any non-empty cell.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_25",
        "question": "How do you execute a mail merge using an Excel list in Word? (26)",
        "options": [
          "Mailings > Select Recipients > Use an Existing List",
          "Insert > Excel Table",
          "Data > Import",
          "File > Share"
        ],
        "correct": 0,
        "explanation": "Mail Merge requires linking an existing Excel list via the Mailings tab.",
        "tag": "Mail Merge"
      },
      {
        "id": "com_exam_26",
        "question": "What is the correct syntax for an INDEX/MATCH formula? (27)",
        "options": [
          "=INDEX(MATCH(lookup_value))",
          "=MATCH(return_range, INDEX(lookup_range))",
          "=MATCH(INDEX(return_range, lookup_value))",
          "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))"
        ],
        "correct": 3,
        "explanation": "INDEX returns the value, MATCH provides the row number.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_27",
        "question": "Which feature prevents users from entering text into a number-only cell in Excel? (28)",
        "options": [
          "Data Validation",
          "Conditional Formatting",
          "Format Cells",
          "Protect Sheet"
        ],
        "correct": 0,
        "explanation": "Data Validation restricts the type of data that can be typed into a cell.",
        "tag": "Excel Security"
      },
      {
        "id": "com_exam_28",
        "question": "What is the difference between COUNT and COUNTA in Excel? (29)",
        "options": [
          "COUNTA is used only for arrays",
          "COUNT counts text, COUNTA counts numbers",
          "They are identical",
          "COUNT counts numbers, COUNTA counts non-empty cells"
        ],
        "correct": 3,
        "explanation": "COUNT only counts numerical values; COUNTA counts any non-empty cell.",
        "tag": "Advanced Excel"
      },
      {
        "id": "com_exam_29",
        "question": "How do you execute a mail merge using an Excel list in Word? (30)",
        "options": [
          "Mailings > Select Recipients > Use an Existing List",
          "Insert > Excel Table",
          "Data > Import",
          "File > Share"
        ],
        "correct": 0,
        "explanation": "Mail Merge requires linking an existing Excel list via the Mailings tab.",
        "tag": "Mail Merge"
      }
    ]
  },
  "airport": {
    "easy": [
      {
        "id": "air_easy_0",
        "question": "What does VIP stand for? (1)",
        "options": [
          "Visa In Progress",
          "Valid In Passport",
          "Very Important Person",
          "Very Interesting Person"
        ],
        "correct": 2,
        "explanation": "VIP stands for Very Important Person.",
        "tag": "Terminology"
      },
      {
        "id": "air_easy_1",
        "question": "Where do passengers pick up their luggage? (2)",
        "options": [
          "The Gate",
          "Baggage Claim",
          "Security",
          "Check-in"
        ],
        "correct": 1,
        "explanation": "Luggage is retrieved at Baggage Claim.",
        "tag": "Terminal Layout"
      },
      {
        "id": "air_easy_2",
        "question": "What document is absolutely required for international travel? (3)",
        "options": [
          "Birth Certificate",
          "Driver's License",
          "Passport",
          "Credit Card"
        ],
        "correct": 2,
        "explanation": "A Passport is mandatory for international travel.",
        "tag": "Travel Docs"
      },
      {
        "id": "air_easy_3",
        "question": "What does ETA mean? (4)",
        "options": [
          "Extra Time Allowed",
          "Emergency Takeoff Area",
          "Estimated Time of Arrival",
          "Egyptian Transport Authority"
        ],
        "correct": 2,
        "explanation": "ETA stands for Estimated Time of Arrival.",
        "tag": "Acronyms"
      },
      {
        "id": "air_easy_4",
        "question": "What does VIP stand for? (5)",
        "options": [
          "Very Important Person",
          "Very Interesting Person",
          "Valid In Passport",
          "Visa In Progress"
        ],
        "correct": 0,
        "explanation": "VIP stands for Very Important Person.",
        "tag": "Terminology"
      },
      {
        "id": "air_easy_5",
        "question": "Where do passengers pick up their luggage? (6)",
        "options": [
          "The Gate",
          "Check-in",
          "Baggage Claim",
          "Security"
        ],
        "correct": 2,
        "explanation": "Luggage is retrieved at Baggage Claim.",
        "tag": "Terminal Layout"
      },
      {
        "id": "air_easy_6",
        "question": "What document is absolutely required for international travel? (7)",
        "options": [
          "Birth Certificate",
          "Credit Card",
          "Passport",
          "Driver's License"
        ],
        "correct": 2,
        "explanation": "A Passport is mandatory for international travel.",
        "tag": "Travel Docs"
      },
      {
        "id": "air_easy_7",
        "question": "What does ETA mean? (8)",
        "options": [
          "Egyptian Transport Authority",
          "Estimated Time of Arrival",
          "Extra Time Allowed",
          "Emergency Takeoff Area"
        ],
        "correct": 1,
        "explanation": "ETA stands for Estimated Time of Arrival.",
        "tag": "Acronyms"
      },
      {
        "id": "air_easy_8",
        "question": "What does VIP stand for? (9)",
        "options": [
          "Valid In Passport",
          "Very Interesting Person",
          "Very Important Person",
          "Visa In Progress"
        ],
        "correct": 2,
        "explanation": "VIP stands for Very Important Person.",
        "tag": "Terminology"
      },
      {
        "id": "air_easy_9",
        "question": "Where do passengers pick up their luggage? (10)",
        "options": [
          "Check-in",
          "The Gate",
          "Baggage Claim",
          "Security"
        ],
        "correct": 2,
        "explanation": "Luggage is retrieved at Baggage Claim.",
        "tag": "Terminal Layout"
      },
      {
        "id": "air_easy_10",
        "question": "What document is absolutely required for international travel? (11)",
        "options": [
          "Credit Card",
          "Driver's License",
          "Birth Certificate",
          "Passport"
        ],
        "correct": 3,
        "explanation": "A Passport is mandatory for international travel.",
        "tag": "Travel Docs"
      },
      {
        "id": "air_easy_11",
        "question": "What does ETA mean? (12)",
        "options": [
          "Estimated Time of Arrival",
          "Extra Time Allowed",
          "Emergency Takeoff Area",
          "Egyptian Transport Authority"
        ],
        "correct": 0,
        "explanation": "ETA stands for Estimated Time of Arrival.",
        "tag": "Acronyms"
      },
      {
        "id": "air_easy_12",
        "question": "What does VIP stand for? (13)",
        "options": [
          "Very Interesting Person",
          "Very Important Person",
          "Visa In Progress",
          "Valid In Passport"
        ],
        "correct": 1,
        "explanation": "VIP stands for Very Important Person.",
        "tag": "Terminology"
      },
      {
        "id": "air_easy_13",
        "question": "Where do passengers pick up their luggage? (14)",
        "options": [
          "Check-in",
          "The Gate",
          "Baggage Claim",
          "Security"
        ],
        "correct": 2,
        "explanation": "Luggage is retrieved at Baggage Claim.",
        "tag": "Terminal Layout"
      },
      {
        "id": "air_easy_14",
        "question": "What document is absolutely required for international travel? (15)",
        "options": [
          "Passport",
          "Birth Certificate",
          "Driver's License",
          "Credit Card"
        ],
        "correct": 0,
        "explanation": "A Passport is mandatory for international travel.",
        "tag": "Travel Docs"
      },
      {
        "id": "air_easy_15",
        "question": "What does ETA mean? (16)",
        "options": [
          "Extra Time Allowed",
          "Egyptian Transport Authority",
          "Estimated Time of Arrival",
          "Emergency Takeoff Area"
        ],
        "correct": 2,
        "explanation": "ETA stands for Estimated Time of Arrival.",
        "tag": "Acronyms"
      },
      {
        "id": "air_easy_16",
        "question": "What does VIP stand for? (17)",
        "options": [
          "Very Important Person",
          "Very Interesting Person",
          "Valid In Passport",
          "Visa In Progress"
        ],
        "correct": 0,
        "explanation": "VIP stands for Very Important Person.",
        "tag": "Terminology"
      },
      {
        "id": "air_easy_17",
        "question": "Where do passengers pick up their luggage? (18)",
        "options": [
          "Baggage Claim",
          "The Gate",
          "Security",
          "Check-in"
        ],
        "correct": 0,
        "explanation": "Luggage is retrieved at Baggage Claim.",
        "tag": "Terminal Layout"
      },
      {
        "id": "air_easy_18",
        "question": "What document is absolutely required for international travel? (19)",
        "options": [
          "Credit Card",
          "Driver's License",
          "Passport",
          "Birth Certificate"
        ],
        "correct": 2,
        "explanation": "A Passport is mandatory for international travel.",
        "tag": "Travel Docs"
      },
      {
        "id": "air_easy_19",
        "question": "What does ETA mean? (20)",
        "options": [
          "Egyptian Transport Authority",
          "Extra Time Allowed",
          "Emergency Takeoff Area",
          "Estimated Time of Arrival"
        ],
        "correct": 3,
        "explanation": "ETA stands for Estimated Time of Arrival.",
        "tag": "Acronyms"
      },
      {
        "id": "air_easy_20",
        "question": "What does VIP stand for? (21)",
        "options": [
          "Visa In Progress",
          "Very Important Person",
          "Valid In Passport",
          "Very Interesting Person"
        ],
        "correct": 1,
        "explanation": "VIP stands for Very Important Person.",
        "tag": "Terminology"
      },
      {
        "id": "air_easy_21",
        "question": "Where do passengers pick up their luggage? (22)",
        "options": [
          "Check-in",
          "Security",
          "The Gate",
          "Baggage Claim"
        ],
        "correct": 3,
        "explanation": "Luggage is retrieved at Baggage Claim.",
        "tag": "Terminal Layout"
      },
      {
        "id": "air_easy_22",
        "question": "What document is absolutely required for international travel? (23)",
        "options": [
          "Birth Certificate",
          "Passport",
          "Credit Card",
          "Driver's License"
        ],
        "correct": 1,
        "explanation": "A Passport is mandatory for international travel.",
        "tag": "Travel Docs"
      },
      {
        "id": "air_easy_23",
        "question": "What does ETA mean? (24)",
        "options": [
          "Emergency Takeoff Area",
          "Estimated Time of Arrival",
          "Extra Time Allowed",
          "Egyptian Transport Authority"
        ],
        "correct": 1,
        "explanation": "ETA stands for Estimated Time of Arrival.",
        "tag": "Acronyms"
      },
      {
        "id": "air_easy_24",
        "question": "What does VIP stand for? (25)",
        "options": [
          "Valid In Passport",
          "Very Interesting Person",
          "Visa In Progress",
          "Very Important Person"
        ],
        "correct": 3,
        "explanation": "VIP stands for Very Important Person.",
        "tag": "Terminology"
      },
      {
        "id": "air_easy_25",
        "question": "Where do passengers pick up their luggage? (26)",
        "options": [
          "The Gate",
          "Security",
          "Baggage Claim",
          "Check-in"
        ],
        "correct": 2,
        "explanation": "Luggage is retrieved at Baggage Claim.",
        "tag": "Terminal Layout"
      },
      {
        "id": "air_easy_26",
        "question": "What document is absolutely required for international travel? (27)",
        "options": [
          "Driver's License",
          "Passport",
          "Credit Card",
          "Birth Certificate"
        ],
        "correct": 1,
        "explanation": "A Passport is mandatory for international travel.",
        "tag": "Travel Docs"
      },
      {
        "id": "air_easy_27",
        "question": "What does ETA mean? (28)",
        "options": [
          "Extra Time Allowed",
          "Egyptian Transport Authority",
          "Estimated Time of Arrival",
          "Emergency Takeoff Area"
        ],
        "correct": 2,
        "explanation": "ETA stands for Estimated Time of Arrival.",
        "tag": "Acronyms"
      },
      {
        "id": "air_easy_28",
        "question": "What does VIP stand for? (29)",
        "options": [
          "Very Interesting Person",
          "Valid In Passport",
          "Visa In Progress",
          "Very Important Person"
        ],
        "correct": 3,
        "explanation": "VIP stands for Very Important Person.",
        "tag": "Terminology"
      },
      {
        "id": "air_easy_29",
        "question": "Where do passengers pick up their luggage? (30)",
        "options": [
          "The Gate",
          "Check-in",
          "Baggage Claim",
          "Security"
        ],
        "correct": 2,
        "explanation": "Luggage is retrieved at Baggage Claim.",
        "tag": "Terminal Layout"
      }
    ],
    "medium": [
      {
        "id": "air_medium_0",
        "question": "What is the primary role of Customs at an airport? (1)",
        "options": [
          "Selling duty-free items",
          "Regulating goods entering the country",
          "Fueling the aircraft",
          "Checking boarding passes"
        ],
        "correct": 1,
        "explanation": "Customs regulates imports and exports.",
        "tag": "Customs"
      },
      {
        "id": "air_medium_1",
        "question": "What does 'Standby' mean for a passenger? (2)",
        "options": [
          "They missed their flight",
          "They are VIP",
          "They are standing near the gate",
          "They are waiting for an available seat on a full flight"
        ],
        "correct": 3,
        "explanation": "Standby passengers wait for no-show seats to become available.",
        "tag": "Ticketing"
      },
      {
        "id": "air_medium_2",
        "question": "What is a 'Layover'? (3)",
        "options": [
          "A type of luggage",
          "A delay on the runway",
          "A connection point between flights",
          "A security check"
        ],
        "correct": 2,
        "explanation": "A layover is a stop between flights.",
        "tag": "Terminology"
      },
      {
        "id": "air_medium_3",
        "question": "In aviation time, what is 15:00? (4)",
        "options": [
          "3:00 PM",
          "3:00 AM",
          "5:00 AM",
          "5:00 PM"
        ],
        "correct": 0,
        "explanation": "Aviation uses the 24-hour clock. 15:00 is 3:00 PM.",
        "tag": "Aviation Time"
      },
      {
        "id": "air_medium_4",
        "question": "What is the primary role of Customs at an airport? (5)",
        "options": [
          "Checking boarding passes",
          "Fueling the aircraft",
          "Regulating goods entering the country",
          "Selling duty-free items"
        ],
        "correct": 2,
        "explanation": "Customs regulates imports and exports.",
        "tag": "Customs"
      },
      {
        "id": "air_medium_5",
        "question": "What does 'Standby' mean for a passenger? (6)",
        "options": [
          "They are VIP",
          "They missed their flight",
          "They are waiting for an available seat on a full flight",
          "They are standing near the gate"
        ],
        "correct": 2,
        "explanation": "Standby passengers wait for no-show seats to become available.",
        "tag": "Ticketing"
      },
      {
        "id": "air_medium_6",
        "question": "What is a 'Layover'? (7)",
        "options": [
          "A delay on the runway",
          "A type of luggage",
          "A connection point between flights",
          "A security check"
        ],
        "correct": 2,
        "explanation": "A layover is a stop between flights.",
        "tag": "Terminology"
      },
      {
        "id": "air_medium_7",
        "question": "In aviation time, what is 15:00? (8)",
        "options": [
          "3:00 AM",
          "5:00 AM",
          "5:00 PM",
          "3:00 PM"
        ],
        "correct": 3,
        "explanation": "Aviation uses the 24-hour clock. 15:00 is 3:00 PM.",
        "tag": "Aviation Time"
      },
      {
        "id": "air_medium_8",
        "question": "What is the primary role of Customs at an airport? (9)",
        "options": [
          "Regulating goods entering the country",
          "Selling duty-free items",
          "Fueling the aircraft",
          "Checking boarding passes"
        ],
        "correct": 0,
        "explanation": "Customs regulates imports and exports.",
        "tag": "Customs"
      },
      {
        "id": "air_medium_9",
        "question": "What does 'Standby' mean for a passenger? (10)",
        "options": [
          "They are standing near the gate",
          "They are VIP",
          "They missed their flight",
          "They are waiting for an available seat on a full flight"
        ],
        "correct": 3,
        "explanation": "Standby passengers wait for no-show seats to become available.",
        "tag": "Ticketing"
      },
      {
        "id": "air_medium_10",
        "question": "What is a 'Layover'? (11)",
        "options": [
          "A connection point between flights",
          "A security check",
          "A delay on the runway",
          "A type of luggage"
        ],
        "correct": 0,
        "explanation": "A layover is a stop between flights.",
        "tag": "Terminology"
      },
      {
        "id": "air_medium_11",
        "question": "In aviation time, what is 15:00? (12)",
        "options": [
          "5:00 PM",
          "3:00 AM",
          "5:00 AM",
          "3:00 PM"
        ],
        "correct": 3,
        "explanation": "Aviation uses the 24-hour clock. 15:00 is 3:00 PM.",
        "tag": "Aviation Time"
      },
      {
        "id": "air_medium_12",
        "question": "What is the primary role of Customs at an airport? (13)",
        "options": [
          "Selling duty-free items",
          "Fueling the aircraft",
          "Regulating goods entering the country",
          "Checking boarding passes"
        ],
        "correct": 2,
        "explanation": "Customs regulates imports and exports.",
        "tag": "Customs"
      },
      {
        "id": "air_medium_13",
        "question": "What does 'Standby' mean for a passenger? (14)",
        "options": [
          "They are standing near the gate",
          "They missed their flight",
          "They are waiting for an available seat on a full flight",
          "They are VIP"
        ],
        "correct": 2,
        "explanation": "Standby passengers wait for no-show seats to become available.",
        "tag": "Ticketing"
      },
      {
        "id": "air_medium_14",
        "question": "What is a 'Layover'? (15)",
        "options": [
          "A security check",
          "A type of luggage",
          "A connection point between flights",
          "A delay on the runway"
        ],
        "correct": 2,
        "explanation": "A layover is a stop between flights.",
        "tag": "Terminology"
      },
      {
        "id": "air_medium_15",
        "question": "In aviation time, what is 15:00? (16)",
        "options": [
          "5:00 AM",
          "3:00 AM",
          "3:00 PM",
          "5:00 PM"
        ],
        "correct": 2,
        "explanation": "Aviation uses the 24-hour clock. 15:00 is 3:00 PM.",
        "tag": "Aviation Time"
      },
      {
        "id": "air_medium_16",
        "question": "What is the primary role of Customs at an airport? (17)",
        "options": [
          "Selling duty-free items",
          "Checking boarding passes",
          "Regulating goods entering the country",
          "Fueling the aircraft"
        ],
        "correct": 2,
        "explanation": "Customs regulates imports and exports.",
        "tag": "Customs"
      },
      {
        "id": "air_medium_17",
        "question": "What does 'Standby' mean for a passenger? (18)",
        "options": [
          "They are standing near the gate",
          "They are waiting for an available seat on a full flight",
          "They are VIP",
          "They missed their flight"
        ],
        "correct": 1,
        "explanation": "Standby passengers wait for no-show seats to become available.",
        "tag": "Ticketing"
      },
      {
        "id": "air_medium_18",
        "question": "What is a 'Layover'? (19)",
        "options": [
          "A type of luggage",
          "A delay on the runway",
          "A connection point between flights",
          "A security check"
        ],
        "correct": 2,
        "explanation": "A layover is a stop between flights.",
        "tag": "Terminology"
      },
      {
        "id": "air_medium_19",
        "question": "In aviation time, what is 15:00? (20)",
        "options": [
          "3:00 PM",
          "5:00 AM",
          "5:00 PM",
          "3:00 AM"
        ],
        "correct": 0,
        "explanation": "Aviation uses the 24-hour clock. 15:00 is 3:00 PM.",
        "tag": "Aviation Time"
      },
      {
        "id": "air_medium_20",
        "question": "What is the primary role of Customs at an airport? (21)",
        "options": [
          "Fueling the aircraft",
          "Regulating goods entering the country",
          "Checking boarding passes",
          "Selling duty-free items"
        ],
        "correct": 1,
        "explanation": "Customs regulates imports and exports.",
        "tag": "Customs"
      },
      {
        "id": "air_medium_21",
        "question": "What does 'Standby' mean for a passenger? (22)",
        "options": [
          "They are waiting for an available seat on a full flight",
          "They missed their flight",
          "They are standing near the gate",
          "They are VIP"
        ],
        "correct": 0,
        "explanation": "Standby passengers wait for no-show seats to become available.",
        "tag": "Ticketing"
      },
      {
        "id": "air_medium_22",
        "question": "What is a 'Layover'? (23)",
        "options": [
          "A security check",
          "A type of luggage",
          "A connection point between flights",
          "A delay on the runway"
        ],
        "correct": 2,
        "explanation": "A layover is a stop between flights.",
        "tag": "Terminology"
      },
      {
        "id": "air_medium_23",
        "question": "In aviation time, what is 15:00? (24)",
        "options": [
          "3:00 PM",
          "3:00 AM",
          "5:00 PM",
          "5:00 AM"
        ],
        "correct": 0,
        "explanation": "Aviation uses the 24-hour clock. 15:00 is 3:00 PM.",
        "tag": "Aviation Time"
      },
      {
        "id": "air_medium_24",
        "question": "What is the primary role of Customs at an airport? (25)",
        "options": [
          "Selling duty-free items",
          "Checking boarding passes",
          "Fueling the aircraft",
          "Regulating goods entering the country"
        ],
        "correct": 3,
        "explanation": "Customs regulates imports and exports.",
        "tag": "Customs"
      },
      {
        "id": "air_medium_25",
        "question": "What does 'Standby' mean for a passenger? (26)",
        "options": [
          "They missed their flight",
          "They are standing near the gate",
          "They are VIP",
          "They are waiting for an available seat on a full flight"
        ],
        "correct": 3,
        "explanation": "Standby passengers wait for no-show seats to become available.",
        "tag": "Ticketing"
      },
      {
        "id": "air_medium_26",
        "question": "What is a 'Layover'? (27)",
        "options": [
          "A connection point between flights",
          "A security check",
          "A delay on the runway",
          "A type of luggage"
        ],
        "correct": 0,
        "explanation": "A layover is a stop between flights.",
        "tag": "Terminology"
      },
      {
        "id": "air_medium_27",
        "question": "In aviation time, what is 15:00? (28)",
        "options": [
          "3:00 AM",
          "3:00 PM",
          "5:00 AM",
          "5:00 PM"
        ],
        "correct": 1,
        "explanation": "Aviation uses the 24-hour clock. 15:00 is 3:00 PM.",
        "tag": "Aviation Time"
      },
      {
        "id": "air_medium_28",
        "question": "What is the primary role of Customs at an airport? (29)",
        "options": [
          "Selling duty-free items",
          "Regulating goods entering the country",
          "Checking boarding passes",
          "Fueling the aircraft"
        ],
        "correct": 1,
        "explanation": "Customs regulates imports and exports.",
        "tag": "Customs"
      },
      {
        "id": "air_medium_29",
        "question": "What does 'Standby' mean for a passenger? (30)",
        "options": [
          "They are waiting for an available seat on a full flight",
          "They missed their flight",
          "They are VIP",
          "They are standing near the gate"
        ],
        "correct": 0,
        "explanation": "Standby passengers wait for no-show seats to become available.",
        "tag": "Ticketing"
      }
    ],
    "hard": [
      {
        "id": "air_hard_0",
        "question": "According to IATA, what is the code for Cairo International Airport? (1)",
        "options": [
          "CRO",
          "CIA",
          "CIR",
          "CAI"
        ],
        "correct": 3,
        "explanation": "CAI is the IATA code for Cairo.",
        "tag": "IATA Codes"
      },
      {
        "id": "air_hard_1",
        "question": "What is the difference between a direct flight and a non-stop flight? (2)",
        "options": [
          "Direct flights make a stop but keep the same flight number; non-stop flights make zero stops",
          "Direct flights require changing planes",
          "They are the same",
          "Non-stop flights are faster"
        ],
        "correct": 0,
        "explanation": "Direct flights may touch down for fuel or passengers, but non-stop flights do not.",
        "tag": "Aviation Logistics"
      },
      {
        "id": "air_hard_2",
        "question": "What is the 'Sterile Area' in an airport? (3)",
        "options": [
          "The hospital clinic",
          "The VIP lounge",
          "The area past the security checkpoints",
          "The runway"
        ],
        "correct": 2,
        "explanation": "The sterile area is the secure zone past TSA/security.",
        "tag": "Security"
      },
      {
        "id": "air_hard_3",
        "question": "What does UM stand for in airline passenger coding? (4)",
        "options": [
          "Unknown Manifest",
          "Unruly Member",
          "Upper Management",
          "Unaccompanied Minor"
        ],
        "correct": 3,
        "explanation": "UM stands for Unaccompanied Minor.",
        "tag": "Passenger Codes"
      },
      {
        "id": "air_hard_4",
        "question": "According to IATA, what is the code for Cairo International Airport? (5)",
        "options": [
          "CIR",
          "CAI",
          "CRO",
          "CIA"
        ],
        "correct": 1,
        "explanation": "CAI is the IATA code for Cairo.",
        "tag": "IATA Codes"
      },
      {
        "id": "air_hard_5",
        "question": "What is the difference between a direct flight and a non-stop flight? (6)",
        "options": [
          "Direct flights make a stop but keep the same flight number; non-stop flights make zero stops",
          "Non-stop flights are faster",
          "Direct flights require changing planes",
          "They are the same"
        ],
        "correct": 0,
        "explanation": "Direct flights may touch down for fuel or passengers, but non-stop flights do not.",
        "tag": "Aviation Logistics"
      },
      {
        "id": "air_hard_6",
        "question": "What is the 'Sterile Area' in an airport? (7)",
        "options": [
          "The area past the security checkpoints",
          "The VIP lounge",
          "The hospital clinic",
          "The runway"
        ],
        "correct": 0,
        "explanation": "The sterile area is the secure zone past TSA/security.",
        "tag": "Security"
      },
      {
        "id": "air_hard_7",
        "question": "What does UM stand for in airline passenger coding? (8)",
        "options": [
          "Upper Management",
          "Unaccompanied Minor",
          "Unknown Manifest",
          "Unruly Member"
        ],
        "correct": 1,
        "explanation": "UM stands for Unaccompanied Minor.",
        "tag": "Passenger Codes"
      },
      {
        "id": "air_hard_8",
        "question": "According to IATA, what is the code for Cairo International Airport? (9)",
        "options": [
          "CIR",
          "CIA",
          "CAI",
          "CRO"
        ],
        "correct": 2,
        "explanation": "CAI is the IATA code for Cairo.",
        "tag": "IATA Codes"
      },
      {
        "id": "air_hard_9",
        "question": "What is the difference between a direct flight and a non-stop flight? (10)",
        "options": [
          "Direct flights make a stop but keep the same flight number; non-stop flights make zero stops",
          "They are the same",
          "Non-stop flights are faster",
          "Direct flights require changing planes"
        ],
        "correct": 0,
        "explanation": "Direct flights may touch down for fuel or passengers, but non-stop flights do not.",
        "tag": "Aviation Logistics"
      },
      {
        "id": "air_hard_10",
        "question": "What is the 'Sterile Area' in an airport? (11)",
        "options": [
          "The VIP lounge",
          "The hospital clinic",
          "The area past the security checkpoints",
          "The runway"
        ],
        "correct": 2,
        "explanation": "The sterile area is the secure zone past TSA/security.",
        "tag": "Security"
      },
      {
        "id": "air_hard_11",
        "question": "What does UM stand for in airline passenger coding? (12)",
        "options": [
          "Upper Management",
          "Unaccompanied Minor",
          "Unruly Member",
          "Unknown Manifest"
        ],
        "correct": 1,
        "explanation": "UM stands for Unaccompanied Minor.",
        "tag": "Passenger Codes"
      },
      {
        "id": "air_hard_12",
        "question": "According to IATA, what is the code for Cairo International Airport? (13)",
        "options": [
          "CIA",
          "CRO",
          "CIR",
          "CAI"
        ],
        "correct": 3,
        "explanation": "CAI is the IATA code for Cairo.",
        "tag": "IATA Codes"
      },
      {
        "id": "air_hard_13",
        "question": "What is the difference between a direct flight and a non-stop flight? (14)",
        "options": [
          "They are the same",
          "Direct flights require changing planes",
          "Direct flights make a stop but keep the same flight number; non-stop flights make zero stops",
          "Non-stop flights are faster"
        ],
        "correct": 2,
        "explanation": "Direct flights may touch down for fuel or passengers, but non-stop flights do not.",
        "tag": "Aviation Logistics"
      },
      {
        "id": "air_hard_14",
        "question": "What is the 'Sterile Area' in an airport? (15)",
        "options": [
          "The runway",
          "The hospital clinic",
          "The VIP lounge",
          "The area past the security checkpoints"
        ],
        "correct": 3,
        "explanation": "The sterile area is the secure zone past TSA/security.",
        "tag": "Security"
      },
      {
        "id": "air_hard_15",
        "question": "What does UM stand for in airline passenger coding? (16)",
        "options": [
          "Unruly Member",
          "Unaccompanied Minor",
          "Upper Management",
          "Unknown Manifest"
        ],
        "correct": 1,
        "explanation": "UM stands for Unaccompanied Minor.",
        "tag": "Passenger Codes"
      },
      {
        "id": "air_hard_16",
        "question": "According to IATA, what is the code for Cairo International Airport? (17)",
        "options": [
          "CIA",
          "CAI",
          "CIR",
          "CRO"
        ],
        "correct": 1,
        "explanation": "CAI is the IATA code for Cairo.",
        "tag": "IATA Codes"
      },
      {
        "id": "air_hard_17",
        "question": "What is the difference between a direct flight and a non-stop flight? (18)",
        "options": [
          "They are the same",
          "Direct flights require changing planes",
          "Non-stop flights are faster",
          "Direct flights make a stop but keep the same flight number; non-stop flights make zero stops"
        ],
        "correct": 3,
        "explanation": "Direct flights may touch down for fuel or passengers, but non-stop flights do not.",
        "tag": "Aviation Logistics"
      },
      {
        "id": "air_hard_18",
        "question": "What is the 'Sterile Area' in an airport? (19)",
        "options": [
          "The hospital clinic",
          "The VIP lounge",
          "The runway",
          "The area past the security checkpoints"
        ],
        "correct": 3,
        "explanation": "The sterile area is the secure zone past TSA/security.",
        "tag": "Security"
      },
      {
        "id": "air_hard_19",
        "question": "What does UM stand for in airline passenger coding? (20)",
        "options": [
          "Unruly Member",
          "Unknown Manifest",
          "Unaccompanied Minor",
          "Upper Management"
        ],
        "correct": 2,
        "explanation": "UM stands for Unaccompanied Minor.",
        "tag": "Passenger Codes"
      },
      {
        "id": "air_hard_20",
        "question": "According to IATA, what is the code for Cairo International Airport? (21)",
        "options": [
          "CIA",
          "CAI",
          "CRO",
          "CIR"
        ],
        "correct": 1,
        "explanation": "CAI is the IATA code for Cairo.",
        "tag": "IATA Codes"
      },
      {
        "id": "air_hard_21",
        "question": "What is the difference between a direct flight and a non-stop flight? (22)",
        "options": [
          "Direct flights make a stop but keep the same flight number; non-stop flights make zero stops",
          "Non-stop flights are faster",
          "They are the same",
          "Direct flights require changing planes"
        ],
        "correct": 0,
        "explanation": "Direct flights may touch down for fuel or passengers, but non-stop flights do not.",
        "tag": "Aviation Logistics"
      },
      {
        "id": "air_hard_22",
        "question": "What is the 'Sterile Area' in an airport? (23)",
        "options": [
          "The runway",
          "The hospital clinic",
          "The VIP lounge",
          "The area past the security checkpoints"
        ],
        "correct": 3,
        "explanation": "The sterile area is the secure zone past TSA/security.",
        "tag": "Security"
      },
      {
        "id": "air_hard_23",
        "question": "What does UM stand for in airline passenger coding? (24)",
        "options": [
          "Unknown Manifest",
          "Upper Management",
          "Unaccompanied Minor",
          "Unruly Member"
        ],
        "correct": 2,
        "explanation": "UM stands for Unaccompanied Minor.",
        "tag": "Passenger Codes"
      },
      {
        "id": "air_hard_24",
        "question": "According to IATA, what is the code for Cairo International Airport? (25)",
        "options": [
          "CIR",
          "CRO",
          "CIA",
          "CAI"
        ],
        "correct": 3,
        "explanation": "CAI is the IATA code for Cairo.",
        "tag": "IATA Codes"
      },
      {
        "id": "air_hard_25",
        "question": "What is the difference between a direct flight and a non-stop flight? (26)",
        "options": [
          "Direct flights require changing planes",
          "Non-stop flights are faster",
          "They are the same",
          "Direct flights make a stop but keep the same flight number; non-stop flights make zero stops"
        ],
        "correct": 3,
        "explanation": "Direct flights may touch down for fuel or passengers, but non-stop flights do not.",
        "tag": "Aviation Logistics"
      },
      {
        "id": "air_hard_26",
        "question": "What is the 'Sterile Area' in an airport? (27)",
        "options": [
          "The area past the security checkpoints",
          "The hospital clinic",
          "The VIP lounge",
          "The runway"
        ],
        "correct": 0,
        "explanation": "The sterile area is the secure zone past TSA/security.",
        "tag": "Security"
      },
      {
        "id": "air_hard_27",
        "question": "What does UM stand for in airline passenger coding? (28)",
        "options": [
          "Unruly Member",
          "Unaccompanied Minor",
          "Unknown Manifest",
          "Upper Management"
        ],
        "correct": 1,
        "explanation": "UM stands for Unaccompanied Minor.",
        "tag": "Passenger Codes"
      },
      {
        "id": "air_hard_28",
        "question": "According to IATA, what is the code for Cairo International Airport? (29)",
        "options": [
          "CIA",
          "CAI",
          "CIR",
          "CRO"
        ],
        "correct": 1,
        "explanation": "CAI is the IATA code for Cairo.",
        "tag": "IATA Codes"
      },
      {
        "id": "air_hard_29",
        "question": "What is the difference between a direct flight and a non-stop flight? (30)",
        "options": [
          "They are the same",
          "Direct flights make a stop but keep the same flight number; non-stop flights make zero stops",
          "Non-stop flights are faster",
          "Direct flights require changing planes"
        ],
        "correct": 1,
        "explanation": "Direct flights may touch down for fuel or passengers, but non-stop flights do not.",
        "tag": "Aviation Logistics"
      }
    ],
    "exam": [
      {
        "id": "air_exam_0",
        "question": "What is the correct procedure if a passenger leaves a bag unattended? (1)",
        "options": [
          "Move it to lost and found",
          "Open it to find ID",
          "Ignore it",
          "Immediately notify security and do not touch it"
        ],
        "correct": 3,
        "explanation": "Unattended baggage is a bomb threat risk and must be reported without touching it.",
        "tag": "Security Procedures"
      },
      {
        "id": "air_exam_1",
        "question": "What does the phonetic alphabet letter 'Zulu' represent? (2)",
        "options": [
          "X",
          "Z",
          "Zone",
          "Zero"
        ],
        "correct": 1,
        "explanation": "Zulu is the NATO phonetic word for the letter Z.",
        "tag": "Phonetic Alphabet"
      },
      {
        "id": "air_exam_2",
        "question": "A passenger traveling with a 'PRM' code requires what? (3)",
        "options": [
          "A special meal",
          "A weapon permit",
          "A pet in the cabin",
          "Assistance due to reduced mobility"
        ],
        "correct": 3,
        "explanation": "PRM stands for Passenger with Reduced Mobility.",
        "tag": "Special Assistance"
      },
      {
        "id": "air_exam_3",
        "question": "If a flight is overbooked, what is the sequence of denied boarding? (4)",
        "options": [
          "Alphabetical order",
          "Families first",
          "First come first serve",
          "Volunteers first, then involuntary based on fare/status"
        ],
        "correct": 3,
        "explanation": "Airlines must seek volunteers before involuntarily denying boarding.",
        "tag": "Airline Policies"
      },
      {
        "id": "air_exam_4",
        "question": "What is the correct procedure if a passenger leaves a bag unattended? (5)",
        "options": [
          "Immediately notify security and do not touch it",
          "Open it to find ID",
          "Move it to lost and found",
          "Ignore it"
        ],
        "correct": 0,
        "explanation": "Unattended baggage is a bomb threat risk and must be reported without touching it.",
        "tag": "Security Procedures"
      },
      {
        "id": "air_exam_5",
        "question": "What does the phonetic alphabet letter 'Zulu' represent? (6)",
        "options": [
          "Zone",
          "X",
          "Zero",
          "Z"
        ],
        "correct": 3,
        "explanation": "Zulu is the NATO phonetic word for the letter Z.",
        "tag": "Phonetic Alphabet"
      },
      {
        "id": "air_exam_6",
        "question": "A passenger traveling with a 'PRM' code requires what? (7)",
        "options": [
          "Assistance due to reduced mobility",
          "A pet in the cabin",
          "A special meal",
          "A weapon permit"
        ],
        "correct": 0,
        "explanation": "PRM stands for Passenger with Reduced Mobility.",
        "tag": "Special Assistance"
      },
      {
        "id": "air_exam_7",
        "question": "If a flight is overbooked, what is the sequence of denied boarding? (8)",
        "options": [
          "Alphabetical order",
          "First come first serve",
          "Volunteers first, then involuntary based on fare/status",
          "Families first"
        ],
        "correct": 2,
        "explanation": "Airlines must seek volunteers before involuntarily denying boarding.",
        "tag": "Airline Policies"
      },
      {
        "id": "air_exam_8",
        "question": "What is the correct procedure if a passenger leaves a bag unattended? (9)",
        "options": [
          "Immediately notify security and do not touch it",
          "Ignore it",
          "Open it to find ID",
          "Move it to lost and found"
        ],
        "correct": 0,
        "explanation": "Unattended baggage is a bomb threat risk and must be reported without touching it.",
        "tag": "Security Procedures"
      },
      {
        "id": "air_exam_9",
        "question": "What does the phonetic alphabet letter 'Zulu' represent? (10)",
        "options": [
          "X",
          "Zero",
          "Z",
          "Zone"
        ],
        "correct": 2,
        "explanation": "Zulu is the NATO phonetic word for the letter Z.",
        "tag": "Phonetic Alphabet"
      },
      {
        "id": "air_exam_10",
        "question": "A passenger traveling with a 'PRM' code requires what? (11)",
        "options": [
          "A weapon permit",
          "A pet in the cabin",
          "Assistance due to reduced mobility",
          "A special meal"
        ],
        "correct": 2,
        "explanation": "PRM stands for Passenger with Reduced Mobility.",
        "tag": "Special Assistance"
      },
      {
        "id": "air_exam_11",
        "question": "If a flight is overbooked, what is the sequence of denied boarding? (12)",
        "options": [
          "Alphabetical order",
          "Volunteers first, then involuntary based on fare/status",
          "Families first",
          "First come first serve"
        ],
        "correct": 1,
        "explanation": "Airlines must seek volunteers before involuntarily denying boarding.",
        "tag": "Airline Policies"
      },
      {
        "id": "air_exam_12",
        "question": "What is the correct procedure if a passenger leaves a bag unattended? (13)",
        "options": [
          "Open it to find ID",
          "Move it to lost and found",
          "Immediately notify security and do not touch it",
          "Ignore it"
        ],
        "correct": 2,
        "explanation": "Unattended baggage is a bomb threat risk and must be reported without touching it.",
        "tag": "Security Procedures"
      },
      {
        "id": "air_exam_13",
        "question": "What does the phonetic alphabet letter 'Zulu' represent? (14)",
        "options": [
          "Z",
          "Zero",
          "X",
          "Zone"
        ],
        "correct": 0,
        "explanation": "Zulu is the NATO phonetic word for the letter Z.",
        "tag": "Phonetic Alphabet"
      },
      {
        "id": "air_exam_14",
        "question": "A passenger traveling with a 'PRM' code requires what? (15)",
        "options": [
          "A special meal",
          "A weapon permit",
          "A pet in the cabin",
          "Assistance due to reduced mobility"
        ],
        "correct": 3,
        "explanation": "PRM stands for Passenger with Reduced Mobility.",
        "tag": "Special Assistance"
      },
      {
        "id": "air_exam_15",
        "question": "If a flight is overbooked, what is the sequence of denied boarding? (16)",
        "options": [
          "First come first serve",
          "Volunteers first, then involuntary based on fare/status",
          "Alphabetical order",
          "Families first"
        ],
        "correct": 1,
        "explanation": "Airlines must seek volunteers before involuntarily denying boarding.",
        "tag": "Airline Policies"
      },
      {
        "id": "air_exam_16",
        "question": "What is the correct procedure if a passenger leaves a bag unattended? (17)",
        "options": [
          "Move it to lost and found",
          "Open it to find ID",
          "Immediately notify security and do not touch it",
          "Ignore it"
        ],
        "correct": 2,
        "explanation": "Unattended baggage is a bomb threat risk and must be reported without touching it.",
        "tag": "Security Procedures"
      },
      {
        "id": "air_exam_17",
        "question": "What does the phonetic alphabet letter 'Zulu' represent? (18)",
        "options": [
          "Zone",
          "X",
          "Zero",
          "Z"
        ],
        "correct": 3,
        "explanation": "Zulu is the NATO phonetic word for the letter Z.",
        "tag": "Phonetic Alphabet"
      },
      {
        "id": "air_exam_18",
        "question": "A passenger traveling with a 'PRM' code requires what? (19)",
        "options": [
          "A pet in the cabin",
          "A special meal",
          "A weapon permit",
          "Assistance due to reduced mobility"
        ],
        "correct": 3,
        "explanation": "PRM stands for Passenger with Reduced Mobility.",
        "tag": "Special Assistance"
      },
      {
        "id": "air_exam_19",
        "question": "If a flight is overbooked, what is the sequence of denied boarding? (20)",
        "options": [
          "Alphabetical order",
          "Volunteers first, then involuntary based on fare/status",
          "First come first serve",
          "Families first"
        ],
        "correct": 1,
        "explanation": "Airlines must seek volunteers before involuntarily denying boarding.",
        "tag": "Airline Policies"
      },
      {
        "id": "air_exam_20",
        "question": "What is the correct procedure if a passenger leaves a bag unattended? (21)",
        "options": [
          "Move it to lost and found",
          "Open it to find ID",
          "Immediately notify security and do not touch it",
          "Ignore it"
        ],
        "correct": 2,
        "explanation": "Unattended baggage is a bomb threat risk and must be reported without touching it.",
        "tag": "Security Procedures"
      },
      {
        "id": "air_exam_21",
        "question": "What does the phonetic alphabet letter 'Zulu' represent? (22)",
        "options": [
          "Zero",
          "Z",
          "Zone",
          "X"
        ],
        "correct": 1,
        "explanation": "Zulu is the NATO phonetic word for the letter Z.",
        "tag": "Phonetic Alphabet"
      },
      {
        "id": "air_exam_22",
        "question": "A passenger traveling with a 'PRM' code requires what? (23)",
        "options": [
          "A special meal",
          "A pet in the cabin",
          "Assistance due to reduced mobility",
          "A weapon permit"
        ],
        "correct": 2,
        "explanation": "PRM stands for Passenger with Reduced Mobility.",
        "tag": "Special Assistance"
      },
      {
        "id": "air_exam_23",
        "question": "If a flight is overbooked, what is the sequence of denied boarding? (24)",
        "options": [
          "Volunteers first, then involuntary based on fare/status",
          "Alphabetical order",
          "First come first serve",
          "Families first"
        ],
        "correct": 0,
        "explanation": "Airlines must seek volunteers before involuntarily denying boarding.",
        "tag": "Airline Policies"
      },
      {
        "id": "air_exam_24",
        "question": "What is the correct procedure if a passenger leaves a bag unattended? (25)",
        "options": [
          "Ignore it",
          "Immediately notify security and do not touch it",
          "Move it to lost and found",
          "Open it to find ID"
        ],
        "correct": 1,
        "explanation": "Unattended baggage is a bomb threat risk and must be reported without touching it.",
        "tag": "Security Procedures"
      },
      {
        "id": "air_exam_25",
        "question": "What does the phonetic alphabet letter 'Zulu' represent? (26)",
        "options": [
          "Z",
          "Zone",
          "Zero",
          "X"
        ],
        "correct": 0,
        "explanation": "Zulu is the NATO phonetic word for the letter Z.",
        "tag": "Phonetic Alphabet"
      },
      {
        "id": "air_exam_26",
        "question": "A passenger traveling with a 'PRM' code requires what? (27)",
        "options": [
          "A pet in the cabin",
          "A special meal",
          "Assistance due to reduced mobility",
          "A weapon permit"
        ],
        "correct": 2,
        "explanation": "PRM stands for Passenger with Reduced Mobility.",
        "tag": "Special Assistance"
      },
      {
        "id": "air_exam_27",
        "question": "If a flight is overbooked, what is the sequence of denied boarding? (28)",
        "options": [
          "Families first",
          "Volunteers first, then involuntary based on fare/status",
          "First come first serve",
          "Alphabetical order"
        ],
        "correct": 1,
        "explanation": "Airlines must seek volunteers before involuntarily denying boarding.",
        "tag": "Airline Policies"
      },
      {
        "id": "air_exam_28",
        "question": "What is the correct procedure if a passenger leaves a bag unattended? (29)",
        "options": [
          "Move it to lost and found",
          "Ignore it",
          "Open it to find ID",
          "Immediately notify security and do not touch it"
        ],
        "correct": 3,
        "explanation": "Unattended baggage is a bomb threat risk and must be reported without touching it.",
        "tag": "Security Procedures"
      },
      {
        "id": "air_exam_29",
        "question": "What does the phonetic alphabet letter 'Zulu' represent? (30)",
        "options": [
          "Zone",
          "X",
          "Zero",
          "Z"
        ],
        "correct": 3,
        "explanation": "Zulu is the NATO phonetic word for the letter Z.",
        "tag": "Phonetic Alphabet"
      }
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
