import { useState, useEffect } from 'react';

export default function Navbar({ onToggleTheme, t }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '#servicos', label: 'Serviços' },
        { href: '#como-trabalhamos', label: 'Como Trabalhamos' },
        { href: '#entregaveis', label: 'Entregáveis' },
        { href: '#prova-de-confianca', label: 'Garantias & Cases' },
        { href: '#sobre', label: 'Sobre' },
    ];

    // Fecha o menu mobile automaticamente ao rolar a página para evitar que fique flutuando
    useEffect(() => {
        const handleScroll = () => {
            if (mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [mobileMenuOpen]);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            <nav
                id="navbar"
                className="backdrop-blur-md bg-[#eaf0ec]/90 dark:bg-[#0d1410]/90 border-b border-[#a3b8ac]/20 dark:border-[#8fa89b]/20 px-3 sm:px-6 py-2.5 sm:py-3 flex justify-between items-center transition-all duration-300"
            >
                {/* Logo e Título */}
                <a href="#" className="flex items-center gap-2 select-none shrink-0 group min-w-0">
                    <img
                        src="/logo_metalizada_sb.png"
                        alt="Logo Stack Blackzada"
                        className="h-7 sm:h-9 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex flex-col min-w-0">
                        <span className="font-display font-black text-xs sm:text-lg tracking-normal uppercase text-[#1a2620] dark:text-[#f0f5f2] leading-tight truncate">
                            STACK <span className="text-[#5c7a6b] dark:text-[#9bc2ad]">BLACKZADA</span>
                        </span>
                        <span className="font-code text-[8px] sm:text-[10px] text-[#5c7a6b]/80 dark:text-[#9bc2ad]/70 tracking-widest font-bold uppercase truncate">
                            Software Sob Medida
                        </span>
                    </div>
                </a>

                {/* Links Desktop */}
                <div className="hidden lg:flex items-center gap-6 font-code text-xs font-semibold text-[#1a2620]/85 dark:text-gray-200">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-[#5c7a6b] dark:hover:text-[#9bc2ad] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#9bc2ad] hover:after:w-full after:transition-all after:duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Controles da Direita */}
                <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                    {/* Botão Tema Claro/Escuro */}
                    <button
                        id="theme-toggle"
                        aria-label="Alternar Tema"
                        onClick={onToggleTheme}
                        className="relative w-10 sm:w-12 h-6 sm:h-7 rounded-full bg-white/80 dark:bg-[#15201a] border border-[#a3b8ac]/30 dark:border-[#9bc2ad]/40 p-0.5 transition-colors flex items-center shadow-inner cursor-pointer shrink-0"
                    >
                        <div
                            id="switch-thumb"
                            className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#1a2620] dark:bg-[#9bc2ad] shadow-md flex items-center justify-center transition-transform duration-300 translate-x-0 dark:translate-x-4 sm:dark:translate-x-5 text-white dark:text-[#1a2620]"
                        >
                            <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" />
                            </svg>
                            <svg className="hidden dark:block w-2.5 sm:w-3 h-2.5 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        </div>
                    </button>

                    {/* Botão CTA Principal da Navbar com Efeito Robusto */}
                    <a
                        href="#contato"
                        className="hidden sm:inline-flex relative items-center justify-center px-6 py-2.5 overflow-hidden font-code font-bold text-xs sm:text-sm rounded-full group border-2 border-[#9bc2ad] text-[#9bc2ad] shadow-md transition-all shrink-0"
                    >
                        <span className="absolute inset-0 w-full h-full bg-[#9bc2ad] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#1a2620]">
                            Solicitar Proposta
                        </span>
                    </a>

                    {/* Botão Hambúrguer Mobile */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Abrir Menu de Navegação"
                        className="lg:hidden p-1.5 sm:p-2 rounded-lg text-[#1a2620] dark:text-white hover:bg-[#9bc2ad]/20 transition-colors focus:outline-none shrink-0"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Menu Dropdown Mobile */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-[#eaf0ec]/95 dark:bg-[#15201a]/95 backdrop-blur-md border-b border-[#a3b8ac]/15 dark:border-[#9bc2ad]/20 px-6 py-5 space-y-4 shadow-xl">
                    <div className="flex flex-col space-y-2 font-code text-sm font-semibold text-[#1a2620] dark:text-gray-200">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="px-4 py-2.5 rounded-xl transition-all duration-300 hover:bg-[#9bc2ad]/15 hover:text-[#5c7a6b] dark:hover:text-[#9bc2ad]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="pt-2">
                        {/* Botão Mobile Limpo e Estável */}
                        <a
                            href="#contato"
                            onClick={handleLinkClick}
                            className="relative inline-flex items-center justify-center px-6 py-3.5 overflow-hidden font-code font-bold rounded-full group w-full border-2 border-[#9bc2ad] text-[#9bc2ad] shadow-md text-center text-sm"
                        >
                            <span className="absolute inset-0 w-full h-full bg-[#9bc2ad] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                            <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#1a2620]">
                                Solicitar Proposta Técnica
                            </span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}