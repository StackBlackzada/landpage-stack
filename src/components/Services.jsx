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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-20" id="servicos">
            <div className="text-center mb-12 sm:mb-16">
                <div className="font-code text-xs text-brand-subtle dark:text-brand-accent tracking-widest mb-2 font-bold uppercase">
                    {'// SOLUÇÕES TECNOLÓGICAS'}
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-dark dark:text-white mb-4">
                    Serviços desenhados para gerar eficiência e receita
                </h2>
                <p className="text-brand-dark/80 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Não desenvolvemos apenas telas bonitas. Projetamos arquiteturas robustas para resolver os problemas reais da sua empresa.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {services.map((s) => (
                    <div
                        key={s.code}
                        className="glass-card p-6 sm:p-8 rounded-2xl service-card border-l-4 border-l-brand-accent shadow-md flex flex-col justify-between hover:border-l-emerald-400 transition-all duration-300"
                    >
                        <div>
                            {/* Top info */}
                            <div className="flex justify-between items-start mb-5">
                                <div className="h-12 w-12 rounded-xl bg-brand-accent/20 dark:bg-brand-accent/15 flex items-center justify-center text-brand-dark dark:text-brand-accent">
                                    {s.icon}
                                </div>
                                <span className="font-code text-[11px] font-bold text-brand-subtle/80 dark:text-brand-accent/80 tracking-widest">
                                    {s.code}
                                </span>
                            </div>

                            {/* Título & Benefício */}
                            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-brand-dark dark:text-white">
                                {s.title}
                            </h3>
                            <p className="text-sm sm:text-base text-brand-dark/80 dark:text-gray-300 leading-relaxed mb-5">
                                {s.benefit}
                            </p>

                            {/* Bullet points de diferenciais */}
                            <div className="grid grid-cols-2 gap-2 mb-6 font-code text-xs text-brand-dark/85 dark:text-gray-300">
                                {s.features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0"></span>
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Para quem serve (Seção obrigatória de qualificação) */}
                        <div className="pt-4 border-t border-brand-subtle/15 dark:border-brand-accent/20 bg-brand-accent/5 dark:bg-brand-accent/5 -mx-6 -mb-6 p-6 rounded-b-2xl">
                            <span className="font-code text-[10px] font-bold uppercase tracking-wider text-brand-subtle dark:text-brand-accent block mb-1">
                                PARA QUEM SERVE:
                            </span>
                            <p className="text-xs sm:text-sm text-brand-dark/85 dark:text-gray-300">
                                {s.target}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Micro CTA */}
            <div className="mt-12 text-center">
                <a
                    href="#contato"
                    className="btn-shine inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-brand-accent text-brand-dark font-code font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition-transform"
                >
                    <span>Falar com especialista sobre seu projeto</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
