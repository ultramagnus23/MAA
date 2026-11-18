import { describe, expect, it } from "vitest";
import { departments, teamGroups, teamMembers } from "../src/data/team-members";
import { officeHourHolders } from "../src/data/office-hours";
import { departmentWhatsAppGroups } from "../src/data/whatsapp";
import { departmentContacts } from "../src/data/representatives";
import { resources } from "../src/data/resources";
import { handbooks } from "../src/data/handbooks";
import { projects } from "../src/data/projects";
import { nav } from "../src/data/site";
import { eventSlug } from "../src/lib/events";

const EXPECTED_ROSTER = [
  "Minal Priya",
  "Ananya Makkar",
  "Anushka Sinha",
  "Tarun Shetty",
  "Niharika Ghosh",
  "Saanve Shalini Singh",
  "Devyani Rai",
  "Poorvi Sanath Kumar",
  "Nia Motha",
  "Endri Agarwal",
  "Arjeeta Chakraborty",
  "Sreejit",
  "Yash Singh",
  "Chaitanya Tripathi",
];

describe("team roster", () => {
  it("has exactly the 14 listed people, once each", () => {
    expect(teamMembers.map((m) => m.name).sort()).toEqual([...EXPECTED_ROSTER].sort());
  });

  it("puts everyone in the core team or one of the five departments", () => {
    for (const m of teamMembers) expect(teamGroups).toContain(m.department);
    expect(departments).toHaveLength(5);
  });

  it("has the core team and the Tech team as given", () => {
    const names = (g: string) => teamMembers.filter((m) => m.department === g).map((m) => m.name).sort();
    expect(names("Core Team")).toEqual(["Ananya Makkar", "Anushka Sinha", "Minal Priya", "Sreejit"]);
    expect(names("Tech")).toEqual(["Chaitanya Tripathi", "Yash Singh"]);
  });

  it("gives the Minister and Deputy Ministers those titles, Sreejit none, and everyone else Head of Department", () => {
    const ministry = ["Ananya Makkar", "Anushka Sinha", "Minal Priya"];
    for (const m of teamMembers) {
      if (ministry.includes(m.name)) expect(m.designation).toMatch(/Minister/);
      else if (m.name === "Sreejit") expect(m.designation).toBeUndefined();
      else expect(m.designation).toBe("Head of Department");
    }
  });

  it("has the right designations", () => {
    const get = (n: string) => teamMembers.find((m) => m.name === n)?.designation;
    expect(get("Minal Priya")).toBe("Minister");
    expect(get("Ananya Makkar")).toBe("Deputy Minister");
    expect(get("Anushka Sinha")).toBe("Deputy Minister");
  });
});

describe("office hours", () => {
  it("only lists people on the roster, with a designation and a booking link", () => {
    for (const p of officeHourHolders) {
      const member = teamMembers.find((m) => m.name === p.name);
      expect(member, p.name).toBeDefined();
      expect(p.designation).toBe(member?.designation);
      expect(p.bookingUrl).toMatch(/^https:\/\//);
    }
  });

  it("does not add the whole team", () => {
    expect(officeHourHolders.length).toBeLessThan(teamMembers.length);
  });
});

describe("WhatsApp groups", () => {
  it("uses WhatsApp invite links only", () => {
    for (const g of departmentWhatsAppGroups) {
      expect(g.url).toMatch(/^https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]+/);
    }
  });

  it("matches real departments, with no duplicates", () => {
    const names = departmentContacts.map((d) => d.department);
    const groupDepts = departmentWhatsAppGroups.map((g) => g.department);
    for (const d of groupDepts) expect(names).toContain(d);
    expect(new Set(groupDepts).size).toBe(groupDepts.length);
  });
});

describe("documents and links", () => {
  it("links resources and handbooks to Google, or to a page on this site", () => {
    const urls = [...resources.map((r) => r.url), ...handbooks.map((h) => h.url)];
    for (const u of urls) expect(u).toMatch(/^(https:\/\/(docs|drive)\.google\.com\/|\/)/);
  });

  it("has no duplicate resource titles", () => {
    const titles = resources.map((r) => r.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("names a source for every project", () => {
    for (const p of projects) expect(p.source.length).toBeGreaterThan(0);
  });
});

describe("navigation", () => {
  it("has Projects and no Transparency or Calendar item", () => {
    const labels = nav.map((n) => n.label);
    expect(labels).toContain("Projects");
    expect(labels).not.toContain("Transparency");
    expect(labels).not.toContain("Calendar");
  });
});

describe("events", () => {
  it("makes stable, URL-safe slugs", () => {
    const slug = eventSlug({ title: "Academic Societies Mixer!", date: "2026-10-14", category: "MAA" });
    expect(slug).toBe("2026-10-14-academic-societies-mixer");
  });
});
