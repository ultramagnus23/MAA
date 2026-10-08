// Photos of the Ministry team. Captions only describe what is visible in each
// photo. Please check them before publishing.

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
  photo("02", "Ministry members together", "Four Ministry members posing for a group selfie"),
  photo("03", "A meeting in a classroom", "Ministry members meeting in a classroom"),
  photo("04", "Ministry members at a presentation", "Ministry members posing in front of a presentation screen"),
  photo("05", "Ministry members outdoors", "Two Ministry members outdoors in the evening, one working on a laptop"),
  photo("06", "A Ministry gathering", "Ministry members seated in a circle in a classroom"),
  photo("07", "Ministry members together", "A group of Ministry members posing together"),
  photo("08", "A large gathering", "A large group gathered in a hall"),
  photo("09", "Ministry members together", "Ministry members posing for a group selfie"),
  photo("10", "Ministry members at a table", "Ministry members gathered around tables"),
  photo("11", "Ministry members on an outing", "Ministry members sitting in an auto-rickshaw"),
  photo("12", "Ministry members at a table", "Ministry members talking around a table"),
];
