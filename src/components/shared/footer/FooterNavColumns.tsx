import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import {
  contactDetails,
  discoverServices,
  type FooterNavLink,
  planningLinks,
  vendorPortalLinks,
} from "@/config/footerNav";

const headingClass =
  "mb-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-mocha dark:text-beige/70";

const linkClass =
  "footer-nav-link inline-block text-sm leading-6 text-muted-foreground transition-colors hover:text-antique-gold";

const contactIcons = {
  email: Mail,
  phone: Phone,
  address: MapPin,
  hours: Clock,
};

interface NavColumnProps {
  title: string;
  links: FooterNavLink[];
  animationClass: string;
}

const NavColumn = ({ title, links, animationClass }: NavColumnProps) => (
  <div
    className={`footer-reveal ${animationClass} text-center lg:col-span-2 lg:text-left`}
  >
    <h3 className={headingClass}>{title}</h3>
    <ul className="space-y-1">
      {links.map((item) => (
        <li key={`${item.label}-${item.href}`}>
          <Link href={item.href} className={linkClass}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const ContactColumn = () => (
  <div className="footer-reveal footer-reveal-4 text-center lg:col-span-2 lg:text-left">
    <h3 className={headingClass}>Get in touch</h3>
    <ul className="space-y-2 text-sm text-muted-foreground">
      {contactDetails.map((contact) => {
        const Icon = contactIcons[contact.type];

        return (
          <li key={contact.type}>
            {contact.href ? (
              <a
                href={contact.href}
                className="group flex items-start justify-center gap-2.5 text-left transition-colors lg:justify-start hover:text-antique-gold"
              >
                <Icon
                  className="mt-0.5 size-4 shrink-0 text-antique-gold"
                  aria-hidden="true"
                />
                <span className="wrap-break-word">{contact.value}</span>
              </a>
            ) : (
              <div className="flex items-start justify-center gap-2.5 text-left lg:justify-start">
                <Icon
                  className="mt-0.5 size-4 shrink-0 text-antique-gold"
                  aria-hidden="true"
                />
                <span className="wrap-break-word">{contact.value}</span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

const FooterNavColumns = () => {
  return (
    <>
      <NavColumn
        title="Services"
        links={discoverServices}
        animationClass="footer-reveal-2"
      />
      <NavColumn
        title="Inspiration & tools"
        links={planningLinks}
        animationClass="footer-reveal-3"
      />
      <NavColumn
        title="For vendors"
        links={vendorPortalLinks}
        animationClass="footer-reveal-3"
      />
      <ContactColumn />
    </>
  );
};

export default FooterNavColumns;
