export type TeamPhoto = {
  id: string;
  src: string;
  alt: string;
  name?: string;
  role: string;
  department?: string;
  context: string;
  aspectRatio: "portrait" | "landscape" | "square";
  featured?: boolean;
};

// Sourced directly from public/resources/team image/ (verified real Ashoka MAA team photography)
export const teamPhotos: TeamPhoto[] = [
  {
    id: "maa-09",
    src: "/team-photos/09.jpeg",
    alt: "Ministry of Academic Affairs student representatives at Ashoka University campus",
    name: "MAA Plenary & Delegation",
    role: "Ministry of Academic Affairs",
    context: "Full ministry council session on campus",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "maa-01",
    src: "/team-photos/01.jpeg",
    alt: "MAA Academic Representative in discussion on academic policy",
    name: "Academic Policy Committee",
    role: "Policy & Academic Governance",
    context: "Departmental curriculum review session",
    aspectRatio: "landscape",
  },
  {
    id: "maa-04",
    src: "/team-photos/04.jpeg",
    alt: "Student academic representative during university office hours",
    name: "Student Academic Advisory",
    role: "Undergraduate Advising Liaison",
    context: "Course add/drop & academic accommodations consultation",
    aspectRatio: "portrait",
  },
  {
    id: "maa-02",
    src: "/team-photos/02.jpeg",
    alt: "MAA representative collaborating on student resources",
    name: "Student Research & Support",
    role: "Resources & Thesis Working Group",
    context: "Academic integrity & thesis archive development",
    aspectRatio: "square",
  },
  {
    id: "maa-06",
    src: "/team-photos/06.jpeg",
    alt: "MAA team members in working discussion outside classroom",
    name: "Departmental Society Coordination",
    role: "Academic Societies Liaison",
    context: "Inter-departmental academic societies fair planning",
    aspectRatio: "landscape",
  },
  {
    id: "maa-05",
    src: "/team-photos/05.jpeg",
    alt: "Academic representative working on student grievances",
    name: "Student Advocacy & Support",
    role: "Grievance & Redressal Desk",
    context: "Individual academic grievance and OAA mediation",
    aspectRatio: "portrait",
  },
  {
    id: "maa-03",
    src: "/team-photos/03.jpeg",
    alt: "Academic representatives reviewing course caps data",
    name: "Course Caps Working Group",
    role: "Pre-Registration Advocacy",
    context: "Student body survey analysis & reporting",
    aspectRatio: "landscape",
  },
  {
    id: "maa-07",
    src: "/team-photos/07.jpeg",
    alt: "Student representative at open consultation table",
    name: "Open Q&A & Peer Guidance",
    role: "Peer Guidance",
    context: "First-year orientation and peer support",
    aspectRatio: "landscape",
  },
  {
    id: "maa-11",
    src: "/team-photos/11.jpeg",
    alt: "Undergraduate academic representative at Ashoka",
    name: "Department Representation",
    role: "Division of Social Sciences",
    context: "Faculty-student departmental meeting delegate",
    aspectRatio: "portrait",
  },
  {
    id: "maa-08",
    src: "/team-photos/08.jpeg",
    alt: "MAA representatives during student-faculty dialogue",
    name: "Student-Faculty Council",
    role: "Academic Affairs Delegation",
    context: "Dialogue with Office of Academic Affairs (OAA)",
    aspectRatio: "landscape",
  },
  {
    id: "maa-10",
    src: "/team-photos/10.jpeg",
    alt: "MAA members preparing handbook documentation",
    name: "Handbooks & Guidelines",
    role: "Documentation & Archives",
    context: "Publishing 2025–26 official departmental guides",
    aspectRatio: "landscape",
  },
  {
    id: "maa-12",
    src: "/team-photos/12.jpeg",
    alt: "Student representatives at campus forum",
    name: "Academic Outreach",
    role: "Campus Communications",
    context: "Open townhall on grading & assessment policies",
    aspectRatio: "landscape",
  },
];
