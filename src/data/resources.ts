export type Resource = {
  title: string;
  description: string;
  category: ResourceCategory;
  url: string;
  fileNote?: string;
};

export type ResourceCategory =
  | "Policy"
  | "Guides"
  | "Directories & Tools"
  | "Advocacy & Reports"
  | "Communication";

export const resourceCategories: ResourceCategory[] = [
  "Policy",
  "Guides",
  "Directories & Tools",
  "Advocacy & Reports",
  "Communication",
];

export const resources: Resource[] = [
  // Policy
  {
    title: "MAA General Academic Policy Document (2025–26)",
    description:
      "The master reference: audit policy, add/drop/withdraw, incompletes, TA/CC policy, retakes, waivers, grade appeals, leave of absence, credit requirements, and a running Q&A with OAA.",
    category: "Policy",
    url: "/resources/MAA General Academic Policy Document 2025-26_.docx",
    fileNote: "DOCX",
  },
  {
    title: "General Academic Policy Document (2024–25, archived)",
    description: "Previous year's version, kept for reference only: the 2025–26 document above supersedes it.",
    category: "Policy",
    url: "/resources/MAA General Academic Policy Document 2024-25 (archived).docx",
    fileNote: "DOCX · archived",
  },
  {
    title: "Official Sports Accommodation Policy",
    description:
      "OAA policy on academic accommodations for student-athletes (attendance, quiz weightage, documentation). Appears to be a proposal template; confirm current status with OAA before relying on it as final.",
    category: "Policy",
    url: "/resources/Official Sports Accom Policy.pdf",
    fileNote: "PDF · unconfirmed final status",
  },

  {
    title: "MAA's Mandate for Academic Societies at AU",
    description: "The Ministry's mandate for academic societies at Ashoka: its role and how it supports them.",
    category: "Policy",
    url: "/resources/MAA_s Mandate for Academic Socs at AU.docx",
    fileNote: "DOCX",
  },

  // Guides
  {
    title: "Pass/Fail Crisis Guide",
    description:
      "A student-sourced guide (50+ respondents) to the Pass/Fail decision covering general factors, department-specific patterns, and an FAQ. Informal, not an official policy.",
    category: "Guides",
    url: "/resources/MAA P_F Crisis Guide.docx",
    fileNote: "DOCX",
  },
  {
    title: "Academic Integrity How-To Guide",
    description:
      "How the Academic Integrity Violation (AIV) process actually works: reporting, timelines, AIC involvement, consequences, appeals, and what to do if you're wrongly accused.",
    category: "Guides",
    url: "/resources/Academic Integrity How-To Guide_.docx",
    fileNote: "DOCX",
  },
  {
    title: "Undergraduate Thesis How-To Guide",
    description:
      "Thesis eligibility, credit policy, advisor rules, AMS registration, ethics/IRB review, FAQ, and a recommended timeline from 3rd year through submission.",
    category: "Guides",
    url: "/resources/Undergraduate Thesis How-To Guide.docx",
    fileNote: "DOCX",
  },
  {
    title: "APA 7th Edition Citation Guide",
    description: "Quick-reference APA 7th edition formats compiled for Ashoka coursework.",
    category: "Guides",
    url: "/resources/Citation Resources/MAA24_APA 7th Edition Citations.docx",
    fileNote: "DOCX",
  },
  {
    title: "MLA Citation Guide",
    description: "Quick-reference MLA formats compiled for Ashoka coursework.",
    category: "Guides",
    url: "/resources/Citation Resources/MAA24_MLA Citations.docx",
    fileNote: "DOCX",
  },
  {
    title: "Chicago Notes-Bibliography Guide",
    description: "Quick-reference Chicago notes-bibliography format compiled for Ashoka coursework.",
    category: "Guides",
    url: "/resources/Citation Resources/MAA24_Chicago NB Format.docx",
    fileNote: "DOCX",
  },
  {
    title: "UWP Citation Workshop Slides",
    description: "Slides from the University Writing Programme citation workshop.",
    category: "Guides",
    url: "/resources/Citation Resources/UWP Citation Workshop Slides.pdf",
    fileNote: "PDF",
  },

  // Directories & tools
  {
    title: "Faculty Finder",
    description:
      "Real, department-by-department faculty directory with email, research interests, and whether a professor is currently on campus.",
    category: "Directories & Tools",
    url: "/resources/MAA's Faculty Finder (updated).xlsx",
    fileNote: "XLSX",
  },
  {
    title: "Locate@Ashoka: Faculty Office Finder",
    description: "Which building and room a professor's office is in, plus a directory of academic offices and centres.",
    category: "Directories & Tools",
    url: "/resources/MAA_s Locate@Ashoka 2.0.xlsx",
    fileNote: "XLSX",
  },
  {
    title: "Course Trajectory Pathways",
    description:
      "Sample semester-by-semester course plans, by major. Coverage is partial: several departments don't have a trajectory filled in yet; reach out to your department rep to fill the gap.",
    category: "Directories & Tools",
    url: "/resources/Pathways- MAAxBOR Course Trajectories.xlsx",
    fileNote: "XLSX · partial coverage",
  },
  {
    title: "Assignment Tracker Template",
    description: "A copy-and-customise spreadsheet template for tracking assignments, deadlines, and grades across courses.",
    category: "Directories & Tools",
    url: "/resources/MAA_s Assignment Tracker.xlsx",
    fileNote: "XLSX · template",
  },

  // Advocacy & reports
  {
    title: "BOR Annual Report (2024–25)",
    description: "What the Board of Representatives worked on across every department in 2024–25, the source for our archived representative roster.",
    category: "Advocacy & Reports",
    url: "/resources/Reports and Advocacy/BOR Annual Report 2024-25.docx",
    fileNote: "DOCX",
  },
  {
    title: "The Course Caps Report",
    description: "A data-driven report (500+ student responses) on course-cap and pre-registration problems across departments.",
    category: "Advocacy & Reports",
    url: "/resources/Reports and Advocacy/The Course Caps Report by MAA 24-25.docx",
    fileNote: "DOCX",
  },
  {
    title: "Inclusivity Report",
    description: "A qualitative report on representation gaps for YIF, Master's, and PhD students in student government.",
    category: "Advocacy & Reports",
    url: "/resources/Reports and Advocacy/MAA_Inclusivity Report.docx",
    fileNote: "DOCX",
  },
  {
    title: "Academic Accommodations for Athletes",
    description: "A joint MAA × Sports Ministry proposal for attendance and academic accommodations for student-athletes.",
    category: "Advocacy & Reports",
    url: "/resources/Reports and Advocacy/Academic Accommodations for Athletes.docx",
    fileNote: "DOCX",
  },
  {
    title: "Coping With Acads: Resource Doc",
    description: "A mental-health and coping resource compiled with ACWB addressing stress, sleep, brain fog, and when to seek support.",
    category: "Advocacy & Reports",
    url: "/resources/Reports and Advocacy/MAA × ACWB Coping with Acads Resources Doc.docx",
    fileNote: "DOCX",
  },
  {
    title: "Thesis FAQs & Advice by Department",
    description: "Department-by-department thesis FAQs, several answered directly by HODs (Psychology, English, Chemistry, Economics, Philosophy, CS, IR, Physics).",
    category: "Advocacy & Reports",
    url: "/resources/Reports and Advocacy/Thesis FAQs and Advice by MAA and BOR.docx",
    fileNote: "DOCX",
  },

  // Communication
  {
    title: "MAA Open Q&A Group (UG2025)",
    description: "Scan to join MAA's open WhatsApp Q&A group for questions on academics.",
    category: "Communication",
    url: "/resources/MAA Open Q_A Group (UG2025).jpg",
    fileNote: "QR code",
  },
  {
    title: "Postgraduate Q&A Group",
    description: "Scan to join the postgraduate-focused WhatsApp Q&A group.",
    category: "Communication",
    url: "/resources/Post Grad QR.jpg",
    fileNote: "QR code",
  },
];
