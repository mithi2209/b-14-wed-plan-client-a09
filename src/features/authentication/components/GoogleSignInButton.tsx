

"use client";

import { useState } from "react";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { authClient } from "@/lib/auth-client";


const GoogleSignInButton = () => {

    const [loading, setLoading] = useState(false);


     const handleGoogleSignIn = async () => {

        try {
        setLoading(true);

        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            throw new Error(error.message || "Google signIn failed.");
        }
        } 
        catch (error) {
        toast.error(
            error instanceof Error
            ? error.message
            : "Unable to sign in with Google."
        );
        setLoading(false);
        }
    };

  return (

    <button
      type="button"
      onClick={handleGoogleSignIn}
      disabled={loading}
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-beige bg-[#FFFCF7] px-5 py-3 text-sm font-medium text-espresso transition-all duration-300 hover:border-antique-gold hover:bg-[#F8F2E9] disabled:cursor-not-allowed disabled:opacity-60 dark:border-mocha/60 dark:bg-[#2B211B] dark:text-ivory dark:hover:border-antique-gold dark:hover:bg-espresso"
    >
      {loading ? (
        <LoaderCircle size={18} className="animate-spin" />
      ) : (
        <svg width="19" height="19" viewBox="0 0 48 48" aria-hidden="true">
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
          />
          <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.73 7.18l7.65 5.93c4.47-4.13 7.12-10.2 7.12-17.58Z"
          />
          <path
            fill="#FBBC05"
            d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a23.94 23.94 0 0 0 0 21.56l7.98-6.19Z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.9-5.87l-7.65-5.93c-2.13 1.43-4.85 2.28-8.25 2.28-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
          />
        </svg>
      )}

      {loading ? "Connecting..." : "Continue with Google"}
    </button>
  );
};

export default GoogleSignInButton;
