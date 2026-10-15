import { useState } from 'react';

// Função para aplicar máscara de telefone brasileiro em tempo real
function maskPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length === 0) return '';
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

// Validação real de telefone com DDD do Brasil
function validatePhone(phone) {
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 11) return false;
    const ddd = parseInt(digits.slice(0, 2), 10);
    if (ddd < 11 || ddd > 99) return false;
    // Rejeita sequências repetidas como 11111111111, 00000000000
    if (/^(\d)\1+$/.test(digits)) return false;
    // Se tiver 11 dígitos, o celular deve começar com 9
    if (digits.length === 11 && digits[2] !== '9') return false;
    return true;
}

const serviceLabels = {
    'software-sob-medida': 'Software Sob Medida (Web ou Mobile)',
    'automacao-ia': 'Automação Inteligente & Soluções com IA',
    'integracao-apis': 'Integração de Sistemas & APIs',
    'modernizacao-legado': 'Modernização de Sistema Legado / Cloud',
    'consultoria-arquitetura': 'Consultoria Técnica / Outro',
};

export default function Contact({ t }) {
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        company: '',
        email: '',
        service: 'software-sob-medida',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | submitting | success

    const handlePhoneChange = (e) => {
        const masked = maskPhone(e.target.value);
        setFormData((prev) => ({ ...prev, whatsapp: masked }));
        if (errors.whatsapp) {
            setErrors((prev) => ({ ...prev, whatsapp: null }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // 1. Validação de Nome: Mínimo 3 caracteres com letras reais
        const trimmedName = formData.name.trim();
        if (!trimmedName) {
            newErrors.name = 'Por favor, informe seu nome.';
        } else if (trimmedName.length < 3 || !/[a-zA-ZÀ-ÿ]{2,}/.test(trimmedName)) {
            newErrors.name = 'Por favor, insira um nome válido (mínimo de 3 letras).';
        }

        // 2. Validação de WhatsApp: Celular obrigatório com DDD
        const phoneDigits = formData.whatsapp.replace(/\D/g, '');
        if (!phoneDigits) {
            newErrors.whatsapp = 'Por favor, informe seu WhatsApp com DDD.';
        } else if (!validatePhone(formData.whatsapp)) {
            newErrors.whatsapp = 'Número inválido. Digite o DDD + número (ex: 64 99981-8481).';
        }

        // 3. E-mail: TOTALMENTE OPCIONAL!
        // Se a pessoa preencher, valida o formato. Se deixar em branco, aceita normalmente!
        const trimmedEmail = formData.email.trim();
        if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
            newErrors.email = 'E-mail inválido. Se preferir, deixe em branco para contato só via WhatsApp.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Gera a mensagem para envio no WhatsApp
    const buildWhatsAppUrl = () => {
        const text =
            `🚀 *SOLICITAÇÃO DE PROPOSTA - STACK BLACKZADA*\n\n` +
            `👤 *Nome:* ${formData.name.trim()}\n` +
            `📱 *WhatsApp:* ${formData.whatsapp.trim()}\n` +
            (formData.company.trim() ? `🏢 *Empresa:* ${formData.company.trim()}\n` : '') +
            (formData.email.trim() ? `✉️ *E-mail:* ${formData.email.trim()}\n` : '') +
            `🛠️ *Interesse:* ${serviceLabels[formData.service] || formData.service}\n` +
            `📝 *Detalhes:* ${formData.message.trim() || 'Gostaria de agendar um diagnóstico preliminar.'}`;

        return `https://wa.me/5564999818481?text=${encodeURIComponent(text)}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Se houver qualquer erro de validação, trava imediatamente!
        if (!validateForm()) {
            setStatus('error');
            return;
        }

        setStatus('submitting');

        const waUrl = buildWhatsAppUrl();

        // Salva cópia local de segurança
        try {
            const stored = JSON.parse(localStorage.getItem('stack_leads') || '[]');
            stored.push({ ...formData, timestamp: new Date().toISOString() });
            localStorage.setItem('stack_leads', JSON.stringify(stored));
        } catch (_) {}

        setStatus('success');

        // Abre o WhatsApp imediatamente com os dados preenchidos
        window.open(waUrl, '_blank');
    };

    const resetForm = () => {
        setStatus('idle');
        setErrors({});
        setFormData({
            name: '',
            whatsapp: '',
            company: '',
            email: '',
            service: 'software-sob-medida',
            message: '',
        });
    };

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
                        Preencha seus dados para receber uma análise preliminar de arquitetura e estimativa de investimento diretamente no WhatsApp.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Formulário Principal */}
                    <div className="lg:col-span-8 glass-card p-6 sm:p-10 rounded-3xl border border-brand-accent/40 shadow-2xl relative">
                        {status === 'success' ? (
                            <div className="text-center py-8 px-4">
                                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-5">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-brand-dark dark:text-white mb-2">
                                    Dados validados com sucesso!
                                </h3>
                                <p className="text-sm sm:text-base text-brand-dark/80 dark:text-gray-300 mb-6 max-w-md mx-auto leading-relaxed">
                                    Obrigado, <strong>{formData.name}</strong>. Sua conversa no WhatsApp foi iniciada. Caso a janela não tenha aberto automaticamente, clique no botão verde abaixo:
                                </p>
                                <div className="space-y-3">
                                    <a
                                        href={buildWhatsAppUrl()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-code font-bold text-base shadow-lg"
                                    >
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                        <span>Abrir conversa no WhatsApp</span>
                                    </a>
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="block mx-auto text-xs font-code text-brand-dark/70 dark:text-gray-400 hover:underline pt-3"
                                    >
                                        Enviar outra mensagem
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                                {/* Alerta de Erro Geral se validação falhar */}
                                {Object.keys(errors).length > 0 && (
                                    <div className="p-3.5 rounded-xl bg-red-100 dark:bg-red-950/80 border border-red-300 dark:border-red-800 text-red-800 dark:text-red-200 text-xs sm:text-sm font-code flex items-start gap-2">
                                        <svg className="w-5 h-5 shrink-0 text-red-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-bold block">Por favor, corrija os campos abaixo:</span>
                                            <ul className="list-disc list-inside mt-1 space-y-0.5">
                                                {Object.values(errors).map((err, i) => (
                                                    <li key={i}>{err}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Nome (Obrigatório) */}
                                    <div>
                                        <label className="block text-xs font-code font-bold uppercase tracking-wider text-brand-dark dark:text-gray-200 mb-1.5">
                                            Seu Nome *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Ex: Carlos Silva"
                                            className={`w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-darkbg-main border text-brand-dark dark:text-white placeholder-gray-400 text-sm focus:outline-none transition-all ${
                                                errors.name
                                                    ? 'border-red-500 bg-red-50/10 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                                                    : 'border-brand-subtle/25 dark:border-brand-accent/30 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent'
                                            }`}
                                        />
                                        {errors.name && (
                                            <span className="text-red-500 text-xs font-code mt-1 block">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>

                                    {/* WhatsApp (Obrigatório com Máscara e Validação de DDD) */}
                                    <div>
                                        <label className="block text-xs font-code font-bold uppercase tracking-wider text-brand-dark dark:text-gray-200 mb-1.5">
                                            WhatsApp com DDD *
                                        </label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handlePhoneChange}
                                            maxLength={15}
                                            placeholder="(64) 99981-8481"
                                            className={`w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-darkbg-main border text-brand-dark dark:text-white placeholder-gray-400 text-sm focus:outline-none transition-all ${
                                                errors.whatsapp
                                                    ? 'border-red-500 bg-red-50/10 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                                                    : 'border-brand-subtle/25 dark:border-brand-accent/30 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent'
                                            }`}
                                        />
                                        {errors.whatsapp && (
                                            <span className="text-red-500 text-xs font-code mt-1 block">
                                                {errors.whatsapp}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Nome da Empresa (Opcional) */}
                                    <div>
                                        <label className="block text-xs font-code font-bold uppercase tracking-wider text-brand-dark dark:text-gray-200 mb-1.5">
                                            Nome da Empresa <span className="text-gray-400 font-normal lowercase">(opcional)</span>
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

                                    {/* E-mail (TOTALMENTE OPCIONAL) */}
                                    <div>
                                        <label className="block text-xs font-code font-bold uppercase tracking-wider text-brand-dark dark:text-gray-200 mb-1.5">
                                            E-mail <span className="text-gray-400 font-normal lowercase">(opcional - não obrigatório)</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="carlos@empresa.com.br"
                                            className={`w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-darkbg-main border text-brand-dark dark:text-white placeholder-gray-400 text-sm focus:outline-none transition-all ${
                                                errors.email
                                                    ? 'border-red-500 bg-red-50/10 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                                                    : 'border-brand-subtle/25 dark:border-brand-accent/30 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent'
                                            }`}
                                        />
                                        {errors.email && (
                                            <span className="text-red-500 text-xs font-code mt-1 block">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Tipo de Serviço */}
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

                                {/* Mensagem */}
                                <div>
                                    <label className="block text-xs font-code font-bold uppercase tracking-wider text-brand-dark dark:text-gray-200 mb-1.5">
                                        Conte um pouco sobre o projeto ou gargalo <span className="text-gray-400 font-normal lowercase">(opcional)</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Ex: Precisamos automatizar a gestão de pedidos e substituir planilhas manuais..."
                                        className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-darkbg-main border border-brand-subtle/25 dark:border-brand-accent/30 text-brand-dark dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* Botão de Envio com Validação Estrita */}
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="btn-shine w-full py-4 rounded-xl bg-gradient-to-r from-brand-accent via-emerald-400 to-brand-accent bg-[length:200%_auto] text-brand-dark font-code font-extrabold text-base glow-effect hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-60"
                                >
                                    {status === 'submitting' ? 'Validando e enviando...' : 'Solicitar Proposta sem Compromisso'}
                                </button>

                                <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-code text-brand-dark/70 dark:text-gray-400 pt-2 text-center">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        <span>Retorno direto pelo <strong>WhatsApp em até 1 dia útil</strong></span>
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
                                Fale diretamente com nossa liderança técnica pelo WhatsApp para esclarecer dúvidas imediatas.
                            </p>
                            <a
                                href="https://wa.me/5564999818481?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20software%20com%20a%20Stack%20Blackzada."
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
                                    WhatsApp Direto
                                </span>
                                <a
                                    href="https://wa.me/5564999818481"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-brand-subtle dark:text-brand-accent hover:underline"
                                >
                                    +55 (64) 99981-8481
                                </a>
                            </div>

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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
