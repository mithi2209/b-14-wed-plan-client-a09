

// Protected application pages


//  Authentication and access protection




const PrivateLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
       <>
            {children}
       </>
    );
};

export default PrivateLayout;