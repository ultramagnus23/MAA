// People who currently have office hours that students can book.
// Only people listed here appear on the Office Hours page. Being on the team
// roster does not add someone here.
//
// `timings` is left empty because the booking page shows the live slots.
// Add a short line (for example "Wednesdays, 4 to 6 pm") only if it is true.

export type OfficeHourHolder = {
  name: string;
  designation: string;
  /** Optional. Leave out to show no department on the card. */
  department?: string;
  bookingUrl: string;
  bookingLabel: string;
  timings?: string;
};

export const officeHourHolders: OfficeHourHolder[] = [
  {
    name: "Minal Priya",
    designation: "Minister",
    bookingLabel: "Book on Calendly",
    bookingUrl: "https://calendly.com/minal-priya_ug2024-ashoka/maa-oh-with-minal-priya",
  },
  {
    name: "Anuskha Sinha",
    designation: "Deputy Minister",
    bookingLabel: "Book on Calendly",
    bookingUrl: "https://calendly.com/anushka-sinha_ug2024-ashoka/new-meeting",
  },
  {
    name: "Ananya Makkar",
    designation: "Deputy Minister",
    bookingLabel: "Book on Calendly",
    bookingUrl: "https://calendly.com/ananya-makkar_ug2024-ashoka/placecom-office-hours",
  },
];
