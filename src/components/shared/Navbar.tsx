


"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarSearch from "./NavbarSearch";
import ThemeToggle from "./ThemeToggle";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Only used to intensify the shadow after scrolling — background stays solid
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={` top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/10" : "shadow-md shadow-black/5"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container mx-auto flex h-16 items-center justify-between gap-3 px-4 sm:px-6 lg:px-0"
      >
        <NavbarLogo />

        {/* Desktop nav */}
        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex items-center gap-1 xl:gap-2">
            <NavbarLinks />
          </div>
        </div>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <NavbarSearch />
          <div className="border-l border-border/70 pl-2">
            <ThemeToggle />
          </div>
          <SignInButton />
          <SignUpButton />
        </div>

        {/* Mobile actions */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open navigation menu"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-75 flex-col border-border bg-background px-5 sm:w-90"
            >
              <SheetHeader className="border-b border-border pb-5 text-left">
                <SheetTitle>
                  <NavbarLogo />
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6">
                <NavbarSearch mobile />
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <NavbarLinks mobile onNavigate={() => setOpen(false)} />
              </div>

              <div className="mt-auto grid grid-cols-2 gap-3 border-t border-border py-5">
                <SignInButton onClick={() => setOpen(false)} />
                <SignUpButton onClick={() => setOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;