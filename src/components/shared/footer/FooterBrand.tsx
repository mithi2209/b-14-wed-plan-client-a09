import Link from "next/link";
import { socialLinks } from "@/config/footerNav";
import FooterTypingText from "./FooterTypingText";

const FooterBrand = () => {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-3 text-center lg:mx-0 lg:items-start lg:gap-4 lg:text-left">
      <Link
        href="/"
        aria-label="WedPlan home"
        className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-90"
      >
        <span
          className="relative flex h-10 w-12 shrink-0 items-center"
          aria-hidden="true"
        >
          <span className="footer-brand-ring absolute left-1 top-1.5 size-7 rounded-full border-[2.5px] border-[#D5A477]" />
          <span className="footer-brand-ring footer-brand-ring-delayed absolute left-4 top-1.5 size-7 rounded-full border-[2.5px] border-[#985B32]" />
        </span>

        <span className="font-heading text-[26px] leading-none tracking-tight">
          <span className="text-[#321B12] dark:text-[#F5E4D3]">Wed</span>
          <span className="text-[#985B32] dark:text-[#D9AD83]">Plan</span>
        </span>
      </Link>

      <p className="text-sm leading-6 text-mocha/80 dark:text-beige/70">
        Thoughtfully curated weddings — from the first spark of inspiration to
        the final toast.
      </p>

      <FooterTypingText />

      <div className="mt-1 flex items-center justify-center gap-2 lg:justify-start">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow WedPlan on ${social.name}`}
            className="footer-social flex size-9 items-center justify-center rounded-full border border-border/80 bg-background/60 text-muted-foreground transition-colors hover:-translate-y-0.5 hover:border-antique-gold hover:bg-antique-gold/10 hover:text-antique-gold dark:bg-card/50"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterBrand;
