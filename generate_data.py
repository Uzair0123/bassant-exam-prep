import json
import random

def generate_english(mode, count):
    questions = []
    topics = {
        "easy": [
            ("She ___ to the airport every morning.", ["goes", "go", "going", "gone"], 0, "Third-person singular uses 'goes'.", "Tenses"),
            ("Choose the correct spelling:", ["Accommodation", "Accomodation", "Acommodation", "Acomodation"], 0, "Two Cs and two Ms.", "Spelling"),
            ("The passengers ___ waiting at gate 4.", ["are", "is", "am", "be"], 0, "Plural noun takes 'are'.", "Subject-Verb"),
            ("I need to check ___ my luggage.", ["in", "on", "at", "to"], 0, "Phrasal verb 'check in'.", "Prepositions")
        ],
        "medium": [
            ("If the flight is delayed, we ___ the passengers.", ["will notify", "would notify", "notified", "notifying"], 0, "First conditional: If + present, will + base.", "Conditionals"),
            ("The flight attendant asked me where ___.", ["I was going", "was I going", "am I going", "I am going"], 0, "Reported speech uses subject-verb order.", "Reported Speech"),
            ("We apologize ___ the inconvenience.", ["for", "about", "to", "with"], 0, "Always 'apologize for'.", "Prepositions"),
            ("Neither the pilot nor the crew ___ aware of the issue.", ["was", "were", "are", "has"], 0, "Closest noun (crew) acts as singular here.", "Advanced Grammar")
        ],
        "hard": [
            ("By the time we arrived at the gate, the plane ___.", ["had already left", "has already left", "already left", "was leaving"], 0, "Past perfect for past action before another past action.", "Past Perfect"),
            ("Seldom ___ such severe turbulence.", ["have I experienced", "I have experienced", "I experienced", "I did experience"], 0, "Negative inversion requires auxiliary verb before subject.", "Inversion"),
            ("I would rather you ___ smoking in the lavatory.", ["stopped", "stop", "stopping", "had stopped"], 0, "'Would rather' + pronoun uses past simple.", "Subjunctive"),
            ("The manual, ___ is on the desk, contains the protocols.", ["which", "that", "who", "whom"], 0, "Non-defining relative clauses use 'which'.", "Relative Clauses")
        ],
        "exam": [
            ("Which sentence is the most polite way to ask a passenger to wait?", ["Would you mind waiting here for a moment, please?", "Wait here.", "You must wait here.", "Wait here, please."], 0, "'Would you mind + V-ing' is standard polite service.", "Customer Service"),
            ("Identify the error: 'The amount of passengers on the delayed flight were staggering.'", ["Both A and B", "amount -> number", "were -> was", "No error"], 0, "Use 'number' for countable nouns, which takes singular 'was'.", "Error Spotting"),
            ("If he ___ the boarding pass, he wouldn't be stuck at security.", ["hadn't lost", "hasn't lost", "didn't lose", "wouldn't lose"], 0, "Mixed conditional: Past action affecting present result.", "Mixed Conditionals"),
            ("It is imperative that the captain ___ informed immediately.", ["be", "is", "was", "has been"], 0, "Subjunctive mood uses the base form 'be' after 'imperative that'.", "Subjunctive")
        ]
    }
    
    # We will loop and mutate these slightly to reach 30
    base_qs = topics[mode]
    for i in range(count):
        q = base_qs[i % len(base_qs)]
        
        # Mutate subject slightly to make them unique
        subjects = ["He", "She", "The passenger", "The pilot", "The manager"]
        q_text = q[0]
        if "She" in q_text: q_text = q_text.replace("She", subjects[i % len(subjects)])
        if "he " in q_text: q_text = q_text.replace("he ", subjects[i % len(subjects)].lower() + " ")
        
        options = list(q[1])
        correct_text = options[q[2]]
        random.shuffle(options)
        new_correct_idx = options.index(correct_text)
        
        questions.append({
            "id": f"eng_{mode}_{i}",
            "question": f"{q_text} ({i+1})",
            "options": options,
            "correct": new_correct_idx,
            "explanation": q[3],
            "tag": q[4]
        })
    return questions

def generate_computer(mode, count):
    questions = []
    topics = {
        "easy": [
            ("Which program is best for presentations?", ["PowerPoint", "Word", "Excel", "Access"], 0, "PowerPoint creates presentations.", "General Knowledge"),
            ("What is the shortcut to copy text?", ["Ctrl + C", "Ctrl + V", "Ctrl + P", "Ctrl + X"], 0, "Ctrl + C is for Copy.", "Shortcuts"),
            ("Which symbol starts a formula in Excel?", ["=", "+", "-", "*"], 0, "All Excel formulas must begin with an equals sign (=).", "Excel Basics"),
            ("What does CC stand for in an email?", ["Carbon Copy", "Creative Commons", "Copy Cat", "Computer Code"], 0, "CC stands for Carbon Copy in email terminology.", "Email/Outlook")
        ],
        "medium": [
            ("In Excel, what does VLOOKUP do?", ["Searches for a value vertically", "Adds numbers", "Formats text", "Creates a chart"], 0, "VLOOKUP stands for Vertical Lookup.", "Excel Formulas"),
            ("How do you freeze the top row in Excel?", ["View > Freeze Panes", "Insert > Freeze", "Home > Format", "Data > Lock"], 0, "Freeze Panes is located under the View tab.", "Excel Navigation"),
            ("What is the primary function of Microsoft Teams?", ["Communication and collaboration", "Word processing", "Database management", "Graphic design"], 0, "Teams is Microsoft's communication and collaboration platform.", "Teams"),
            ("In Word, what does 'Format Painter' do?", ["Copies formatting from one text to another", "Paints the background", "Changes the font color", "Inserts images"], 0, "Format painter copies text formatting styles.", "Word Formatting")
        ],
        "hard": [
            ("How do you apply a macro to multiple Word documents?", ["Save in Normal.dotm", "Copy and paste", "It is impossible", "Using Excel"], 0, "Saving in the Normal.dotm template makes it globally available.", "Word Macros"),
            ("Which formula handles a VLOOKUP error by displaying 'Not Found'?", ["=IFERROR(VLOOKUP(A1,B:C,2,0), 'Not Found')", "=VLOOKUP(A1,B:C,2,0, 'Not Found')", "=IF(ERROR, 'Not Found')", "=ISERROR(VLOOKUP)"], 0, "IFERROR catches formula errors and outputs a custom string.", "Advanced Excel"),
            ("What is a Pivot Table primarily used for?", ["Summarizing and analyzing large datasets", "Creating animations", "Writing code", "Sending mass emails"], 0, "Pivot Tables summarize complex data.", "Excel Analysis"),
            ("In PowerPoint, what is the 'Slide Master'?", ["A template that controls the layout of all slides", "The first slide", "The person presenting", "A transition effect"], 0, "The Slide Master controls global design elements.", "PowerPoint")
        ],
        "exam": [
            ("What is the difference between COUNT and COUNTA in Excel?", ["COUNT counts numbers, COUNTA counts non-empty cells", "COUNT counts text, COUNTA counts numbers", "They are identical", "COUNTA is used only for arrays"], 0, "COUNT only counts numerical values; COUNTA counts any non-empty cell.", "Advanced Excel"),
            ("How do you execute a mail merge using an Excel list in Word?", ["Mailings > Select Recipients > Use an Existing List", "Insert > Excel Table", "Data > Import", "File > Share"], 0, "Mail Merge requires linking an existing Excel list via the Mailings tab.", "Mail Merge"),
            ("What is the correct syntax for an INDEX/MATCH formula?", ["=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))", "=MATCH(INDEX(return_range, lookup_value))", "=INDEX(MATCH(lookup_value))", "=MATCH(return_range, INDEX(lookup_range))"], 0, "INDEX returns the value, MATCH provides the row number.", "Advanced Excel"),
            ("Which feature prevents users from entering text into a number-only cell in Excel?", ["Data Validation", "Conditional Formatting", "Protect Sheet", "Format Cells"], 0, "Data Validation restricts the type of data that can be typed into a cell.", "Excel Security")
        ]
    }
    
    base_qs = topics[mode]
    for i in range(count):
        q = base_qs[i % len(base_qs)]
        options = list(q[1])
        correct_text = options[q[2]]
        random.shuffle(options)
        new_correct_idx = options.index(correct_text)
        
        questions.append({
            "id": f"com_{mode}_{i}",
            "question": f"{q[0]} ({i+1})",
            "options": options,
            "correct": new_correct_idx,
            "explanation": q[3],
            "tag": q[4]
        })
    return questions

def generate_airport(mode, count):
    questions = []
    topics = {
        "easy": [
            ("What does VIP stand for?", ["Very Important Person", "Very Interesting Person", "Valid In Passport", "Visa In Progress"], 0, "VIP stands for Very Important Person.", "Terminology"),
            ("Where do passengers pick up their luggage?", ["Baggage Claim", "Check-in", "Security", "The Gate"], 0, "Luggage is retrieved at Baggage Claim.", "Terminal Layout"),
            ("What document is absolutely required for international travel?", ["Passport", "Driver's License", "Birth Certificate", "Credit Card"], 0, "A Passport is mandatory for international travel.", "Travel Docs"),
            ("What does ETA mean?", ["Estimated Time of Arrival", "Extra Time Allowed", "Egyptian Transport Authority", "Emergency Takeoff Area"], 0, "ETA stands for Estimated Time of Arrival.", "Acronyms")
        ],
        "medium": [
            ("What is the primary role of Customs at an airport?", ["Regulating goods entering the country", "Checking boarding passes", "Fueling the aircraft", "Selling duty-free items"], 0, "Customs regulates imports and exports.", "Customs"),
            ("What does 'Standby' mean for a passenger?", ["They are waiting for an available seat on a full flight", "They are standing near the gate", "They missed their flight", "They are VIP"], 0, "Standby passengers wait for no-show seats to become available.", "Ticketing"),
            ("What is a 'Layover'?", ["A connection point between flights", "A delay on the runway", "A type of luggage", "A security check"], 0, "A layover is a stop between flights.", "Terminology"),
            ("In aviation time, what is 15:00?", ["3:00 PM", "5:00 PM", "3:00 AM", "5:00 AM"], 0, "Aviation uses the 24-hour clock. 15:00 is 3:00 PM.", "Aviation Time")
        ],
        "hard": [
            ("According to IATA, what is the code for Cairo International Airport?", ["CAI", "CIR", "CRO", "CIA"], 0, "CAI is the IATA code for Cairo.", "IATA Codes"),
            ("What is the difference between a direct flight and a non-stop flight?", ["Direct flights make a stop but keep the same flight number; non-stop flights make zero stops", "They are the same", "Non-stop flights are faster", "Direct flights require changing planes"], 0, "Direct flights may touch down for fuel or passengers, but non-stop flights do not.", "Aviation Logistics"),
            ("What is the 'Sterile Area' in an airport?", ["The area past the security checkpoints", "The hospital clinic", "The VIP lounge", "The runway"], 0, "The sterile area is the secure zone past TSA/security.", "Security"),
            ("What does UM stand for in airline passenger coding?", ["Unaccompanied Minor", "Unruly Member", "Upper Management", "Unknown Manifest"], 0, "UM stands for Unaccompanied Minor.", "Passenger Codes")
        ],
        "exam": [
            ("What is the correct procedure if a passenger leaves a bag unattended?", ["Immediately notify security and do not touch it", "Open it to find ID", "Move it to lost and found", "Ignore it"], 0, "Unattended baggage is a bomb threat risk and must be reported without touching it.", "Security Procedures"),
            ("What does the phonetic alphabet letter 'Zulu' represent?", ["Z", "X", "Zero", "Zone"], 0, "Zulu is the NATO phonetic word for the letter Z.", "Phonetic Alphabet"),
            ("A passenger traveling with a 'PRM' code requires what?", ["Assistance due to reduced mobility", "A special meal", "A pet in the cabin", "A weapon permit"], 0, "PRM stands for Passenger with Reduced Mobility.", "Special Assistance"),
            ("If a flight is overbooked, what is the sequence of denied boarding?", ["Volunteers first, then involuntary based on fare/status", "First come first serve", "Alphabetical order", "Families first"], 0, "Airlines must seek volunteers before involuntarily denying boarding.", "Airline Policies")
        ]
    }
    
    base_qs = topics[mode]
    for i in range(count):
        q = base_qs[i % len(base_qs)]
        options = list(q[1])
        correct_text = options[q[2]]
        random.shuffle(options)
        new_correct_idx = options.index(correct_text)
        
        questions.append({
            "id": f"air_{mode}_{i}",
            "question": f"{q[0]} ({i+1})",
            "options": options,
            "correct": new_correct_idx,
            "explanation": q[3],
            "tag": q[4]
        })
    return questions

bank = {
    "english": { m: generate_english(m, 30) for m in ["easy", "medium", "hard", "exam"] },
    "computer": { m: generate_computer(m, 30) for m in ["easy", "medium", "hard", "exam"] },
    "airport": { m: generate_airport(m, 30) for m in ["easy", "medium", "hard", "exam"] }
}

with open("src/data/mockData.js", "w") as f:
    f.write("export const getQuestions = (section, mode) => {\n")
    f.write("  const bank = ")
    f.write(json.dumps(bank, indent=2))
    f.write(";\n")
    f.write("""
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
""")
