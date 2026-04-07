"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import {
  Radar, FileText, UserCheck, Zap, Brain,
  Eye, Cog, RefreshCw,
  User, ShieldAlert, TrendingUp,
} from "lucide-react";

const cycleSteps = [
  { key: "tech.step1", descKey: "tech.step1.desc", icon: Radar, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { key: "tech.step2", descKey: "tech.step2.desc", icon: FileText, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { key: "tech.step3", descKey: "tech.step3.desc", icon: UserCheck, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  { key: "tech.step4", descKey: "tech.step4.desc", icon: Zap, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
];

const aaaItems = [
  { titleKey: "tech.aaa.a1.title", descKey: "tech.aaa.a1.desc", icon: Eye, color: "text-sky-400", bg: "bg-sky-500/10" },
  { titleKey: "tech.aaa.a2.title", descKey: "tech.aaa.a2.desc", icon: Cog, color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { titleKey: "tech.aaa.a3.title", descKey: "tech.aaa.a3.desc", icon: RefreshCw, color: "text-teal-400", bg: "bg-teal-500/10" },
];

const pppItems = [
  { titleKey: "tech.3p.p1.title", descKey: "tech.3p.p1.desc", icon: User, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { titleKey: "tech.3p.p2.title", descKey: "tech.3p.p2.desc", icon: ShieldAlert, color: "text-violet-400", bg: "bg-violet-500/10" },
  { titleKey: "tech.3p.p3.title", descKey: "tech.3p.p3.desc", icon: TrendingUp, color: "text-rose-400", bg: "bg-rose-500/10" },
];

function LayerCard({
  items,
  labelKey,
  titleKey,
  layerNum,
  accentColor,
}: {
  items: typeof aaaItems;
  labelKey: string;
  titleKey: string;
  layerNum: number;
  accentColor: string;
}) {
  const { t } = useI18n();
  return (
    <div className={`rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8`}>
      <div className="flex items-center gap-3 mb-6">
        <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${accentColor}`}>
          L{layerNum}
        </span>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted">{t(labelKey)}</div>
          <div className="text-lg font-bold font-mono text-foreground">{t(titleKey)}</div>
        </div>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, x: layerNum === 1 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/50"
            >
              <div className={`p-1.5 rounded-lg ${item.bg} shrink-0 mt-0.5`}>
                <Icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <div>
                <h4 className={`text-sm font-bold font-mono ${item.color} mb-1`}>
                  {t(item.titleKey)}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Technology() {
  const { t } = useI18n();

  return (
    <section id="technology" className="relative py-16 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[160px]" style={{ background: "rgba(99,102,241,0.03)" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-4">
            {t("tech.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">{t("tech.title")}</span>
          </h2>
          <p className="text-xl text-muted font-mono mb-2">{t("tech.subtitle")}</p>
          <p className="text-base text-muted max-w-2xl mx-auto mt-4">
            {t("tech.desc")}
          </p>
        </motion.div>

        {/* Cycle Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {cycleSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                {i < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 border-t border-dashed border-border z-0" />
                )}
                <div className={`relative rounded-2xl border ${step.border} ${step.bg} p-6 transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${step.bg}`}>
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                    <span className="text-xs font-mono text-muted">Step {i + 1}</span>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${step.color}`}>
                    {t(step.key)}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Powered-by divider */}
        <div className="flex items-center gap-4 my-12">
          <div className="flex-1 border-t border-dashed border-border/50" />
          <span className="text-[10px] font-mono text-muted/50 tracking-widest uppercase px-3">
            Powered by
          </span>
          <div className="flex-1 border-t border-dashed border-border/50" />
        </div>

        {/* Dual-Layer Identity */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-3">
              {t("tech.dual.label")}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              {t("tech.dual.title")}
            </h3>
            <p className="text-sm text-muted max-w-xl mx-auto">
              {t("tech.dual.desc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* AAA External Layer */}
            <LayerCard
              items={aaaItems}
              labelKey="tech.aaa.label"
              titleKey="tech.aaa.title"
              layerNum={1}
              accentColor="bg-sky-500/15 text-sky-400"
            />
            {/* 3P Internal Layer */}
            <LayerCard
              items={pppItems}
              labelKey="tech.3p.label"
              titleKey="tech.3p.title"
              layerNum={2}
              accentColor="bg-violet-500/15 text-violet-400"
            />
          </div>

          {/* Connector line */}
          <div className="flex items-center justify-center mt-6 gap-3">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-sky-500/30" />
            <span className="text-xs font-mono text-muted px-3 py-1.5 rounded-full border border-border bg-card/80">
              3P → AAA
            </span>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-violet-500/30" />
          </div>
        </motion.div>

        {/* Policy Memory differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl gradient-border backdrop-blur-sm p-8 md:p-12 glow"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="shrink-0">
              <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20">
                <Brain className="w-8 h-8 text-accent-light" />
              </div>
            </div>
            <div>
              <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-3">
                {t("tech.diff.label")}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                {t("tech.diff.title")}
              </h3>
              <p className="text-muted leading-relaxed max-w-2xl">
                {t("tech.diff.desc")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
