// Only representatives with a real, currently-live public contact channel
// (a booking link from MAA's own Linktree, linktr.ee/acadaffairs.ministry)
// are listed as "current." Do not add a name here without a verifiable,
// currently-active source; see /representatives/archive for the dated
// 2024-25 department roster instead.

export type CurrentRep = {
  name: string;
  role: string;
  bookingLabel: string;
  bookingUrl: string;
};

export const currentReps: CurrentRep[] = [
  {
    name: "Minal Priya",
    role: "Minister of Academic Affairs",
    bookingLabel: "Book office hours",
    bookingUrl:
      "https://calendly.com/minal-priya_ug2024-ashoka/maa-oh-with-minal-priya",
  },
  {
    name: "Anushka Sinha",
    role: "Deputy Minister of Academic Affairs",
    bookingLabel: "Book office hours",
    bookingUrl: "https://calendly.com/anushka-sinha_ug2024-ashoka/new-meeting",
  },
  {
    name: "Ananya Makkar",
    role: "Deputy Minister of Academic Affairs",
    bookingLabel: "Book office hours",
    bookingUrl:
      "https://calendly.com/ananya-makkar_ug2024-ashoka/placecom-office-hours",
  },
];

// Department contacts are role-inboxes (not a person), sourced from MAA's
// "Department Whatsapp Groups + BOR Email IDs" document. These stay current
// regardless of who holds the role in a given year.
export type DepartmentContact = {
  department: string;
  email: string;
};

export const departmentContacts: DepartmentContact[] = [
  { department: "Biology (UG)", email: "biology_ugrep@ashoka.edu.in" },
  { department: "Chemistry", email: "chem.rep@ashoka.edu.in" },
  { department: "China Studies", email: "chinastudies.rep@ashoka.edu.in" },
  { department: "Computer Science", email: "cs.rep@ashoka.edu.in" },
  { department: "Creative Writing", email: "creativewriting.rep@ashoka.edu.in" },
  { department: "Economics", email: "econreps@ashoka.edu.in" },
  { department: "English", email: "english.rep@ashoka.edu.in" },
  { department: "Entrepreneurship", email: "ent.reps@ashoka.edu.in" },
  { department: "Environmental Studies", email: "evs.rep@ashoka.edu.in" },
  { department: "History", email: "historyrepresentatives@ashoka.edu.in" },
  { department: "International Relations", email: "ir.rep@ashoka.edu.in" },
  { department: "Mathematics", email: "math.rep@ashoka.edu.in" },
  { department: "Media Studies", email: "ms.rep@ashoka.edu.in" },
  { department: "Performing Arts", email: "performingarts.rep@ashoka.edu.in" },
  { department: "Philosophy", email: "philosophy.studentrep@ashoka.edu.in" },
  { department: "Physics (UG)", email: "phys.rep@ashoka.edu.in" },
  { department: "Political Science", email: "polsci.rep@ashoka.edu.in" },
  { department: "Psychology", email: "psy.rep@ashoka.edu.in" },
  { department: "PPE", email: "ppe.rep@ashoka.edu.in" },
  { department: "Sociology & Anthropology", email: "soa.rep@ashoka.edu.in" },
  { department: "Visual Arts", email: "studentrepresentative.visualarts@ashoka.edu.in" },
];

// Historical, dated roster from MAA's BOR Annual Report 2024-25.
// Shown only on the archive page, clearly labeled as that academic year.
export type ArchivedRep = {
  department: string;
  names: string[];
  vacant?: boolean;
};

export const archivedBorRoster2024_25: ArchivedRep[] = [
  { department: "Physics", names: ["Hiyaa Atreya (UG)", "Aditya Ramdasi (ASP)"] },
  { department: "Chemistry", names: ["Akshaya Pai (UG)", "Viraj Singhal (ASP)"] },
  { department: "Biology", names: ["Rhea Wali", "Vineet Karlapalem"] },
  { department: "History", names: ["Chitrakshi Siwach"] },
  { department: "History–IR", names: ["Uma Bakshi"] },
  { department: "International Relations", names: ["Ananya Madan"] },
  { department: "Political Science", names: ["Naeva Abraham"] },
  { department: "Entrepreneurship", names: ["Hubaba Masood", "Siddharth Chandak", "Tarini"] },
  { department: "English", names: ["Andrea Fernandez", "Veda Menon"] },
  { department: "Media Studies", names: ["Ahana Walanju"] },
  { department: "Creative Writing", names: ["Geetanjali"] },
  { department: "Economics", names: ["Neha Maniar"] },
  { department: "Economics & Finance", names: ["Saumya Chopra"] },
  { department: "Economics & History", names: ["Kartikay Sharma"] },
  { department: "Computer Science", names: ["Aryan Nath", "Roshni Agarwal", "Shrey Chhabra"] },
  { department: "Philosophy", names: ["Trisha Bhargav", "Vedant Deshmukh"] },
  { department: "PPE", names: ["Aanya Malik", "Aditya Aiyer"] },
  { department: "Mathematics", names: ["Sidharth Wagle"] },
  { department: "Psychology", names: ["Poorvaja Jain", "Prarthna Middha", "Stuti Sharma"] },
  { department: "Environmental Studies", names: ["Twisha Sangwan"] },
  { department: "Sociology & Anthropology", names: ["Sophia Noble", "Fiza Mishra"] },
  { department: "Performing Arts", names: ["Binati Arora"] },
  { department: "China Studies", names: ["Harsh Jha"] },
  { department: "Sanskrit Studies", names: [], vacant: true },
  { department: "Visual Arts", names: ["Anushka Singh"] },
];

export const archivedFcReps2024_25 = [
  {
    fc: "EPS / EVS / Indian Civilisation",
    name: "Harshangad Singh",
    note: "Held office hours in Monsoon 2024; MAA noted the role had been inactive since December 2024.",
  },
  {
    fc: "Literature and the World / Great Books / ICT",
    name: "Madiha Tariq",
    note: "Held 7 scheduled office hours and 6 informal ones.",
  },
  {
    fc: "POS / MnB / QRMT",
    name: "Khushi Jain",
    note: "Held 10 office hours in total (7 in person, 3 online).",
  },
];
