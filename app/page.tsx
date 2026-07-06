import Link from "next/link";
import NewsletterSection from "@/components/NewsletterSection";

function SkeletonColumn({ side }: { side: "left" | "right" }) {
  return (
    <aside className={`side-col ${side}`} aria-hidden="true">
      <div className="skeleton-block" />
      <div className="skeleton-line w1" />
      <div className="skeleton-line w2" />
      <div className="skeleton-line w3" />
    </aside>
  );
}

export default function HomePage() {
  return (
    <>
      <main className="home-main">
        <SkeletonColumn side="left" />

        <section className="center-col">
          <h1 className="post-title">Welcome to Chévere</h1>
          <p className="post-subtitle">
            A lifestyle edit for culture, style, stories, and the little discoveries that make
            everyday life feel more inspired.
          </p>
          <p className="post-desc">
            From books and film to fashion, food, travel, and design, Chévere brings together
            thoughtful recommendations
          </p>
          <div className="home-buttons">
            <Link href="/blog" className="btn-primary">
              Explore
            </Link>
            <Link href="/about" className="btn-secondary">
              About
            </Link>
          </div>
        </section>

        <SkeletonColumn side="right" />
      </main>

      <NewsletterSection />
    </>
  );
}
