interface FooterProps {
  companyName: string;
}

export const Footer: React.FC<FooterProps> = ({ companyName }) => (
  <footer className="w-full py-6 text-center text-xs text-slate-400 border-t border-slate-100/50 bg-white mt-auto">
    <p>© {new Date().getFullYear()} {companyName}. Todos os direitos reservados.</p>
    <div className="mt-1 flex justify-center gap-4">
      <a href="#" className="hover:text-slate-600 transition">Termos de Serviço</a>
      <span>•</span>
      <a href="#" className="hover:text-slate-600 transition">Suporte Técnico</a>
    </div>
  </footer>
);