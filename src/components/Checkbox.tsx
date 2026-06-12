interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  label: string | React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  className = '',
  ...rest
}) => (
  <div className="flex items-center">
    <input
      id={id}
      type="checkbox"
      className={`w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20 transition cursor-pointer ${className}`}
      {...rest}
    />
    <label htmlFor={id} className="ml-2 text-xs text-slate-500 select-none cursor-pointer">
      {label}
    </label>
  </div>
);