import { useEffect, useState } from 'react';

const navigation = [
    { label: 'Início', href: '#hero' },
    { label: 'Problema e solução', href: '#problema-solucao' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como trabalhamos', href: '#como-trabalhamos' },
    { label: 'Entregáveis', href: '#entregaveis' },
    { label: 'Cases e garantias', href: '#prova-de-confianca' },
    { label: 'Sobre nós', href: '#sobre' },
    { label: 'Perguntas frequentes', href: '#faq' },
];

const socialLinks = [
    {
        label: 'Instagram',
        detail: '@stack.blackzada',
        href: 'https://instagram.com/stack.blackzada',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.7" className="w-5 h-5" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        detail: 'Caio Daniel',
        href: 'https://www.linkedin.com/in/caio-daniel-45b531319/',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor"
                className="w-5 h-5" aria-hidden="true">
                <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9.5H7v11H3.4v-11Zm5.8 0h3.5V11h.1a3.8 3.8 0 0 1 3.4-1.9c3.6 0 4.3 2.4 4.3 5.4v6h-3.7v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.4H9.2v-11Z" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        detail: '@StackBlackzada',
        href: 'https://github.com/StackBlackzada/',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor"
                className="w-5 h-5" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.51 2.34 1.08 2.91.82.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 6.82c.85 0 1.7.11 2.5.34 1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.4.1 2.65.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .26.18.57.69.47A10 10 0 0 0 12 2Z" />
            </svg>
        ),
    },
];

function SectionTitle({ children }) {
    return (
        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#d1dcd6]">
            {children}
        </h3>
    );
}

export default function Footer() {
    const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

    useEffect(() => {
        if (!privacyModalOpen) return;

        const handleEscape = (event) => {
            if (event.key === 'Escape') setPrivacyModalOpen(false);
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [privacyModalOpen]);

    return (
        <>
            <footer
                id="contato"
                className="relative z-20 overflow-hidden border-t border-[#d1dcd6]/20 bg-[#0b0f0e] text-white"
            >
                {/* Detalhe visual superior */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d1dcd6]/60 to-transparent" />

                <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
                    {/* Conteúdo principal */}
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.85fr_1fr_0.9fr] lg:gap-10">

                        {/* Marca */}
                        <div className="space-y-6">
                            <a
                                href="#hero"
                                aria-label="Stack Blackzada — voltar ao início"
                                className="group inline-flex items-center gap-3"
                            >
                                <img
                                    src="/logo_metalizada_sb.png"
                                    alt=""
                                    className="h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(209,220,214,0.3)]"
                                />

                                <span className="font-display text-base font-black uppercase tracking-wide sm:text-lg">
                                    STACK
                                    <span className="ml-1.5 text-[#d1dcd6] transition-colors duration-300 group-hover:text-white">
                                        BLACKZADA
                                    </span>
                                </span>
                            </a>

                            <p className="max-w-sm text-sm leading-7 text-gray-400">
                                Tecnologia desenvolvida para resolver problemas
                                reais. Criamos software sob medida, automações
                                inteligentes e soluções digitais para empresas.
                            </p>

                            <div className="inline-flex items-center gap-2 rounded-md border border-[#d1dcd6]/20 bg-[#d1dcd6]/5 px-3 py-2 font-code text-[10px] font-semibold tracking-wide text-[#d1dcd6] backdrop-blur-sm transition-all duration-300 hover:border-[#d1dcd6]/40 hover:bg-[#d1dcd6]/10 sm:text-xs">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#d1dcd6] animate-pulse" />
                                SOFTWARE & INTELIGÊNCIA ARTIFICIAL
                            </div>
                        </div>

                        {/* Navegação */}
                        <div>
                            <SectionTitle>Navegação</SectionTitle>

                            <ul className="space-y-3">
                                {navigation.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-[#d1dcd6]"
                                        >
                                            <span className="h-px w-0 bg-[#d1dcd6] transition-all duration-300 group-hover:w-3 group-hover:shadow-[0_0_8px_#d1dcd6]" />
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contato */}
                        <div>
                            <SectionTitle>Fale conosco</SectionTitle>

                            <div className="space-y-5">
                                {/* E-mail meio escuro por padrão e acende no hover */}
                                <a
                                    href="mailto:stackblackzada@gmail.com"
                                    className="group block"
                                >
                                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                                        E-mail
                                    </span>
                                    <span className="break-all text-sm text-gray-500 transition-all duration-300 group-hover:text-[#d1dcd6] group-hover:drop-shadow-[0_0_8px_rgba(209,220,214,0.4)]">
                                        stackblackzada@gmail.com
                                    </span>
                                </a>

                                {/* WhatsApp meio escuro por padrão e acende no hover */}
                                <a
                                    href="https://wa.me/5564999818481?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20a%20Stack%20Blackzada."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block"
                                >
                                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                                        WhatsApp
                                    </span>
                                    <span className="text-sm text-gray-500 transition-all duration-300 group-hover:text-[#d1dcd6] group-hover:drop-shadow-[0_0_8px_rgba(209,220,214,0.4)]">
                                        +55 (64) 99981-8481
                                    </span>
                                </a>

                                <div>
                                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                                        Atendimento
                                    </span>
                                    <p className="text-sm leading-6 text-gray-300">
                                        Segunda a sexta
                                        <br />
                                        09h às 18h · Horário de Brasília
                                    </p>
                                </div>

                                <p className="border-l-2 border-[#d1dcd6]/50 pl-3 text-xs leading-5 text-gray-400">
                                    Retorno de propostas em até 24h úteis.
                                </p>
                            </div>
                        </div>

                        {/* Redes e empresa */}
                        <div>
                            <SectionTitle>Conecte-se</SectionTitle>

                            <ul className="space-y-4">
                                {socialLinks.map((social) => (
                                    <li key={social.label}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3"
                                        >
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 group-hover:border-[#d1dcd6]/50 group-hover:bg-[#d1dcd6]/10 group-hover:text-[#d1dcd6] group-hover:shadow-[0_0_15px_rgba(209,220,214,0.15)] group-hover:-translate-y-0.5">
                                                {social.icon}
                                            </span>

                                            <span className="min-w-0">
                                                <span className="block text-sm font-medium text-gray-200 transition-colors duration-200 group-hover:text-[#d1dcd6]">
                                                    {social.label}
                                                </span>
                                                <span className="block truncate text-xs text-gray-500 transition-colors duration-200 group-hover:text-gray-400">
                                                    {social.detail}
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 border-t border-white/10 pt-5">
                                <p className="text-sm font-semibold text-gray-200">
                                    Stack Blackzada
                                </p>
                                <p className="mt-2 text-xs leading-6 text-gray-500">
                                    Goiânia, GO · Brasil
                                    <br />
                                    Atendimento remoto nacional.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Barra inferior */}
                    <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-center text-xs leading-6 text-gray-500 sm:text-left">
                            © {new Date().getFullYear()} Stack Blackzada.
                            <span className="block sm:inline">
                                {' '}Todos os direitos reservados.
                            </span>
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs sm:justify-end">
                            <button
                                type="button"
                                onClick={() => setPrivacyModalOpen(true)}
                                className="text-gray-400 underline decoration-gray-600 underline-offset-4 transition-colors duration-200 hover:text-[#d1dcd6] hover:decoration-[#d1dcd6]"
                            >
                                Privacidade e LGPD
                            </button>

                            <span className="hidden text-gray-700 sm:inline">
                                /
                            </span>

                            <a
                                href="#contato"
                                className="group inline-flex items-center gap-2 font-semibold text-[#d1dcd6] transition-colors duration-200 hover:text-white"
                            >
                                Solicitar proposta
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5 12h14m-6-6 6 6-6 6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Modal de privacidade */}
            {privacyModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setPrivacyModalOpen(false);
                        }
                    }}
                >
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="privacy-title"
                        className="w-full max-w-xl overflow-hidden rounded-2xl border border-[#d1dcd6]/25 bg-[#0b0f0e] shadow-2xl shadow-black/80"
                    >
                        <div className="flex items-start justify-between gap-4 border-b border-white/10 p-6 sm:p-7">
                            <div>
                                <span className="font-code text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d1dcd6]">
                                    Transparência e segurança
                                </span>
                                <h2
                                    id="privacy-title"
                                    className="mt-2 font-display text-lg font-bold leading-snug text-white sm:text-xl"
                                >
                                    Política de Privacidade
                                </h2>
                                <p className="mt-1 text-xs text-gray-500">
                                    Proteção de dados · LGPD
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setPrivacyModalOpen(false)}
                                aria-label="Fechar política de privacidade"
                                className="rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="m6 6 12 12M18 6 6 18"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="max-h-[55vh] space-y-6 overflow-y-auto p-6 text-sm leading-7 text-gray-400 sm:p-7">
                            <p>
                                A <strong className="text-white">Stack Blackzada</strong> valoriza a privacidade e
                                busca tratar os dados pessoais de forma
                                responsável, transparente e de acordo com a
                                legislação aplicável.
                            </p>

                            <div>
                                <h3 className="mb-2 font-semibold text-white">
                                    01. Dados coletados
                                </h3>
                                <p>
                                    Os dados informados voluntariamente pelos
                                    usuários nos canais de contato, como nome,
                                    e-mail, telefone, empresa e descrição do
                                    projeto, poderão ser utilizados para
                                    responder solicitações, avaliar necessidades
                                    e elaborar propostas comerciais.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-white">
                                    02. Uso e compartilhamento
                                </h3>
                                <p>
                                    Os dados serão utilizados para as finalidades
                                    informadas e não serão vendidos. Eventual
                                    compartilhamento com prestadores de serviços
                                    poderá ocorrer quando necessário à operação,
                                    ao atendimento da solicitação ou ao
                                    cumprimento de obrigações legais, com as
                                    salvaguardas aplicáveis.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-white">
                                    03. Segurança e confidencialidade
                                </h3>
                                <p>
                                    São adotadas medidas de proteção compatíveis
                                    com a operação para reduzir riscos de acesso
                                    indevido e uso inadequado das informações.
                                    Acordos específicos de confidencialidade
                                    poderão ser formalizados quando aplicável.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-white">
                                    04. Seus direitos
                                </h3>
                                <p>
                                    Nos termos da Lei nº 13.709/2018 (LGPD), o
                                    titular poderá solicitar informações sobre
                                    o tratamento, acesso, correção e, quando
                                    aplicável, eliminação de seus dados, além
                                    de exercer os demais direitos previstos
                                    na legislação.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-white">
                                    05. Contato
                                </h3>
                                <p>
                                    Para dúvidas ou solicitações relacionadas
                                    aos dados pessoais, entre em contato pelo
                                    e-mail:
                                </p>
                                <a
                                    href="mailto:stackblackzada@gmail.com"
                                    className="mt-2 inline-block break-all font-medium text-[#d1dcd6] transition-colors hover:underline hover:text-white"
                                >
                                    stackblackzada@gmail.com
                                </a>
                            </div>

                            <p className="border-t border-white/10 pt-4 text-xs text-gray-500">
                                Esta política deve refletir as práticas reais
                                da empresa e ser atualizada quando houver
                                mudanças na coleta, no uso ou no armazenamento
                                de dados.
                            </p>
                        </div>

                        <div className="flex justify-end border-t border-white/10 p-5 sm:px-7">
                            <button
                                type="button"
                                onClick={() => setPrivacyModalOpen(false)}
                                className="rounded-lg bg-[#d1dcd6] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0b0f0e] shadow-md transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_rgba(209,220,214,0.4)] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#d1dcd6] focus:ring-offset-2 focus:ring-offset-[#0b0f0e]"
                            >
                                Fechar
                            </button>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}