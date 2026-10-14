export default function About({ t }) {
    const founders = [
        {
            name: '[PREENCHER: Nome do Fundador / Sócio]',
            role: '[PREENCHER: Co-fundador & CTO / Líder Técnico]',
            bio: '[PREENCHER: Engenheiro de software com sólida vivência em arquitetura de sistemas distribuídos, produtos digitais de alta concorrência e liderança técnica de equipes.]',
            linkedin: '[PREENCHER: https://linkedin.com/in/...]',
        },
        {
            name: '[PREENCHER: Nome do Co-fundador / Desenvolvedor Sênior]',
            role: '[PREENCHER: Co-fundador & Head de Inteligência Artificial]',
            bio: '[PREENCHER: Especialista em automações inteligentes, engenharia de prompts, integração de grandes modelos de linguagem (LLMs) e soluções eficientes de dados.]',
            linkedin: '[PREENCHER: https://linkedin.com/in/...]',
        },
    ];

    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto relative z-20" id="sobre">
            {/* Header / História */}
            <div className="glass-card p-6 sm:p-12 rounded-3xl relative overflow-hidden about-card shadow-lg mb-12">
                <div className="flex items-center justify-between mb-4">
                    <span className="font-code text-brand-subtle dark:text-brand-accent text-xs sm:text-sm font-bold tracking-wider">
                        &lt;SOBRE_A_STACK_BLACKZADA&gt;
                    </span>
                    <span className="font-code text-[11px] font-bold text-brand-dark dark:text-brand-accent bg-brand-accent/20 px-3 py-1 rounded-full uppercase">
                        ENGENHARIA SOB MEDIDA
                    </span>
                </div>

                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black mb-5 leading-tight text-brand-dark dark:text-white">
                    Tecnologia séria construída por engenheiros, focada no crescimento do seu negócio.
                </h2>

                <p className="text-brand-dark/80 dark:text-gray-300 text-sm sm:text-lg leading-relaxed mb-6">
                    A <strong>Stack Blackzada</strong> nasceu para eliminar o abismo entre o que as empresas precisam no seu dia a dia operacional e o que os softwares tradicionais entregam. Atuamos como um braço técnico estratégico para nossos clientes, unindo desenvolvimento de software sob medida, automações com inteligência artificial e consultoria de infraestrutura em nuvem.
                </p>

                <p className="text-brand-dark/80 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                    Trabalhamos com princípios inegociáveis: código limpo, arquitetura aberta sem dependência de fornecedor (zero lock-in), cumprimento rigoroso de cronogramas e comunicação direta entre quem decide e quem constrói.
                </p>

                {/* 3 Valores Fundamentais */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-subtle/15 dark:border-brand-accent/20 font-code text-xs">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                        <span className="font-bold text-brand-dark dark:text-white">Transparência Radical</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                        <span className="font-bold text-brand-dark dark:text-white">Propriedade do Cliente</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                        <span className="font-bold text-brand-dark dark:text-white">Previsibilidade em Sprints</span>
                    </div>
                </div>
            </div>

            {/* Time / Fundadores */}
            <div>
                <div className="text-center mb-8">
                    <span className="font-code text-xs font-bold text-brand-subtle dark:text-brand-accent uppercase tracking-wider block mb-1">
                        // LIDERANÇA TÉCNICA
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-brand-dark dark:text-white">
                        Quem está à frente dos projetos
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {founders.map((founder, idx) => (
                        <div
                            key={idx}
                            className="glass-card p-6 sm:p-7 rounded-2xl border border-brand-subtle/20 dark:border-brand-accent/20 flex flex-col justify-between shadow-md"
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    {/* Placeholder Foto de Perfil */}
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-subtle/20 to-brand-accent/20 border-2 border-brand-accent/40 flex items-center justify-center text-brand-dark dark:text-brand-accent font-code text-xs font-bold shrink-0 text-center p-1">
                                        [FOTO]
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-base sm:text-lg text-brand-dark dark:text-white">
                                            {founder.name}
                                        </h4>
                                        <p className="font-code text-xs text-brand-subtle dark:text-brand-accent font-semibold">
                                            {founder.role}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-xs sm:text-sm text-brand-dark/75 dark:text-gray-300 leading-relaxed mb-4">
                                    {founder.bio}
                                </p>
                            </div>

                            <div className="pt-3 border-t border-brand-subtle/10 dark:border-brand-accent/15 flex items-center justify-between font-code text-xs">
                                <span className="text-brand-dark/60 dark:text-gray-400">Perfil profissional:</span>
                                <span className="text-brand-subtle dark:text-brand-accent hover:underline cursor-pointer">
                                    {founder.linkedin}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
