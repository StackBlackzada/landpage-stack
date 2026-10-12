const badgeClass = "px-4 sm:px-5 py-2 rounded-full border border-brand-subtle/30 dark:border-brand-accent/30 text-brand-dark dark:text-gray-200 text-[11px] sm:text-xs font-semibold bg-white/60 dark:bg-darkbg-card/60 uppercase tracking-wider flex items-center gap-2";

export default function About({ t }) {
    return (
        <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 relative z-20" id="sobre">
            <div className="max-w-4xl w-full glass-card tilt-card p-6 pt-14 sm:p-14 rounded-3xl relative overflow-hidden about-card shadow-xl">
                {/* Badge Tech do Card */}
                <div className="absolute top-0 right-0 bg-brand-accent text-brand-dark font-code text-[10px] sm:text-[11px] px-3 sm:px-4 py-1.5 rounded-bl-2xl font-bold tracking-widest uppercase shadow">
                    [ABOUT_US] // 01
                </div>

                <div className="font-code text-brand-subtle dark:text-brand-accent text-xs sm:text-sm mb-3 sm:mb-4 font-bold tracking-wider">&lt;01_QUEM_SOMOS&gt;</div>
                <h2 className="font-display text-3xl sm:text-5xl font-black mb-5 sm:mb-6 leading-tight text-brand-dark dark:text-white">
                    <span>{t('about_title')}</span> <span className="text-brand-subtle dark:text-brand-accent">{t('about_title_highlight')}</span>
                </h2>
                <p className="text-brand-dark/80 dark:text-gray-300 text-base sm:text-xl leading-relaxed mb-6 sm:mb-8">
                    {t('about_desc')}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 font-code">
                    <span className={badgeClass}>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span> <span>{t('badge_ideas')}</span>
                    </span>
                    <span className={badgeClass}>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span> <span>{t('badge_code')}</span>
                    </span>
                    <span className={badgeClass}>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span> <span>{t('badge_results')}</span>
                    </span>
                </div>
            </div>
        </section>
    );
}
