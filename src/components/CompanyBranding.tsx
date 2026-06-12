interface CompanyHeaderProps {
  config: CompanyConfig;
}

export interface CompanyConfig {
  name: string;
  tagline: string;
  primaryColor: string;
  borderColor: string;
  buttonBg: string;
  logoUrl: string; // URL da imagem do logótipo
  cnpj?: string; // CNPJ exibido no header (para o mercado brasileiro)
}


export const CompanyHeader: React.FC<CompanyHeaderProps> = ({ config }) => (
  <div className="flex flex-col items-center text-center mb-8">
    <div className="mb-4 p-1 bg-white rounded-2xl shadow-sm border border-blue-50/80 transition-transform duration-300 hover:scale-105 overflow-hidden w-20 h-20 flex items-center justify-center">
      <img 
        src={config.logoUrl} 
        alt={`Logótipo ${config.name}`} 
        className="w-full h-full object-cover rounded-xl"
        onError={(e) => {
          // Fallback caso a imagem falhe ao carregar
          (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%232563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>';
        }}
      />
    </div>
    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
      {config.name}
    </h1>
    <p className="mt-2 text-sm text-slate-500 max-w-[320px] leading-relaxed">
      Iniciar sessão na empresa <span className="font-semibold text-blue-600">{config.name}</span>
      {config.cnpj && <span className="text-slate-400"> - {config.cnpj}</span>}.
    </p>
  </div>
);
