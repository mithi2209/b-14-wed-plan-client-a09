

import { ArrowRight, LoaderCircle } from "lucide-react";

interface Props {
  loading: boolean;
}

const SignUpSubmitButton = ({ loading }: Props) => {

  return (
    
    <button
      type="submit"
      disabled={loading}
      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-espresso px-5 py-3.5 text-sm font-semibold text-ivory shadow-md shadow-espresso/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#634B3C] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 dark:bg-antique-gold dark:text-[#241A15] dark:hover:bg-[#C9A982]"
    >
      {loading ? (
        <>
          <LoaderCircle size={18} className="animate-spin" />
          Creating Account...
        </>
      ) : (
        <>
          Create Account
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </>
      )}
    </button>
  );
};

export default SignUpSubmitButton;
