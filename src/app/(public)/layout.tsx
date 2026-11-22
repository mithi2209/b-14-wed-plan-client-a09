// # Navbar + Footer layout

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const PublicRouteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>

        <Navbar/>

        <main className="min-h-screen">
            {children}
        </main>

      <Footer/>
    </>
  );
};

export default PublicRouteLayout;
