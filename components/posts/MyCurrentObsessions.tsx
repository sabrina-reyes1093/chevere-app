type Section = {
  heading: string;
  image: string;
  alt: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    heading: "House of the Dragon",
    image: "/assets/hotdragon.png",
    alt: "House of the Dragon",
    body: (
      <p>
        My current TV obsession has officially become <em>House of the Dragon</em>. If you enjoyed{" "}
        <em>Game of Thrones</em>, this fantasy continuation, full of morally gray characters and
        high-stakes political drama, is one of those shows that&rsquo;s impossible not to binge.
      </p>
    ),
  },
  {
    heading: "ACOTAR: Book Series",
    image: "/assets/acotar.png",
    alt: "ACOTAR Book Series",
    body: (
      <p>
        I&rsquo;ve officially entered my fantasy era. I&rsquo;m only on book two, but I&rsquo;m
        already completely invested in this world. I&rsquo;m trying to pace myself&hellip; but I now
        understand why everyone recommends this series.
      </p>
    ),
  },
  {
    heading: "Obsession",
    image: "/assets/obsession.png",
    alt: "Obsession",
    body: (
      <p>
        I went into <em>Obsession</em> knowing very little, and I&rsquo;m so glad I did. If
        you&rsquo;re a fan of psychological thrillers, unexpected twists, and movies that stay with
        you long after the credits roll, this one is worth seeing in theaters.
      </p>
    ),
  },
  {
    heading: "San Pellegrino Ciao Peach & Picnics",
    image: "/assets/picnic.png",
    alt: "Summer Picnic",
    body: (
      <p>
        I&rsquo;ve reached the point where my fridge is permanently stocked with San Pellegrino Ciao
        Peach, paired with a deli sandwich and a picnic in the sunshine. It&rsquo;s become my
        favorite excuse to slow down, enjoy these little moments, and just romanticize life.
      </p>
    ),
  },
  {
    heading: "A House Tour That Lived in My Head Rent-Free",
    image: "/assets/housetour.png",
    alt: "House Tour",
    body: (
      <p>
        Sabrina Carpenter&rsquo;s house tour has been on repeat this week — that mix of feminine,
        vintage-inspired charm with just enough personality is exactly the kind of home inspiration
        I didn&rsquo;t know I needed. It&rsquo;s got me rethinking my own space.
      </p>
    ),
  },
  {
    heading: "Tending My Summer Garden",
    image: "/assets/garden.png",
    alt: "Summer Garden",
    body: (
      <p>
        Between the tomatoes finally coming in and the basil growing faster than I can use it, my
        summer veggie and herb garden has become my favorite form of therapy. There&rsquo;s nothing
        like stepping outside with coffee to see what&rsquo;s ready to pick.
      </p>
    ),
  },
  {
    heading: "World Cup Season",
    image: "/assets/worldcup.png",
    alt: "World Cup Season",
    body: (
      <p>
        The FIFA World Cup has been giving me something to look forward to almost every day, and my
        playlists have been filled with Latin music from morning to night. It&rsquo;s the perfect
        combination for a summer full of sunshine, soccer, and good vibes. With the knockout rounds
        now underway, every match feels like appointment viewing.
      </p>
    ),
  },
];

const collage: Array<{ image: string; alt: string; cls: string }> = [
  { image: "/assets/hotdragon.png", alt: "House of the Dragon", cls: "collage-a" },
  { image: "/assets/acotar.png", alt: "ACOTAR", cls: "collage-b" },
  { image: "/assets/obsession.png", alt: "Obsession", cls: "collage-c" },
  { image: "/assets/picnic.png", alt: "Picnic", cls: "collage-d" },
];

export default function MyCurrentObsessions() {
  return (
    <div className="post-body">
      <div className="post-collage">
        {collage.map((c) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={c.cls} src={c.image} alt={c.alt} className={c.cls} />
        ))}
      </div>
      <p>
        There&rsquo;s something about summer that makes everything feel a little more indulgent —
        the shows are bigger, the books are steamier, and the snacks require a picnic blanket.
        Here&rsquo;s what&rsquo;s currently living in my rotation.
      </p>
      {sections.map((s) => (
        <div className="post-section with-image" key={s.heading}>
          <div className="post-section-text">
            <strong>{s.heading}</strong>
            {s.body}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="post-section-img" src={s.image} alt={s.alt} />
        </div>
      ))}
      <p className="post-signoff">
        Until next week — stay <em>chévere</em>
      </p>
    </div>
  );
}
