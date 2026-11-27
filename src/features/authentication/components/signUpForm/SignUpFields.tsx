



import { Mail, UserRound } from "lucide-react";

interface SignUpFieldsProps {
  name: string;
  email: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
}

const inputClass =
  "w-full rounded-xl border border-[#E8DCCB] bg-[#FFFCF7] py-3 pl-11 pr-4 text-sm text-[#382820] outline-none transition-all duration-300 placeholder:text-[#A88C75]/70 focus:border-[#B99A75] focus:ring-2 focus:ring-[#B99A75]/15 dark:border-[#705343]/60 dark:bg-[#2B211B] dark:text-[#FAF6EF] dark:placeholder:text-[#B99A75]/60 dark:focus:border-[#B99A75]";

const labelClass =
  "mb-2 block text-sm font-medium text-[#382820] dark:text-[#E8DCCB]";

const SignUpFields = ({
    name,
    email,
    setName,
    setEmail,
    }: SignUpFieldsProps) => {

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name <span className="text-[#A47D56]">*</span>
        </label>

        <div className="relative">
          <UserRound
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A47D56]"
          />

          <input
            id="name"
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address <span className="text-[#A47D56]">*</span>
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A47D56]"
          />

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            className={inputClass}
          />
        </div>
      </div>
    </div>
    );
};

export default SignUpFields;