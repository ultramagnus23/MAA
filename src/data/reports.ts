// Monthly transparency reports. Add one entry per published report.
// Do not add an entry unless the report exists and has a link.
//
// Example:
// {
//   period: "September 2026",
//   published: "2026-10-05",
//   summary: "One or two lines on what the report covers.",
//   url: "https://docs.google.com/document/d/...",
// },

export type MonthlyReport = {
  period: string;
  published: string; // ISO yyyy-mm-dd
  summary: string;
  url: string;
};

export const monthlyReports: MonthlyReport[] = [];
