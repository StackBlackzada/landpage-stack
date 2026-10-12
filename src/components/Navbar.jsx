export default function Navbar({ lang, onLangChange, onToggleTheme, t }) {
    return (
        <nav id="navbar" className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-brand-light/80 dark:bg-darkbg-nav/80 border-b border-brand-subtle/10 dark:border-brand-accent/10 px-3 sm:px-6 py-3 flex justify-between items-center gap-2 transition-all duration-300">
            {/* Logo e Título (Sem tag de link) */}
            <div className="flex items-center gap-2 sm:gap-3 select-none min-w-0">
                <img src="/logo_metalizada_sb.png" alt="Logo Stack Blackzada" className="h-8 sm:h-9 w-auto object-contain shrink-0" />
                <div className="flex flex-col min-w-0">
                    <span className="font-display font-black text-sm sm:text-xl tracking-normal sm:tracking-wider uppercase text-brand-dark dark:text-white leading-none whitespace-nowrap">
                        STACK <span className="text-brand-subtle dark:text-brand-accent">BLACKZADA</span>
                    </span>
                    <span className="hidden sm:block font-code text-[10px] text-brand-subtle/80 dark:text-brand-accent/70 tracking-widest mt-0.5">&lt;SOFTWARE_HOUSE /&gt;</span>
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                {/* Seletor de Idioma */}
                <div className="relative">
                    <select
                        id="language-select"
                        aria-label="Selecionar Idioma"
                        value={lang}
                        onChange={(e) => onLangChange(e.target.value)}
                        className="bg-white/80 dark:bg-darkbg-card border border-brand-subtle/30 dark:border-brand-accent/40 text-brand-dark dark:text-gray-200 text-xs font-code font-bold rounded-full px-2 sm:px-3 py-2 outline-none cursor-pointer shadow-inner transition-colors duration-300"
                    >
                        <option value="pt">PT</option>
                        <option value="en">EN</option>
                        <option value="es">ES</option>
                    </select>
                </div>

                {/* Botão de Interrupção (Switch Slider) para Modo Claro / Escuro */}
                <button id="theme-toggle" aria-label="Alternar Tema" onClick={onToggleTheme} className="relative w-14 h-8 rounded-full bg-white/80 dark:bg-darkbg-card border border-brand-subtle/30 dark:border-brand-accent/40 p-1 transition-colors duration-300 flex items-center shadow-inner cursor-pointer shrink-0">
                    {/* Bolinha do Interrupção */}
                    <div id="switch-thumb" className="w-6 h-6 rounded-full bg-brand-dark dark:bg-brand-accent shadow-md flex items-center justify-center transition-transform duration-300 translate-x-0 dark:translate-x-6 text-white dark:text-brand-dark">
                        {/* Ícone Sol */}
                        <svg className="w-3.5 h-3.5 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" />
                        </svg>
                        {/* Ícone Lua */}
                        <svg className="hidden dark:block w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </div>
                </button>

                {/* BOTÃO DE CONTATO 1 (NAVBAR) - escondido no celular, o CTA do final já cobre */}
                <a href="#contato" className="hidden sm:flex btn-shine group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-accent to-emerald-300 text-brand-dark font-code font-bold text-sm shadow-[0_0_15px_rgba(32,227,189,0.5)] hover:shadow-[0_0_25px_rgba(32,227,189,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 border border-brand-accent/50 items-center gap-2">
                    {t('nav_contact')}
                </a>
            </div>
        </nav>
    );
}
