export default function ProblemSolution({ t }) {
    const problems = [
        {
            tag: 'GARGALO 01',
            title: 'Planilhas dispersas e retrabalho manual',
            problem: 'Sua equipe perde horas consolidando dados em planilhas que quebram, geram erros de lançamento e atrasam a tomada de decisão.',
            solutionTitle: 'Automação inteligente e visão centralizada',
            solution: 'Construímos fluxos automatizados e dashboards em tempo real para eliminar tarefas manuais e dar visibilidade total aos gestores.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-20" id="problema-solucao">
            {/* Header da seção */}
            <div className="text-center mb-14 sm:mb-20">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md mb-4 shadow-sm hover:border-emerald-400 transition-all duration-300">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-code text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                        // DIAGNÓSTICO DO CENÁRIO
                    </span>
                </div>
                
                <h2 className="font-display text-3xl sm:text-5xl font-black text-black dark:text-white mb-5 tracking-tight">
                    Reconhece algum destes <span className="text-emerald-600 dark:text-emerald-400 relative inline-block">gargalos <span className="absolute bottom-1 left-0 w-full h-[3px] bg-emerald-500/40 rounded"></span></span> na sua operação?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Empresas perdem receita e tempo precioso tentando crescer em cima de processos manuais ou ferramentas improvisadas. Nós resolvemos isso na raiz.
                </p>
            </div>

            {/* Grid 3 colunas perfeitamente alinhadas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {problems.map((item, index) => (
                    <div
                        key={index}
                        className="group relative rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-gray-200/80 dark:border-zinc-800/80 p-6 sm:p-7 flex flex-col justify-between h-full shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                    >
                        {/* Linha Dinâmica Superior */}
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-rose-500 via-rose-400 to-rose-500 opacity-80 group-hover:from-emerald-500 group-hover:via-emerald-300 group-hover:to-emerald-500 group-hover:opacity-100 transition-all duration-500"></div>

                        {/* Conteúdo Superior */}
                        <div className="flex flex-col">
                            {/* Top badge e ícone */}
                            <div className="flex items-center justify-between mb-5 pt-1">
                                <span className="font-code text-[10px] sm:text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider bg-rose-500/10 dark:bg-rose-950/50 border border-rose-500/20 px-2.5 py-1 rounded-md">
                                    {item.tag}
                                </span>
                                <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700/60 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:border-emerald-500/40 group-hover:scale-110 transition-all duration-300 shadow-sm">
                                    {item.icon}
                                </div>
                            </div>

                            {/* O Problema */}
                            <h3 className="font-display text-lg sm:text-xl font-bold text-black dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                {item.problem}
                            </p>
                        </div>

                        {/* A Solução correspondente */}
                        <div className="pt-5 border-t border-gray-100 dark:border-zinc-800/80 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.04] -mx-6 sm:-mx-7 -mb-6 sm:-mb-7 p-6 sm:p-7 rounded-b-2xl border-l-2 border-l-emerald-500/60 transition-colors duration-300 group-hover:bg-emerald-500/[0.05] dark:group-hover:bg-emerald-500/[0.08] mt-auto">
                            <div className="flex items-center gap-1.5 font-code text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                                <svg className="w-4 h-4 text-emerald-500 shrink-0 transform group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>COMO RESOLVEMOS</span>
                            </div>
                            <h4 className="font-display font-bold text-sm sm:text-base text-black dark:text-white mb-1.5">
                                {item.solutionTitle}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {item.solution}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botão com o efeito solicitado */}
            <div className="mt-14 text-center">
                <a
                    href="#contato"
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3.5 overflow-hidden font-code font-bold text-xs sm:text-sm text-white transition-all duration-300 bg-emerald-500 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-emerald-300 ring-offset-emerald-200 hover:ring-offset-emerald-500 ease focus:outline-none shadow-md hover:shadow-lg"
                >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center gap-2">
                        <svg className="relative w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span>Quer entender a solução ideal para o gargalo da sua empresa?</span>
                    </span>
                </a>
            </div>
        </section>
    );
}