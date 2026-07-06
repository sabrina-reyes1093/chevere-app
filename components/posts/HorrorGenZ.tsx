import { asset } from "@/lib/site";

export default function HorrorGenZ() {
  return (
    <div className="post-body post-body--dropcap">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/assets/obsession.png")}
        alt="Obsession"
        style={{
          width: "100%",
          borderRadius: 8,
          marginBottom: 24,
          aspectRatio: "3/2",
          objectFit: "cover",
        }}
      />
      <p>
        Horror is making a comeback, but it does not feel like the horror we grew up with. It is
        not just haunted houses, masked killers, or jump scares for the sake of jump scares. Movies
        like <em>Obsession</em> and <em>Backrooms</em> feel part of a newer wave of horror that is
        moodier, stranger, and more psychological. The fear is not always loud. Sometimes it is
        quiet, awkward, obsessive, or just slightly off.
      </p>
      <p>
        A big reason for that shift is Gen Z filmmakers. They grew up online, surrounded by
        creepypastas, YouTube horror, found footage, liminal spaces, true crime edits, and internet
        rabbit holes. Their version of fear is different because their world is different. They
        understand the horror of being watched, being consumed by an idea, losing touch with
        reality, or ending up somewhere that feels familiar but wrong.
      </p>
      <p>
        <em>Obsession</em> taps into the fear of fixation and control. It takes something emotional
        and turns it into something dangerous. That kind of horror feels personal because everyone
        knows what it is like to overthink, spiral, or become too attached to something that is not
        good for them. It is scary because the monster is not always outside the door. Sometimes it
        is a thought you cannot shake.
      </p>
      <p>
        <em>Backrooms</em> plays with a different kind of fear. It is about being trapped in a
        space that feels empty, endless, and unnatural. The lighting, the hallways, the silence —
        it all feels like a nightmare born from the internet. It is the kind of horror that could
        only come from a generation raised on digital myths and strange online worlds.
      </p>
      <p>
        That is why this new wave feels exciting. Gen Z filmmakers are not just bringing horror
        back. They are reshaping it. They are making horror feel more emotional, more atmospheric,
        and more connected to modern anxiety. The genre is no longer only about what jumps out at
        you. It is about what lingers after the movie ends.
      </p>
      <p>
        Maybe horror is having a comeback because it finally knows how to speak the language of
        right now. It understands overstimulation, loneliness, obsession, and the feeling that
        something is wrong even when you cannot explain why. Films like <em>Obsession</em> and{" "}
        <em>Backrooms</em> prove that fear does not always need a monster. Sometimes all it needs
        is a screen, a hallway, a memory, or a feeling you cannot escape.
      </p>
      <p className="post-signoff">
        Until next week — stay <em>chévere</em>
      </p>
    </div>
  );
}
