import FooterBackground from "./FooterBackground";
import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterNavColumns from "./FooterNavColumns";
import FooterNewsletter from "./FooterNewsletter";

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border/70 bg-ivory text-foreground transition-colors duration-300 dark:border-border/40 dark:bg-[#1a130e]">
      <FooterBackground />

      {/* Newsletter CTA */}
      <FooterNewsletter />

      {/* Brand + link columns share one aligned grid */}
      <section className="container relative mx-auto px-4 py-10 sm:px-6 sm:py-10 lg:px-0 lg:py-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          <div className="footer-reveal footer-reveal-1 sm:col-span-2 lg:col-span-4">
            <FooterBrand />
          </div>
          <FooterNavColumns />
        </div>
      </section>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
