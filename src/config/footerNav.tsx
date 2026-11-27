import type { ReactNode } from "react";

export interface FooterNavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: ReactNode;
}

export interface ContactDetail {
  type: "email" | "phone" | "address" | "hours";
  label: string;
  href?: string;
  value: string;
}

// ─── 1. Social Media Links ──────────────────────────────────────
export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        className="size-4.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg
        className="size-4.5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0a12 12 0 0 0-4.37 23.18c-.08-.94-.15-2.38.03-3.41.17-.92 1.1-4.7 1.1-4.7s-.28-.57-.28-1.41c0-1.32.77-2.31 1.72-2.31.81 0 1.2.61 1.2 1.34 0 .82-.52 2.05-.8 3.19-.23.96.48 1.74 1.42 1.74 1.71 0 3.02-1.8 3.02-4.4 0-2.3-1.65-3.91-4.02-3.91-2.74 0-4.34 2.05-4.34 4.18 0 .83.32 1.72.72 2.2a.3.3 0 0 1 .07.28c-.08.33-.26 1.05-.3 1.2-.05.2-.16.24-.37.15-1.38-.64-2.24-2.65-2.24-4.27 0-3.48 2.53-6.67 7.29-6.67 3.83 0 6.8 2.73 6.8 6.38 0 3.81-2.4 6.87-5.73 6.87-1.12 0-2.17-.58-2.53-1.27l-.69 2.63c-.25.96-.92 2.16-1.37 2.89A12 12 0 1 0 12 0z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        className="size-4.5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com",
    icon: (
      <svg
        className="size-4.5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg
        className="size-4.5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

// ─── 2. Discover Services Navigation ────────────────────────────
export const discoverServices: FooterNavLink[] = [
  { label: "Luxury Venues", href: "/services" },
  { label: "Wedding Photographers", href: "/services" },
  { label: "Floral & Event Decor", href: "/services" },
  { label: "Bridal Styling & Makeup", href: "/services" },
  { label: "Wedding Planners", href: "/services" },
  { label: "Catering & Artisanal Cakes", href: "/services" },
];

// ─── 3. Inspiration & Planning Tools ────────────────────────────
export const planningLinks: FooterNavLink[] = [
  { label: "Inspiration Gallery", href: "/inspiration" },
  { label: "Real Weddings", href: "/inspiration" },
  { label: "Budget Calculator", href: "/services" },
  { label: "Vendor Directory", href: "/services" },
  { label: "Bridal Checklist", href: "/inspiration" },
];

// ─── 4. For Vendors & Partners ──────────────────────────────────
export const vendorPortalLinks: FooterNavLink[] = [
  { label: "Join as a Vendor", href: "/dashboard/vendor/add-service" },
  { label: "Vendor Dashboard", href: "/dashboard/vendor" },
  { label: "Membership Plans", href: "/dashboard/vendor/subscription" },
  { label: "Client Bookings", href: "/dashboard/vendor/booking-requests" },
  { label: "Customer Portal", href: "/dashboard/customer" },
];

// ─── 5. Concierge & Contact Details ────────────────────────────
export const contactDetails: ContactDetail[] = [
  {
    type: "email",
    label: "concierge@wedplan.com",
    href: "mailto:concierge@wedplan.com",
    value: "concierge@wedplan.com",
  },
  {
    type: "phone",
    label: "+880 1xxxxxxxxx-WP",
    href: "tel:+18007899333",
    value: "+880 1xxxxxxxxx-WP",
  },
  {
    type: "address",
    label: "Dhaka, Bangladesh",
    value: "Dhaka, Bangladesh",
  },
  {
    type: "hours",
    label: "Mon – Sat: 9:00 AM – 7:00 PM BST",
    value: "Mon – Sat: 9:00 AM – 7:00 PM BST",
  },
];
