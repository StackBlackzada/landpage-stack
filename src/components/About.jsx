export default function About({ t }) {
    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-5xl mx-auto relative z-20" id="sobre">
            {/* Header / História */}
            <div className="rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/80 p-6 sm:p-12 relative overflow-hidden shadow-xl shadow-black/[0.02] dark:shadow-black/40 mb-16">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-500 opacity-90"></div>
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <span className="font-code text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-bold tracking-wider">
                        &lt;SOBRE_A_STACK_BLACKZADA&gt;
                    </span>
                    <span className="font-code text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 px-3 py-1 rounded-full uppercase">
                        Goiânia / GO • Atendimento Nacional
                    </span>
                </div>

                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight text-black dark:text-white">
                    Tecnologia séria construída por engenheiros, focada no crescimento do seu negócio.
                </h2>

                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-lg leading-relaxed mb-6">
                    A <strong className="text-black dark:text-white font-semibold">Stack Blackzada</strong> nasceu para eliminar o abismo entre o que as empresas precisam no seu dia a dia operacional e o que os softwares tradicionais entregam. Atuamos como um braço técnico estratégico para nossos clientes, unindo desenvolvimento de software sob medida, automações com inteligência artificial e consultoria de infraestrutura em nuvem.
                </p>

                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-10">
                    Trabalhamos com princípios inegociáveis: código limpo, arquitetura aberta sem dependência de fornecedor (zero lock-in), cumprimento rigoroso de cronogramas e comunicação direta entre quem decide e quem constrói.
                </p>

                {/* 3 Valores Fundamentais */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200/50 dark:border-zinc-800 font-code text-xs">
                    <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm"></span>
                        <span className="font-bold text-black dark:text-white">Transparência Radical</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm"></span>
                        <span className="font-bold text-black dark:text-white">Propriedade do Cliente</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm"></span>
                        <span className="font-bold text-black dark:text-white">Previsibilidade em Sprints</span>
                    </div>
                </div>
            </div>

            {/* Time / Liderança - Estrutura Piramidal */}
            <div>
                <div className="text-center mb-12">
                    <span className="font-code text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-1">
                        // LIDERANÇA TÉCNICA
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-black dark:text-white">
                        Quem está à frente dos projetos
                    </h3>
                </div>

                <div className="flex flex-col gap-6 sm:gap-8 max-w-4xl mx-auto">
                    {/* Topo da Pirâmide: Caio Daniel Souza */}
                    <div className="flex justify-center">
                        <div className="w-full sm:w-1/2 group rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/80 p-6 sm:p-7 flex flex-col justify-between shadow-lg shadow-black/[0.02] dark:shadow-black/40 hover:border-emerald-500/40 transition-all duration-500 transform hover:-translate-y-1">
                            <div>
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-code text-xl font-black shrink-0 shadow-sm">
                                        CD
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-base sm:text-lg text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                            Caio Daniel Souza
                                        </h4>
                                        <p className="font-code text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                                            Fundador & CEO / Tech Lead
                                        </p>
                                        <span className="text-[11px] font-code text-gray-500 dark:text-gray-400">
                                            Goiânia / GO
                                        </span>
                                    </div>
                                </div>

                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                    Engenheiro de software e líder técnico à frente da Stack Blackzada. Especialista em desenvolvimento de plataformas web e mobile sob medida, arquitetura de microsserviços e automações inteligentes com foco no retorno operacional de empresas.
                                </p>
                            </div>

                            <div className="pt-4 border-t border-gray-200/50 dark:border-zinc-800 flex items-center justify-between font-code text-xs">
                                <span className="text-gray-500 dark:text-gray-400">LinkedIn:</span>
                                <a
                                    href="https://www.linkedin.com/in/caio-daniel-45b531319/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                                >
                                    <span>Ver perfil profissional</span>
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Base da Pirâmide: Maicon Douglas (Esquerda) e Yago Paulino (Direita) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                        {/* Card Maicon Douglas */}
                        <div className="group rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/80 p-6 sm:p-7 flex flex-col justify-between h-full shadow-lg shadow-black/[0.02] dark:shadow-black/40 hover:border-emerald-500/40 transition-all duration-500 transform hover:-translate-y-1">
                            <div>
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-code text-xl font-black shrink-0 shadow-sm">
                                        MD
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-base sm:text-lg text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                            Maicon Douglas
                                        </h4>
                                        <p className="font-code text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                                            Co-Fundador & CCO / Sales Lead
                                        </p>
                                        <span className="text-[11px] font-code text-gray-500 dark:text-gray-400">
                                            Goiânia / GO
                                        </span>
                                    </div>
                                </div>

                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                    Líder comercial e especialista em estratégias de negócios. Responsável pelo alinhamento comercial, prospecção e relacionamento com clientes, conectando gargalos operacionais das empresas às melhores soluções técnicas da Stack Blackzada.
                                </p>
                            </div>

                            <div className="pt-4 border-t border-gray-200/50 dark:border-zinc-800 flex items-center justify-between font-code text-xs">
                                <span className="text-gray-500 dark:text-gray-400">LinkedIn:</span>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                                >
                                    <span>Ver perfil profissional</span>
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Card Yago Paulino */}
                        <div className="group rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/80 p-6 sm:p-7 flex flex-col justify-between h-full shadow-lg shadow-black/[0.02] dark:shadow-black/40 hover:border-emerald-500/40 transition-all duration-500 transform hover:-translate-y-1">
                            <div>
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-code text-xl font-black shrink-0 shadow-sm">
                                        YP
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-base sm:text-lg text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                            Yago Paulino
                                        </h4>
                                        <p className="font-code text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                                            Co-Fundador & CMO / Frontend Lead 
                                        </p>
                                        <span className="text-[11px] font-code text-gray-500 dark:text-gray-400">
                                            Uberlândia / MG
                                        </span>
                                    </div>
                                </div>

                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                    Especialista em Frontend, UI/UX e estratégias de posicionamento de marca. Responsável por arquitetar interfaces modernas, intuitivas e de alta performance, unindo design de alto nível ao marketing de crescimento do ecossistema.
                                </p>
                            </div>

                            <div className="pt-4 border-t border-gray-200/50 dark:border-zinc-800 flex items-center justify-between font-code text-xs">
                                <span className="text-gray-500 dark:text-gray-400">LinkedIn:</span>
                                <a
                                    href="https://www.linkedin.com/in/yago-paulino-b36383340"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                                >
                                    <span>Ver perfil profissional</span>
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}