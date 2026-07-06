import Link from "next/link";
import { categoryLabel, type Post } from "@/data/posts";
import { asset } from "@/lib/site";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      className={"post-card" + (post.featured ? " featured" : "")}
      href={`/posts/${post.slug}`}
    >
      <div
        className="thumb"
        style={{
          backgroundImage: `url(${asset(post.image)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {post.featured ? (
        <div>
          <span className="kicker">{categoryLabel(post.category)}</span>
          <h2>{post.title}</h2>
          <p className="dek">{post.dek}</p>
          <p className="date">{post.date}</p>
        </div>
      ) : (
        <>
          <span className="kicker">{categoryLabel(post.category)}</span>
          <h2>{post.title}</h2>
          <p className="dek">{post.dek}</p>
          <p className="date">{post.date}</p>
        </>
      )}
    </Link>
  );
}
