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
        <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-20" id="prova-de-confianca">
            {/* Header */}
            <div className="text-center mb-16 sm:mb-20">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md mb-4 shadow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-code text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                        // EVIDÊNCIAS & COMPROMISSO
                    </span>
                </div>

                <h2 className="font-display text-3xl sm:text-5xl font-black text-black dark:text-white mb-5 tracking-tight">
                    Padrão de engenharia com <span className="text-emerald-600 dark:text-emerald-400 relative inline-block">governança e responsabilidade <span className="absolute bottom-1 left-0 w-full h-[3px] bg-emerald-500/40 rounded"></span></span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Não vendemos promessas genéricas. Desenvolvemos software com rigor técnico, garantias contratuais e foco total em resolver o problema do seu negócio.
                </p>
            </div>

            {/* Três Pilares de Garantia alinhados */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-20">
                <div className="group relative rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/80 p-6 sm:p-7 flex flex-col justify-between h-full shadow-lg shadow-black/[0.02] dark:shadow-black/40 hover:border-emerald-500/40 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                        <div className="flex items-center gap-3.5 mb-4 pt-1">
                            <span className="p-2.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </span>
                            <h3 className="font-display font-bold text-base sm:text-lg text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                Contrato Formal & NDA
                            </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Assinamos Acordo de Confidencialidade (NDA) e contrato com escopo, cronograma e direitos de propriedade intelectual definidos antes de iniciar.
                        </p>
                    </div>
                </div>

                <div className="group relative rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/80 p-6 sm:p-7 flex flex-col justify-between h-full shadow-lg shadow-black/[0.02] dark:shadow-black/40 hover:border-emerald-500/40 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                        <div className="flex items-center gap-3.5 mb-4 pt-1">
                            <span className="p-2.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </span>
                            <h3 className="font-display font-bold text-base sm:text-lg text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                Comunicação Semanal Direta
                            </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Você fala diretamente com quem escreve o código. Demonstrações a cada 15 dias em ambiente de homologação para validação contínua.
                        </p>
                    </div>
                </div>

                <div className="group relative rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/80 p-6 sm:p-7 flex flex-col justify-between h-full shadow-lg shadow-black/[0.02] dark:shadow-black/40 hover:border-emerald-500/40 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                        <div className="flex items-center gap-3.5 mb-4 pt-1">
                            <span className="p-2.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <h3 className="font-display font-bold text-base sm:text-lg text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                Previsibilidade & Prazos
                            </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Dividimos o projeto em marcos claros de entrega. Você sabe exatamente o que está sendo construído, quando será entregue e o custo fechado.
                        </p>
                    </div>
                </div>
            </div>

            {/* Seção de Cases / Projetos */}
            <div className="mb-20">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                    <div>
                        <span className="font-code text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                            &lt;ARQUITETURAS_E_PROJETOS&gt;
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-black text-black dark:text-white">
                            Soluções Típicas & Aplicações Reais
                        </h3>
                    </div>
                    <span className="text-xs font-code text-gray-500 dark:text-gray-400">
                        * Padrões de desenvolvimento aplicados a operações corporativas
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                    {cases.map((c, idx) => (
                        <div
                            key={idx}
                            className="group relative rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/80 p-6 sm:p-7 flex flex-col justify-between h-full shadow-lg shadow-black/[0.02] dark:shadow-black/40 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="flex flex-col">
                                <span className="font-code text-[10px] font-bold tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 px-2.5 py-1 rounded-md mb-4 w-fit uppercase">
                                    {c.tag}
                                </span>

                                <h4 className="font-display font-bold text-lg text-black dark:text-white mb-5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                    {c.title}
                                </h4>

                                <div className="space-y-4 mb-6 text-xs sm:text-sm">
                                    <div>
                                        <span className="font-bold font-code text-gray-900 dark:text-gray-200 block mb-1 uppercase text-[11px] tracking-wider">
                                            O Desafio Operacional:
                                        </span>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {c.challenge}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="font-bold font-code text-gray-900 dark:text-gray-200 block mb-1 uppercase text-[11px] tracking-wider">
                                            Nossa Solução Técnica:
                                        </span>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {c.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200/50 dark:border-zinc-800/80 mt-auto">
                                <span className="font-code text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                                    Resultado Alcançado:
                                </span>
                                <p className="font-display font-bold text-xs sm:text-sm text-black dark:text-white">
                                    {c.result}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Compromisso de Segurança e Governança */}
            <div className="mb-20">
                <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-emerald-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-black/[0.02]">
                    <div>
                        <div className="inline-flex items-center gap-2 font-code text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span>GOVERNANÇA & SEGURANÇA JURÍDICA</span>
                        </div>
                        <h4 className="font-display text-xl sm:text-2xl font-black text-black dark:text-white mb-2">
                            Seu modelo de negócio protegido do início ao fim
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                            Todos os nossos projetos contam com Acordo de Confidencialidade (NDA) assinado, código-fonte transferido integralmente sem royalties e reuniões quinzenais com demonstrações ao vivo.
                        </p>
                    </div>
                    <a
                        href="#contato"
                        className="box-border relative z-30 inline-flex items-center justify-center w-auto px-7 py-3.5 overflow-hidden font-code font-bold text-xs sm:text-sm text-black bg-emerald-400 border-2 border-emerald-400 rounded-full group shadow-md hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:-translate-y-0.5 shrink-0 ease"
                    >
                        <span className="absolute left-0 block w-full h-0 transition-all duration-500 ease-out bg-emerald-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0"></span>
                        <span className="relative z-10 flex items-center gap-2 text-black">
                            <span>Solicitar Análise Técnica</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            {/* Tecnologias & Padrões de Mercado */}
            <div className="text-center pt-8 border-t border-gray-200 dark:border-zinc-800">
                <span className="font-code text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest block mb-5">
                    STACK TECNOLÓGICA CONSOLIDADA & ESCALÁVEL
                </span>
                <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 max-w-3xl mx-auto">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3.5 py-1.5 rounded-lg border border-gray-200 dark:border-zinc-800 text-black dark:text-gray-200 text-xs font-code font-medium bg-white/50 dark:bg-zinc-900/50 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors cursor-default shadow-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}