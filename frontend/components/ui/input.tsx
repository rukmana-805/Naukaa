import { ChangeEvent } from "react";

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  required?: boolean;
};

export default function Input({
  label,
  icon,
  type = "text",
  required = true,
  ...props
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}

        <input
          {...props}
          type={type}
          required={required}
          className={`w-full py-3 border-2 border-gray-200 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-blue-500
            focus:border-transparent transition-all
            ${icon ? "pl-12 pr-4" : "px-4"}
          `}
        />
      </div>
    </div>
  );
}
