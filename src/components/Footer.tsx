"use client";

import { useI18n } from "@/lib/i18n";

function ComingSoon({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-2">
      <span className="text-sm text-muted/40">{label}</span>
      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-border text-muted/40 uppercase tracking-widest">
        Soon
      </span>
    </li>
  );
}

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold mb-2">Persapt</h3>
            <p className="text-xs text-muted font-mono mb-3">{t("footer.tagline")}</p>
            <p className="text-sm text-muted leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm text-muted hover:text-foreground transition-colors">{t("footer.about")}</a></li>
              <ComingSoon label={t("footer.team")} />
              <ComingSoon label={t("footer.blog")} />
              <ComingSoon label={t("nav.careers")} />
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-medium mb-4">{t("footer.product")}</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-sm text-muted hover:text-foreground transition-colors">sajang.ai</a></li>
              <li><a href="#products" className="text-sm text-muted hover:text-foreground transition-colors">Fashion AI OS</a></li>
              <li><a href="#products" className="text-sm text-muted hover:text-foreground transition-colors">Persapt Architect</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-3">
              <ComingSoon label={t("footer.docs")} />
              <ComingSoon label={t("footer.github")} />
              <li><a href="mailto:contact@persapt.com" className="text-sm text-muted hover:text-foreground transition-colors">{t("footer.contact")}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Persapt Inc. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted/50 hover:text-muted transition-colors">Privacy</a>
            <a href="#" className="text-xs text-muted/50 hover:text-muted transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
