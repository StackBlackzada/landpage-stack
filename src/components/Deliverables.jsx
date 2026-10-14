export default function Deliverables({ t }) {
    const deliverables = [
        {
            number: '01',
            title: 'Código-Fonte 100% seu (Zero Lock-in)',
            desc: 'Você recebe o repositório Git privado completo com transferência formal de propriedade intelectual. Sem mensalidades de aluguel e sem taxas ocultas para migrar.',
            badge: 'PROPRIEDADE TOTAL',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-card/40 dark:bg-darkbg-card/40 relative z-20 border-y border-brand-subtle/10 dark:border-brand-accent/10" id="entregaveis">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="font-code text-xs text-brand-subtle dark:text-brand-accent tracking-widest mb-2 font-bold uppercase">
                        {'// COMPROMISSO DE TRANSPARÊNCIA'}
                    </div>
                    <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-dark dark:text-white mb-4">
                        O que sua empresa recebe concretamente
                    </h2>
                    <p className="text-brand-dark/80 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Eliminamos o risco de caixa preta. Você tem clareza exata de cada item tangível entregue em contrato, do código à sustentação.
                    </p>
                </div>

                {/* Grid 6 cards de entregáveis */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {deliverables.map((item) => (
                        <div
                            key={item.number}
                            className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-brand-accent/60 transition-all duration-300 group shadow-md"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-accent/20 dark:bg-brand-accent/15 flex items-center justify-center text-brand-dark dark:text-brand-accent group-hover:scale-105 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="font-code text-xs font-bold text-brand-subtle/80 dark:text-brand-accent/80 tracking-widest">
                                        ENTREGÁVEL #{item.number}
                                    </span>
                                </div>

                                <span className="inline-block font-code text-[10px] font-bold tracking-wider text-brand-subtle dark:text-brand-accent bg-brand-accent/10 dark:bg-brand-accent/20 px-2.5 py-1 rounded mb-3">
                                    {item.badge}
                                </span>

                                <h3 className="font-display text-lg sm:text-xl font-bold text-brand-dark dark:text-white mb-2.5 group-hover:text-brand-subtle dark:group-hover:text-brand-accent transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-xs sm:text-sm text-brand-dark/75 dark:text-gray-300 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="pt-4 mt-4 border-t border-brand-subtle/10 dark:border-brand-accent/15 flex items-center gap-1.5 font-code text-xs font-medium text-brand-subtle/90 dark:text-brand-accent/90">
                                <svg className="w-4 h-4 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Garantido em contrato</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner de destaque anti-lock-in */}
                <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-subtle/10 via-brand-accent/15 to-brand-subtle/10 dark:from-darkbg-card dark:via-brand-accent/10 dark:to-darkbg-card border border-brand-accent/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                    <div>
                        <h4 className="font-display text-lg sm:text-xl font-bold text-brand-dark dark:text-white mb-1">
                            Sua empresa dona do próprio ativo digital
                        </h4>
                        <p className="text-sm text-brand-dark/80 dark:text-gray-300 max-w-2xl">
                            Se um dia você desejar assumir o sistema internamente ou contratar outra equipe, todo o código, documentação e infraestrutura estão prontos para transferência imediata.
                        </p>
                    </div>
                    <a
                        href="#contato"
                        className="btn-shine shrink-0 px-6 py-3 rounded-full bg-brand-accent text-brand-dark font-code font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition-transform"
                    >
                        Solicitar Proposta Técnica
                    </a>
                </div>
            </div>
        </section>
    );
}
