
//  Dashboard sidebar + header layout

import DashboardHeader from "@/components/layout/dashboardHeader/DashboardHeader";
import DashboardSidebar from "@/components/layout/DashboardSidebar";




const DashboardLayout = ({children,}: Readonly<{
  children: React.ReactNode;
  }>) => {


  return (
     <div className="min-h-screen bg-ivory dark:bg-dark-espresso lg:flex">
      <DashboardSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHeader />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;
