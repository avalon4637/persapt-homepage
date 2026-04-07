"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { I18nProvider, useI18n } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/lib/blog";

function PostContent({ post }: { post: BlogPost }) {
  const { lang } = useI18n();
  const title = lang === "ko" ? post.titleKo : post.title;
  const description = lang === "ko" ? post.descriptionKo : post.description;
  const authorRole = lang === "ko" ? post.authorRoleKo : post.authorRole;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Navbar />

      <article className="relative pt-32 pb-20">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[128px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6">
          {/* Back link */}
          <motion.a
            href="/blog"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </motion.a>

          {/* Post header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-md bg-accent/10 text-accent"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg text-muted leading-relaxed mb-8">
              {description}
            </p>

            {/* Author + date */}
            <div className="flex items-center gap-6 pb-8 mb-10 border-b border-border">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{post.author}</div>
                  {authorRole && (
                    <div className="text-xs text-muted">{authorRole}</div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted">
                <Calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </div>
            </div>
          </motion.header>

          {/* Post body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="prose-custom"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 pt-10 border-t border-border"
          >
            <div className="rounded-2xl border border-border bg-card/50 p-8 text-center">
              <h3 className="text-xl font-bold mb-3">
                {lang === "ko"
                  ? "Persapt의 여정에 함께하세요"
                  : "Join us on our journey"}
              </h3>
              <p className="text-sm text-muted mb-6 max-w-md mx-auto">
                {lang === "ko"
                  ? "얼리 액세스 프로그램에 참여하고 자율 AI 운영을 가장 먼저 경험하세요."
                  : "Get early access and be among the first to experience autonomous AI operations."}
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-light transition-all duration-300"
              >
                {lang === "ko" ? "얼리 액세스 신청" : "Get Early Access"}
              </a>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <I18nProvider>
      <PostContent post={post} />
    </I18nProvider>
  );
}
