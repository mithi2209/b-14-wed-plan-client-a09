

"use client";

import { publicNavigation } from "@/config/publicNavigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = publicNavigation;

interface NavbarLinksProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

const NavbarLinks = ({ mobile = false, onNavigate }: NavbarLinksProps) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {navLinks.map((link) => {
        const active = isActive(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`whitespace-nowrap rounded-full font-medium transition-all duration-200 ${mobile ? `block px-4 py-3 text-sm ${active ? "bg-secondary text-[#985B32] dark:text-[#E8C49E]" : "text-foreground hover:bg-secondary"}` : `px-4 py-2 text-[14px] ${active ? "text-[#985B32] shadow-sm dark:bg-[#D9AD83]/15 dark:text-[#E8C49E]" : "text-[#38251B] hover:bg-[#F3DDC8]/60 dark:text-[#F5E4D3] dark:hover:bg-[#D9AD83]/10"}`}`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export default NavbarLinks;
