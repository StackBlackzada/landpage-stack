const steps = ['01', '02', '03'];

export default function Workflow({ t }) {
    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-card/60 dark:bg-darkbg-card/50 relative z-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10 sm:mb-16">
                    <div className="font-code text-xs text-brand-subtle dark:text-brand-accent tracking-widest mb-1">{'// WORKFLOW_PROCESS'}</div>
                    <div className="font-code text-brand-subtle dark:text-brand-accent text-xs sm:text-sm mb-2 font-bold tracking-wider">&lt;03_COMO_TRABALHAMOS&gt;</div>
                    <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-dark dark:text-white">{t('workflow_main_title')}</h2>
                </div>

                {/* Linha do tempo: o círculo fica centralizado sobre a linha e não invade o texto */}
                <div className="space-y-10 sm:space-y-12 relative border-l-2 border-brand-subtle/30 dark:border-brand-accent/30 pl-8 sm:pl-12 ml-5 sm:ml-8 timeline-container">
                    {steps.map((n, i) => (
                        <div key={n} className="relative timeline-step">
                            <div className="absolute -left-[51px] sm:-left-[69px] top-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-light dark:bg-darkbg-card border-2 border-brand-accent flex items-center justify-center font-code font-bold text-sm sm:text-base text-brand-dark dark:text-brand-accent shadow">{n}</div>
                            <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 text-brand-dark dark:text-white">{t(`step_${i + 1}_title`)}</h3>
                            <p className="text-brand-dark/80 dark:text-gray-300 leading-relaxed">{t(`step_${i + 1}_desc`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
