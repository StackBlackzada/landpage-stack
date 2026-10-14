import { useState } from 'react';

export default function Navbar({ lang, onLangChange, onToggleTheme, t }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '#servicos', label: 'Serviços' },
        { href: '#como-trabalhamos', label: 'Como Trabalhamos' },
        { href: '#entregaveis', label: 'Entregáveis' },
        { href: '#prova-de-confianca', label: 'Garantias & Cases' },
        { href: '#sobre', label: 'Sobre' },
    ];

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            <nav
                id="navbar"
                className="backdrop-blur-md bg-brand-light/90 dark:bg-darkbg-nav/90 border-b border-brand-subtle/10 dark:border-brand-accent/15 px-4 sm:px-6 py-3 flex justify-between items-center transition-all duration-300"
            >
                {/* Logo e Título */}
                <a href="#" className="flex items-center gap-2.5 select-none shrink-0 group">
                    <img
                        src="/logo_metalizada_sb.png"
                        alt="Logo Stack Blackzada"
                        className="h-8 sm:h-9 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex flex-col min-w-0">
                        <span className="font-display font-black text-sm sm:text-lg tracking-normal uppercase text-brand-dark dark:text-white leading-none">
                            STACK <span className="text-brand-subtle dark:text-brand-accent">BLACKZADA</span>
                        </span>
                        <span className="font-code text-[9px] sm:text-[10px] text-brand-subtle/80 dark:text-brand-accent/70 tracking-widest mt-0.5 font-bold uppercase">
                            Software Sob Medida
                        </span>
                    </div>
                </a>

                {/* Links Desktop */}
                <div className="hidden lg:flex items-center gap-6 font-code text-xs font-semibold text-brand-dark/85 dark:text-gray-200">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-brand-subtle dark:hover:text-brand-accent transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-accent hover:after:w-full after:transition-all after:duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Controles da Direita */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    {/* Seletor de Idioma */}
                    <div className="relative">
                        <select
                            id="language-select"
                            aria-label="Selecionar Idioma"
                            value={lang}
                            onChange={(e) => onLangChange(e.target.value)}
                            className="bg-white/80 dark:bg-darkbg-card border border-brand-subtle/30 dark:border-brand-accent/40 text-brand-dark dark:text-gray-200 text-xs font-code font-bold rounded-full px-2 sm:px-2.5 py-1.5 outline-none cursor-pointer shadow-inner transition-colors"
                        >
                            <option value="pt">PT</option>
                            <option value="en">EN</option>
                            <option value="es">ES</option>
                        </select>
                    </div>

                    {/* Botão Tema Claro/Escuro */}
                    <button
                        id="theme-toggle"
                        aria-label="Alternar Tema"
                        onClick={onToggleTheme}
                        className="relative w-12 h-7 rounded-full bg-white/80 dark:bg-darkbg-card border border-brand-subtle/30 dark:border-brand-accent/40 p-0.5 transition-colors flex items-center shadow-inner cursor-pointer shrink-0"
                    >
                        <div
                            id="switch-thumb"
                            className="w-5 h-5 rounded-full bg-brand-dark dark:bg-brand-accent shadow-md flex items-center justify-center transition-transform duration-300 translate-x-0 dark:translate-x-5 text-white dark:text-brand-dark"
                        >
                            <svg className="w-3 h-3 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" />
                            </svg>
                            <svg className="hidden dark:block w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        </div>
                    </button>

                    {/* Botão CTA Principal da Navbar */}
                    <a
                        href="#contato"
                        className="btn-shine hidden sm:inline-flex px-4 sm:px-5 py-2 rounded-full bg-brand-accent text-brand-dark font-code font-bold text-xs sm:text-sm glow-effect hover:scale-105 active:scale-95 transition-all shadow-md items-center gap-1.5"
                    >
                        <span>Solicitar Proposta</span>
                        <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>

                    {/* Botão Hambúrguer Mobile */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Abrir Menu de Navegação"
                        className="lg:hidden p-2 rounded-lg text-brand-dark dark:text-white hover:bg-brand-accent/20 transition-colors focus:outline-none"
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
                <div className="lg:hidden bg-brand-light/95 dark:bg-darkbg-card/95 backdrop-blur-md border-b border-brand-subtle/15 dark:border-brand-accent/20 px-6 py-5 space-y-4 shadow-xl">
                    <div className="flex flex-col space-y-3 font-code text-sm font-semibold text-brand-dark dark:text-gray-200">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="py-2 border-b border-brand-subtle/10 dark:border-brand-accent/10 hover:text-brand-subtle dark:hover:text-brand-accent transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="pt-2">
                        <a
                            href="#contato"
                            onClick={handleLinkClick}
                            className="btn-shine w-full text-center py-3 rounded-xl bg-brand-accent text-brand-dark font-code font-bold text-sm block shadow-md"
                        >
                            Solicitar Proposta Técnica
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
