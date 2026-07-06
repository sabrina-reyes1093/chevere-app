import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — chévere",
};

export default function AboutPage() {
  return (
    <main className="page-main">
      <h1 className="page-title" id="about-chevere">
        About <em>Chévere</em>
      </h1>
      <p className="page-tagline">A curation of beautiful things</p>
      <div className="page-body">
        <p>
          <strong>Culture. Style. Stories.</strong>
        </p>
        <p>
          <em>Chévere</em> is a curated lifestyle edit for the things worth your attention — from
          fashion, books, film, food, travel, design, and everyday discoveries.
        </p>
        <p>
          Rooted in culture and guided by curiosity, <em>Chévere</em> brings together thoughtful
          recommendations, original reflections, and beautiful finds that make life feel a little
          more intentional and interesting.
        </p>
        <p>
          For those who don&rsquo;t know the word,{" "}
          <em>
            <strong>Chévere</strong>
          </em>{" "}
          is used across Latin America to mean something is cool, great, joyful, or full of good
          energy. It felt like the right name for a space that is warm, stylish, curious, and a
          little unexpected.
        </p>
        <p>
          Here, you&rsquo;ll find curated edits, stories, recommendations, and current obsessions —
          all chosen with intention.
        </p>
        <p>Thanks for being here from the beginning.</p>
        <p>
          <strong>More soon.</strong>
        </p>
        <p>
          —{" "}
          <strong>
            The <em>Chévere</em> Team
          </strong>
        </p>
      </div>
    </main>
  );
}
