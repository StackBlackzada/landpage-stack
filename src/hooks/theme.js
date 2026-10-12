// --- 1. LÓGICA DO INTERRUPTOR DE MODO CLARO / ESCURO ---
export function applyInitialTheme() {
    if (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

export function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem(
        'color-theme',
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
}
