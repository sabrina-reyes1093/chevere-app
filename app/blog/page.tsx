import type { Metadata } from "next";
import BlogIndex from "./BlogIndex";

export const metadata: Metadata = {
  title: "Blog — chévere",
};

export default function BlogPage() {
  return <BlogIndex />;
}
