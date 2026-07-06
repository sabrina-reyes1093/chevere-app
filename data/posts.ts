// Central content store: every category and post lives here.
// To publish a new post: add its metadata to `posts` below, drop its cover
// image in public/assets/, and add a body component in components/posts/.

export type Category = {
  slug: string;
  label: string;
};

// Order here controls the nav dropdown and the blog filter pills.
export const categories: Category[] = [
  { slug: "books", label: "Books" },
  { slug: "tv-film", label: "TV & Film" },
  { slug: "travel", label: "Travel" },
  { slug: "food-drink", label: "Food & Drink" },
  { slug: "fashion", label: "Fashion" },
  { slug: "sports", label: "Sports" },
];

export function categoryLabel(slug: string): string {
  const cat = categories.find((c) => c.slug === slug);
  return cat ? cat.label : slug;
}

export type Post = {
  slug: string;
  title: string;
  dek: string;
  category: string; // one of the category slugs above
  date: string;
  image: string; // path under public/, used for the card thumb
  featured?: boolean; // renders full-width at the top of the blog grid
};

// Newest first — the blog grid renders in this order.
export const posts: Post[] = [
  {
    slug: "world-cup-mood",
    title: "The World Cup Isn't Just Soccer, It's a Whole Mood",
    dek: "The 2026 World Cup is already in knockout-stage mode, with the Round of 16 underway and major matchups like Mexico vs. England, Portugal vs. Spain, USA vs. Belgium, Argentina vs. Egypt, and Switzerland vs. Colombia on the schedule.",
    category: "sports",
    date: "Jul 5, 2026",
    image: "/assets/world-cup-2026.jpg",
  },
  {
    slug: "my-current-obsessions",
    title: "My Current Obsessions",
    dek: "There's something about summer that makes everything feel a little more indulgent — the shows are bigger, the books are steamier, and the snacks require a picnic blanket. Here's what's currently living in my rotation.",
    category: "tv-film",
    date: "Jul 5, 2026",
    image: "/assets/hotdragon.png",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
