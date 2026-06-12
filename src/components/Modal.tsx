interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  closeButtonText?: string;
  maxWidthClass?: string; // Ex: 'max-w-md', 'max-w-lg'
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  icon,
  children,
  closeButtonText = "Fechar",
  maxWidthClass = "max-w-sm"
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/45 backdrop-blur-sm transition-opacity">
      <div 
        className={`bg-white rounded-2xl w-full ${maxWidthClass} p-6 shadow-2xl border border-slate-100 transform scale-100 transition-all duration-300`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col items-center text-center">
          {icon && (
            <div className="p-3 bg-blue-50 rounded-full text-blue-600 mb-4">
              {icon}
            </div>
          )}

          <h2 className="text-lg font-bold text-slate-900 mb-2">
            {title}
          </h2>

          {description && (
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              {description}
            </p>
          )}

          {children && (
            <div className="w-full text-left mb-6">
              {children}
            </div>
          )}

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 shadow-sm transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            {closeButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};
