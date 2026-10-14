import { useState } from 'react';

export default function Footer() {
    const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

    return (
        <footer className="pt-16 pb-12 px-4 sm:px-6 bg-brand-dark text-white border-t border-brand-accent/20 relative z-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
                    {/* Coluna 1: Marca & Resumo */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 select-none">
                            <img
                                src="/logo_metalizada_sb.png"
                                alt="Logo Stack Blackzada"
                                className="h-8 w-auto object-contain"
                            />
                            <span className="font-display font-black text-lg tracking-normal uppercase text-white">
                                STACK <span className="text-brand-accent">BLACKZADA</span>
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                            Desenvolvimento de software corporativo sob medida, soluções com inteligência artificial e consultoria de arquitetura para empresas que buscam eficiência operacional e escala sem gargalos.
                        </p>
                        <div className="font-code text-xs text-brand-accent font-semibold">
                            &lt;CÓDIGO_SEU // ZERO_LOCK_IN&gt;
                        </div>
                    </div>

                    {/* Coluna 2: Navegação Rápida */}
                    <div>
                        <h4 className="font-code text-xs font-bold uppercase tracking-wider text-brand-accent mb-4">
                            Navegação
                        </h4>
                        <ul className="space-y-2.5 font-code text-xs text-gray-300">
                            <li>
                                <a href="#hero" className="hover:text-brand-accent transition-colors">Início</a>
                            </li>
                            <li>
                                <a href="#problema-solucao" className="hover:text-brand-accent transition-colors">Problema vs Solução</a>
                            </li>
                            <li>
                                <a href="#servicos" className="hover:text-brand-accent transition-colors">Serviços Especializados</a>
                            </li>
                            <li>
                                <a href="#como-trabalhamos" className="hover:text-brand-accent transition-colors">Como Trabalhamos</a>
                            </li>
                            <li>
                                <a href="#entregaveis" className="hover:text-brand-accent transition-colors">Entregáveis Concretos</a>
                            </li>
                            <li>
                                <a href="#prova-de-confianca" className="hover:text-brand-accent transition-colors">Garantias & Cases</a>
                            </li>
                            <li>
                                <a href="#sobre" className="hover:text-brand-accent transition-colors">Sobre a Empresa & Time</a>
                            </li>
                            <li>
                                <a href="#faq" className="hover:text-brand-accent transition-colors">Perguntas Frequentes</a>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato Direto & SLA */}
                    <div>
                        <h4 className="font-code text-xs font-bold uppercase tracking-wider text-brand-accent mb-4">
                            Canais Diretos
                        </h4>
                        <ul className="space-y-3 font-code text-xs text-gray-300">
                            <li>
                                <span className="text-gray-400 block text-[10px] uppercase">E-mail:</span>
                                <a href="mailto:stackblackzada@gmail.com" className="hover:text-brand-accent transition-colors break-all">
                                    stackblackzada@gmail.com
                                </a>
                            </li>
                            <li>
                                <span className="text-gray-400 block text-[10px] uppercase">WhatsApp:</span>
                                <a
                                    href="https://wa.me/5564999818481?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Stack%20Blackzada."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-brand-accent transition-colors"
                                >
                                    +55 (64) 99981-8481
                                </a>
                            </li>
                            <li>
                                <span className="text-gray-400 block text-[10px] uppercase">Horário:</span>
                                <span>Seg a Sex, 09h às 18h (Brasília)</span>
                            </li>
                            <li>
                                <span className="text-gray-400 block text-[10px] uppercase">SLA de Retorno:</span>
                                <span className="text-brand-accent">Até 24h úteis para propostas</span>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 4: Redes & Dados Corporativos */}
                    <div>
                        <h4 className="font-code text-xs font-bold uppercase tracking-wider text-brand-accent mb-4">
                            Presença Digital
                        </h4>
                        <ul className="space-y-2.5 font-code text-xs text-gray-300 mb-6">
                            <li>
                                <a
                                    href="https://instagram.com/stack.blackzada"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-brand-accent transition-colors flex items-center gap-2"
                                >
                                    <span>📸 Instagram: @stack.blackzada</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/caio-daniel-45b531319/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-brand-accent transition-colors flex items-center gap-2"
                                >
                                    <span>💼 LinkedIn: Caio Daniel</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/StackBlackzada/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-brand-accent transition-colors flex items-center gap-2"
                                >
                                    <span>🐙 GitHub: @StackBlackzada</span>
                                </a>
                            </li>
                        </ul>

                        <div className="font-code text-[11px] text-gray-400 border-t border-gray-800 pt-3 space-y-1">
                            <div className="font-bold text-gray-300">Stack Blackzada Software & IA</div>
                            <div>Sede: Goiânia / GO - Brasil</div>
                            <div className="text-[10px] text-brand-accent">Atendimento presencial & remoto nacional</div>
                        </div>
                    </div>
                </div>

                {/* Linha Inferior com Copyright e Links de Conformidade */}
                <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-code text-xs text-gray-400 text-center sm:text-left">
                    <p>&copy; 2026 Stack Blackzada. Todos os direitos reservados.</p>
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => setPrivacyModalOpen(true)}
                            className="hover:text-brand-accent transition-colors underline cursor-pointer"
                        >
                            Política de Privacidade & LGPD
                        </button>
                        <span>•</span>
                        <a href="#contato" className="hover:text-brand-accent transition-colors">
                            Solicitar Proposta
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal de Política de Privacidade */}
            {privacyModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="glass-card bg-brand-dark/95 border border-brand-accent/40 max-w-lg w-full p-6 sm:p-8 rounded-2xl text-left font-sans max-h-[85vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-3">
                            <h3 className="font-display font-bold text-lg text-white">
                                Política de Privacidade & Proteção de Dados (LGPD)
                            </h3>
                            <button
                                onClick={() => setPrivacyModalOpen(false)}
                                className="p-1 rounded text-gray-400 hover:text-white"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="text-xs text-gray-300 space-y-3 leading-relaxed font-sans">
                            <p>
                                A <strong>Stack Blackzada</strong> preza pela total segurança e privacidade dos dados coletados através deste portal.
                            </p>
                            <p>
                                <strong>1. Coleta de Informações:</strong> Coletamos apenas as informações fornecidas voluntariamente através do formulário de contato (Nome, E-mail, Telefone, Empresa e detalhes do projeto) exclusivamente com a finalidade de realizar diagnósticos preliminares e envio de propostas comerciais solicitadas.
                            </p>
                            <p>
                                <strong>2. Sigilo & NDA:</strong> Nenhum dado comercial, ideia ou especificação técnica compartilhada conosco é transferida, vendida ou disponibilizada a terceiros. Assinamos Acordo de Confidencialidade (NDA) mediante solicitação prévia.
                            </p>
                            <p>
                                <strong>3. Direitos do Titular:</strong> Em conformidade com a LGPD (Lei nº 13.709/2018), você pode solicitar a qualquer momento a confirmação, retificação ou exclusão permanente dos seus dados de nossa base através do e-mail <em>stackblackzada@gmail.com</em>.
                            </p>
                        </div>
                        <div className="mt-6 text-right">
                            <button
                                onClick={() => setPrivacyModalOpen(false)}
                                className="px-5 py-2 rounded-xl bg-brand-accent text-brand-dark font-code font-bold text-xs hover:scale-105 transition-transform"
                            >
                                Entendi e Concordo
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}
