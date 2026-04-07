"use client";

import { I18nProvider } from "@/lib/i18n";
import BlogHeader from "@/components/BlogHeader";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/lib/blog";

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <I18nProvider>
      <BlogHeader />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-20">
        {/* Featured posts */}
        {featured.length > 0 && (
          <div className="space-y-6 mb-12">
            {featured.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} featured />
            ))}
          </div>
        )}

        {/* Divider */}
        {featured.length > 0 && rest.length > 0 && (
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 border-t border-dashed border-border/50" />
            <span className="text-[10px] font-mono text-muted/50 tracking-widest uppercase px-3">
              All Posts
            </span>
            <div className="flex-1 border-t border-dashed border-border/50" />
          </div>
        )}

        {/* Rest of posts */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((post, i) => (
              <BlogCard
                key={post.slug}
                post={post}
                index={i + featured.length}
              />
            ))}
          </div>
        )}

        {/* Empty state */}
        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted text-lg">No posts yet. Check back soon.</p>
          </div>
        )}
      </div>

      <Footer />
    </I18nProvider>
  );
}
