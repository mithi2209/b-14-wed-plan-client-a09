

import Link from "next/link";

const NavbarLogo = () => {

  return (
    
    <Link
      href="/"
      aria-label="WedPlan home"
      className="flex shrink-0 items-center gap-2"
    >
      {/* Two overlapping wedding rings */}
      <span className="relative flex h-10 w-12 shrink-0 items-center">
        <span className="absolute left-1 top-1.5 size-7 rounded-full border-[2.5px] border-[#D5A477]" />
        <span className="absolute left-4 top-1.5 size-7 rounded-full border-[2.5px] border-[#985B32]" />
      </span>

      <span className="font-heading text-[26px] font-semibold tracking-tight">
        <span className="text-[#321B12] dark:text-[#F5E4D3]">Wed</span>
        <span className="text-[#985B32] dark:text-[#D9AD83]">Plan</span>
      </span>
    </Link>
  );
};

export default NavbarLogo;
