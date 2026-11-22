
//   Global context providers --Theme and global providers


"use client";

import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps)  => {
    
    return (

        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
            >

            {children}

        </ThemeProvider>
    );
};

export default Providers;