export default function TrustProof({ t }) {
    const cases = [
        {
            tag: '[PREENCHER: SETOR - EX: LOGÍSTICA & DISTRIBUIÇÃO]',
            title: '[PREENCHER: Plataforma de Rastreamento e Gestão de Frotas em Tempo Real]',
            challenge: '[PREENCHER: Desafio real - ex: Atrasos em rotas e lentidão de sincronização entre armazém e motoristas geravam 15% de retrabalho diário.]',
            solution: '[PREENCHER: Solução aplicada - ex: Desenvolvimento de aplicação web sob medida com dashboard em tempo real, app offline-first e integração com ERP.]',
            result: '[PREENCHER: Impacto mensurável - ex: Redução de 45% no tempo de despacho e visualização de 100% dos status em menos de 2 segundos.]',
        },
        {
            tag: '[PREENCHER: SETOR - EX: SERVIÇOS & SAAS B2B]',
            title: '[PREENCHER: Agente Inteligente para Triagem e Agendamento via WhatsApp]',
            challenge: '[PREENCHER: Desafio real - ex: Leads qualificados esfriavam aos finais de semana e fora do horário comercial por falta de atendimento ágil.]',
            solution: '[PREENCHER: Solução aplicada - ex: Criação de agente conversacional de IA treinado nas regras de negócio da empresa, conectado ao CRM e agenda.]',
            result: '[PREENCHER: Impacto mensurável - ex: Tempo de primeira resposta reduzido para menos de 30 segundos e +35% de conversões agendadas.]',
        },
        {
            tag: '[PREENCHER: SETOR - EX: E-COMMERCE & INDÚSTRIA]',
            title: '[PREENCHER: Integração de APIs de Alta Frequência entre ERP e Canais de Venda]',
            challenge: '[PREENCHER: Desafio real - ex: Divergências frequentes de estoque entre vendas físicas e digitais causavam cancelamentos e atrito com clientes.]',
            solution: '[PREENCHER: Solução aplicada - ex: Microsserviço escalável em Node.js e filas assíncronas que sincroniza milhares de SKUs em segundos.]',
            result: '[PREENCHER: Impacto mensurável - ex: 99.98% de precisão de inventário e eliminação completa de cancelamentos por ruptura de estoque.]',
        },
    ];

    const testimonials = [
        {
            quote: '[PREENCHER: "A Stack Blackzada entendeu a regra do nosso negócio rapidamente e entregou a primeira versão em produção antes do prazo previsto. O código limpo e o alinhamento semanal fizeram toda a diferença para nossa diretoria."]',
            author: '[PREENCHER: Nome do Cliente]',
            role: '[PREENCHER: Diretor de Operações / CTO]',
            company: '[PREENCHER: Nome da Empresa Cliente]',
        },
        {
            quote: '[PREENCHER: "Estávamos presos a um software engessado que cobrava caro por cada usuário. O sistema sob medida desenvolvido nos deu autonomia total e reduziu nossos custos operacionais já no primeiro trimestre."]',
            author: '[PREENCHER: Nome do Cliente]',
            role: '[PREENCHER: CEO / Fundador]',
            company: '[PREENCHER: Nome da Empresa Cliente]',
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
                            &lt;ESTUDOS_DE_CASO&gt;
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-black text-brand-dark dark:text-white">
                            Casos de Uso & Aplicações Reais
                        </h3>
                    </div>
                    <span className="text-xs font-code text-brand-dark/60 dark:text-gray-400">
                        * Dados e métricas validados junto aos clientes
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
                                            O Desafio:
                                        </span>
                                        <p className="text-brand-dark/75 dark:text-gray-400 leading-relaxed">
                                            {c.challenge}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="font-bold text-brand-dark dark:text-gray-200 block mb-0.5">
                                            Nossa Solução:
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

            {/* Depoimentos reais (Placeholders fiéis) */}
            <div className="mb-16">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-brand-dark dark:text-white mb-6 text-center">
                    O que dizem os parceiros que confiam no nosso código
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between border-l-4 border-l-brand-accent shadow-sm"
                        >
                            <p className="text-sm sm:text-base italic text-brand-dark/85 dark:text-gray-200 mb-6 leading-relaxed">
                                {t.quote}
                            </p>
                            <div className="flex items-center gap-3 pt-3 border-t border-brand-subtle/10 dark:border-brand-accent/20 font-code">
                                <div className="w-10 h-10 rounded-full bg-brand-accent/20 text-brand-dark dark:text-brand-accent font-bold flex items-center justify-center text-xs">
                                    {t.author.charAt(1) || 'CL'}
                                </div>
                                <div>
                                    <div className="font-bold text-xs sm:text-sm text-brand-dark dark:text-white">
                                        {t.author}
                                    </div>
                                    <div className="text-[11px] text-brand-dark/60 dark:text-gray-400">
                                        {t.role} • {t.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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
