"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, X } from "lucide-react";
import { posts, categoryLabel } from "@/data/posts";

type PanelState = "closed" | "open" | "closing";

type Hit = {
  slug: string;
  title: string;
  kicker: string;
};

function findHits(query: string): Hit[] | null {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  const terms = q.split(/\s+/);
  return posts
    .filter((p) => {
      const hay = (
        p.title +
        " " +
        p.dek +
        " " +
        categoryLabel(p.category) +
        " " +
        p.category
      ).toLowerCase();
      return terms.every((t) => hay.includes(t));
    })
    .slice(0, 8)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      kicker: categoryLabel(p.category),
    }));
}

export default function SearchPanel() {
  const [state, setState] = useState<PanelState>("closed");
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<Hit[] | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const isOpen = state === "open";

  function open() {
    setState("open");
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  function close() {
    setState("closing");
    setTimeout(() => setState("closed"), 200);
  }

  // dim the page behind the panel (styles hook onto body.search-open)
  useEffect(() => {
    document.body.classList.toggle("search-open", isOpen);
    return () => document.body.classList.remove("search-open");
  }, [isOpen]);

  // close on outside click or Escape
  useEffect(() => {
    if (!isOpen) return;
    function onClick(e: MouseEvent) {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !toggleRef.current?.contains(t)) close();
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  function onInput(value: string) {
    setQuery(value);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setHits(findHits(value)), 250);
  }

  const panelClass =
    "search-panel" +
    (state === "open" ? " search-panel--open" : "") +
    (state === "closing" ? " search-panel--closing" : "");

  return (
    <>
      <button
        ref={toggleRef}
        aria-label="Search"
        title="Search"
        onClick={() => (isOpen ? close() : open())}
      >
        <Search strokeWidth={1.8} aria-hidden="true" />
      </button>
      <div ref={panelRef} className={panelClass} role="dialog" aria-label="Search posts">
        <div className="search-bar-wrap">
          <Search className="search-bar-icon" strokeWidth={2} aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search posts..."
            autoComplete="off"
            value={query}
            disabled={!isOpen}
            onChange={(e) => onInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && setHits(findHits(query))}
          />
          <button
            className="search-action-btn"
            aria-label="Search"
            type="button"
            onClick={() => setHits(findHits(query))}
          >
            <ArrowRight strokeWidth={2.5} aria-hidden="true" />
          </button>
          <button className="search-close-btn" aria-label="Close search" type="button" onClick={close}>
            <X strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>
        <div className="search-results">
          {hits && hits.length === 0 && (
            <p className="search-note">No posts found for &ldquo;{query.trim()}&rdquo;.</p>
          )}
          {hits?.map((h) => (
            <Link key={h.slug} className="search-hit" href={`/posts/${h.slug}`} onClick={close}>
              <span className="search-hit-kicker">{h.kicker}</span>
              <span className="search-hit-title">{h.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
