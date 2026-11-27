

import { Search } from "lucide-react";

interface NavbarSearchProps {
  mobile?: boolean;
}

const NavbarSearch = ({ mobile = false }: NavbarSearchProps) => {
  return (
    <form
      action="/services"
      method="GET"
      role="search"
      className={`flex h-10 items-center gap-2.5 rounded-full border border-border/80 bg-background/70 px-3.5 transition-colors focus-within:border-primary/60 ${mobile ? "w-full" : "w-55 xl:w-62.5"}`}
    >
      <Search className="size-5 shrink-0 text-foreground" />

      <input
        type="search"
        name="q"
        placeholder="Search services..."
        aria-label="Search services"
        className="min-w-0 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />
    </form>
  );
};

export default NavbarSearch;
