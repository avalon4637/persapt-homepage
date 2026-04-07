"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { TrendingDown, Server, Users, Target } from "lucide-react";

const reasons = [
  { titleKey: "why.r1.title", descKey: "why.r1.desc", icon: TrendingDown, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { titleKey: "why.r2.title", descKey: "why.r2.desc", icon: Server, color: "text-blue-400", bg: "bg-blue-500/10" },
  { titleKey: "why.r3.title", descKey: "why.r3.desc", icon: Users, color: "text-amber-400", bg: "bg-amber-500/10" },
  { titleKey: "why.r4.title", descKey: "why.r4.desc", icon: Target, color: "text-purple-400", bg: "bg-purple-500/10" },
];

export default function WhyNow() {
  const { t } = useI18n();

  return (
    <section id="whynow" className="relative py-16 md:py-32">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px]" style={{ background: "rgba(168,85,247,0.03)" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-4">
            {t("why.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t("why.title")}
          </h2>
        </motion.div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-accent/20 hover:bg-card-hover transition-all duration-500"
              >
                <div className={`inline-flex p-3 rounded-xl ${reason.bg} mb-5`}>
                  <Icon className={`w-6 h-6 ${reason.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {t(reason.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
