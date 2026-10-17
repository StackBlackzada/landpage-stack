export default function Deliverables({ t }) {
    const deliverables = [
        {
            number: '01',
            title: 'Código-Fonte 100% seu (Zero Lock-in)',
            desc: 'Você recebe o repositório Git privado completo com transferência formal de propriedade intelectual. Sem mensalidades de aluguel e sem taxas ocultas para migrar.',
            badge: 'PROPRIEDADE TOTAL',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
        },
        {
            number: '02',
            title: 'Ambiente em Produção & Pipeline CI/CD',
            desc: 'Configuração completa em nuvem corporativa (AWS, Google Cloud, Azure ou similar) com rotinas de deploy automatizado e monitoramento de disponibilidade.',
            badge: 'DEVOPS PROFISSIONAL',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
        },
        {
            number: '03',
            title: 'Documentação Técnica & Manual de Uso',
            desc: 'Diagramas de arquitetura, documentação clara de APIs (padrão OpenAPI/Swagger) e guia passo a passo em linguagem acessível para sua equipe operar com autonomia.',
            badge: 'AUTONOMIA TÉCNICA',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            number: '04',
            title: 'Testes Automatizados & Segurança de Dados',
            desc: 'Suíte de testes para prevenir quebras futuras, validação de regras críticas de negócio e adequação rigorosa aos padrões de segurança e privacidade (LGPD).',
            badge: 'ESTABILIDADE & LGPD',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            number: '05',
            title: 'Treinamento & Sessões de Onboarding',
            desc: 'Sessão guiada de capacitação da equipe que utilizará a plataforma no dia a dia, com gravação disponibilizada para onboarding de novos colaboradores.',
            badge: 'CAPACITAÇÃO DA EQUIPE',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            number: '06',
            title: 'Garantia Contratual & Suporte Pós-Entrega',
            desc: 'Período formal de garantia pós-lançamento estabelecido em contrato para ajustes operacionais, com opção de plano de sustentação técnica continuada com SLA definido.',
            badge: 'SUPORTE COM SLA',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636l3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50/50 dark:bg-zinc-950/50 relative z-20 border-y border-emerald-500/15 dark:border-emerald-500/10" id="entregaveis">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 sm:mb-20">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md mb-4 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-code text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                            // COMPROMISSO DE TRANSPARÊNCIA
                        </span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-5xl font-black text-black dark:text-white mb-5 tracking-tight">
                        O que sua empresa recebe <span className="text-emerald-600 dark:text-emerald-400 relative inline-block">concretamente <span className="absolute bottom-1 left-0 w-full h-[3px] bg-emerald-500/40 rounded"></span></span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Eliminamos o risco de caixa preta. Você tem clareza exata de cada item tangível entregue em contrato, do código à sustentação.
                    </p>
                </div>

                {/* Grid 6 cards de entregáveis alinhados em altura (h-full) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                    {deliverables.map((item) => (
                        <div
                            key={item.number}
                            className="group relative rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/80 p-6 sm:p-7 flex flex-col justify-between h-full shadow-lg shadow-black/[0.02] dark:shadow-black/40 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Linha Dinâmica Superior */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 opacity-80 group-hover:from-emerald-500 group-hover:via-emerald-300 group-hover:to-emerald-500 group-hover:opacity-100 transition-all duration-500"></div>

                            <div className="flex flex-col">
                                <div className="flex items-center justify-between mb-5 pt-1">
                                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <span className="font-code text-[11px] font-bold text-gray-500 dark:text-gray-400 tracking-wider bg-gray-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded-md border border-gray-200 dark:border-zinc-700">
                                        ENTREGÁVEL #{item.number}
                                    </span>
                                </div>

                                <span className="inline-block font-code text-[10px] font-bold tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 px-2.5 py-1 rounded-md mb-3 w-fit">
                                    {item.badge}
                                </span>

                                <h3 className="font-display text-lg sm:text-xl font-bold text-black dark:text-white mb-2.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Rodapé do card fixo embaixo */}
                            <div className="pt-4 mt-auto border-t border-gray-200/50 dark:border-zinc-800/80 flex items-center gap-2 font-code text-xs font-medium text-gray-700 dark:text-gray-300">
                                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Garantido em contrato</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner de destaque anti-lock-in */}
                <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-emerald-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-black/[0.02]">
                    <div>
                        <h4 className="font-display text-lg sm:text-xl font-bold text-black dark:text-white mb-1">
                            Sua empresa dona do próprio ativo digital
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                            Se um dia você desejar assumir o sistema internamente ou contratar outra equipe, todo o código, documentação e infraestrutura estão prontos para transferência imediata.
                        </p>
                    </div>
                    <a
                        href="#contato"
                        className="box-border relative z-30 inline-flex items-center justify-center w-auto px-7 py-3.5 overflow-hidden font-code font-bold text-xs sm:text-sm text-black bg-emerald-400 border-2 border-emerald-400 rounded-full group shadow-md hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:-translate-y-0.5 shrink-0 ease"
                    >
                        <span className="absolute left-0 block w-full h-0 transition-all duration-500 ease-out bg-emerald-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0"></span>
                        <span className="relative z-10 flex items-center gap-2 text-black">
                            <span>Solicitar Proposta Técnica</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}