'use client';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { CompanyConfig, CompanyHeader } from '@/components/CompanyBranding';
import { Footer } from '@/components/Footer';
import { FormAlert, FormAlertProps } from '@/components/FormAlert';
import { InputField } from '@/components/InputField';
import { PasswordField } from '@/components/InputPassword';
import { Modal } from '@/components/Modal';
import React, { useState } from 'react';

 // Prime: 55.385.545/0001-55
 // Original: 05394443000128

const COMPANY_CONFIG: CompanyConfig = {
  name: 'Magistral Prime Fórmulas',
  tagline: 'Soluções inteligentes em manipulação',
  primaryColor: 'text-blue-600',
  borderColor: 'focus:border-blue-600 focus:ring-blue-100',
  buttonBg: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-200',
  cnpj: '55.385.545/0001-55',
  logoUrl: 'https://images-ext-1.discordapp.net/external/i5iQlE5Xlk1cctVIAdH_Bh7JQPMsauFPM_adzBRn6VU/https/cdn.discordapp.com/icons/1513968825337647205/f6eab606214a94e0304b076108c147bf.png?format=webp&quality=lossless'
};

export function Company() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<FormAlertProps>({ type: '', message: '' });
  const [isForgotModalOpen, setIsForgotModalOpen] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFeedback({ type: '', message: '' });

    if (!username || !password) {
      setFeedback({ type: 'error', message: 'Preencha o utilizador e a palavra-passe para prosseguir.' });
      return;
    }

    setIsLoading(true);

    // Simulação de autenticação
    setTimeout(() => {
      setIsLoading(false);
      if (username.toLowerCase() === 'admin' && password === '123456') {
        setFeedback({ 
          type: 'success', 
          message: 'Autenticado com sucesso! A redirecionar para o painel...' 
        });
      } else {
        setFeedback({ 
          type: 'error', 
          message: 'Credenciais inválidas. Verifique o seu utilizador e palavra-passe.' 
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFCFF] font-sans antialiased text-slate-800 relative">
      
      {/* Container Principal Centralizado */}
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-[400px]">
          
          {/* Cabeçalho da Empresa */}
          <CompanyHeader config={COMPANY_CONFIG} />

          {/* Card do Formulário de Login */}
          <div className="bg-white p-8 rounded-2xl border border-blue-50/60 shadow-xl shadow-blue-950/[0.02]">
            <form onSubmit={handleLogin} className="space-y-5">
              
              {/* Notificação de Feedback usando FormAlert */}
              <FormAlert type={feedback.type} message={feedback.message} />

              {/* Campo Utilizador */}
              <InputField
                id="user"
                label="Utilizador ou E-mail"
                type="text"
                value={username}
                placeholder="exemplo.de.usuario"
                borderColorClass={COMPANY_CONFIG.borderColor}
                disabled={isLoading}
                onChange={(e) => setUsername(e.target.value)}
                error={feedback.type === 'error' && !username}
              />

              {/* Campo Palavra-passe */}
              <PasswordField
                id="pass"
                label="Palavra-passe"
                value={password}
                placeholder="••••••••"
                borderColorClass={COMPANY_CONFIG.borderColor}
                disabled={isLoading}
                onChange={(e: any) => setPassword(e.target.value)}
                onForgotClick={() => setIsForgotModalOpen(true)}
                error={feedback.type === 'error' && !password}
              />

              {/* Checkbox Lembrar Dispositivo */}
              <Checkbox id="remember-device" label="Confiar neste dispositivo por 30 dias" />

              {/* Botão de Envio */}
              <Button
                type="submit"
                isLoading={isLoading}
                buttonBgClass={COMPANY_CONFIG.buttonBg}
              >
                Entrar no Sistema
              </Button>

            </form>
          </div>

          {/* Ligação encriptada por SSL */}
          <div className="mt-6 text-center">
            <span className="text-xs text-slate-400">
              Ligação encriptada por SSL ativa.
            </span>
          </div>

        </div>
      </main>

      {/* Modal Genérico para Recuperação de Senha */}
      <Modal 
        isOpen={isForgotModalOpen} 
        onClose={() => setIsForgotModalOpen(false)}
        title="Recuperação de Palavra-passe"
        description={`Para garantir a segurança das suas credenciais, entre em contacto diretamente com a equipa de TI ou com a administração da empresa ${COMPANY_CONFIG.name} para solicitar uma redefinição segura de palavra-passe.`}
        icon={
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        }
      />

      {/* Rodapé */}
      <Footer companyName={COMPANY_CONFIG.name} />

    </div>
  );
}

export default function App() {
  return <Company />;
}