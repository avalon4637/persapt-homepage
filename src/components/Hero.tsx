"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Radar, BarChart2, SlidersHorizontal, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const cycleSteps = [
  { label: "Detect", Icon: Radar, color: "text-blue-400", bg: "from-blue-500/20 to-blue-600/5" },
  { label: "Report", Icon: BarChart2, color: "text-purple-400", bg: "from-purple-500/20 to-purple-600/5" },
  { label: "Decide", Icon: SlidersHorizontal, color: "text-amber-400", bg: "from-amber-500/20 to-amber-600/5" },
  { label: "Execute", Icon: Zap, color: "text-emerald-400", bg: "from-emerald-500/20 to-emerald-600/5" },
];

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-accent/40 rounded-full animate-float" />
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent-light/30 rounded-full animate-float" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-32 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-sm text-muted font-mono">{t("hero.tag")}</span>
          <ChevronRight className="w-3.5 h-3.5 text-muted" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.15] mb-6"
        >
          <span className="text-muted">{t("hero.title1")}</span>
          <br />
          <span className="gradient-text">{t("hero.title2")}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          >
            {t("hero.cta1")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#technology"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-muted hover:text-foreground hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
          >
            {t("hero.cta2")}
          </a>
        </motion.div>

        {/* Animated cycle diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="mx-auto max-w-3xl gradient-border rounded-2xl bg-card/80 backdrop-blur-sm p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {cycleSteps.map((step, i) => {
                const Icon = step.Icon;
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.15 }}
                    className={`relative rounded-xl bg-gradient-to-b ${step.bg} border border-border/50 p-4 text-center`}
                  >
                    <div className="flex justify-center mb-2">
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div className="text-sm font-medium text-foreground font-mono">{step.label}</div>
                    {i < 3 && (
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:block">
                        <ArrowRight className="w-4 h-4 text-muted/40" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-4 text-center text-xs text-muted font-mono">
              AAAS Engine — Aware · Act · Adapt System
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
