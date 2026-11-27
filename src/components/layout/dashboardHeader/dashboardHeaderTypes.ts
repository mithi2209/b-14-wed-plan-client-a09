

export type DashboardRole = "Customer" | "Vendor" | "Admin";

export interface DashboardUser {
  name: string;
  email: string;
  image?: string | null;
  role?: DashboardRole;
}

export interface DashboardHeaderProps {
  title: string;
  description?: string;
  role: DashboardRole;
  user: DashboardUser;

  profileHref?: string;
  settingsHref?: string;
  accountStatus?: string;

  onSignOut?: () => void;
}
