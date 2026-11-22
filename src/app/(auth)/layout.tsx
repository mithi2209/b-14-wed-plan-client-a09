// Auth page layout

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FAF7F2] px-4 py-10">
      <div className="w-full max-w-md"> {children}

      </div>
    </main>
  );
};

export default AuthLayout;
