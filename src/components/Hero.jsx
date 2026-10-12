export default function Hero({ t }) {
    return (
        <div id="hero-wrapper" className="relative w-full h-[100svh] overflow-hidden">
            <section className="relative w-full h-[100svh] flex items-center justify-center px-4 sm:px-6 overflow-hidden" id="hero">

                {/* Detalhes Geométricos Tech no Fundo */}
                <div className="absolute w-[92vw] max-w-5xl h-[72svh] border border-brand-subtle/10 dark:border-brand-accent/15 pointer-events-none flex justify-between p-4 rounded-3xl">
                    <div className="w-4 h-4 border-t-2 border-l-2 border-brand-accent"></div>
                    <div className="w-4 h-4 border-t-2 border-r-2 border-brand-accent"></div>
                </div>

                {/* Conteúdo Principal do Hero com Glassmorphism reforçado */}
                <div className="w-full max-w-4xl mx-auto text-center z-20 hero-content pointer-events-auto will-change-transform bg-white/50 dark:bg-darkbg-card/75 backdrop-blur-sm p-6 sm:p-12 rounded-3xl border border-white/70 dark:border-brand-accent/20 shadow-2xl">
                    <div className="inline-flex items-center gap-2 border border-brand-subtle/40 dark:border-brand-accent/40 px-3 sm:px-4 py-1.5 rounded-full bg-white/80 dark:bg-darkbg-main/80 mb-5 sm:mb-6 font-code text-[10px] sm:text-xs shadow-sm">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-ping"></span>
                        <span className="text-brand-dark dark:text-brand-accent font-bold uppercase tracking-widest">
                            {'// DEV_PRESENTATION'}
                        </span>
                    </div>

                    <h1 className="font-display text-3xl min-[380px]:text-4xl sm:text-7xl font-black tracking-tight mb-4 sm:mb-6 leading-tight text-hero-title">
                        <span>{t('hero_title_1')}</span> <br /><span className="text-hero-highlight">Blackzada.</span>
                    </h1>

                    <p className="text-base sm:text-2xl text-brand-dark/90 dark:text-gray-200 font-medium mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                        {t('hero_subtitle')}
                    </p>

                    <div className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-brand-accent text-brand-dark font-code font-bold text-base sm:text-lg glow-effect hover:scale-105 transition-transform">
                        <span>{t('hero_scroll')}</span>
                        <svg className="w-5 h-5 stroke-current stroke-[2.5] shrink-0" fill="none" viewBox="0 0 24 24">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* IMAGEM COM FILTRO DE ILUMINAÇÃO NEON QUE DISFARÇA A QUALIDADE */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none hero-bg-logo will-change-transform">
                    <img src="/logo_metalizada_sb.png" alt="Logo Stack Blackzada" className="w-[240px] sm:w-[450px] h-auto object-contain hero-img-filter opacity-90" />
                </div>

                {/* Fundo Gradiente e Vignette para suavizar as bordas da foto */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-light/40 via-transparent to-brand-light dark:from-darkbg-main/40 dark:via-transparent dark:to-darkbg-main z-0"></div>
            </section>
        </div>
    );
}
