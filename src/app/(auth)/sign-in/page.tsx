

import Link from 'next/link';
import SignInForm from "@/features/authentication/components/SignInForm";
import { AnimatedCard, FloatingDecoration } from "@/features/authentication/components/signUpForm/SignUpAnimations";
import { ArrowLeft } from 'lucide-react';





const SignInPage = () => {
    return (
        <main className="relative flex min-h-screen flex-col overflow-hidden bg-ivory px-4 transition-colors duration-300 dark:bg-[#211914] sm:px-6">

      {/* Animated Decorative Background */}
      <FloatingDecoration className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-antique-gold/15 blur-3xl" />

      <FloatingDecoration className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#A47D56]/15 blur-3xl" />

      {/* Centered Content */}
      <section className="relative z-10 flex flex-1 items-center justify-center py-10 sm:py-14">
        <div className="mx-auto w-full max-w-3xl">

          {/* Back to Home */}
          <div className="mb-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#806C5D] transition-colors hover:text-[#A47D56] dark:text-[#C5AD99] dark:hover:text-[#D6B78F]"
            >
              <ArrowLeft
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Home
            </Link>
          </div>

          {/* Sign In Card */}
          <AnimatedCard>
                <div className="rounded-3xl border border-beige bg-white/80 p-5 shadow-[0_20px_70px_rgba(56,40,32,0.07)] backdrop-blur-sm transition-colors duration-300 dark:border-mocha/50 dark:bg-[#2B211B]/85 sm:p-8 md:p-10 lg:p-12">

                <div className="mx-auto w-full max-w-2xl">
                    <SignInForm />
                </div>

                </div>

            </AnimatedCard>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-5 text-center">
        <p className="text-[11px] tracking-wide text-[#A08A78] dark:text-antique-gold">
          © {new Date().getFullYear()} WedPlan. Made for your forever.
        </p>
      </footer>

    </main>
    );
};

export default SignInPage;