


import { Check, Circle } from "lucide-react";
import { passwordRules } from "./../../validition";


interface Props {
  password: string;
}


const PasswordRequirements = ({ password }: Props) => {
    return (
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
      {passwordRules.map((rule) => {
        const valid = rule.test(password);

        return (
          <div
            key={rule.label}
            className={`flex items-center gap-1.5 text-[11px] transition-colors ${
              valid
                ? "text-green-700 dark:text-green-400"
                : "text-[#9A8575] dark:text-antique-gold"
            }`}
          >
            {valid ? (
              <Check size={13} />
            ) : (
              <Circle size={12} />
            )}

            {rule.label}
          </div>
        );
      })}
    </div>
    );
};

export default PasswordRequirements;