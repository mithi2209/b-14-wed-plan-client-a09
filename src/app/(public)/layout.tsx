

// # Navbar + Footer layout

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


const PublicRouteLayout = ({children,}: Readonly<
    {children: React.ReactNode}>) => {


    return (

    <>

      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main>
        {children}
      </main>

      <Footer/>
    </>
  );
};

export default PublicRouteLayout;
