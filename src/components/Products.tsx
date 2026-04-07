"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Store, Shirt, Building2, ArrowUpRight } from "lucide-react";

const products = [
  {
    tagKey: "p1.tag",
    nameKey: "p1.name",
    titleKey: "p1.title",
    descKey: "p1.desc",
    statusKey: "p1.status",
    priceKey: "p1.price",
    icon: Store,
    gradient: "from-blue-500 to-cyan-400",
    bgGlow: "bg-blue-500/10",
    borderColor: "hover:border-blue-500/30",
    active: true,
  },
  {
    tagKey: "p2.tag",
    nameKey: "p2.name",
    titleKey: "p2.title",
    descKey: "p2.desc",
    statusKey: "p2.status",
    priceKey: "p2.price",
    icon: Shirt,
    gradient: "from-purple-500 to-pink-400",
    bgGlow: "bg-purple-500/10",
    borderColor: "hover:border-purple-500/30",
    active: false,
  },
  {
    tagKey: "p3.tag",
    nameKey: "p3.name",
    titleKey: "p3.title",
    descKey: "p3.desc",
    statusKey: "p3.status",
    priceKey: "p3.price",
    icon: Building2,
    gradient: "from-amber-500 to-orange-400",
    bgGlow: "bg-amber-500/10",
    borderColor: "hover:border-amber-500/30",
    active: true,
  },
];

export default function Products() {
  const { t } = useI18n();

  return (
    <section id="products" className="relative py-16 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px]" style={{ background: "rgba(99,102,241,0.03)" }} />

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
            {t("products.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t("products.title")}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t("products.desc")}
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.nameKey}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 ${product.borderColor} hover:bg-card-hover`}
              >
                {/* Glow on hover */}
                <div className={`absolute inset-0 rounded-2xl ${product.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                <div className="relative z-10">
                  {/* Icon + Tag row */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${product.gradient}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-muted">
                      {t(product.tagKey)}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold mb-2 font-mono">
                    {t(product.nameKey)}
                  </h3>

                  {/* Title */}
                  <p className="text-sm text-muted mb-4">
                    {t(product.titleKey)}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted/80 leading-relaxed mb-6">
                    {t(product.descKey)}
                  </p>

                  {/* Bottom bar */}
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <div className="text-xs text-muted mb-1">{t(product.statusKey)}</div>
                      <div className="text-sm font-medium text-foreground">{t(product.priceKey)}</div>
                    </div>
                    <div className="p-2 rounded-full border border-border group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
