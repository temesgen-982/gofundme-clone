export type Campaign = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  currentAmount: number;
  goalAmount: number;
  backers: number;
  startDate: string; // Date string, e.g., "2023-10-26"
  endDate: string;   // Date string
  organizer: {
    name: string;
    avatarUrl: string;
    profileUrl: string;
  };
  comments: Comment[]; // Array of comments
};

export type Comment = {
  id: string;
  author: string;
  authorAvatarUrl: string;
  amount: number | null; // Null if anonymous or just a comment
  message: string;
  timestamp: string; // Date string, e.g., "2023-10-26T14:30:00Z"
};

export const mockCampaigns: Campaign[] = [
  {
    id: "camp-001",
    slug: "help-rebuild-local-school",
    title: "Help Rebuild Local School After Storm Damage",
    description: `Our beloved community school, Elmwood Elementary, was severely damaged during the recent superstorm. Classrooms are unusable, and essential learning materials were destroyed. We are raising funds to repair the infrastructure, replace equipment, and create a safe and inspiring environment for our children to return to. Every donation, big or small, will help us rebuild brighter futures for our students.`,
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
    category: "Education",
    currentAmount: 7500,
    goalAmount: 10000,
    backers: 125,
    startDate: "2023-10-01",
    endDate: "2023-12-31",
    organizer: {
      name: "Elmwood PTA",
      avatarUrl: "https://images.unsplash.com/vector-1756301726355-6e695b181820?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
      profileUrl: "#",
    },
    comments: [
      {
        id: "comm-001",
        author: "Sarah J.",
        authorAvatarUrl: "https://images.unsplash.com/vector-1739803316030-62b80e20fcc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
        amount: 50,
        message: "So glad to support our local school! Hope this helps.",
        timestamp: "2023-10-25T10:00:00Z",
      },
      {
        id: "comm-002",
        author: "Anonymous",
        authorAvatarUrl: "https://images.unsplash.com/vector-1739803316030-62b80e20fcc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
        amount: 20,
        message: "Wishing you the best!",
        timestamp: "2023-10-24T18:15:00Z",
      },
      {
        id: "comm-003",
        author: "David L.",
        authorAvatarUrl: "https://images.unsplash.com/vector-1739803316030-62b80e20fcc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
        amount: 100,
        message: "Elmwood holds a special place in my heart. Good luck!",
        timestamp: "2023-10-23T09:30:00Z",
      },
    ],
  },
  {
    id: "camp-002",
    slug: "urgent-medical-aid-for-ukraine",
    title: "Urgent Medical Aid for Displaced Families in Ukraine",
    description: `Thousands of families have been displaced by ongoing conflict, facing critical shortages of medical supplies, food, and shelter. This campaign aims to provide immediate medical assistance, essential hygiene kits, and warm clothing to those most vulnerable. Your contribution will directly support our efforts on the ground, delivering life-saving aid where it's desperately needed.`,
    imageUrl: "https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    category: "Humanitarian Aid",
    currentAmount: 90000,
    goalAmount: 100000,
    backers: 870,
    startDate: "2023-09-15",
    endDate: "2024-01-15",
    organizer: {
      name: "Global Relief Foundation",
      avatarUrl: "https://images.unsplash.com/vector-1756301726355-6e695b181820?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
      profileUrl: "#",
    },
    comments: [
      {
        id: "comm-004",
        author: "Maria S.",
        authorAvatarUrl: "https://images.unsplash.com/vector-1739803316030-62b80e20fcc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
        amount: 25,
        message: "Sending strength and support!",
        timestamp: "2023-10-26T11:20:00Z",
      },
      {
        id: "comm-005",
        author: "Robert G.",
        authorAvatarUrl: "https://images.unsplash.com/vector-1739803316030-62b80e20fcc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
        amount: 500,
        message: "Proud to contribute to this vital cause.",
        timestamp: "2023-10-25T16:00:00Z",
      },
    ],
  },
  {
    id: "camp-003",
    slug: "shelter-for-homeless-animals",
    title: "Building a New Shelter for Homeless Animals",
    description: `Our local animal shelter is at full capacity and in desperate need of expansion. We're raising funds to construct a larger, modern facility with improved living conditions, medical facilities, and ample space for play and rehabilitation. Help us provide a safe haven and a second chance for abandoned and neglected animals in our community.`,
    imageUrl: "https://images.unsplash.com/photo-1625106828405-07e0e4457c1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
    category: "Animal Welfare",
    currentAmount: 6000,
    goalAmount: 10000,
    backers: 95,
    startDate: "2023-11-01",
    endDate: "2024-03-01",
    organizer: {
      name: "Paw Protection League",
      avatarUrl: "https://images.unsplash.com/vector-1756301726355-6e695b181820?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
      profileUrl: "#",
    },
    comments: [
      {
        id: "comm-006",
        author: "Emily R.",
        authorAvatarUrl: "https://images.unsplash.com/vector-1739803316030-62b80e20fcc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
        amount: 30,
        message: "For all the furry friends!",
        timestamp: "2023-10-26T08:45:00Z",
      },
    ],
  },
  {
    id: "camp-004",
    slug: "support-local-artists",
    title: "Support Local Artists & Cultural Events",
    description: `Our city's vibrant arts scene is struggling to recover. This fund will provide grants to local artists, musicians, and performers, helping them create new works and organize free community events. Let's keep art alive and accessible for everyone!`,
    imageUrl: "https://images.unsplash.com/photo-1500628550463-c8881a54d4d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=869",
    category: "Arts & Culture",
    currentAmount: 4500,
    goalAmount: 8000,
    backers: 70,
    startDate: "2023-10-10",
    endDate: "2023-12-20",
    organizer: {
      name: "City Arts Council",
      avatarUrl: "https://images.unsplash.com/vector-1756301726355-6e695b181820?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
      profileUrl: "#",
    },
    comments: [
      {
        id: "comm-007",
        author: "Anonymous",
        authorAvatarUrl: "https://images.unsplash.com/vector-1739803316030-62b80e20fcc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
        amount: 25,
        message: "Love seeing local talent thrive!",
        timestamp: "2023-10-26T15:00:00Z",
      },
    ],
  },
];

export function getCampaignBySlug(slug: string): Campaign | undefined {
  return mockCampaigns.find((campaign) => campaign.slug === slug);
}

export function getAllCampaignSlugs(): string[] {
  return mockCampaigns.map((campaign) => campaign.slug);
}
