

import { Check, Heart, Store } from "lucide-react";

export type AccountRole = "customer" | "vendor";

interface Props {
  role: AccountRole;
  setRole: (role: AccountRole) => void;
}

const roles = [
  {
    value: "customer" as const,
    title: "Customer",
    description: "Plan your dream wedding",
    icon: Heart,
  },
  {
    value: "vendor" as const,
    title: "Vendor",
    description: "Offer your wedding services",
    icon: Store,
  },
];

const AccountRoleSelector = ({ role, setRole }: Props) => {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-espresso dark:text-beige">
        Choose Account Role <span className="text-[#A47D56]">*</span>
      </label>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {roles.map((item) => {
          const selected = role === item.value;
          const Icon = item.icon;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setRole(item.value)}
              aria-pressed={selected}
              className={`group rounded-xl border p-4 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                selected
                  ? "border-antique-gold bg-antique-gold/10 ring-2 ring-antique-gold/15"
                  : "border-beige bg-[#FFFCF7] hover:border-antique-gold/70 dark:border-mocha/60 dark:bg-[#2B211B] dark:hover:border-antique-gold"
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    selected
                      ? "bg-antique-gold/20 text-[#A47D56]"
                      : "bg-antique-gold/10 text-[#A47D56]"
                  }`}
                >
                  <Icon size={19} />
                </div>

                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    selected
                      ? "border-[#A47D56] bg-[#A47D56] text-white"
                      : "border-antique-gold/60"
                  }`}
                >
                  {selected && <Check size={12} />}
                </span>
              </div>

              <h3 className="mt-3 text-sm font-semibold text-espresso dark:text-ivory">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-[#806C5D] dark:text-antique-gold">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AccountRoleSelector;
