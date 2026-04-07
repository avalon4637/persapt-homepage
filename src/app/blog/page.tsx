import { getAllPosts } from "@/lib/blog";
import BlogListClient from "./BlogListClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Persapt",
  description:
    "Insights on AI agents, autonomous operations, and the shift from SaaS to AaaS.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogListClient posts={posts} />;
}
