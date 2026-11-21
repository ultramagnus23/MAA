// Photos of the Ministry team. Captions were supplied by the Ministry (Sreejit).
// The alt text describes what is visible, for screen readers.

export type TeamPhoto = {
  id: string;
  src: string;
  caption: string;
  alt: string;
};

const photo = (n: string, caption: string, alt: string): TeamPhoto => ({
  id: `maa-${n}`,
  src: `/team-photos/${n}.jpeg`,
  caption,
  alt,
});

export const teamPhotos: TeamPhoto[] = [
  photo("01", "Ministry members at an event stall", "Ministry members standing behind a table at an event"),
  photo("02", "Behind the scenes at the Academic Societies Awards", "Four Ministry members posing for a group selfie"),
  photo("03", "Behind the scenes at the Academic Societies Awards", "Ministry members meeting in a classroom"),
  photo("04", "After the Academic Societies Awards", "Ministry members posing in front of a presentation screen"),
  photo("05", "Late-night meetings with the team", "Two Ministry members outdoors in the evening, one working on a laptop"),
  photo("06", "After a full team meeting", "Ministry members seated in a circle in a classroom"),
  photo("07", "MAA trip to Murthal", "A group of Ministry members posing together"),
  photo("08", "Post full team meeting scenes", "A large group gathered in a hall"),
  photo("09", "Academic Societies Awards afterparty", "Ministry members posing for a group selfie"),
  photo("10", "Open office hours with MAA", "Ministry members gathered around tables"),
  photo("11", "Academic Societies afterparty", "Ministry members sitting in an auto-rickshaw"),
  photo("12", "Meet the BOR", "Ministry members talking around a table"),
];
