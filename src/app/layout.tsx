

import "./globals.css";
import { Toaster } from 'sonner';
import type { Metadata } from "next";
import Providers from "@/components/providers/Providers";
import { Montserrat ,Courgette } from "next/font/google";


const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-courgette",
  display: "swap",
});

const montserrat = Montserrat({

  subsets: ["latin"],
  weight: ["400", "500", "600", "700" , "800" , "900"],
  variable: "--font-montserrat",
  display: "swap",
});


export const metadata: Metadata = {
    title: {
    default: "WedPlan | Wedding Planning Platform",
    template: "%s | WedPlan",
  },
  description:
    "Discover wedding services, connect with vendors, and plan your perfect wedding with WedPlan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${courgette.variable} ${montserrat.variable} h-full antialiased` }

      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">

        <Providers>
            {children}
        </Providers>

         <Toaster />
        
        </body>
    </html>
  );
}
