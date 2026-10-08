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
    url: "https://docs.google.com/document/d/11TC88zVRbmFpt8VWLoxAlsvcPMGVqtd6EjTq2TggVcs/edit",
    fileNote: "DOCX",
  },
  {
    title: "General Academic Policy Document (2024–25, archived)",
    description: "Previous year's version, kept for reference only: the 2025–26 document above supersedes it.",
    category: "Policy",
    url: "https://docs.google.com/document/d/1XiC7AHKuNtaEu8CDoTyaxevRrPorfu6A9r8hVAfiigA/edit",
    fileNote: "DOCX · archived",
  },
  {
    title: "Official Sports Accommodation Policy",
    description:
      "OAA policy on academic accommodations for student-athletes (attendance, quiz weightage, documentation). Appears to be a proposal template; confirm current status with OAA before relying on it as final.",
    category: "Policy",
    url: "https://drive.google.com/file/d/1rHY35R3JHQ04HHlv2npzXKODiRD4lTDd/view",
    fileNote: "PDF · unconfirmed final status",
  },

  {
    title: "MAA's Mandate for Academic Societies at AU",
    description: "The Ministry's mandate for academic societies at Ashoka: its role and how it supports them.",
    category: "Policy",
    url: "https://docs.google.com/document/d/1PIvQP7nT9cNr3Hm1nX7rJ8h9StAml1NJgdPJWE8XQFM/edit",
    fileNote: "DOCX",
  },

  // Guides
  {
    title: "Pass/Fail Crisis Guide",
    description:
      "A student-sourced guide (50+ respondents) to the Pass/Fail decision covering general factors, department-specific patterns, and an FAQ. Informal, not an official policy.",
    category: "Guides",
    url: "https://docs.google.com/document/d/169CUMMkpqbg24GbO5k84cYhVPBBr9cVKS632CA0ZMlM/edit",
    fileNote: "DOCX",
  },
  {
    title: "Academic Integrity How-To Guide",
    description:
      "How the Academic Integrity Violation (AIV) process actually works: reporting, timelines, AIC involvement, consequences, appeals, and what to do if you're wrongly accused.",
    category: "Guides",
    url: "https://docs.google.com/document/d/1lEI3Rk1nPx4yx1Ssj4DBJzLaUOXaDN22yVid7Iv6DV0/edit",
    fileNote: "DOCX",
  },
  {
    title: "Undergraduate Thesis How-To Guide",
    description:
      "Thesis eligibility, credit policy, advisor rules, AMS registration, ethics/IRB review, FAQ, and a recommended timeline from 3rd year through submission.",
    category: "Guides",
    url: "https://docs.google.com/document/d/1v0EyeuVs3SQ9TXFeqLG7008oZOJMwjdzL-kbT96p3rw/edit",
    fileNote: "DOCX",
  },
  {
    title: "APA 7th Edition Citation Guide",
    description: "Quick-reference APA 7th edition formats compiled for Ashoka coursework.",
    category: "Guides",
    url: "https://docs.google.com/document/d/1o-kxNN0JqWik1zMzDKOEYOABC4egxUhKuTZlfy_2s7s/edit",
    fileNote: "DOCX",
  },
  {
    title: "MLA Citation Guide",
    description: "Quick-reference MLA formats compiled for Ashoka coursework.",
    category: "Guides",
    url: "https://docs.google.com/document/d/1SN8vqVQKapAcuteLiKTsw-2YojB5sYm-vcy_J7FbHqA/edit",
    fileNote: "DOCX",
  },
  {
    title: "Chicago Notes-Bibliography Guide",
    description: "Quick-reference Chicago notes-bibliography format compiled for Ashoka coursework.",
    category: "Guides",
    url: "https://docs.google.com/document/d/1Gk0PcZt4qKXTNbkDMIULedgcBfsL2S1nRFbn1y7dDkY/edit",
    fileNote: "DOCX",
  },
  {
    title: "UWP Citation Workshop Slides",
    description: "Slides from the University Writing Programme citation workshop.",
    category: "Guides",
    url: "https://drive.google.com/file/d/1WdFePbwekixgxveHmH-ov4MfZyJgA9bh/view",
    fileNote: "PDF",
  },

  {
    title: "The Post-Grad Planner",
    description: "MAA's planner for students thinking about life after Ashoka.",
    category: "Guides",
    url: "https://docs.google.com/presentation/d/1uDXv0TGXc8H0iA8-8m-IgGKNZA5uR8ePt6kYYYhRJbY/edit",
    fileNote: "Google Slides",
  },
  {
    title: "CASH/CADI Guidelines for Academic Societies",
    description: "Guidelines for academic societies on working with CASH and CADI.",
    category: "Guides",
    url: "https://docs.google.com/document/d/1vbt6-8iNCBdqCWa9v-Hb3NwW8HWc-dEkQbeophsl_qM/edit",
    fileNote: "Google Doc",
  },

  // Directories & tools
  {
    title: "Faculty Finder",
    description:
      "Real, department-by-department faculty directory with email, research interests, and whether a professor is currently on campus.",
    category: "Directories & Tools",
    url: "https://docs.google.com/spreadsheets/d/14_A_ekbjYETQKPye9QOVD7QZFvSctGVU9FvD71zjvK0/edit",
    fileNote: "XLSX",
  },
  {
    title: "Locate@Ashoka: Faculty Office Finder",
    description: "Which building and room a professor's office is in, plus a directory of academic offices and centres.",
    category: "Directories & Tools",
    url: "https://docs.google.com/spreadsheets/d/1TMUPwkIyF1-Dal8xfZ-3nZfiLK-btfx83C5lmre3gts/edit",
    fileNote: "XLSX",
  },
  {
    title: "Course Trajectory Pathways",
    description:
      "Sample semester-by-semester course plans, by major. Coverage is partial: several departments don't have a trajectory filled in yet; reach out to your department rep to fill the gap.",
    category: "Directories & Tools",
    url: "https://docs.google.com/spreadsheets/d/18IqUXFu1bibdDRCZHe1XDsGJH4h-dsxoRfghewl99R0/edit",
    fileNote: "XLSX · partial coverage",
  },
  {
    title: "Assignment Tracker Template",
    description: "A copy-and-customise spreadsheet template for tracking assignments, deadlines, and grades across courses.",
    category: "Directories & Tools",
    url: "https://docs.google.com/spreadsheets/d/19LJdpKKTXWS_L0bBnsICmZmIWpvQlr8KwUZRzv7VoYU/edit",
    fileNote: "XLSX · template",
  },

  {
    title: "Syllabus Repository",
    description: "Scan to open MAA's repository of course syllabi.",
    category: "Directories & Tools",
    url: "https://drive.google.com/file/d/1fovyGAajGxidsEqLp7_9IEXW-ZHSDFJp/view",
    fileNote: "QR code",
  },
  {
    title: "Thesis Repository List",
    description: "A list of past theses available for students to refer to.",
    category: "Directories & Tools",
    url: "https://docs.google.com/spreadsheets/d/1jKbL7-r8T4tcbumCeGaoZY5Pv4mncQY-pUXhT57Yw98/edit",
    fileNote: "Google Sheet",
  },
  {
    title: "AU Fests 2025 List",
    description: "A list of fests at Ashoka University in 2025.",
    category: "Directories & Tools",
    url: "https://docs.google.com/spreadsheets/d/1IWd6wx3boCw8J0Fl2lQHKhLhJo55OYCZAjyF5aBkZUU/edit",
    fileNote: "Google Sheet",
  },
  {
    title: "RA Project with PhDs",
    description: "Research assistant projects offered by PhD students.",
    category: "Directories & Tools",
    url: "https://docs.google.com/spreadsheets/d/1OV5fzM7UDs4Tjodde9ON5CcHgmoCEy4vFQXQrzwVnyk/edit",
    fileNote: "Google Sheet",
  },
  {
    title: "Faculty Finder 1.0 (older version)",
    description: "The earlier version of the Faculty Finder, kept for reference.",
    category: "Directories & Tools",
    url: "https://docs.google.com/spreadsheets/d/1R9nrMy3dF9eA517AlQ7paAadiOxrzkX4pwPipHxpN9A/edit",
    fileNote: "Google Sheet",
  },
  {
    title: "Locate@Ashoka 1.0 (older version)",
    description: "The earlier version of Locate@Ashoka, kept for reference.",
    category: "Directories & Tools",
    url: "https://docs.google.com/spreadsheets/d/1Dl6laIUctFUSjcxwKpUNbabApF74G5Xa_9DgFnfxxAU/edit",
    fileNote: "Google Sheet",
  },

  // Advocacy & reports
  {
    title: "BOR Annual Report (2024–25)",
    description: "What the Board of Representatives worked on across every department in 2024–25, the source for our archived representative roster.",
    category: "Advocacy & Reports",
    url: "https://docs.google.com/document/d/1QhxnYeb6qIInTCe2lNqDwiFOKYMB4HG1Xk8AT72Cw4U/edit",
    fileNote: "DOCX",
  },
  {
    title: "The Course Caps Report",
    description: "A data-driven report (500+ student responses) on course-cap and pre-registration problems across departments.",
    category: "Advocacy & Reports",
    url: "https://docs.google.com/document/d/14V-RN8N4-L0R2ycpXzIWvJlrXJlJXO-ldBJYRocM9Xg/edit",
    fileNote: "DOCX",
  },
  {
    title: "Inclusivity Report",
    description: "A qualitative report on representation gaps for YIF, Master's, and PhD students in student government.",
    category: "Advocacy & Reports",
    url: "https://docs.google.com/document/d/1JeCCEQsCVjyKSXZAm5DNy3E8C65TclaLL0X0SeEJ4rw/edit",
    fileNote: "DOCX",
  },
  {
    title: "Academic Accommodations for Athletes",
    description: "A joint MAA × Sports Ministry proposal for attendance and academic accommodations for student-athletes.",
    category: "Advocacy & Reports",
    url: "https://docs.google.com/document/d/1P3RXkEcAxRp2a5Sgy2AVodwN9S4BCKlhotwp45KP8s8/edit",
    fileNote: "DOCX",
  },
  {
    title: "Coping With Acads: Resource Doc",
    description: "A mental-health and coping resource compiled with ACWB addressing stress, sleep, brain fog, and when to seek support.",
    category: "Advocacy & Reports",
    url: "https://docs.google.com/document/d/1fixIkcvj9tcJGNcIRwJz-r5LA1d6LuzVRy6ROLknZag/edit",
    fileNote: "DOCX",
  },
  {
    title: "Thesis FAQs & Advice by Department",
    description: "Department-by-department thesis FAQs, several answered directly by HODs (Psychology, English, Chemistry, Economics, Philosophy, CS, IR, Physics).",
    category: "Advocacy & Reports",
    url: "https://docs.google.com/document/d/14pDxKbQlEvP_X_byIsJDSmDIvvsDW4shSlnjqPI0QOs/edit",
    fileNote: "DOCX",
  },

  {
    title: "Economics Core Course Standardisation Proposal",
    description: "MAA's proposal to standardise the core economics courses.",
    category: "Advocacy & Reports",
    url: "https://docs.google.com/document/d/1IFhPwS5YGUfSzg5mcLRnfGEo0JKWUadWB8bE4rZMxSA/edit",
    fileNote: "Google Doc",
  },
  {
    title: "Minutes: CASH/CADI and Academic Societies Meeting",
    description: "Minutes of the meeting between CASH/CADI and academic societies.",
    category: "Advocacy & Reports",
    url: "https://docs.google.com/document/d/1eQZ3tuD9Rfg3ULb4OUmlgIymYvoM63UiMgO-XD0sSVQ/edit",
    fileNote: "Google Doc",
  },
  {
    title: "MAA Research",
    description: "Research compiled by the Ministry of Academic Affairs.",
    category: "Advocacy & Reports",
    url: "https://drive.google.com/file/d/1R8hNKT4lJasZKvSILwkTLWFc4XmjJNER/view",
  },
  {
    title: "MAA and NEEV Collaboration",
    description: "Resources from the collaboration between MAA and NEEV.",
    category: "Advocacy & Reports",
    url: "https://drive.google.com/file/d/1VrjmanPWurlKYeLiFeelG6PwjZbrzOsn/view",
  },

  // Communication
  {
    title: "MAA Open Q&A Group (UG2025)",
    description: "Scan to join MAA's open WhatsApp Q&A group for questions on academics.",
    category: "Communication",
    url: "https://drive.google.com/file/d/1xCLQAfJbFXJG5fbNM4Y26n-JuaCpxkob/view",
    fileNote: "QR code",
  },
  {
    title: "Postgraduate Q&A Group",
    description: "Scan to join the postgraduate-focused WhatsApp Q&A group.",
    category: "Communication",
    url: "https://drive.google.com/file/d/1KtSeyw1R1qVfv9Q8LPrUfL46-f33p02N/view",
    fileNote: "QR code",
  },
  {
    title: "Department WhatsApp Groups and BOR Email IDs",
    description: "WhatsApp groups and email addresses for departments and the Board of Representatives.",
    category: "Communication",
    url: "https://docs.google.com/document/d/1SrU55lLJFKpOXWcJKPCAhWLbzxFnYptrPZBlPBpwx4c/edit",
    fileNote: "Google Doc",
  },
];
