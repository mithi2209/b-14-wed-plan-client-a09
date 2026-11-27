import Image from "next/image";

const FooterBackground = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Light Mode Wedding Backdrop */}
      <Image
        src="/images/footer-bg-4.jpg"
        alt=""
        fill
        sizes="100vw"
        className="footer-bg-image object-cover object-center opacity-40 contrast-125 dark:hidden"
        priority={false}
      />

      {/* Dark Mode Wedding Backdrop */}
      <Image
        src="/images/footer-bg-3.jpg"
        alt=""
        fill
        sizes="100vw"
        className="footer-bg-image hidden object-cover object-center opacity-40 dark:block"
        priority={false}
      />

      {/* Warm Luxury Gradient Overlays for Flawless Readability */}
      <div className="absolute inset-0 bg-linear-to-b from-ivory/70 via-ivory/65 to-ivory/80 dark:from-[#1a130e]/70 dark:via-[#1a130e]/65 dark:to-[#1a130e]/85" />

      {/* Floating decorative rings */}
      <span className="footer-floating-ring absolute -right-20 top-24 size-60 rounded-full border border-antique-gold/25" />
      <span className="footer-floating-ring footer-floating-ring-delayed absolute -left-24 bottom-16 size-80 rounded-full border border-antique-gold/20" />

      {/* Subtle Top Radial Glow */}
      <div className="absolute inset-x-0 top-0 h-44 bg-linear-to-b from-accent/15 via-transparent to-transparent dark:from-accent/8" />
    </div>
  );
};

export default FooterBackground;
