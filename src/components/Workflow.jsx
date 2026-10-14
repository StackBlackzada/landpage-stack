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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section
            className="py-16 sm:py-24 px-4 sm:px-6 relative z-20"
            id="como-trabalhamos"
        >
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="font-code text-xs text-brand-subtle dark:text-brand-accent tracking-widest mb-2 font-bold uppercase">
                        {'// METODOLOGIA & PREVISIBILIDADE'}
                    </div>
                    <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-dark dark:text-white mb-4">
                        Do diagnóstico à produção em 5 etapas claras
                    </h2>
                    <p className="text-brand-dark/80 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Um processo maduro que elimina surpresas de orçamento e garante que sua empresa receba exatamente o que contratou.
                    </p>
                </div>

                {/* Timeline vertical */}
                <div className="space-y-8 sm:space-y-10 relative border-l-2 border-brand-subtle/30 dark:border-brand-accent/30 pl-6 sm:pl-10 ml-4 sm:ml-8 timeline-container">
                    {steps.map((step) => (
                        <div key={step.n} className="relative timeline-step">
                            {/* Número redondo na linha do tempo */}
                            <div className="absolute -left-[37px] sm:-left-[53px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-light dark:bg-darkbg-card border-2 border-brand-accent flex items-center justify-center font-code font-bold text-xs sm:text-sm text-brand-dark dark:text-brand-accent shadow">
                                {step.n}
                            </div>

                            {/* Card da etapa */}
                            <div className="glass-card p-5 sm:p-7 rounded-2xl border border-brand-subtle/20 dark:border-brand-accent/20 hover:border-brand-accent/50 transition-all duration-300 shadow-sm">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
                                    <h3 className="font-display text-lg sm:text-2xl font-bold text-brand-dark dark:text-white">
                                        {step.title}
                                    </h3>
                                    <span className="font-code text-[11px] sm:text-xs font-bold text-brand-subtle dark:text-brand-accent bg-brand-accent/10 dark:bg-brand-accent/20 px-2.5 py-1 rounded-md shrink-0 w-fit">
                                        {step.timeline}
                                    </span>
                                </div>

                                <p className="text-xs sm:text-sm text-brand-dark/80 dark:text-gray-300 leading-relaxed mb-4">
                                    {step.desc}
                                </p>

                                <div className="flex items-center gap-2 pt-3 border-t border-brand-subtle/10 dark:border-brand-accent/15 font-code text-xs text-brand-dark/85 dark:text-gray-200">
                                    <span className="font-bold text-brand-subtle dark:text-brand-accent uppercase text-[10px] sm:text-xs">
                                        Resultado da Etapa:
                                    </span>
                                    <span>{step.outcome}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
