// Marketing profiles. Social links are left empty until they are verified.
// Empty values show a clear "awaiting link" state on the Marketing page.

export type MarketingProfile = {
  name: string;
  instagramUrl: string;
};

export const marketingProfiles: Record<"tarun" | "niharika", MarketingProfile> = {
  tarun: { name: "Tarun Shetty", instagramUrl: "" },
  niharika: { name: "Niharika Ghosh", instagramUrl: "" },
};

// Campaigns and creative work. Add only real, verified items.
export type CampaignItem = {
  title: string;
  description: string;
  url?: string;
  date?: string;
};

export const campaigns: CampaignItem[] = [];
