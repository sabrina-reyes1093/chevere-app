# chévere — Next.js app

The Chévere site (previously a static HTML/CSS site) rebuilt as a Next.js
application with reusable React components. Same look, same branding — now
structured as the foundation of a real web app.

## Running locally

```bash
npm install     # first time only
npm run dev     # development server with hot reload → http://localhost:3000
```

Production build:

```bash
npm run build   # compiles + prerenders every page
npm start       # serves the production build → http://localhost:3000
```

## Project structure

```
chevere-next/
├── app/                    ← pages (each folder = a URL route)
│   ├── layout.tsx          ← wraps every page: fonts, <Header>, <Nav>, metadata
│   ├── globals.css         ← design tokens (colors, fonts) + base styles
│   ├── page.tsx            ← the homepage (/)
│   ├── about/page.tsx      ← /about
│   ├── blog/
│   │   ├── page.tsx        ← /blog
│   │   └── BlogIndex.tsx   ← blog grid + category pills + ?cat= filtering
│   └── posts/[slug]/page.tsx ← /posts/world-cup-mood etc. (one route, all posts)
├── components/
│   ├── Header.tsx          ← logo + search / Instagram / TikTok / mail icons
│   ├── SearchPanel.tsx     ← pop-over search with live results
│   ├── Nav.tsx             ← nav bar + Blog category dropdown (active link aware)
│   ├── NewsletterSection.tsx ← email form + thank-you popup
│   ├── PostCard.tsx        ← one card in the blog grid
│   ├── InstagramIcon.tsx / TikTokIcon.tsx ← brand icons (lucide has none)
│   └── posts/              ← one component per post body
│       ├── WorldCupMood.tsx
│       ├── MyCurrentObsessions.tsx
│       └── index.ts        ← maps post slug → body component
├── data/
│   └── posts.ts            ← THE content hub: categories + every post's metadata
├── styles/                 ← one stylesheet per area of the site
│   ├── header.css  nav.css  home.css  blog.css
│   ├── page.css    post.css  newsletter.css
├── public/
│   └── assets/             ← logo, icon, and all post images
├── next.config.ts          ← Next.js config (static-export option lives here)
└── tsconfig.json           ← TypeScript config
```

### How the pieces fit together

- **`data/posts.ts` is the single source of truth.** The blog grid, the nav
  dropdown, the filter pills, the search results, and the post pages all read
  from it. Categories are defined once there; their order controls the
  dropdown and pill order.
- **`app/layout.tsx`** renders the header and nav around every page, loads
  Playfair Display through `next/font` (self-hosted, no render-blocking
  Google Fonts request), and imports all stylesheets.
- **Search** (`components/SearchPanel.tsx`) filters `data/posts.ts` directly
  in the browser — no more fetching and parsing blog.html like the old site.
- **Blog filtering** (`app/blog/BlogIndex.tsx`) reads `?cat=` from the URL,
  so links like `/blog?cat=sports` deep-link to a filtered view. The grid is
  server-rendered (good for SEO); only the filter reacts client-side.
- **Icons** come from the `lucide-react` package, except Instagram/TikTok
  (lucide ships no brand icons) which are small local SVG components.

## Publishing a new post

1. Add the post's metadata to the `posts` array in `data/posts.ts`
   (slug, title, dek, category, date, image). Newest first.
2. Drop its cover image into `public/assets/`.
3. Create the body component in `components/posts/YourPost.tsx`
   (copy an existing one as a template) and register it in
   `components/posts/index.ts`.

That's it — the blog grid, category filter, search, and the post's own page
at `/posts/<slug>` all pick it up automatically.

## Deploying

- **Vercel (recommended):** push this folder to a GitHub repo and import it
  at vercel.com — zero config, and you keep the door open for future dynamic
  features (comments, auth, API routes).
- **GitHub Pages:** uncomment `output: "export"` and `basePath: "/chevere"`
  in `next.config.ts`, run `npm run build`, and publish the generated `out/`
  folder. (Static export — everything works, but no server features.)
