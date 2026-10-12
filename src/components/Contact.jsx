export default function Contact({ t }) {
    return (
        <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 relative z-20" id="contato">
            <div className="w-full max-w-3xl mx-auto text-center cta-box">
                <span className="font-code text-xs text-brand-subtle dark:text-brand-accent block mb-1">{'// START_PROJECT'}</span>
                <span className="font-code text-brand-subtle dark:text-brand-accent text-xs sm:text-sm uppercase tracking-widest block mb-4 font-bold">&lt;VAMOS_CONVERSAR&gt;</span>
                <h2 className="font-display text-4xl sm:text-7xl font-black mb-5 sm:mb-6 leading-tight text-brand-dark dark:text-white">
                    <span>{t('cta_title_1')}</span> <span className="text-brand-subtle dark:text-brand-accent">{t('cta_title_highlight')}</span>
                </h2>
                <p className="text-lg sm:text-xl text-brand-dark/80 dark:text-gray-300 mb-8 leading-relaxed">
                    {t('cta_subtitle')}
                </p>

                {/* CONTATOS ADICIONAIS (E-MAIL E INSTAGRAM) */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 font-code text-sm">
                    <a href="mailto:stackblackzada@gmail.com" className="glass-card px-5 py-3 rounded-2xl flex items-center justify-center gap-2 hover:text-brand-subtle dark:hover:text-brand-accent transition-colors">
                        <svg className="w-4 h-4 shrink-0 text-brand-subtle dark:text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span className="break-all">stackblackzada@gmail.com</span>
                    </a>
                    <a href="https://instagram.com/stack.blackzada" target="_blank" rel="noopener" className="glass-card px-5 py-3 rounded-2xl flex items-center justify-center gap-2 hover:text-brand-subtle dark:hover:text-brand-accent transition-colors">
                        <svg className="w-4 h-4 shrink-0 text-brand-subtle dark:text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        <span>@stack.blackzada</span>
                    </a>
                </div>

                {/* BOTÃO DE CONTATO 2 (CTA PRINCIPAL VIA EMAIL) */}
                <a href="mailto:stackblackzada@gmail.com?subject=Iniciar%20Projeto" className="btn-shine group relative inline-flex items-center justify-center gap-3 sm:gap-4 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-brand-accent via-emerald-400 to-brand-accent bg-[length:200%_auto] text-brand-dark font-code font-extrabold text-lg sm:text-xl glow-effect hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/50 dark:border-brand-accent/50 shadow-2xl">
                    <span>{t('cta_button')}</span>
                    <svg className="w-6 h-6 stroke-current stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round"></line>
                        <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round"></polyline>
                    </svg>
                </a>
            </div>
        </section>
    );
}
