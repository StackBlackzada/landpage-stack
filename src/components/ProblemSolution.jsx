export default function ProblemSolution({ t }) {
    const problems = [
        {
            tag: 'GARGALO 01',
            title: 'Planilhas dispersas e retrabalho manual',
            problem: 'Sua equipe perde horas consolidando dados em planilhas que quebram, geram erros de lançamento e atrasam a tomada de decisão.',
            solutionTitle: 'Automação inteligente e visão centralizada',
            solution: 'Construímos fluxos automatizados e dashboards em tempo real para eliminar tarefas manuais e dar visibilidade total aos gestores.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            tag: 'GARGALO 02',
            title: 'Softwares de prateleira engessados e caros',
            problem: 'Sua operação é forçada a se adaptar a ferramentas genéricas, pagando mensalidades que sobem a cada novo usuário sem atender suas particularidades.',
            solutionTitle: 'Software 100% aderente ao seu fluxo',
            solution: 'Desenvolvemos plataformas web e mobile sob medida que automatizam exatamente as regras do seu negócio, sem cobrança por usuário.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
        },
        {
            tag: 'GARGALO 03',
            title: 'Sistemas legados lentos ou código sem documentação',
            problem: 'Medo constante de falhas operacionais, dependência de antigos fornecedores que sumiram ou sistemas antigos que ninguém tem coragem de atualizar.',
            solutionTitle: 'Modernização com documentação e segurança',
            solution: 'Auditoria profunda de código, refatoração segura, testes automatizados e migração para arquitetura em nuvem escalável com código seu.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-20" id="problema-solucao">
            {/* Header da seção */}
            <div className="text-center mb-12 sm:mb-16">
                <div className="font-code text-xs text-brand-subtle dark:text-brand-accent tracking-widest mb-2 font-bold uppercase">
                    {'// DIAGNÓSTICO DO CENÁRIO'}
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-dark dark:text-white mb-4">
                    Reconhece algum destes gargalos na sua operação?
                </h2>
                <p className="text-brand-dark/80 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Empresas perdem receita e tempo precioso tentando crescer em cima de processos manuais ou ferramentas improvisadas. Nós resolvemos isso na raiz.
                </p>
            </div>

            {/* Grid 3 colunas de dor -> solução */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {problems.map((item, index) => (
                    <div
                        key={index}
                        className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-red-400 dark:border-t-red-500 hover:border-t-brand-accent transition-all duration-300 shadow-md"
                    >
                        <div>
                            {/* Top badge e ícone */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-code text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider bg-red-100 dark:bg-red-950/60 px-2.5 py-1 rounded-md">
                                    {item.tag}
                                </span>
                                <div className="w-10 h-10 rounded-xl bg-brand-subtle/10 dark:bg-brand-accent/10 flex items-center justify-center text-brand-subtle dark:text-brand-accent">
                                    {item.icon}
                                </div>
                            </div>

                            {/* O Problema */}
                            <h3 className="font-display text-xl font-bold text-brand-dark dark:text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-sm text-brand-dark/75 dark:text-gray-300 mb-6 leading-relaxed">
                                {item.problem}
                            </p>
                        </div>

                        {/* A Solução correspondente */}
                        <div className="pt-4 border-t border-brand-subtle/15 dark:border-brand-accent/20 bg-brand-accent/5 dark:bg-brand-accent/10 -mx-6 -mb-6 p-6 rounded-b-2xl">
                            <div className="flex items-center gap-2 font-code text-xs font-bold text-brand-subtle dark:text-brand-accent uppercase tracking-wider mb-2">
                                <svg className="w-4 h-4 text-brand-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>COMO RESOLVEMOS</span>
                            </div>
                            <h4 className="font-display font-bold text-sm sm:text-base text-brand-dark dark:text-white mb-1.5">
                                {item.solutionTitle}
                            </h4>
                            <p className="text-xs sm:text-sm text-brand-dark/80 dark:text-gray-300 leading-relaxed">
                                {item.solution}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Micro banner de ação */}
            <div className="mt-12 text-center">
                <a
                    href="#contato"
                    className="inline-flex items-center gap-2 font-code text-xs sm:text-sm font-bold text-brand-subtle dark:text-brand-accent hover:underline group"
                >
                    <span>Quer entender a solução ideal para o gargalo da sua empresa?</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
