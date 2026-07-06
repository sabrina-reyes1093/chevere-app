"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { categories } from "@/data/posts";

export default function Nav() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isHome = pathname === "/";
  const isBlog = pathname.startsWith("/blog");
  const isAbout = pathname.startsWith("/about");

  // Desktop opens the dropdown on hover (CSS). On touch devices the first
  // tap opens the menu instead of navigating — same behavior as the old site.
  function onBlogClick(e: React.MouseEvent) {
    if (window.matchMedia("(hover: none)").matches && !dropdownOpen) {
      e.preventDefault();
      setDropdownOpen(true);
      document.addEventListener(
        "click",
        () => setDropdownOpen(false),
        { once: true }
      );
    }
  }

  return (
    <nav className="site-nav">
      <Link href="/" className={isHome ? "active" : undefined}>
        Home
      </Link>
      <div className={"nav-item has-dropdown" + (dropdownOpen ? " open" : "")}>
        <Link href="/blog" className={isBlog ? "active" : undefined} onClick={onBlogClick}>
          Blog
          <ChevronDown className="chev" strokeWidth={2} aria-hidden="true" />
        </Link>
        <div className="dropdown">
          <Link href="/blog">All Blogs</Link>
          {categories.map((c) => (
            <Link key={c.slug} href={`/blog?cat=${c.slug}`}>
              {c.label}
            </Link>
          ))}
        </div>
      </div>
      <Link href="/about" className={isAbout ? "active" : undefined}>
        About
      </Link>
    </nav>
  );
}
