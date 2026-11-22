//  Dashboard sidebar + header layout

import Link from "next/link";

const dashboardLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "My Services", href: "/dashboard/vendor/my-services" },
  { label: "Add Service", href: "/dashboard/vendor/add-service" },
  { label: "Booking Requests", href: "/dashboard/vendor/booking-requests" },
  { label: "My Bookings", href: "/dashboard/customer/my-bookings" },
  { label: "Subscription", href: "/dashboard/vendor/subscription" },
  { label: "Manage Users", href: "/dashboard/admin/manage-users" },
  { label: "Manage Services", href: "/dashboard/admin/manage-services" },
  { label: "Transactions", href: "/dashboard/admin/transactions" },
  { label: "My Profile", href: "/profile" },
];

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-[#E8DFD2] bg-white md:block">
        <div className="border-b border-[#E8DFD2] px-6 py-6">
          <Link href="/" className="text-2xl font-bold text-[#49372D]">
            WedPlan.
          </Link>

          <p className="mt-1 text-xs text-[#A17C64]">
            Wedding Planning Platform
          </p>
        </div>

        <nav className="space-y-1 p-4">
          {dashboardLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-[#76665B] transition hover:bg-[#FAF7F2] hover:text-[#49372D]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-4 pt-4">
          <Link
            href="/"
            className="block rounded-lg border border-[#E8DFD2] px-4 py-3 text-center text-sm font-medium text-[#49372D] transition hover:bg-[#FAF7F2]"
          >
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Dashboard content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#E8DFD2] bg-white px-6 py-5">
          <div>
            <h1 className="text-lg font-bold text-[#49372D]">Dashboard</h1>
            <p className="text-xs text-[#76665B]">
              Manage your WedPlan account
            </p>
          </div>

          <Link
            href="/profile"
            className="rounded-lg bg-[#EFE7DC] px-4 py-2 text-sm font-semibold text-[#49372D] transition hover:bg-[#E8DFD2]"
          >
            My Profile
          </Link>
        </header>

        {/* Page content */}
        <main className="flex-1 p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
