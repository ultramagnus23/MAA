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

// The core team is listed first on the About page. It is a group, not a department.
export const CORE_TEAM = "Core Team";
export const teamGroups = [CORE_TEAM, ...departments] as const;
export type TeamGroup = (typeof teamGroups)[number];

export type TeamMember = {
  name: string;
  department: TeamGroup;
  /** Verified designation. Leave undefined until confirmed. */
  designation?: string;
};

const HOD = "Head of Department";

export const teamMembers: TeamMember[] = [
  // Core team: the Minister, the Deputy Ministers and Sreejit
  { name: "Minal Priya", department: CORE_TEAM, designation: "Minister" },
  { name: "Ananya Makkar", department: CORE_TEAM, designation: "Deputy Minister" },
  { name: "Anushka Sinha", department: CORE_TEAM, designation: "Deputy Minister" },
  { name: "Sreejit", department: CORE_TEAM },
  // Tech
  { name: "Yash Singh", department: "Tech", designation: HOD },
  { name: "Chaitanya Tripathi", department: "Tech", designation: HOD },
  // Other departments
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
export const departmentDescriptions: Record<TeamGroup, string> = {
  "Core Team": "The Minister, the Deputy Ministers and the rest of the Ministry's core team.",
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
