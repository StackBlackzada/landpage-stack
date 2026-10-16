export default function Hero({ t }) {
    return (
        <section
            id="hero"
            className="relative w-full min-h-[90svh] pt-32 pb-20 px-4 sm:px-6 flex items-center justify-center overflow-hidden bg-white dark:bg-black/50 transition-colors duration-300"
        >
            {/* Grid Tecnológico de Fundo */}
            <div className="absolute inset-0 bg-tech-grid opacity-10 dark:opacity-15 pointer-events-none z-0 animate-pulse duration-[10000ms]"></div>

            {/* Fundo com Marca d'Água Prata */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                <img
                    src="/logo_metalizada_sb.png"
                    alt="Logo Stack Blackzada"
                    className="w-[350px] sm:w-[600px] h-auto object-contain opacity-[0.04] dark:opacity-[0.08] grayscale select-none transition-transform duration-1000 ease-out hover:scale-105"
                />
            </div>

            {/* Container Principal */}
            <div className="w-full max-w-4xl mx-auto text-center z-10">
                
                {/* Badge Superior Verde Esmeralda */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md mb-8 shadow-sm hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-0.5 cursor-default group">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-code text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-300 transition-colors">
                        Software Sob Medida & Inteligência Artificial
                    </span>
                </div>

                {/* Título Principal */}
                <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.15] text-black dark:text-white transition-all duration-500">
                    Construímos o{' '}
                    <span className="relative inline-block text-emerald-600 dark:text-emerald-400 transition-all duration-300 hover:scale-[1.02] cursor-default group">
                        <span className="relative z-10">sistema ideal</span>
                        <span className="absolute bottom-1 left-0 w-full h-[3px] bg-emerald-500/40 rounded group-hover:bg-emerald-400 group-hover:h-[6px] transition-all duration-300"></span>
                    </span>{' '}
                    para a sua operação escalar sem travas.
                </h1>

                {/* Descrição */}
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-normal mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-300 hover:text-black dark:hover:text-white">
                    Desenvolvimento de software corporativo sob medida, agentes inteligentes de IA e integrações de alta performance. Código proprietário e arquitetura robusta.
                </p>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    {/* Botão Principal - Solicitar Proposta */}
                    <a
                        href="#contato"
                        className="relative inline-flex items-center justify-center pl-7 pr-14 py-4 overflow-hidden font-code font-bold text-sm text-black bg-emerald-400 border-2 border-emerald-400 rounded-full group shadow-md hover:shadow-emerald-500/20 hover:shadow-xl transition-all duration-500 w-full sm:w-auto text-center transform hover:-translate-y-1 active:translate-y-0"
                    >
                        <span className="absolute left-0 block w-full h-0 transition-all duration-500 ease-out bg-emerald-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0"></span>
                        <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
                            Solicitar Proposta
                        </span>
                        <span className="absolute right-4 flex items-center justify-center w-8 h-8 rounded-full bg-black/10 text-black transition-all duration-500 transform group-hover:rotate-90">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                    </a>

                    {/* Botão Secundário - Ver Entregáveis (Ajustado para o modo claro) */}
                    <a
                        href="#entregaveis"
                        className="relative w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 overflow-hidden rounded-full font-code font-bold text-sm text-black dark:text-white bg-gray-100 dark:bg-zinc-900 border border-emerald-500/30 group hover:bg-emerald-50 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-emerald-400 hover:ring-2 hover:ring-offset-2 hover:ring-emerald-400 transition-all ease-out duration-300 shadow-sm"
                    >
                        {/* Efeito Feixe de Luz */}
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-emerald-400/30 dark:bg-emerald-400 opacity-30 rotate-12 group-hover:-translate-x-60 ease"></span>
                        
                        <span className="relative z-10 flex items-center gap-2">
                            <span>Ver Entregáveis</span>
                            <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </a>
                </div>

                {/* Cards de Indicadores */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto pt-8 border-t border-gray-200 dark:border-zinc-800 font-code text-xs">
                    <div className="p-3.5 rounded-xl bg-gray-50/50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 flex items-center justify-center sm:justify-start gap-2.5 text-gray-700 dark:text-gray-300 hover:border-emerald-400 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-sm group cursor-default">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform duration-300"></span>
                        <span><strong>Propriedade 100% sua</strong> (zero lock-in)</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-gray-50/50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 flex items-center justify-center sm:justify-start gap-2.5 text-gray-700 dark:text-gray-300 hover:border-emerald-400 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-sm group cursor-default">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform duration-300"></span>
                        <span><strong>Ciclos quinzenais</strong> testáveis</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-gray-50/50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 flex items-center justify-center sm:justify-start gap-2.5 text-gray-700 dark:text-gray-300 hover:border-emerald-400 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-sm group cursor-default">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform duration-300"></span>
                        <span><strong>Diagnóstico em 24h</strong> úteis</span>
                    </div>
                </div>

            </div>
        </section>
    );
}