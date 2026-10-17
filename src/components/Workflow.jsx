export default function Workflow({ t }) {
    const steps = [
        {
            n: '01',
            title: 'Diagnóstico & Imersão Técnica',
            timeline: 'Prazo: 2 a 5 dias úteis',
            desc: 'Realizamos uma sessão técnica e estratégica para mapear os processos da sua empresa, identificar gargalos operacionais e definir as prioridades essenciais de desenvolvimento.',
            outcome: 'Documento de visão do produto e escopo técnico inicial alinhado.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            n: '02',
            title: 'Arquitetura & Proposta Técnica',
            timeline: 'Prazo: Até 48h após o diagnóstico',
            desc: 'Desenhamos a arquitetura do sistema, selecionamos a infraestrutura ideal e apresentamos uma proposta transparente com prazos, marcos de entrega e modelo de investimento fixo.',
            outcome: 'Proposta comercial e técnica detalhada sem custos ocultos.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            n: '03',
            title: 'Desenvolvimento em Ciclos Ágeis (Sprints)',
            timeline: 'Entregas: Ciclos quinzenais',
            desc: 'O software é construído em ciclos iterativos de 2 semanas. A cada ciclo realizamos uma demonstração ao vivo em ambiente de homologação para sua equipe testar e aprovar as telas e regras.',
            outcome: 'Evolução contínua e visível com validações periódicas.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
        },
        {
            n: '04',
            title: 'Homologação & Go-Live em Produção',
            timeline: 'Prazo: Conforme cronograma acordado',
            desc: 'Execução de testes de carga, testes de segurança e configuração de ambiente oficial em nuvem com rotinas de backup. Realizamos a virada de chave com acompanhamento assistido.',
            outcome: 'Sistema 100% no ar, homologado e pronto para uso real.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            ),
        },
        {
            n: '05',
            title: 'Treinamento, Documentação & Suporte',
            timeline: 'Garantia pós-entrega + SLA contínuo',
            desc: 'Capacitamos sua equipe na utilização diária da ferramenta, entregamos a documentação completa e iniciamos o período formal de garantia e sustentação com tempo de resposta garantido.',
            outcome: 'Equipe autônoma e tranquilidade operacional garantida.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636l3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section
            className="py-20 sm:py-28 px-4 sm:px-6 relative z-20 max-w-5xl mx-auto"
            id="como-trabalhamos"
        >
            <div className="w-full">
                {/* Header da Seção */}
                <div className="text-center mb-16 sm:mb-20">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md mb-4 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-code text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                            // METODOLOGIA & PREVISIBILIDADE
                        </span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-5xl font-black text-black dark:text-white mb-5 tracking-tight">
                        Do diagnóstico à produção em <span className="text-emerald-600 dark:text-emerald-400 relative inline-block">5 etapas claras <span className="absolute bottom-1 left-0 w-full h-[3px] bg-emerald-500/40 rounded"></span></span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Um processo maduro que elimina surpresas de orçamento e garante que sua empresa receba exatamente o que contratou.
                    </p>
                </div>

                {/* Timeline vertical com efeito de vidro fosco avançado */}
                <div className="space-y-6 sm:space-y-8 relative border-l-2 border-emerald-500/30 dark:border-emerald-500/30 pl-6 sm:pl-12 ml-4 sm:ml-10">
                    {steps.map((step) => (
                        <div key={step.n} className="relative group">
                            {/* Número redondo na linha do tempo */}
                            <div className="absolute -left-[37px] sm:-left-[61px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/80 dark:bg-zinc-900/90 backdrop-blur-md border-2 border-emerald-500 flex items-center justify-center font-code font-bold text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 shadow-sm group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                                {step.n}
                            </div>

                            {/* Card com efeito Glassmorphism refinado */}
                            <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/80 p-6 sm:p-7 shadow-lg shadow-black/[0.02] dark:shadow-black/40 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-500 transform hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                    <h3 className="font-display text-lg sm:text-xl font-bold text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <span className="font-code text-[11px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 px-3 py-1 rounded-md shrink-0 w-fit">
                                        {step.timeline}
                                    </span>
                                </div>

                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                                    {step.desc}
                                </p>

                                <div className="flex items-center gap-2 pt-4 border-t border-gray-200/50 dark:border-zinc-800 font-code text-xs text-gray-700 dark:text-gray-300">
                                    <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase text-[10px] sm:text-xs">
                                        Resultado da Etapa:
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400">{step.outcome}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}