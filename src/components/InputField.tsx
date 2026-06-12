interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  borderColorClass: string;
  error?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  borderColorClass,
  error,
  className = '',
  ...rest
}) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
      {label}
    </label>
    <input
      id={id}
      className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/30 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-4 transition-all duration-200 ${
        error 
          ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
          : `border-slate-200 ${borderColorClass}`
      } ${className}`}
      {...rest}
    />
  </div>
);