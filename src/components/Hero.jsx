export default function Hero({ t }) {
    return (
        <section
            id="hero"
            className="relative w-full min-h-[92svh] pt-24 sm:pt-28 pb-16 px-4 sm:px-6 flex items-center justify-center overflow-hidden z-10"
        >
            {/* Elementos Decorativos Tech de Fundo */}
            <div className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none z-0"></div>
            <div className="absolute w-[95vw] max-w-6xl h-[80%] border border-brand-subtle/10 dark:border-brand-accent/15 pointer-events-none flex justify-between p-4 rounded-3xl z-0">
                <div className="w-4 h-4 border-t-2 border-l-2 border-brand-accent"></div>
                <div className="w-4 h-4 border-t-2 border-r-2 border-brand-accent"></div>
            </div>

            {/* Fundo com iluminação sutil neon e logo em marca d'água */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                <img
                    src="/logo_metalizada_sb.png"
                    alt="Logo Marca Stack Blackzada"
                    className="w-[280px] sm:w-[500px] h-auto object-contain opacity-10 dark:opacity-15 blur-[1px] hero-img-filter transform -translate-y-4"
                />
            </div>

            {/* Conteúdo Principal do Hero */}
            <div className="w-full max-w-4xl mx-auto text-center z-10 hero-content pointer-events-auto">
                {/* Badge de Posicionamento */}
                <div className="inline-flex items-center gap-2 border border-brand-subtle/30 dark:border-brand-accent/40 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/80 dark:bg-darkbg-card/80 backdrop-blur-md mb-6 font-code text-[11px] sm:text-xs shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></span>
                    <span className="text-brand-dark dark:text-brand-accent font-bold uppercase tracking-wider">
                        [SOFTWARE SOB MEDIDA & IA] // FOCO EM RESULTADO OPERACIONAL
                    </span>
                </div>

                {/* Headline com foco no cliente B2B */}
                <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 sm:mb-6 leading-[1.15] text-hero-title">
                    Desenvolvemos o <span className="text-brand-subtle dark:text-brand-accent">software sob medida</span> que sua empresa precisa para escalar sem gargalos.
                </h1>

                {/* Subtítulo de alto valor */}
                <p className="text-base sm:text-xl text-brand-dark/85 dark:text-gray-200 font-normal mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                    Sistemas web e mobile, agentes com inteligência artificial e integrações de sistemas. Do diagnóstico técnico ao código em produção com propriedade 100% sua.
                </p>

                {/* CTAs Primário e Secundário */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 mb-12 sm:mb-14">
                    <a
                        href="#contato"
                        className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-brand-accent via-emerald-400 to-brand-accent bg-[length:200%_auto] text-brand-dark font-code font-extrabold text-base sm:text-lg glow-effect hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl border-2 border-white/40 dark:border-brand-accent/40"
                    >
                        <span>Solicitar Proposta sem Compromisso</span>
                        <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>

                    <a
                        href="#entregaveis"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full glass-card text-brand-dark dark:text-white font-code font-bold text-sm sm:text-base hover:border-brand-accent transition-all duration-300 shadow-md"
                    >
                        <span>Conhecer nossos Entregáveis</span>
                        <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </div>

                {/* 3 Indicadores de Confiança Rápidos */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto pt-6 border-t border-brand-subtle/15 dark:border-brand-accent/20 font-code text-xs sm:text-[13px]">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-brand-dark/90 dark:text-gray-200">
                        <svg className="w-4 h-4 text-brand-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span><strong>Código 100% seu</strong> (zero lock-in)</span>
                    </div>

                    <div className="flex items-center justify-center sm:justify-start gap-2 text-brand-dark/90 dark:text-gray-200">
                        <svg className="w-4 h-4 text-brand-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span><strong>Entregas quinzenais</strong> testáveis</span>
                    </div>

                    <div className="flex items-center justify-center sm:justify-start gap-2 text-brand-dark/90 dark:text-gray-200">
                        <svg className="w-4 h-4 text-brand-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span><strong>Diagnóstico em até 24h</strong> úteis</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
