

//  config/ ----> Application configuration

//  # Navbar and dashboard navigation



export type UserRole = "customer" | "vendor" | "admin";

export const dashboardNavigation = {
  customer: [
    {
      label: "Overview",
      href: "/dashboard/customer",
      icon: "LayoutDashboard",
    },
    {
      label: "My Bookings",
      href: "/dashboard/customer/my-bookings",
      icon: "CalendarDays",
    },
    {
      label: "Browse Services",
      href: "/services",
      icon: "Search",
    },
    {
      label: "Profile Settings",
      href: "/profile",
      icon: "UserRound",
    },
  ],

  vendor: [
    {
      label: "Overview",
      href: "/dashboard/vendor",
      icon: "LayoutDashboard",
    },
    {
      label: "My Services",
      href: "/dashboard/vendor/my-services",
      icon: "BriefcaseBusiness",
    },
    {
      label: "Add Service",
      href: "/dashboard/vendor/add-service",
      icon: "Plus",
    },
    {
      label: "Booking Requests",
      href: "/dashboard/vendor/booking-requests",
      icon: "CalendarDays",
    },
    {
      label: "Subscription",
      href: "/dashboard/vendor/subscription",
      icon: "CreditCard",
    },
    {
      label: "Profile Settings",
      href: "/profile",
      icon: "UserRound",
    },
  ],

  admin: [
    {
      label: "Overview",
      href: "/dashboard/admin",
      icon: "LayoutDashboard",
    },
    {
      label: "Manage Users",
      href: "/dashboard/admin/manage-users",
      icon: "Users",
    },
    {
      label: "Manage Services",
      href: "/dashboard/admin/manage-services",
      icon: "BriefcaseBusiness",
    },
    {
      label: "Transactions",
      href: "/dashboard/admin/transactions",
      icon: "Receipt",
    },
    {
      label: "Profile Settings",
      href: "/profile",
      icon: "UserRound",
    },
  ],
};
