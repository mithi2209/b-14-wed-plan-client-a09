"use client";

import { Sparkles } from "lucide-react";

const FooterNewsletter = () => {
  return (
    <section className="border-b border-border/60 py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="footer-reveal footer-border-pulse relative mx-auto flex max-w-4xl flex-col gap-5 overflow-hidden rounded-2xl border border-espresso/10 bg-background/70 px-5 py-5 shadow-xs backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-8 sm:py-7 dark:border-beige/10 dark:bg-card/40">
          <div
            aria-hidden="true"
            className="footer-glow pointer-events-none absolute -top-20 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-antique-gold/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="footer-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-linear-to-r from-transparent via-white/20 to-transparent blur-xl"
          />

          <div className="relative min-w-0 space-y-2">
            <div className="flex items-center gap-2 text-antique-gold">
              <Sparkles
                className="footer-sparkle size-3.5"
                aria-hidden="true"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
                The WedPlan Circle
              </span>
            </div>
            <h2 className="font-heading text-xl leading-tight text-espresso dark:text-ivory sm:text-2xl">
              Inspiration for a day that&apos;s entirely yours.
            </h2>
            <p className="max-w-lg text-sm leading-6 text-muted-foreground">
              Curated venue spotlights, real weddings, and planning notes —
              delivered occasionally.
            </p>
          </div>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="relative flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row sm:items-center"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="Your email address"
              className="h-11 w-full rounded-full border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-antique-gold focus:outline-none focus:ring-2 focus:ring-antique-gold/20 sm:w-52 dark:bg-muted/40"
            />
            <button
              type="submit"
              className="h-11 shrink-0 rounded-full bg-espresso px-6 text-xs font-semibold tracking-[0.06em] text-ivory transition-colors hover:bg-espresso/90 dark:bg-antique-gold dark:text-dark-espresso dark:hover:bg-antique-gold/90"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FooterNewsletter;
