"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Check, X } from "lucide-react";

const rows = [
  { label: "about.row1.label", saas: "about.row1.saas", aaas: "about.row1.aaas" },
  { label: "about.row2.label", saas: "about.row2.saas", aaas: "about.row2.aaas" },
  { label: "about.row3.label", saas: "about.row3.saas", aaas: "about.row3.aaas" },
  { label: "about.row4.label", saas: "about.row4.saas", aaas: "about.row4.aaas" },
];

function useInView() {
  return {
    variants: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };
}

export default function About() {
  const { t } = useI18n();
  const anim = useInView();

  return (
    <section id="about" className="relative py-16 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div {...anim} className="text-center mb-16">
          <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-4">
            {t("about.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t("about.desc")}
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          {...anim}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden"
        >
          {/* Header row */}
          <div className="grid grid-cols-3 border-b border-border">
            <div className="p-5" />
            <div className="p-5 text-center border-l border-border">
              <span className="text-sm font-medium text-muted">{t("about.saas")}</span>
            </div>
            <div className="p-5 text-center border-l border-border bg-accent/5">
              <span className="text-sm font-medium gradient-text">{t("about.aaas")}</span>
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="p-5 flex items-center">
                <span className="text-sm font-medium text-foreground">{t(row.label)}</span>
              </div>
              <div className="p-5 border-l border-border flex items-center gap-2">
                <X className="w-4 h-4 text-red-400/60 shrink-0" />
                <span className="text-sm text-muted">{t(row.saas)}</span>
              </div>
              <div className="p-5 border-l border-border bg-accent/5 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-sm text-foreground font-medium">{t(row.aaas)}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
