// Official team roster, exactly as supplied by the Ministry.
// Designations: the Minister and two Deputy Ministers, and the eight other
// people are Heads of Department (HODs). If a designation is left out, the
// site shows "Team member".

export const departments = [
  "Tech",
  "Strategy and Collaborations",
  "Community Outreach and Marketing",
  "Policy and Resources",
  "Support and Research",
] as const;

export type Department = (typeof departments)[number];

export type TeamMember = {
  name: string;
  department: Department;
  /** Verified designation. Leave undefined until confirmed. */
  designation?: string;
};

const HOD = "Head of Department";

export const teamMembers: TeamMember[] = [
  { name: "Minal Priya", department: "Tech", designation: "Minister" },
  { name: "Ananya Makkar", department: "Tech", designation: "Deputy Minister" },
  { name: "Anuskha Sinha", department: "Tech", designation: "Deputy Minister" },
  { name: "Tarun Shetty", department: "Community Outreach and Marketing", designation: HOD },
  { name: "Niharika Ghosh", department: "Community Outreach and Marketing", designation: HOD },
  { name: "Saanve Shalini Singh", department: "Strategy and Collaborations", designation: HOD },
  { name: "Devyani Rai", department: "Strategy and Collaborations", designation: HOD },
  { name: "Poorvi Sanath Kumar", department: "Policy and Resources", designation: HOD },
  { name: "Nia Motha", department: "Policy and Resources", designation: HOD },
  { name: "Endri Agarwal", department: "Support and Research", designation: HOD },
  { name: "Arjeeta Chakraborty", department: "Support and Research", designation: HOD },
];

export const DEFAULT_DESIGNATION = "Team member";

// Short descriptions of each department. DRAFT: please confirm.
export const departmentDescriptions: Record<Department, string> = {
  Tech: "Builds and maintains this website and the Ministry's digital tools.",
  "Strategy and Collaborations":
    "Works with academic societies and other student bodies and plans joint events.",
  "Community Outreach and Marketing":
    "Shares the Ministry's work with students through social media, campaigns and event promotion.",
  "Policy and Resources":
    "Writes and updates the policy document, guides and handbooks, and keeps the resources on this site current.",
  "Support and Research":
    "Helps students with academic concerns and researches issues such as course caps and accommodations.",
};

export function slugifyName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
