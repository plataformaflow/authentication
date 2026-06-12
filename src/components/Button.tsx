interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  buttonBgClass: string;
}

export const Button: React.FC<ButtonProps> = ({
  isLoading,
  buttonBgClass,
  children,
  className = '',
  ...rest
}) => (
  <button
    disabled={isLoading}
    className={`w-full py-2.5 px-4 rounded-xl text-white text-sm font-semibold shadow-sm focus:outline-none focus:ring-4 transition duration-200 flex items-center justify-center ${buttonBgClass} ${
      isLoading ? 'opacity-85 cursor-not-allowed' : ''
    } ${className}`}
    {...rest}
  >
    {isLoading ? (
      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    ) : (
      children
    )}
  </button>
);