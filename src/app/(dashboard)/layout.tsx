

// Protected application pages

import ProtectedRoute from "../(auth)/layout";


//  Authentication and access protection




const PrivateLayout = ({children,}: Readonly<{
  children: React.ReactNode;
  }>) => {

    return (
       <>
        <ProtectedRoute>
          {children}
        </ProtectedRoute>
       </>
    );
};

export default PrivateLayout;