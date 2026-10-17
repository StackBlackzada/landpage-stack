export default function Services({ t }) {
    const services = [
        {
            code: 'SRV_01',
            title: 'Software Sob Medida (Web & Mobile)',
            benefit:
                'Construção de plataformas corporativas, portais de clientes, ERPs internos e aplicativos nativos projetados sob medida para as particularidades da sua operação.',
            target: 'Empresas que superaram soluções genéricas de mercado e precisam de um sistema central proprietário e escalável.',
            features: ['Arquitetura escalável', 'Design intuitivo (UI/UX)', 'Multiplataforma Web e Mobile', 'Código 100% proprietário'],
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            code: 'SRV_02',
            title: 'Automações & Soluções com IA',
            benefit:
                'Agentes inteligentes para triagem e qualificação de clientes no WhatsApp, automação de processamento de documentos e fluxos operacionais que trabalham 24/7.',
            target: 'Operações com alto volume de tarefas repetitivas, atendimento ou necessidade de análise ágil de grandes volumes de dados.',
            features: ['Integração com WhatsApp Oficial', 'Modelos LLM customizados', 'Extração de dados e OCR', 'Fluxos autônomos sem erros'],
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            code: 'SRV_03',
            title: 'Integrações de Sistemas & APIs',
            benefit:
                'Conexão segura e em tempo real entre seus sistemas internos, gateways de pagamento, plataformas fiscais, CRMs e ERPs legados, eliminando retrabalho de digitação.',
            target: 'Empresas que utilizam múltiplos softwares que não conversam entre si, gerando ilhas de dados e divergências operacionais.',
            features: ['Webhooks e Filas Assíncronas', 'APIs REST e GraphQL seguras', 'Sincronização bidirecional', 'Logs de auditoria em tempo real'],
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            code: 'SRV_04',
            title: 'Consultoria de Arquitetura & Cloud',
            benefit:
                'Diagnóstico profundo de código-fonte legado, otimização de infraestrutura em nuvem para redução de custos, implementação de DevOps e auditoria de segurança.',
            target: 'Negócios com sistemas instáveis, lentos, com custos descontrolados de servidores ou que precisam de um parecer técnico confiável.',
            features: ['Auditoria de segurança e LGPD', 'Otimização de custos de nuvem', 'Estratégia de modernização', 'Pipelines CI/CD automatizadas'],
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-20" id="servicos">
            {/* Header da seção */}
            <div className="text-center mb-14 sm:mb-20">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md mb-4 shadow-sm hover:border-emerald-400 transition-all duration-300">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-code text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                        // SOLUÇÕES TECNOLÓGICAS
                    </span>
                </div>
                
                <h2 className="font-display text-3xl sm:text-5xl font-black text-black dark:text-white mb-5 tracking-tight">
                    Serviços desenhados para gerar <span className="text-emerald-600 dark:text-emerald-400 relative inline-block">eficiência e receita <span className="absolute bottom-1 left-0 w-full h-[3px] bg-emerald-500/40 rounded"></span></span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Não desenvolvemos apenas telas bonitas. Projetamos arquiteturas robustas para resolver os problemas reais da sua empresa.
                </p>
            </div>

            {/* Grid 2 colunas com alinhamento rigoroso em altura (h-full) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                {services.map((s) => (
                    <div
                        key={s.code}
                        className="group relative rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-gray-200/80 dark:border-zinc-800/80 p-6 sm:p-8 flex flex-col justify-between h-full shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                    >
                        {/* Linha Dinâmica Superior (Efeito de Brilho no Hover) */}
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 opacity-80 group-hover:from-emerald-500 group-hover:via-emerald-300 group-hover:to-emerald-500 group-hover:opacity-100 transition-all duration-500"></div>

                        {/* Conteúdo Principal Superior */}
                        <div className="flex flex-col">
                            {/* Top info */}
                            <div className="flex justify-between items-center mb-6 pt-1">
                                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                    {s.icon}
                                </div>
                                <span className="font-code text-[11px] font-bold text-gray-500 dark:text-gray-400 tracking-wider bg-gray-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded-md border border-gray-200 dark:border-zinc-700">
                                    {s.code}
                                </span>
                            </div>

                            {/* Título & Benefício */}
                            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                {s.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                {s.benefit}
                            </p>

                            {/* Bullet points de diferenciais */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 font-code text-xs text-gray-700 dark:text-gray-300">
                                {s.features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Para quem serve (Forçado na parte inferior mantendo o alinhamento) */}
                        <div className="pt-5 border-t border-gray-100 dark:border-zinc-800/80 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.04] -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-2xl border-l-2 border-l-emerald-500/60 transition-colors duration-300 group-hover:bg-emerald-500/[0.05] dark:group-hover:bg-emerald-500/[0.08] mt-auto">
                            <span className="font-code text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                                PARA QUEM SERVE:
                            </span>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {s.target}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Micro CTA com o mesmo padrão refinado */}
            <div className="mt-14 text-center">
                <a
                    href="#contato"
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-7 py-3.5 overflow-hidden font-code font-bold text-xs sm:text-sm text-black bg-emerald-400 border-2 border-emerald-400 rounded-full group shadow-md hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:-translate-y-0.5 ease"
                >
                    <span className="absolute left-0 block w-full h-0 transition-all duration-500 ease-out bg-emerald-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0"></span>
                    <span className="relative z-10 flex items-center gap-2.5 text-black">
                        <span>Falar com especialista sobre seu projeto</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </a>
            </div>
        </section>
    );
}