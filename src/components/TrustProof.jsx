export default function TrustProof({ t }) {
    const cases = [
        {
            tag: 'LOGÍSTICA & DISTRIBUIÇÃO',
            title: 'Plataforma de Gestão Operacional & Rastreamento em Tempo Real',
            challenge: 'Processos manuais e planilhas dispersas geravam atrasos diários de despacho e retrabalho de conciliação de frotas.',
            solution: 'Desenvolvimento de aplicação web sob medida com dashboard em tempo real, app offline-first e integração com ERP corporativo.',
            result: 'Redução de 45% no tempo de despacho e visualização de 100% dos status operacionais em menos de 2 segundos.',
        },
        {
            tag: 'ATENDIMENTO & SERVIÇOS B2B',
            title: 'Agente Inteligente de Triagem e Qualificação via WhatsApp',
            challenge: 'Leads qualificados esfriavam aos finais de semana e fora do horário comercial por falta de atendimento ágil.',
            solution: 'Criação de agente conversacional de inteligência artificial treinado nas regras de negócio, integrado ao CRM e com agendamento automático.',
            result: 'Tempo de primeira resposta reduzido para menos de 30 segundos e +35% de conversões de reuniões agendadas.',
        },
        {
            tag: 'INTEGRAÇÃO & INDÚSTRIA',
            title: 'Integração de APIs de Alta Frequência entre ERP e Canais',
            challenge: 'Divergências frequentes de estoque entre vendas físicas e digitais causavam cancelamentos e atrito com clientes.',
            solution: 'Microsserviço escalável em Node.js com filas assíncronas que processa e sincroniza milhares de SKUs em tempo real.',
            result: '99.98% de precisão de inventário e eliminação completa de cancelamentos por ruptura de estoque.',
        },
    ];

    const techStack = [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Python',
        'PostgreSQL',
        'Docker',
        'Tailwind CSS',
        'AWS Cloud',
        'OpenAI API',
        'REST / GraphQL',
        'Git & CI/CD',
    ];

    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-20" id="prova-de-confianca">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
                <div className="font-code text-xs text-brand-subtle dark:text-brand-accent tracking-widest mb-2 font-bold uppercase">
                    {'// EVIDÊNCIAS & COMPROMISSO'}
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-dark dark:text-white mb-4">
                    Padrão de engenharia com governança e responsabilidade
                </h2>
                <p className="text-brand-dark/80 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Não vendemos promessas genéricas. Desenvolvemos software com rigor técnico, garantias contratuais e foco total em resolver o problema do seu negócio.
                </p>
            </div>

            {/* Três Pilares de Garantia */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="glass-card p-6 rounded-2xl border-l-4 border-l-brand-accent shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="p-2 rounded-lg bg-brand-accent/20 text-brand-dark dark:text-brand-accent">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </span>
                        <h3 className="font-display font-bold text-base sm:text-lg text-brand-dark dark:text-white">
                            Contrato Formal & NDA
                        </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-dark/75 dark:text-gray-300 leading-relaxed">
                        Assinamos Acordo de Confidencialidade (NDA) e contrato com escopo, cronograma e direitos de propriedade intelectual definidos antes de iniciar.
                    </p>
                </div>

                <div className="glass-card p-6 rounded-2xl border-l-4 border-l-brand-accent shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="p-2 rounded-lg bg-brand-accent/20 text-brand-dark dark:text-brand-accent">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </span>
                        <h3 className="font-display font-bold text-base sm:text-lg text-brand-dark dark:text-white">
                            Comunicação Semanal Direta
                        </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-dark/75 dark:text-gray-300 leading-relaxed">
                        Você fala diretamente com quem escreve o código. Demonstrações a cada 15 dias em ambiente de homologação para validação contínua.
                    </p>
                </div>

                <div className="glass-card p-6 rounded-2xl border-l-4 border-l-brand-accent shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="p-2 rounded-lg bg-brand-accent/20 text-brand-dark dark:text-brand-accent">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <h3 className="font-display font-bold text-base sm:text-lg text-brand-dark dark:text-white">
                            Previsibilidade & Prazos
                        </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-dark/75 dark:text-gray-300 leading-relaxed">
                        Dividimos o projeto em marcos claros de entrega. Você sabe exatamente o que está sendo construído, quando será entregue e o custo fechado.
                    </p>
                </div>
            </div>

            {/* Seção de Cases / Projetos */}
            <div className="mb-16">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                    <div>
                        <span className="font-code text-xs font-bold text-brand-subtle dark:text-brand-accent uppercase tracking-wider block mb-1">
                            &lt;ARQUITETURAS_E_PROJETOS&gt;
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-black text-brand-dark dark:text-white">
                            Soluções Típicas & Aplicações Reais
                        </h3>
                    </div>
                    <span className="text-xs font-code text-brand-dark/60 dark:text-gray-400">
                        * Padrões de desenvolvimento aplicados a operações corporativas
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
                    {cases.map((c, idx) => (
                        <div
                            key={idx}
                            className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-brand-subtle/20 dark:border-brand-accent/20 hover:border-brand-accent/60 transition-all duration-300 shadow-md"
                        >
                            <div>
                                <span className="font-code text-[10px] font-bold tracking-widest text-brand-subtle/90 dark:text-brand-accent/90 uppercase block mb-3">
                                    {c.tag}
                                </span>
                                <h4 className="font-display font-bold text-lg text-brand-dark dark:text-white mb-4">
                                    {c.title}
                                </h4>

                                <div className="space-y-3 mb-5 text-xs sm:text-sm">
                                    <div>
                                        <span className="font-bold text-brand-dark dark:text-gray-200 block mb-0.5">
                                            O Desafio Operacional:
                                        </span>
                                        <p className="text-brand-dark/75 dark:text-gray-400 leading-relaxed">
                                            {c.challenge}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="font-bold text-brand-dark dark:text-gray-200 block mb-0.5">
                                            Nossa Solução Técnica:
                                        </span>
                                        <p className="text-brand-dark/75 dark:text-gray-400 leading-relaxed">
                                            {c.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-3 border-t border-brand-subtle/15 dark:border-brand-accent/20">
                                <span className="font-code text-[11px] font-bold text-brand-subtle dark:text-brand-accent uppercase tracking-wider block mb-1">
                                    Resultado Alcançado:
                                </span>
                                <p className="font-display font-bold text-xs sm:text-sm text-brand-dark dark:text-white">
                                    {c.result}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Compromisso de Segurança e Governança */}
            <div className="mb-16">
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-brand-accent/30 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-subtle/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 font-code text-xs font-bold text-brand-subtle dark:text-brand-accent uppercase tracking-wider mb-2">
                            <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                            <span>GOVERNANÇA & SEGURANÇA JURÍDICA</span>
                        </div>
                        <h4 className="font-display text-xl sm:text-2xl font-black text-brand-dark dark:text-white mb-2">
                            Seu modelo de negócio protegido do início ao fim
                        </h4>
                        <p className="text-xs sm:text-sm text-brand-dark/80 dark:text-gray-300 max-w-2xl leading-relaxed">
                            Todos os nossos projetos contam com Acordo de Confidencialidade (NDA) assinado, código-fonte transferido integralmente sem royalties e reuniões quinzenais com demonstrações ao vivo.
                        </p>
                    </div>
                    <a
                        href="#contato"
                        className="btn-shine shrink-0 px-6 py-3 rounded-full bg-brand-accent text-brand-dark font-code font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition-transform"
                    >
                        Solicitar Análise Técnica
                    </a>
                </div>
            </div>

            {/* Tecnologias & Padrões de Mercado */}
            <div className="text-center pt-8 border-t border-brand-subtle/15 dark:border-brand-accent/15">
                <span className="font-code text-xs font-bold text-brand-subtle/80 dark:text-brand-accent/80 uppercase tracking-widest block mb-4">
                    STACK TECNOLÓGICA CONSOLIDADA & ESCALÁVEL
                </span>
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 max-w-3xl mx-auto">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3.5 py-1.5 rounded-lg border border-brand-subtle/20 dark:border-brand-accent/30 text-brand-dark dark:text-gray-200 text-xs font-code font-medium bg-white/40 dark:bg-darkbg-card/40 hover:border-brand-accent transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
