

// Auth page layout or protected layout

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Loading from "@/components/shared/Loading";


const ProtectedRoute = ({ children,}: Readonly<{
  children: React.ReactNode;
  }>) => {

  //   const router = useRouter();
  //   const { data: session, isPending } = authClient.useSession();

  //   useEffect(() => {
  //     if (!isPending && !session) {
  //       router.replace("/sign-in");
  //     }
  //   }, [isPending, session, router]);

  // if (isPending || !session) {
  //   return <Loading />;
  // }


  return (

      <main className="min-h-screen bg-ivory dark:bg-dark-espresso">

        {children}

     
    </main>
  );
};

export default ProtectedRoute;
