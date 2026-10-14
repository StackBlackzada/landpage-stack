import { useState } from 'react';

export default function Contact({ t }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        company: '',
        service: 'software-sob-medida',
        message: '',
    });

    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        // Validação básica do lado do cliente
        if (!formData.name.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
            setStatus('error');
            setErrorMessage('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e WhatsApp).');
            return;
        }

        // Validação simples de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus('error');
            setErrorMessage('Por favor, insira um endereço de e-mail válido.');
            return;
        }

        try {
            // Simulamos ou enviamos para endpoint (ex: Webhook, Formspree ou backend configurado)
            // Em ambiente estático sem backend obrigatório, gravamos no localStorage para segurança
            // e permitimos ao usuário também abrir diretamente o WhatsApp já pré-preenchido!
            await new Promise((resolve) => setTimeout(resolve, 800));

            const storedLeads = JSON.parse(localStorage.getItem('stack_leads') || '[]');
            storedLeads.push({ ...formData, timestamp: new Date().toISOString() });
            localStorage.setItem('stack_leads', JSON.stringify(storedLeads));

            setStatus('success');
        } catch (err) {
            setStatus('error');
            setErrorMessage('Ocorreu um erro temporário ao enviar. Você também pode nos chamar diretamente pelo WhatsApp abaixo.');
        }
    };

    // Monta texto pré-formatado para o WhatsApp com os dados inseridos
    const whatsappText = encodeURIComponent(
        `Olá! Gostaria de solicitar uma proposta técnica com a Stack Blackzada.\n\n` +
        `*Nome:* ${formData.name || 'Interessado'}\n` +
        `*Empresa:* ${formData.company || 'Não informado'}\n` +
        `*E-mail:* ${formData.email || 'Não informado'}\n` +
        `*Interesse:* ${formData.service}\n` +
        `*Detalhes:* ${formData.message || 'Gostaria de agendar uma conversa preliminar.'}`
    );

    return (
        <section
            className="py-16 sm:py-24 px-4 sm:px-6 relative z-20"
            id="contato"
        >
            <div className="max-w-4xl mx-auto cta-box">
                {/* Header da seção */}
                <div className="text-center mb-10 sm:mb-14">
                    <span className="font-code text-xs text-brand-subtle dark:text-brand-accent tracking-widest block mb-2 font-bold uppercase">
                        {'// INICIAR CONVERSA'}
                    </span>
                    <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight text-brand-dark dark:text-white">
                        Solicite uma proposta técnica sem compromisso
                    </h2>
                    <p className="text-base sm:text-xl text-brand-dark/80 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Preencha o formulário para receber uma análise preliminar de arquitetura e estimativa de investimento.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Formulário Principal */}
                    <div className="lg:col-span-8 glass-card p-6 sm:p-10 rounded-3xl border border-brand-accent/40 shadow-2xl relative">
                        {status === 'success' ? (
                            <div className="text-center py-10 px-4">
                                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-5">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-brand-dark dark:text-white mb-3">
                                    Proposta solicitada com sucesso!
                                </h3>
                                <p className="text-sm sm:text-base text-brand-dark/80 dark:text-gray-300 mb-6 max-w-md mx-auto leading-relaxed">
                                    Obrigado pelo contato, <strong>{formData.name}</strong>. Nosso time de engenharia analisará as informações e retornará em até <strong>1 dia útil</strong> pelo WhatsApp ou e-mail informado.
                                </p>
                                <div className="space-y-3">
                                    <a
                                        href={`https://wa.me/5564999818481?text=${whatsappText}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-shine inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-code font-bold text-sm shadow-md"
                                    >
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                        <span>Adiantar conversa no WhatsApp</span>
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setStatus('idle');
                                            setFormData({ name: '', email: '', whatsapp: '', company: '', service: 'software-sob-medida', message: '' });
                                        }}
                                        className="block mx-auto text-xs font-code text-brand-dark/70 dark:text-gray-400 hover:underline pt-2"
                                    >
                                        Enviar outra mensagem
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                {status === 'error' && (
                                    <div className="p-3.5 rounded-xl bg-red-100 dark:bg-red-950/80 border border-red-300 dark:border-red-800 text-red-800 dark:text-red-200 text-xs sm:text-sm font-code flex items-start gap-2">
                                        <svg className="w-5 h-5 shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-code font-bold uppercase tracking-wider text-brand-dark dark:text-gray-200 mb-1.5">
                                            Seu Nome *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Ex: Carlos Silva"
                                            className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-darkbg-main border border-brand-subtle/25 dark:border-brand-accent/30 text-brand-dark dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-code font-bold uppercase tracking-wider text-brand-dark dark:text-gray-200 mb-1.5">
                                            E-mail Corporativo *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="carlos@suaempresa.com.br"
                                            className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-darkbg-main border border-brand-subtle/25 dark:border-brand-accent/30 text-brand-dark dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-code font-bold uppercase tracking-wider text-brand-dark dark:text-gray-200 mb-1.5">
                                            WhatsApp com DDD *
                                        </label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            required
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder="(11) 98765-4321"
                                            className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-darkbg-main border border-brand-subtle/25 dark:border-brand-accent/30 text-brand-dark dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-code font-bold uppercase tracking-wider text-brand-dark dark:text-gray-200 mb-1.5">
                                            Nome da Empresa
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Sua Empresa Ltda"
                                            className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-darkbg-main border border-brand-subtle/25 dark:border-brand-accent/30 text-brand-dark dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-code font-bold uppercase tracking-wider text-brand-dark dark:text-gray-200 mb-1.5">
                                        O que sua empresa precisa desenvolver?
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-darkbg-main border border-brand-subtle/25 dark:border-brand-accent/30 text-brand-dark dark:text-white text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all cursor-pointer"
                                    >
                                        <option value="software-sob-medida">Software Sob Medida (Web ou Mobile)</option>
                                        <option value="automacao-ia">Automação Inteligente & Soluções com IA</option>
                                        <option value="integracao-apis">Integração de Sistemas & APIs</option>
                                        <option value="modernizacao-legado">Modernização de Sistema Legado / Cloud</option>
                                        <option value="consultoria-arquitetura">Consultoria Técnica / Outro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-code font-bold uppercase tracking-wider text-brand-dark dark:text-gray-200 mb-1.5">
                                        Conte um pouco sobre o projeto ou gargalo
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Ex: Precisamos automatizar a gestão de pedidos e substituir planilhas manuais da nossa equipe..."
                                        className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-darkbg-main border border-brand-subtle/25 dark:border-brand-accent/30 text-brand-dark dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="btn-shine w-full py-4 rounded-xl bg-gradient-to-r from-brand-accent via-emerald-400 to-brand-accent bg-[length:200%_auto] text-brand-dark font-code font-extrabold text-base glow-effect hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-60"
                                >
                                    {status === 'submitting' ? 'Processando envio...' : 'Solicitar Proposta sem Compromisso'}
                                </button>

                                <div className="flex items-center justify-center gap-4 text-[11px] font-code text-brand-dark/70 dark:text-gray-400 pt-2 text-center">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        <span>Retornamos em até <strong>1 dia útil</strong></span>
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Dados 100% protegidos</span>
                                    </span>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Canal Direto WhatsApp & Informações */}
                    <div className="lg:col-span-4 space-y-5">
                        {/* Card WhatsApp */}
                        <div className="glass-card p-6 sm:p-7 rounded-3xl border border-brand-accent/30 shadow-md">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                            </div>
                            <h4 className="font-display font-bold text-lg text-brand-dark dark:text-white mb-2">
                                Prefere conversar agora?
                            </h4>
                            <p className="text-xs sm:text-sm text-brand-dark/75 dark:text-gray-300 mb-5 leading-relaxed">
                                Fale diretamente com nossa liderança técnica pelo WhatsApp para esclarecer dúvidas rápidas.
                            </p>
                            <a
                                href={`https://wa.me/5564999818481?text=${whatsappText}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-code font-bold text-xs sm:text-sm transition-colors shadow-sm"
                            >
                                <span>Iniciar conversa no WhatsApp</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>

                        {/* Card E-mail & Atendimento */}
                        <div className="glass-card p-6 rounded-3xl border border-brand-subtle/20 dark:border-brand-accent/20 font-code text-xs space-y-4">
                            <div>
                                <span className="text-brand-dark/60 dark:text-gray-400 block mb-1 uppercase text-[10px] tracking-wider">
                                    E-mail institucional
                                </span>
                                <a
                                    href="mailto:stackblackzada@gmail.com"
                                    className="font-bold text-brand-subtle dark:text-brand-accent hover:underline break-all"
                                >
                                    stackblackzada@gmail.com
                                </a>
                            </div>

                            <div>
                                <span className="text-brand-dark/60 dark:text-gray-400 block mb-1 uppercase text-[10px] tracking-wider">
                                    Horário de atendimento
                                </span>
                                <span className="text-brand-dark dark:text-gray-200">
                                    Segunda a Sexta, 09h às 18h (Brasília)
                                </span>
                            </div>

                            <div>
                                <span className="text-brand-dark/60 dark:text-gray-400 block mb-1 uppercase text-[10px] tracking-wider">
                                    Compromisso de resposta
                                </span>
                                <span className="text-brand-dark dark:text-gray-200">
                                    Primeiro parecer técnico em até <strong>24 horas úteis</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
