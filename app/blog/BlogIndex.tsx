"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Feather } from "lucide-react";
import PostCard from "@/components/PostCard";
import { categories, categoryLabel, posts } from "@/data/posts";
import { BASE_PATH } from "@/lib/site";

const validSlugs = new Set(categories.map((c) => c.slug));

// Reads ?cat= from the URL and reports it upward. Isolated in its own
// Suspense boundary so useSearchParams doesn't force the whole blog page
// to client-side render — the grid below stays in the static HTML.
function SearchParamsBridge({ onCat }: { onCat: (cat: string) => void }) {
  const searchParams = useSearchParams();
  const urlCat = searchParams.get("cat");
  const cat = urlCat && validSlugs.has(urlCat) ? urlCat : "all";
  useEffect(() => {
    onCat(cat);
  }, [cat, onCat]);
  return null;
}

export default function BlogIndex() {
  const [cat, setCat] = useState("all");

  function select(next: string) {
    setCat(next);
    const base = `${BASE_PATH}/blog/`;
    window.history.replaceState(null, "", next === "all" ? base : `${base}?cat=${next}`);
  }

  const visible = cat === "all" ? posts : posts.filter((p) => p.category === cat);
  const heading = cat === "all" ? "The Blog" : categoryLabel(cat);

  return (
    <main className="blog-main">
      <Suspense fallback={null}>
        <SearchParamsBridge onCat={setCat} />
      </Suspense>

      <div className="blog-head">
        <h1>{heading}</h1>
        <p>Curated edits, stories, and current obsessions — chosen with intention.</p>
      </div>

      <div className="cat-pills" aria-label="Filter posts by category">
        <button className={cat === "all" ? "active" : undefined} onClick={() => select("all")}>
          All Blogs
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            className={cat === c.slug ? "active" : undefined}
            onClick={() => select(c.slug)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="post-grid">
        {visible.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>

      {visible.length === 0 && (
        <div className="blog-empty">
          <Feather strokeWidth={1.6} aria-hidden="true" />
          <h2>Nothing published here yet</h2>
          <p>The first edit is on its way — check back soon.</p>
        </div>
      )}
    </main>
  );
}
