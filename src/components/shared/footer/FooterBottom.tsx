"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

const FooterBottom = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer-reveal footer-reveal-4 border-t border-border/60 bg-background/40 dark:bg-card/20">
      <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-left">
          <p className="text-xs leading-6 text-muted-foreground">
            © {new Date().getFullYear()} WedPlan Inc. All rights reserved.
          </p>

          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs sm:justify-start sm:gap-x-6 sm:gap-y-2"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="footer-nav-link font-medium text-muted-foreground transition-colors hover:text-antique-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 self-center text-xs font-medium text-muted-foreground transition-colors hover:text-antique-gold"
          >
            Back to top
            <span className="flex size-7 items-center justify-center rounded-full border border-border/80 transition-colors group-hover:border-antique-gold">
              <ArrowUp className="size-3.5" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
