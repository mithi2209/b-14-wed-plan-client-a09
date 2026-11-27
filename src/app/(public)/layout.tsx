

// # Navbar + Footer layout

import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";


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
