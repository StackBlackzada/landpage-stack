const services = [
    {
        n: '01',
        icon: (
            <>
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
            </>
        ),
    },
    {
        n: '02',
        icon: <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round"></path>,
    },
    {
        n: '03',
        icon: (
            <>
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth="3"></line>
            </>
        ),
    },
    {
        n: '04',
        icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeLinecap="round" strokeLinejoin="round"></polygon>,
    },
];

export default function Services({ t }) {
    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-20" id="servicos">
            <div className="text-center mb-10 sm:mb-16">
                <div className="font-code text-xs text-brand-subtle dark:text-brand-accent tracking-widest mb-1">{'// SERVICES_MODULE'}</div>
                <div className="font-code text-brand-subtle dark:text-brand-accent text-xs sm:text-sm mb-2 font-bold tracking-wider">&lt;02_O_QUE_FAZEMOS&gt;</div>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-brand-dark dark:text-white">{t('services_main_title')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                {services.map((s, i) => (
                    <div key={s.n} className="glass-card p-6 sm:p-8 rounded-2xl service-card border-l-4 border-l-brand-accent shadow-lg">
                        <div className="flex justify-between items-start mb-5 sm:mb-6">
                            <div className="h-12 w-12 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-dark dark:text-brand-accent">
                                <svg className="w-6 h-6 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                                    {s.icon}
                                </svg>
                            </div>
                            <span className="font-code text-[11px] opacity-60 text-brand-subtle dark:text-brand-accent font-bold">MODULE_{s.n}</span>
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-brand-dark dark:text-white">{t(`service_${i + 1}_title`)}</h3>
                        <p className="text-brand-dark/80 dark:text-gray-300 leading-relaxed">{t(`service_${i + 1}_desc`)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
