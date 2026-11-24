

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SignUpButtonProps {
  onClick?: () => void;
}

const SignUpButton = ({ onClick }: SignUpButtonProps) => {
  return (
    <Link
      href="/register"
      onClick={onClick}
      className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#75421F] px-5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#603619] hover:shadow-md dark:bg-[#E8C49E] dark:text-[#321B12] dark:hover:bg-[#F2D5B5]"
    >
      Sign Up
      
      <ArrowRight className="size-4" />
    </Link>
  );
};

export default SignUpButton;
