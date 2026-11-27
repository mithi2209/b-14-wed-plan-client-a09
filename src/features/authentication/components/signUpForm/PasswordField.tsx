


import { useState } from "react";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import PasswordRequirements from "./PasswordRequirements";

interface Props {
  password: string;
  setPassword: (value: string) => void;
}

const PasswordField = ({ password, setPassword }: Props) => {

  const [showPassword, setShowPassword] = useState(false);


  return (
    
    <div>
      <label
        htmlFor="password"
        className="mb-2 block text-sm font-medium text-espresso dark:text-beige"
      >
        Password <span className="text-[#A47D56]">*</span>
      </label>

      <div className="relative">
        <LockKeyhole
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A47D56]"
        />

        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Create a strong password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          required
          className="w-full rounded-xl border border-beige bg-[#FFFCF7] py-3 pl-11 pr-12 text-sm text-espresso outline-none transition-all placeholder:text-soft-mocha/70 focus:border-antique-gold focus:ring-2 focus:ring-antique-gold/15 dark:border-mocha/60 dark:bg-[#2B211B] dark:text-ivory dark:placeholder:text-antique-gold/60"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A47D56] transition-colors hover:text-espresso dark:hover:text-ivory"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <PasswordRequirements password={password} />
    </div>
  );
};

export default PasswordField;
