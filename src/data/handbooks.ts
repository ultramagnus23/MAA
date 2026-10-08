// Handbooks are listed separately from the other resources.
// `url` is the document's link. Files are currently served from /resources;
// replace each url with its Google Drive link (see resource-links.csv).
// Leave `url` empty when no link exists yet: the site shows "Request link".

export type HandbookGroup = "Department" | "Student" | "Batch";

export type Handbook = {
  title: string;
  group: HandbookGroup;
  url: string;
  year?: string;
};

const dept = (file: string, title: string, year?: string): Handbook => ({
  title,
  group: "Department",
  year,
  url: `/resources/Department Handbooks/${file}`,
});

export const handbooks: Handbook[] = [
  dept("Biology Handbook 2024.pdf", "Biology", "2024"),
  dept("Chemistry Handbook 2024-25.pdf", "Chemistry", "2024–25"),
  dept("Creative Writing Handbook 25-26.pdf", "Creative Writing", "2025–26"),
  dept("CS Handbook Nov_24.pdf", "Computer Science", "Nov 2024"),
  dept("Economics Department UG Handbook (2025-2026).pdf", "Economics (UG)", "2025–26"),
  dept("ENG Undergraduate Student Handbook.pptx.pdf", "English (UG)"),
  dept("Entrepreneurship Handbook_.pdf", "Entrepreneurship"),
  dept("History Handbook 2025.pdf", "History", "2025"),
  dept("IR Dep. Handbook.pdf", "International Relations"),
  dept("Mathematics Handbook 2024-25.pdf", "Mathematics", "2024–25"),
  dept("Performing Arts Handbook 2024-25.pdf", "Performing Arts", "2024–25"),
  dept("Philosophy Handbook 24-25.pdf", "Philosophy", "2024–25"),
  dept("Physics Handbook 2024.pdf", "Physics", "2024"),
  dept("Political Science Handbook 2025.pdf", "Political Science", "2025"),
  dept("PPE Handbook 24-25.docx", "Politics, Philosophy and Economics (PPE)", "2024–25"),
  dept("Psychology and Cognitive Sciences_UG MLS Handbook_Updated August 2026.pdf", "Psychology and Cognitive Sciences", "Aug 2026"),
  dept("SOA Handbook 2025_.pdf", "Sociology and Anthropology", "2025"),
  dept("Visual Arts Handbook AY 2024-25.pdf", "Visual Arts", "2024–25"),

  { title: "ASP25 Handbook", group: "Student", url: "/resources/Student Handbooks/ASP25 Handbook.pdf" },
  { title: "MLS Handbook", group: "Student", url: "/resources/Student Handbooks/MLS Handbook.pdf" },
  { title: "UG2022, UG2025 and UG2026 Handbook", group: "Student", url: "/resources/Student Handbooks/UG2022_25_26 Handbook.pdf" },

  { title: "UG2023 Handbook", group: "Batch", url: "" },
  { title: "UG2024 Handbook", group: "Batch", url: "" },
  { title: "UG2025 Handbook", group: "Batch", url: "" },
  { title: "UG2026 Handbook", group: "Batch", url: "" },
  { title: "Course Registration 101", group: "Batch", url: "" },
];

export const handbookGroups: { id: HandbookGroup; label: string; blurb: string }[] = [
  { id: "Department", label: "Department handbooks", blurb: "Course requirements and guidelines for each department." },
  { id: "Student", label: "Student handbooks", blurb: "Programme-wide handbooks for students." },
  { id: "Batch", label: "Batch handbooks", blurb: "Handbooks for each batch, and the course registration guide." },
];
