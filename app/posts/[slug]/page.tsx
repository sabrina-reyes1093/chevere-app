import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryLabel, getPost, posts } from "@/data/posts";
import { postBodies } from "@/components/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? `${post.title} — chévere` : "chévere" };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  const Body = postBodies[slug];
  if (!post || !Body) notFound();

  return (
    <main className="page-main">
      <Link className="back-link" href="/blog">
        &larr; Back to Blog
      </Link>
      <span className="kicker post-kicker">{categoryLabel(post.category)}</span>
      <h1 className="page-title">{post.title}</h1>
      <p className="page-tagline post-date-line">{post.date}</p>
      <Body />
    </main>
  );
}
