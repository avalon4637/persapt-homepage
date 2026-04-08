"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({
  post,
  index,
  featured = false,
}: {
  post: BlogPost;
  index: number;
  featured?: boolean;
}) {
  const { lang } = useI18n();
  const title = lang === "ko" ? post.titleKo : post.title;
  const description = lang === "ko" ? post.descriptionKo : post.description;
  const authorRole = lang === "ko" ? post.authorRoleKo : post.authorRole;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="group block rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 hover:border-accent/30 hover:bg-card-hover transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-md bg-accent/10 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-accent-light transition-colors duration-300">
                {title}
              </h2>

              {/* Description */}
              <p className="text-muted leading-relaxed mb-6 max-w-2xl">
                {description}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-muted">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>{post.author}</span>
                  {authorRole && (
                    <span className="text-muted/50">· {authorRole}</span>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formattedDate}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex items-start">
              <div className="p-3 rounded-full border border-border group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8 hover:border-accent/30 hover:bg-card-hover transition-all duration-500 h-full"
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-accent/10 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold tracking-tight mb-3 group-hover:text-accent-light transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
          {description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-muted">
            <span>{post.author}</span>
            <span className="text-muted/30">·</span>
            <span>{formattedDate}</span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
        </div>
      </Link>
    </motion.div>
  );
}
