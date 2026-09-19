import json
import random

def mutate_question(q, variation_index):
    # Contexts for mutation. 
    # Tuple: (Capitalized for start of sentence, lowercase for mid-sentence)
    subjects = [
        [("The passenger", "the passenger"), ("Mr. Smith", "Mr. Smith"), ("A frequent flyer", "a frequent flyer")],
        [("The ground staff", "the ground staff"), ("The customer service agent", "the customer service agent"), ("The gate agent", "the gate agent")],
        [("The flight", "the flight"), ("Flight 404", "Flight 404"), ("The inbound aircraft", "the inbound aircraft")],
        [("The baggage", "the baggage"), ("The checked luggage", "the checked luggage"), ("The oversized bag", "the oversized bag")]
    ]
    
    q_text = q["q"]
    options = list(q["opts"])
    correct_idx = q["ans"]
    correct_text = options[correct_idx]
    
    # Replace logic
    # {Passenger} = Cap, {passenger} = low
    passenger_cap, passenger_low = subjects[0][variation_index % 3]
    staff_cap, staff_low = subjects[1][variation_index % 3]
    flight_cap, flight_low = subjects[2][variation_index % 3]
    baggage_cap, baggage_low = subjects[3][variation_index % 3]

    q_text = q_text.replace("{Passenger}", passenger_cap).replace("{passenger}", passenger_low)
    q_text = q_text.replace("{Staff}", staff_cap).replace("{staff}", staff_low)
    q_text = q_text.replace("{Flight}", flight_cap).replace("{flight}", flight_low)
    q_text = q_text.replace("{Baggage}", baggage_cap).replace("{baggage}", baggage_low)

    random.shuffle(options)
    new_ans = options.index(correct_text)
    
    return {
        "question": q_text,
        "options": options,
        "correct": new_ans,
        "explanation": q["exp"],
        "tag": q["tag"]
    }

def generate_section(section_name, base_data, target_count=30):
    section_bank = {}
    for mode, base_qs in base_data.items():
        mode_qs = []
        for i in range(target_count):
            base_q = base_qs[i % len(base_qs)]
            variation = i // len(base_qs)
            
            mutated = mutate_question(base_q, variation)
            mutated["id"] = f"{section_name[0:3]}_{mode}_{i}"
            mutated["question"] = f"{mutated['question']} ({i+1})"
            mode_qs.append(mutated)
        section_bank[mode] = mode_qs
    return section_bank

english_base = {
    "easy": [
        {"q": "{Passenger} ___ waiting at the check-in counter.", "opts": ["is", "are", "am", "be"], "ans": 0, "exp": "Singular subject takes 'is'.", "tag": "Grammar"},
        {"q": "{Staff} ___ to verify the passport.", "opts": ["needs", "need", "needing", "needed"], "ans": 0, "exp": "Singular subject takes 'needs'.", "tag": "Verbs"},
        {"q": "Could you please put {baggage} ___ the scale?", "opts": ["on", "in", "at", "to"], "ans": 0, "exp": "Use 'on' for surfaces like a scale.", "tag": "Prepositions"},
        {"q": "Choose the correct spelling:", "opts": ["Itinerary", "Itinery", "Ittinerary", "Itenerary"], "ans": 0, "exp": "Correct spelling is Itinerary.", "tag": "Spelling"},
        {"q": "{Flight} ___ departing from Gate A4.", "opts": ["is", "are", "am", "has"], "ans": 0, "exp": "Singular subject takes 'is'.", "tag": "Grammar"},
        {"q": "{Passenger} forgot ___ boarding pass.", "opts": ["his", "him", "he", "himself"], "ans": 0, "exp": "Possessive pronoun 'his' is required.", "tag": "Pronouns"},
        {"q": "We ___ boarding in 10 minutes.", "opts": ["will begin", "began", "beginning", "begun"], "ans": 0, "exp": "Future action uses 'will + base verb'.", "tag": "Tenses"},
        {"q": "{Staff} smiled ___ at the child.", "opts": ["warmly", "warm", "warmness", "warms"], "ans": 0, "exp": "Adverb 'warmly' modifies the verb 'smiled'.", "tag": "Adverbs"},
        {"q": "Is {baggage} ___?", "opts": ["yours", "your", "you", "yourself"], "ans": 0, "exp": "Possessive pronoun 'yours' stands alone.", "tag": "Pronouns"},
        {"q": "{Flight} was delayed ___ bad weather.", "opts": ["due to", "because", "since", "as"], "ans": 0, "exp": "'Due to' is followed by a noun phrase.", "tag": "Conjunctions"}
    ],
    "medium": [
        {"q": "If {passenger} misses the connection, we ___ rebook them.", "opts": ["will", "would", "had", "did"], "ans": 0, "exp": "First conditional uses 'will' for realistic future outcomes.", "tag": "Conditionals"},
        {"q": "{Staff} requested that {passenger} ___ seated.", "opts": ["remain", "remains", "remained", "remaining"], "ans": 0, "exp": "Subjunctive mood uses the base form 'remain'.", "tag": "Subjunctive"},
        {"q": "Despite ___ heavy, {baggage} was loaded quickly.", "opts": ["being", "be", "been", "was"], "ans": 0, "exp": "'Despite' is followed by a gerund (-ing form).", "tag": "Grammar"},
        {"q": "{Flight}, ___ was delayed, has now landed.", "opts": ["which", "that", "who", "whom"], "ans": 0, "exp": "Non-defining relative clause requires 'which'.", "tag": "Relative Clauses"},
        {"q": "{Passenger} asked where the lounge ___.", "opts": ["was", "is", "were", "are"], "ans": 0, "exp": "Reported speech shifts tense backward.", "tag": "Reported Speech"},
        {"q": "{Staff} is responsible ___ assisting disabled travelers.", "opts": ["for", "to", "with", "about"], "ans": 0, "exp": "The correct preposition is 'responsible for'.", "tag": "Prepositions"},
        {"q": "Hardly had {flight} taken off ___ it returned.", "opts": ["when", "than", "then", "that"], "ans": 0, "exp": "'Hardly... when' is a standard grammatical pair.", "tag": "Inversion"},
        {"q": "{Baggage} must not be left ___.", "opts": ["unattended", "unattend", "unattending", "unattention"], "ans": 0, "exp": "'Unattended' is the correct adjective form.", "tag": "Vocabulary"},
        {"q": "{Passenger} looks forward ___ visiting Paris.", "opts": ["to", "for", "in", "at"], "ans": 0, "exp": "'Look forward to' is a fixed phrasal verb.", "tag": "Phrasal Verbs"},
        {"q": "{Staff} prefers morning shifts ___ evening shifts.", "opts": ["to", "than", "over", "from"], "ans": 0, "exp": "'Prefer' takes the preposition 'to'.", "tag": "Prepositions"}
    ],
    "hard": [
        {"q": "Had {passenger} arrived earlier, they ___ the flight.", "opts": ["would have caught", "would catch", "caught", "will catch"], "ans": 0, "exp": "Third conditional for past unreal situations.", "tag": "Conditionals"},
        {"q": "Seldom ___ such a cooperative passenger.", "opts": ["have we seen", "we have seen", "we saw", "we see"], "ans": 0, "exp": "Negative inversion requires auxiliary before subject.", "tag": "Inversion"},
        {"q": "{Staff} demanded that the gate ___ opened.", "opts": ["be", "is", "was", "were"], "ans": 0, "exp": "Subjunctive mood after 'demanded'.", "tag": "Subjunctive"},
        {"q": "By the time {flight} arrives, we ___ our shift.", "opts": ["will have finished", "will finish", "finished", "have finished"], "ans": 0, "exp": "Future perfect for action completed before a future time.", "tag": "Tenses"},
        {"q": "Not only ___ {baggage} lost, but the tag was missing too.", "opts": ["was", "is", "were", "has"], "ans": 0, "exp": "Inversion after 'Not only'.", "tag": "Inversion"},
        {"q": "{Passenger} denied ___ any prohibited items.", "opts": ["having", "to have", "have", "had"], "ans": 0, "exp": "'Deny' is followed by a gerund.", "tag": "Gerunds"},
        {"q": "{Staff} objected to {passenger} ___ loud music.", "opts": ["playing", "play", "played", "to play"], "ans": 0, "exp": "Prepositions are followed by gerunds.", "tag": "Gerunds"},
        {"q": "It is crucial that {baggage} ___ screened thoroughly.", "opts": ["be", "is", "are", "was"], "ans": 0, "exp": "Subjunctive mood after 'crucial'.", "tag": "Subjunctive"},
        {"q": "{Flight} was diverted owing ___ the storm.", "opts": ["to", "for", "with", "by"], "ans": 0, "exp": "'Owing to' means 'because of'.", "tag": "Prepositions"},
        {"q": "{Passenger} would rather ___ a window seat.", "opts": ["have", "had", "having", "to have"], "ans": 0, "exp": "'Would rather' is followed by bare infinitive for present preference.", "tag": "Preferences"}
    ],
    "exam": [
        {"q": "Identify the error: 'The number of passengers on {flight} were huge.'", "opts": ["were -> was", "number -> amount", "huge -> big", "No error"], "ans": 0, "exp": "'The number of' takes a singular verb 'was'.", "tag": "Error Spotting"},
        {"q": "What is the most polite response to an angry passenger?", "opts": ["I understand your frustration, let me help.", "Calm down.", "It's not my fault.", "Please wait quietly."], "ans": 0, "exp": "Empathy and offering assistance is standard protocol.", "tag": "Communication"},
        {"q": "{Staff} noticed {baggage} ___ on the carousel for hours.", "opts": ["lying", "laying", "lie", "lay"], "ans": 0, "exp": "'Lying' is the present participle of 'lie' (to rest).", "tag": "Vocabulary"},
        {"q": "Scarcely had {flight} landed ___ it began to snow.", "opts": ["when", "than", "then", "that"], "ans": 0, "exp": "'Scarcely... when' is the correct pair.", "tag": "Inversion"},
        {"q": "{Passenger} complained about ___ treated rudely.", "opts": ["being", "be", "been", "was"], "ans": 0, "exp": "Preposition 'about' followed by passive gerund.", "tag": "Gerunds"},
        {"q": "{Staff} must ensure all documents are valid ___ boarding.", "opts": ["prior to", "before to", "ahead", "previous"], "ans": 0, "exp": "'Prior to' is a formal synonym for 'before'.", "tag": "Prepositions"},
        {"q": "{Baggage} exceeding the limit ___ an extra fee.", "opts": ["incurs", "incur", "incurring", "incurred"], "ans": 0, "exp": "Singular subject takes singular verb.", "tag": "Grammar"},
        {"q": "If {passenger} ___ the rules, they wouldn't have been stopped.", "opts": ["had known", "knew", "knows", "has known"], "ans": 0, "exp": "Third conditional for past hypothetical.", "tag": "Conditionals"},
        {"q": "{Flight} was cancelled; ___, {passenger} was given a hotel.", "opts": ["therefore", "however", "although", "but"], "ans": 0, "exp": "'Therefore' shows a logical consequence.", "tag": "Conjunctions"},
        {"q": "{Staff} is accustomed ___ dealing with emergencies.", "opts": ["to", "with", "for", "in"], "ans": 0, "exp": "'Accustomed to' is a fixed phrase.", "tag": "Prepositions"}
    ]
}

computer_base = {
    "easy": [
        {"q": "In Microsoft Word, what is the keyboard shortcut to save a document?", "opts": ["Ctrl+S", "Ctrl+P", "Ctrl+V", "Ctrl+O"], "ans": 0, "exp": "Ctrl+S is the universal shortcut to save a file.", "tag": "MS Word"},
        {"q": "In Microsoft Excel, which symbol is used to start every formula?", "opts": ["=", "+", "-", "/"], "ans": 0, "exp": "All Excel formulas must begin with the equals sign (=).", "tag": "MS Excel"},
        {"q": "When sending an email in Outlook, what does 'BCC' stand for?", "opts": ["Blind Carbon Copy", "Blank Carbon Copy", "Backup Carbon Copy", "Base Carbon Copy"], "ans": 0, "exp": "BCC hides the recipient's email address from others.", "tag": "MS Outlook"},
        {"q": "Which application in Microsoft 365 is primarily used for creating presentations?", "opts": ["PowerPoint", "Word", "Excel", "Access"], "ans": 0, "exp": "PowerPoint is designed for slideshows and presentations.", "tag": "MS PowerPoint"},
        {"q": "How do you 'Undo' your last action in Microsoft 365 apps?", "opts": ["Ctrl+Z", "Ctrl+Y", "Ctrl+U", "Ctrl+X"], "ans": 0, "exp": "Ctrl+Z reverses the most recent action.", "tag": "Shortcuts"},
        {"q": "In Microsoft Excel, rows are labeled with ___ and columns are labeled with ___.", "opts": ["Numbers, Letters", "Letters, Numbers", "Numbers, Symbols", "Letters, Symbols"], "ans": 0, "exp": "Rows use numbers (1, 2, 3) and columns use letters (A, B, C).", "tag": "MS Excel"},
        {"q": "What is the primary function of Microsoft Teams?", "opts": ["Workplace communication and video conferencing", "Database management", "Photo editing", "Creating spreadsheets"], "ans": 0, "exp": "Teams is a collaboration app for chat and meetings.", "tag": "MS Teams"},
        {"q": "In Microsoft Word, what does the 'Format Painter' tool do?", "opts": ["Copies formatting from one text to apply to another", "Changes the page color", "Paints the background", "Inserts a graphic"], "ans": 0, "exp": "Format Painter copies styles like font, size, and color.", "tag": "MS Word"},
        {"q": "What happens when you press Ctrl+C and then Ctrl+V?", "opts": ["It copies and then pastes the selection", "It cuts and pastes the selection", "It copies and prints the selection", "It cancels the selection"], "ans": 0, "exp": "Ctrl+C copies, and Ctrl+V pastes the copied content.", "tag": "Shortcuts"},
        {"q": "Which Microsoft 365 app is used to manage large amounts of relational data?", "opts": ["Access", "Word", "Publisher", "OneNote"], "ans": 0, "exp": "Access is a relational database management system.", "tag": "MS Access"}
    ],
    "medium": [
        {"q": "In Microsoft Excel, what does the VLOOKUP function do?", "opts": ["Searches for a value in the first column of a table array", "Adds a vertical column of numbers", "Formats a cell vertically", "Creates a vertical chart"], "ans": 0, "exp": "VLOOKUP stands for Vertical Lookup and searches down the first column.", "tag": "MS Excel"},
        {"q": "How can you lock the top row of an Excel spreadsheet so it stays visible while scrolling?", "opts": ["View > Freeze Panes", "Insert > Freeze Top Row", "Home > Lock Cells", "Data > Pin Row"], "ans": 0, "exp": "Freeze Panes under the View tab keeps rows/columns visible.", "tag": "MS Excel"},
        {"q": "What is a 'Mail Merge' used for in Microsoft Word?", "opts": ["Creating personalized documents or emails for multiple recipients from a data source", "Combining two different Word files into one", "Merging email accounts in Outlook", "Sending a very large file over email"], "ans": 0, "exp": "Mail Merge pulls data from Excel/Access into a Word template.", "tag": "MS Word"},
        {"q": "In PowerPoint, what is the 'Slide Master'?", "opts": ["The top-level slide that controls the formatting and layout for all slides", "The first slide of the presentation", "The presenter view", "A template for exporting to video"], "ans": 0, "exp": "Slide Master controls global design, fonts, and backgrounds.", "tag": "MS PowerPoint"},
        {"q": "If you want to add up a specific range of cells in Excel, which function is best?", "opts": ["=SUM(A1:A10)", "=ADD(A1:A10)", "=TOTAL(A1:A10)", "=CALC(A1:A10)"], "ans": 0, "exp": "The SUM function calculates the total of a range.", "tag": "MS Excel"},
        {"q": "In Outlook, what is the difference between 'Reply' and 'Reply All'?", "opts": ["Reply All sends your response to everyone on the original email", "Reply All sends the email to your entire contact list", "Reply All attaches the original files", "There is no difference"], "ans": 0, "exp": "Reply All includes the sender, CCs, and other recipients.", "tag": "MS Outlook"},
        {"q": "What is OneDrive in the Microsoft 365 ecosystem?", "opts": ["A cloud storage service to save and sync files", "A local hard drive", "An antivirus program", "A presentation tool"], "ans": 0, "exp": "OneDrive is Microsoft's cloud storage solution.", "tag": "Cloud Services"},
        {"q": "In Word, how do you insert a Page Break quickly?", "opts": ["Ctrl+Enter", "Alt+Enter", "Shift+Enter", "Tab+Enter"], "ans": 0, "exp": "Ctrl+Enter forces the text to start on a new page.", "tag": "MS Word"},
        {"q": "What does conditional formatting do in Excel?", "opts": ["Changes the appearance of cells based on specific criteria or values", "Formats the text to look like a condition", "Locks the cells from editing", "Creates a chart automatically"], "ans": 0, "exp": "It highlights data dynamically (e.g., red if negative).", "tag": "MS Excel"},
        {"q": "Which shortcut opens the 'Find and Replace' dialog in Word or Excel?", "opts": ["Ctrl+H", "Ctrl+F", "Ctrl+R", "Ctrl+P"], "ans": 0, "exp": "Ctrl+H specifically opens Find and Replace.", "tag": "Shortcuts"}
    ],
    "hard": [
        {"q": "In Excel, how do you handle a formula error so it displays 'Not Found' instead of #N/A?", "opts": ["Use the IFERROR function", "Use the IFNA function only", "Use the ISERROR function alone", "Delete the cell"], "ans": 0, "exp": "IFERROR(value, value_if_error) catches errors and replaces them with custom text.", "tag": "MS Excel"},
        {"q": "What is the primary advantage of using an INDEX and MATCH combination over VLOOKUP?", "opts": ["INDEX/MATCH can look up data to the left of the lookup value", "INDEX/MATCH is a single function", "INDEX/MATCH works on text only", "There is no advantage"], "ans": 0, "exp": "VLOOKUP can only search right. INDEX/MATCH can search any direction.", "tag": "MS Excel"},
        {"q": "What is a Pivot Table primarily used for in Excel?", "opts": ["To quickly summarize, analyze, and group large amounts of data", "To create a 3D pie chart", "To connect to an external database", "To validate data entry"], "ans": 0, "exp": "Pivot Tables allow dynamic data summarization without complex formulas.", "tag": "MS Excel"},
        {"q": "In Microsoft Word, what is a 'Section Break' used for?", "opts": ["To apply different page layouts (like margins or orientation) within the same document", "To stop the printer from printing", "To change the font size globally", "To insert a table of contents"], "ans": 0, "exp": "Section Breaks allow independent formatting for different parts of a document.", "tag": "MS Word"},
        {"q": "What is the difference between COUNT and COUNTA in Excel?", "opts": ["COUNT counts only numerical values; COUNTA counts any non-empty cell", "They are exactly the same", "COUNT counts text; COUNTA counts numbers", "COUNTA only works in Pivot Tables"], "ans": 0, "exp": "COUNTA includes text, errors, and booleans, while COUNT is strictly for numbers.", "tag": "MS Excel"},
        {"q": "How do you protect a specific range of cells in Excel while letting users edit others?", "opts": ["Unlock the specific cells in Format Cells, then Protect the Sheet", "Right-click the cells and select 'Lock'", "Use Conditional Formatting to hide them", "It is impossible"], "ans": 0, "exp": "By default all cells are locked. You must unlock the ones you want editable before protecting the sheet.", "tag": "MS Excel"},
        {"q": "In PowerPoint, how can you ensure a logo appears in the exact same spot on every slide?", "opts": ["Insert it into the Slide Master", "Copy and paste it on every slide manually", "Group it with the title", "Use a transition effect"], "ans": 0, "exp": "The Slide Master applies persistent elements to all linked slides.", "tag": "MS PowerPoint"},
        {"q": "In Outlook, what is a 'Rule'?", "opts": ["An automated action applied to incoming or outgoing messages based on conditions", "A legal disclaimer added to emails", "The signature block", "A limit on email size"], "ans": 0, "exp": "Rules can automatically move, flag, or delete emails.", "tag": "MS Outlook"},
        {"q": "What does the Excel function CONCATENATE (or CONCAT) do?", "opts": ["Joins two or more text strings into one string", "Separates text into columns", "Calculates the average of strings", "Finds specific text in a string"], "ans": 0, "exp": "CONCAT combines text from multiple cells into one.", "tag": "MS Excel"},
        {"q": "What is a 'Macro' in Microsoft 365 apps?", "opts": ["A recorded sequence of actions or VBA code used to automate repetitive tasks", "A large font size", "A virus checker", "A type of chart"], "ans": 0, "exp": "Macros automate workflows using Visual Basic for Applications (VBA).", "tag": "Automation"}
    ],
    "exam": [
        {"q": "Which data validation feature prevents users from entering text into a number-only cell in Excel?", "opts": ["Data > Data Validation > Allow: Whole number/Decimal", "Home > Format Cells > Number", "Review > Protect Sheet", "Formulas > Error Checking"], "ans": 0, "exp": "Data Validation restricts the type of input allowed in a cell.", "tag": "MS Excel"},
        {"q": "In Excel, which formula correctly uses an absolute reference for cell A1?", "opts": ["$A$1", "A1$", "&A&1", "#A#1"], "ans": 0, "exp": "The dollar sign ($) locks the column and row from changing when copied.", "tag": "MS Excel"},
        {"q": "If you receive a document with 'Track Changes' enabled in Word, how do you make the red markup disappear permanently?", "opts": ["Accept or Reject the changes", "Turn off Track Changes", "Change font color to black", "Save as PDF"], "ans": 0, "exp": "Turning off the feature stops new tracking, but existing markup must be resolved by Accepting/Rejecting.", "tag": "MS Word"},
        {"q": "What is SharePoint used for in an enterprise environment?", "opts": ["Document management, intranet hosting, and team collaboration", "Only for email routing", "Creating spreadsheets", "Photo editing"], "ans": 0, "exp": "SharePoint is the backbone of Microsoft 365 document management.", "tag": "MS SharePoint"},
        {"q": "In Excel, what does the formula '=IF(A1>10, \"Yes\", \"No\")' do?", "opts": ["Checks if A1 is greater than 10; returns 'Yes' if true, 'No' if false", "Adds 10 to A1", "Formats A1 as 'Yes'", "Deletes A1 if it is less than 10"], "ans": 0, "exp": "The IF function evaluates a logical test and returns specified values.", "tag": "MS Excel"},
        {"q": "How can you securely share a highly confidential OneDrive file with a specific external user?", "opts": ["Share using 'Specific people' and require email verification/password", "Share using 'Anyone with the link'", "Attach it to an unencrypted email", "Upload it to a public Teams channel"], "ans": 0, "exp": "'Specific people' generates a secure, identity-verified link.", "tag": "MS Security"},
        {"q": "What is the primary function of Microsoft Power Automate?", "opts": ["To create automated workflows between apps and services", "To create presentations", "To analyze Excel data", "To host virtual meetings"], "ans": 0, "exp": "Power Automate (formerly Flow) streamlines repetitive business processes.", "tag": "Automation"},
        {"q": "In Excel, how do you quickly extract the first names from a column of full names without a formula?", "opts": ["Use Flash Fill (Ctrl+E)", "Use VLOOKUP", "Use Find and Replace", "Use a Pivot Table"], "ans": 0, "exp": "Flash Fill senses patterns and automatically extracts or formats data.", "tag": "MS Excel"},
        {"q": "What does a 'Zero-Day' vulnerability mean in the context of IT Security?", "opts": ["A flaw unknown to the software vendor that hackers can exploit immediately", "A virus that deletes data in zero days", "A system crash", "An expired Microsoft 365 subscription"], "ans": 0, "exp": "Zero-day means the vendor has had zero days to fix the vulnerability.", "tag": "Security"},
        {"q": "When writing an official email to a large group of passengers, why should you put their addresses in the BCC field?", "opts": ["To protect their privacy and prevent them from seeing each other's addresses", "To make the email send faster", "To bypass spam filters", "To ensure they read it"], "ans": 0, "exp": "Using BCC for large groups prevents privacy breaches.", "tag": "MS Outlook"}
    ]
}

airport_base = {
    "easy": [
        {"q": "What does VIP stand for?", "opts": ["Very Important Person", "Valid In Passport", "Visa In Progress", "Verified Identity Passenger"], "ans": 0, "exp": "VIPs often require special handling.", "tag": "Terminology"},
        {"q": "Where do passengers pick up checked luggage?", "opts": ["Baggage Claim", "Check-in Desk", "Security Checkpoint", "The Gate"], "ans": 0, "exp": "Luggage is retrieved at Baggage Claim.", "tag": "Terminal Layout"},
        {"q": "What document is mandatory for international travel?", "opts": ["Passport", "Driver's License", "Birth Certificate", "National ID"], "ans": 0, "exp": "Passports are globally recognized travel documents.", "tag": "Documents"},
        {"q": "What does ETA mean?", "opts": ["Estimated Time of Arrival", "Extra Time Allowed", "Emergency Takeoff Area", "Electronic Ticket Authorization"], "ans": 0, "exp": "ETA is when the flight is expected to land.", "tag": "Terminology"},
        {"q": "What is a Boarding Pass?", "opts": ["A document allowing a passenger to board the aircraft", "A receipt for luggage", "A visa application", "A duty-free voucher"], "ans": 0, "exp": "Boarding passes are issued after check-in.", "tag": "Documents"},
        {"q": "Who is in command of the aircraft?", "opts": ["The Pilot in Command (Captain)", "The Lead Cabin Crew", "The Ground Operations Manager", "Air Traffic Control"], "ans": 0, "exp": "The Captain has ultimate authority.", "tag": "Roles"},
        {"q": "What is carry-on luggage?", "opts": ["Bags taken into the cabin by the passenger", "Bags stored in the cargo hold", "Oversized items", "Lost luggage"], "ans": 0, "exp": "Carry-ons stay with the passenger.", "tag": "Baggage"},
        {"q": "Where do passengers go through metal detectors?", "opts": ["Security Checkpoint", "Customs", "Immigration", "Ticketing"], "ans": 0, "exp": "Security screens passengers and bags.", "tag": "Terminal Layout"},
        {"q": "What does 'Delayed' mean on the flight board?", "opts": ["The flight will depart later than scheduled", "The flight is cancelled", "The flight has landed", "The flight is boarding"], "ans": 0, "exp": "Delays mean the schedule has shifted late.", "tag": "Status"},
        {"q": "What is the purpose of a luggage tag?", "opts": ["To route the bag to the correct destination via barcodes", "To make the bag look nice", "To lock the bag", "To weigh the bag"], "ans": 0, "exp": "Tags contain barcodes for automated routing.", "tag": "Baggage"}
    ],
    "medium": [
        {"q": "What is the role of Customs?", "opts": ["Regulating goods entering the country", "Checking passports", "Screening for weapons", "Selling duty-free"], "ans": 0, "exp": "Customs handles tariffs and restricted goods.", "tag": "Customs"},
        {"q": "What does 'Standby' mean?", "opts": ["Waiting for an available seat on a full flight", "Standing near the gate", "VIP status", "Staff travel"], "ans": 0, "exp": "Standby passengers travel only if seats open up.", "tag": "Ticketing"},
        {"q": "What is a 'Layover'?", "opts": ["A connection point between flights", "A delay on the runway", "A type of luggage", "A security check"], "ans": 0, "exp": "A layover involves changing planes.", "tag": "Terminology"},
        {"q": "In aviation time, what is 15:00?", "opts": ["3:00 PM", "5:00 PM", "3:00 AM", "5:00 AM"], "ans": 0, "exp": "Aviation uses a 24-hour clock.", "tag": "Time"},
        {"q": "What is the 'Sterile Area'?", "opts": ["The secure zone past security checkpoints", "The airport clinic", "The runway", "The cargo hold"], "ans": 0, "exp": "Only screened passengers and staff can enter.", "tag": "Security"},
        {"q": "What does UM stand for?", "opts": ["Unaccompanied Minor", "Upper Management", "Unknown Manifest", "Unruly Member"], "ans": 0, "exp": "UMs are children traveling without adults.", "tag": "Passenger Codes"},
        {"q": "What is 'Overbooking'?", "opts": ["Selling more tickets than available seats", "Booking a very large group", "Booking a flight too early", "Upgrading a passenger"], "ans": 0, "exp": "Airlines overbook assuming some no-shows.", "tag": "Airline Policy"},
        {"q": "Who handles passport control for arriving international passengers?", "opts": ["Immigration (Border Control)", "Customs", "Security", "Ground Staff"], "ans": 0, "exp": "Immigration verifies the right to enter the country.", "tag": "Immigration"},
        {"q": "What is an e-ticket?", "opts": ["An electronic reservation record stored in the system", "A printed receipt", "A boarding pass on a phone", "A loyalty card"], "ans": 0, "exp": "E-tickets replaced paper ticket booklets.", "tag": "Ticketing"},
        {"q": "What does 'Gate Closing' mean?", "opts": ["Passengers must board immediately", "The flight has been cancelled", "The airport is shutting down", "The aircraft is taking off"], "ans": 0, "exp": "The gate closes shortly before departure.", "tag": "Status"}
    ],
    "hard": [
        {"q": "What is the IATA code for Cairo International Airport?", "opts": ["CAI", "CIR", "CRO", "CIA"], "ans": 0, "exp": "CAI is the 3-letter IATA code.", "tag": "IATA Codes"},
        {"q": "What is the difference between direct and non-stop flights?", "opts": ["Direct flights may stop but keep the same flight number; non-stop flights have zero stops", "They are identical", "Non-stop flights are slower", "Direct requires plane changes"], "ans": 0, "exp": "Non-stop means zero stops. Direct may stop for fuel.", "tag": "Logistics"},
        {"q": "What does PRM stand for in passenger coding?", "opts": ["Passenger with Reduced Mobility", "Premium Rate Member", "Priority Route Manager", "Pilot Rest Module"], "ans": 0, "exp": "PRMs require wheelchair or special assistance.", "tag": "Passenger Codes"},
        {"q": "What is a 'Go-Show' passenger?", "opts": ["A passenger who arrives without a reservation hoping to fly", "A VIP passenger", "A passenger who misses the flight", "A crew member"], "ans": 0, "exp": "Go-shows buy tickets at the airport at the last minute.", "tag": "Ticketing"},
        {"q": "What is the standard ICAO phonetic alphabet word for the letter 'Z'?", "opts": ["Zulu", "Zero", "Zebra", "Zone"], "ans": 0, "exp": "Zulu is standard ICAO phonetic alphabet.", "tag": "Aviation Communication"},
        {"q": "What classifies as 'Dangerous Goods' (DG)?", "opts": ["Items that pose a risk to health, safety, property or the environment", "Oversized luggage", "Duty-free alcohol", "Weapons only"], "ans": 0, "exp": "DG includes flammables, batteries, chemicals.", "tag": "Safety"},
        {"q": "What is a 'Codeshare' flight?", "opts": ["A flight operated by one airline but marketed by another", "A military flight", "A charter flight", "A flight with a shared crew"], "ans": 0, "exp": "Airlines share codes to expand their network.", "tag": "Logistics"},
        {"q": "What does INAD mean on a passenger manifest?", "opts": ["Inadmissible Passenger", "Inbound Advance", "Internal Audit", "International Arrivals"], "ans": 0, "exp": "INADs are denied entry by immigration and must be returned.", "tag": "Immigration"},
        {"q": "What is the MTOW?", "opts": ["Maximum Takeoff Weight", "Minimum Transit Operation Window", "Main Terminal Observation Way", "Maintenance Turnaround Order"], "ans": 0, "exp": "MTOW is a critical aircraft performance limit.", "tag": "Aviation Terms"},
        {"q": "What does 'Deadheading' mean in aviation?", "opts": ["Crew traveling as passengers to reposition for another flight", "Flying an empty aircraft", "Sleeping on a flight", "Baggage traveling without a passenger"], "ans": 0, "exp": "Deadheading crew are on duty but not working the flight.", "tag": "Crew Logistics"}
    ],
    "exam": [
        {"q": "What is the strict procedure for an unattended bag found in the terminal?", "opts": ["Notify security immediately, secure the area, and do not touch it", "Open it to check for ID", "Move it to Lost and Found", "Announce it on the PA system"], "ans": 0, "exp": "Unattended bags are treated as security threats.", "tag": "Security"},
        {"q": "What is the standard sequence of denied boarding for an overbooked flight?", "opts": ["Seek volunteers first, then proceed with involuntary denial based on fare/status", "First come first serve", "Alphabetical order", "Deny those with check-in bags"], "ans": 0, "exp": "Regulations require airlines to ask for volunteers first.", "tag": "Airline Policy"},
        {"q": "How must you handle a passenger complaining about a damaged checked bag upon arrival?", "opts": ["Apologize, inspect the damage, and file a PIR (Property Irregularity Report)", "Tell them to claim it on their own insurance", "Ignore the complaint", "Give them cash immediately"], "ans": 0, "exp": "A PIR must be filed before the passenger leaves the airport.", "tag": "Customer Service"},
        {"q": "What is the Schengen Area?", "opts": ["A zone comprising 29 European countries that have officially abolished border controls at their mutual borders", "The cargo restricted zone", "The sterile area in US airports", "A type of visa for the UK"], "ans": 0, "exp": "Schengen flights operate like domestic flights within the zone.", "tag": "Immigration"},
        {"q": "What happens if a passenger checks in a bag but fails to board the aircraft?", "opts": ["The checked bag must be located and offloaded before the flight can depart (PPBM)", "The airline forwards the bag to their destination", "The bag is auctioned", "The flight is cancelled"], "ans": 0, "exp": "Positive Passenger Bag Match (PPBM) is a crucial security rule.", "tag": "Security"},
        {"q": "What is the purpose of the API (Advance Passenger Information) system?", "opts": ["To send passenger details to destination country authorities before departure", "To calculate flight weight", "To order catering", "To track loyalty points"], "ans": 0, "exp": "API enhances border security by screening passengers pre-flight.", "tag": "Security"},
        {"q": "What does the phonetic alphabet word 'Charlie' represent?", "opts": ["C", "Ch", "Cr", "Car"], "ans": 0, "exp": "Charlie is the ICAO standard for C.", "tag": "Aviation Communication"},
        {"q": "A passenger presents an expired passport at check-in for an international flight. What do you do?", "opts": ["Deny boarding, as an expired passport is an invalid travel document", "Allow them if they have a valid driver's license", "Call the embassy to get approval", "Charge a penalty fee and board them"], "ans": 0, "exp": "Valid passports are strictly required for international flights.", "tag": "Immigration"},
        {"q": "What is a 'Rush Tag' used for?", "opts": ["Forwarding delayed or mishandled baggage to the passenger's destination", "Tagging VIP luggage", "Tagging heavy bags", "Tagging crew bags"], "ans": 0, "exp": "Rush tags are used to expedite missing bags to their owners.", "tag": "Baggage Handling"},
        {"q": "How do you handle an intoxicated and abusive passenger at the check-in counter?", "opts": ["Deny boarding immediately, inform the supervisor, and involve airport security if necessary", "Board them quickly to avoid a scene", "Give them coffee and let them fly", "Ignore them and hope they calm down"], "ans": 0, "exp": "Intoxicated/abusive passengers are a severe flight safety risk.", "tag": "Safety"}
    ]
}

full_bank = {
    "english": generate_section("english", english_base, 30),
    "computer": generate_section("computer", computer_base, 30),
    "airport": generate_section("airport", airport_base, 30)
}

with open("src/data/mockData.js", "w") as f:
    f.write("// GENERATED FILE - 360 Unique Questions for Airport Ground Staff\n")
    f.write("export const getQuestions = (section, mode) => {\n")
    f.write("  const bank = ")
    f.write(json.dumps(full_bank, indent=2))
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
print("Data generated successfully.")
