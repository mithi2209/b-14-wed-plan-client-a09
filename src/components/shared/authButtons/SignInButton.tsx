
import Link from "next/link";

interface SignInButtonProps {
  onClick?: () => void;
}

const SignInButton = ({ onClick }: SignInButtonProps) => {
  return (
    <Link
      href="/login"
      onClick={onClick}
      className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full border border-[#985B32]/40 px-5 text-sm font-medium text-[#542F1C] transition-colors hover:bg-[#F2E2D3] dark:border-[#D9AD83]/50 dark:text-[#F5E4D3] dark:hover:bg-[#D9AD83]/10"
    >
      Sign In
    </Link>
  );
};

export default SignInButton;
