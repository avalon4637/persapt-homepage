"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const { t } = useI18n();

  return (
    <section id="contact" className="relative py-16 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/5 rounded-full blur-[128px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
            {t("cta.desc")}
          </p>

          <a
            href="mailto:contact@persapt.com"
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-accent text-white font-medium text-lg hover:bg-accent-light transition-all duration-300 hover:shadow-[0_0_60px_rgba(99,102,241,0.3)]"
          >
            {t("cta.button")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-4 text-sm text-muted">{t("cta.note")}</p>
        </motion.div>
      </div>
    </section>
  );
}
