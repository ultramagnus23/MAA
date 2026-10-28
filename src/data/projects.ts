// Projects. Every entry cites where the information comes from. Add new
// projects here. Do not add a project without a source.
//
// status: "Published" = a finished document or tool exists and is linked.
//         "Ongoing"   = the source describes the work as continuing.
//         "Planned"   = the source says it has not launched yet.

export type ProjectStatus = "Published" | "Ongoing" | "Planned";

export type Project = {
  name: string;
  summary: string;
  status: ProjectStatus;
  /** Department or group that the source names, if any */
  department?: string;
  /** Period, only where the source gives one */
  period?: string;
  links?: { label: string; url: string }[];
  source: string;
};

const BOR_REPORT = "BOR Annual Report 2024-25";

export const projects: Project[] = [
  {
    name: "Course Caps Report",
    summary: "A report on student concerns about increasing course caps, based on a survey of the student body.",
    status: "Published",
    period: "2024–25",
    links: [{ label: "Read the report", url: "https://docs.google.com/document/d/14V-RN8N4-L0R2ycpXzIWvJlrXJlJXO-ldBJYRocM9Xg/edit" }],
    source: "The Course Caps Report by MAA 24-25",
  },
  {
    name: "Pathways: course trajectories",
    summary: "Course trajectory planners built with the Board of Representatives.",
    status: "Published",
    period: "2024–25",
    links: [{ label: "Open Pathways", url: "https://docs.google.com/spreadsheets/d/18IqUXFu1bibdDRCZHe1XDsGJH4h-dsxoRfghewl99R0/edit" }],
    source: BOR_REPORT,
  },
  {
    name: "Thesis FAQs",
    summary: "Department-by-department thesis questions and advice, with answers from heads of department.",
    status: "Published",
    period: "2024–25",
    links: [{ label: "Read the FAQs", url: "https://docs.google.com/document/d/14pDxKbQlEvP_X_byIsJDSmDIvvsDW4shSlnjqPI0QOs/edit" }],
    source: BOR_REPORT,
  },
  {
    name: "Faculty Finder",
    summary: "A directory of faculty members for students.",
    status: "Published",
    period: "2024–25",
    links: [{ label: "Open the Faculty Finder", url: "https://docs.google.com/spreadsheets/d/14_A_ekbjYETQKPye9QOVD7QZFvSctGVU9FvD71zjvK0/edit" }],
    source: BOR_REPORT,
  },
  {
    name: "Department handbooks",
    summary: "Department handbooks collected and shared with students, with several revised or newly written by department representatives.",
    status: "Published",
    period: "2024–25",
    links: [{ label: "See the archived handbooks", url: "/handbooks" }],
    source: BOR_REPORT,
  },
  {
    name: "Department WhatsApp groups",
    summary: "Subject WhatsApp groups for departments, with invite links shared by the Ministry and the Board of Representatives.",
    status: "Published",
    period: "2024–25",
    links: [{ label: "Join a group", url: "/representatives#whatsapp" }],
    source: BOR_REPORT,
  },
  {
    name: "Academic Societies Fest Calendar",
    summary: "A calendar of fests that helps academic societies plan events without clashes. Societies can ask the Ministry to add their events.",
    status: "Ongoing",
    source: "MAA's Mandate for Academic Socs at AU",
    links: [{ label: "Open the fest list", url: "https://docs.google.com/spreadsheets/d/1IWd6wx3boCw8J0Fl2lQHKhLhJo55OYCZAjyF5aBkZUU/edit" }],
  },
  {
    name: "Fest Guidelines Document",
    summary: "A guidelines document for planning and running fests, being developed with Jazbaa, the Cultural Ministry. It is a guide, not a policy.",
    status: "Ongoing",
    source: "MAA's Mandate for Academic Socs at AU",
    links: [{ label: "Read the mandate", url: "https://docs.google.com/document/d/1PIvQP7nT9cNr3Hm1nX7rJ8h9StAml1NJgdPJWE8XQFM/edit" }],
  },
  {
    name: "Intra-University Research Network",
    summary: "A research network started by the Psychology representatives. The report says it was yet to be launched.",
    status: "Planned",
    department: "Psychology",
    period: "2024–25",
    source: BOR_REPORT,
    links: [{ label: "Read the report", url: "https://docs.google.com/document/d/1QhxnYeb6qIInTCe2lNqDwiFOKYMB4HG1Xk8AT72Cw4U/edit" }],
  },
];
