"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import Navbar from "./Navbar";

export default function BlogHeader() {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <section className="relative pt-32 pb-16 md:pb-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[128px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-4">
              {t("blog.label")}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("blog.title")}
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto">
              {t("blog.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
