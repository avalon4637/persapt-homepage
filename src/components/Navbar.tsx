"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const navLinks = [
  { key: "nav.about", href: "#about" },
  { key: "nav.products", href: "#products" },
  { key: "nav.technology", href: "#technology" },
  { key: "nav.whynow", href: "#whynow" },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">
              Persapt
            </span>
            <span className="hidden sm:inline text-xs text-muted font-mono mt-0.5">
              / AaaS
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "ko" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs text-muted hover:text-foreground hover:border-accent/50 transition-all duration-200"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang.toUpperCase()}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex px-4 py-2 rounded-full text-sm font-medium bg-accent text-white hover:bg-accent-light transition-colors duration-200"
            >
              {t("hero.cta1")}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-muted hover:text-foreground"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20"
          >
            <div className="flex flex-col items-center gap-8 pt-12">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-muted hover:text-foreground transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 rounded-full text-sm font-medium bg-accent text-white hover:bg-accent-light active:scale-95 transition-all duration-200"
              >
                {t("hero.cta1")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
