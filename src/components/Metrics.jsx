const metrics = [
    { target: 50, suffix: '+', key: 'metric_1' },
    { target: 99, suffix: '%', key: 'metric_2' },
    { target: 24, suffix: '/7', key: 'metric_3' },
    { target: 100, suffix: '%', key: 'metric_4' },
];

export default function Metrics({ t }) {
    return (
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto relative z-20" id="metricas">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
                {metrics.map((m) => (
                    <div key={m.key} className="glass-card p-4 sm:p-6 rounded-2xl">
                        <div className="font-display text-3xl sm:text-5xl font-black text-brand-subtle dark:text-brand-accent mb-2"><span className="counter" data-target={m.target}>0</span>{m.suffix}</div>
                        <div className="font-code text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-brand-dark/80 dark:text-gray-300">{t(m.key)}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
