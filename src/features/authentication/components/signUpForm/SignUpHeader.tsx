

import { Sparkles } from "lucide-react";

const SignUpHeader = () => {

  return (

    <div className="mb-8 text-center">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-antique-gold/40 bg-antique-gold/10 text-[#A47D56]">
        <Sparkles size={23} strokeWidth={1.5} />
      </div>

      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A47D56]">
        Your journey begins here
      </p>

      <h1 className="font-heading text-3xl text-espresso dark:text-ivory sm:text-4xl lg:text-5xl">
        Create Account
      </h1>

      <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#806C5D] dark:text-[#C5AD99]">
        Join WedPlan and start planning something beautiful.
      </p>
    </div>
  );
};

export default SignUpHeader;
