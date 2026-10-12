import { useState, useCallback } from 'react';
import translations from '../i18n/translations';

export default function useLanguage() {
    const [lang, setLangState] = useState(() => localStorage.getItem('preferred-language') || 'pt');

    const setLang = useCallback((value) => {
        setLangState(value);
        localStorage.setItem('preferred-language', value);
    }, []);

    const t = useCallback(
        (key) => (translations[lang] && translations[lang][key]) || translations.pt[key],
        [lang]
    );

    return { lang, setLang, t };
}
