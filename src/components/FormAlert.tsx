export interface FormAlertProps {
  type: 'error' | 'success' | 'info' | '';
  message: string;
  className?: string;
}

export const FormAlert: React.FC<FormAlertProps> = ({ type, message, className = '' }) => {
  if (!message || !type) return null;

  const styles = {
    error: 'bg-red-50/65 border-red-100 text-red-700',
    success: 'bg-emerald-50/65 border-emerald-100 text-emerald-700',
    info: 'bg-blue-50/65 border-blue-100 text-blue-700'
  };

  const icons = {
    error: (
      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    success: (
      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    info: (
      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    )
  };

  return (
    <div className={`p-3 rounded-xl text-xs font-medium border transition-all flex items-start gap-2 ${styles[type]} ${className}`}>
      {icons[type]}
      <span>{message}</span>
    </div>
  );
};
