import { useState } from 'react';

// Conjunto oficial de todos os 67 DDDs válidos do Brasil (ANATEL)
const VALID_DDDS = new Set([
    11, 12, 13, 14, 15, 16, 17, 18, 19, // SP
    21, 22, 24,                         // RJ
    27, 28,                             // ES
    31, 32, 33, 34, 35, 37, 38,         // MG
    41, 42, 43, 44, 45, 46,             // PR
    47, 48, 49,                         // SC
    51, 53, 54, 55,                     // RS
    61,                                 // DF
    62, 64,                             // GO
    63,                                 // TO
    65, 66,                             // MT
    67,                                 // MS
    68,                                 // AC
    69,                                 // RO
    71, 73, 74, 75, 77,                 // BA
    79,                                 // SE
    81, 87,                             // PE
    82,                                 // AL
    83,                                 // PB
    84,                                 // RN
    85, 88,                             // CE
    86, 89,                             // PI
    91, 93, 94,                         // PA
    92, 97,                             // AM
    95,                                 // RR
    96,                                 // AP
    98, 99                              // MA
]);

// Expressão regular para detecção de emojis e símbolos gráficos
const EMOJI_REGEX = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

// Máscara de telefone brasileiro em tempo real
function maskPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length === 0) return '';
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

// 1. Validação estrita de Nome (Padrão QA)
function validateName(name) {
    const trimmed = name.trim();
    if (!trimmed) return 'Por favor, informe seu nome.';
    if (EMOJI_REGEX.test(trimmed)) return 'O nome não pode conter emojis ou símbolos gráficos.';
    if (/\d/.test(trimmed)) return 'O nome não pode conter números.';
    if (!/^[a-zA-ZÀ-ÿ\s'.-]+$/.test(trimmed)) return 'O nome contém caracteres especiais inválidos.';
    
    const parts = trimmed.split(/\s+/).filter((p) => p.length > 0);
    if (parts.length < 2) {
        return 'Por favor, informe seu nome completo (nome e sobrenome).';
    }
    if (parts.some((p) => p.length < 2)) {
        return 'Cada parte do nome deve ter pelo menos 2 letras.';
    }
    const vowelRegex = /[aeiouyáéíóúâêîôûãõäëïöüAEIOUYÁÉÍÓÚÂÊÎÔÛÃÕÄËÏÖÜ]/;
    if (parts.some((p) => !vowelRegex.test(p))) {
        return 'Por favor, informe um nome real válido.';
    }
    if (/(.)\1{3,}/.test(trimmed.toLowerCase())) {
        return 'O nome contém repetições inválidas de letras.';
    }
    return null;
}

// 2. Validação estrita de WhatsApp (Padrão QA e ANATEL)
function validateWhatsApp(phone) {
    const digits = phone.replace(/\D/g, '');
    if (!digits) return 'Por favor, informe seu WhatsApp com DDD.';
    if (digits.length !== 11) {
        return 'O WhatsApp deve ter exatamente 11 dígitos com DDD (ex: 64 99981-8481).';
    }
    const ddd = parseInt(digits.slice(0, 2), 10);
    if (!VALID_DDDS.has(ddd)) {
        return `DDD (${digits.slice(0, 2)}) não é um DDD válido no Brasil.`;
    }
    if (digits[2] !== '9') {
        return 'O número de celular deve começar com o dígito 9 logo após o DDD.';
    }
    if (/^(\d)\1+$/.test(digits)) {
        return 'Número de WhatsApp inválido (todos os dígitos iguais).';
    }
    const phoneBody = digits.slice(3);
    if (/^(\d)\1{7}$/.test(phoneBody)) {
        return 'Número de WhatsApp inválido (dígitos repetidos).';
    }
    if (phoneBody === '12345678' || phoneBody === '87654321') {
        return 'Número de WhatsApp inválido (sequência óbvia de teste).';
    }
    return null;
}

// 3. Validação de E-mail
function validateEmail(email) {
    const trimmed = email.trim();
    if (!trimmed) return null;
    if (EMOJI_REGEX.test(trimmed)) return 'O e-mail não pode conter emojis.';
    if (/\s/.test(trimmed)) return 'O e-mail não pode conter espaços em branco.';
    if (/\.\./.test(trimmed)) return 'O e-mail não pode conter pontos consecutivos.';
    
    const rfcRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!rfcRegex.test(trimmed)) {
        return 'Formato de e-mail inválido (ex: contato@suaempresa.com.br).';
    }
    const [user, domain] = trimmed.split('@');
    if (user.length < 2) return 'O nome de usuário do e-mail é muito curto.';
    const domainParts = domain.split('.');
    if (domainParts[0].length < 2) return 'O domínio do e-mail é inválido.';
    return null;
}

// 4. Validação de Empresa
function validateCompany(company) {
    const trimmed = company.trim();
    if (!trimmed) return null;
    if (EMOJI_REGEX.test(trimmed) && !/[a-zA-Z0-9]/.test(trimmed)) {
        return 'O nome da empresa não pode conter apenas emojis.';
    }
    if (trimmed.length < 2) {
        return 'O nome da empresa deve ter pelo menos 2 caracteres.';
    }
    if (/^\d+$/.test(trimmed)) {
        return 'O nome da empresa deve conter letras, não apenas números.';
    }
    if (/(.)\1{3,}/.test(trimmed.toLowerCase())) {
        return 'Nome da empresa contém caracteres repetidos inválidos.';
    }
    return null;
}

// 5. Validação de Mensagem
function validateMessage(message) {
    const trimmed = message.trim();
    if (!trimmed) return null;
    if (trimmed.length < 5) {
        return 'Se preenchida, descreva sua necessidade com pelo menos 5 caracteres.';
    }
    if (EMOJI_REGEX.test(trimmed) && !/[a-zA-Z0-9]/.test(trimmed)) {
        return 'A mensagem deve conter texto legível.';
    }
    if (/^(.)\1+$/.test(trimmed)) {
        return 'Por favor, descreva sua necessidade com palavras reais.';
    }
    return null;
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
    const [touched, setTouched] = useState({});
    const [status, setStatus] = useState('idle');

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'name':
                return validateName(value);
            case 'whatsapp':
                return validateWhatsApp(value);
            case 'email':
                return validateEmail(value);
            case 'company':
                return validateCompany(value);
            case 'message':
                return validateMessage(value);
            default:
                return null;
        }
    };

    const handlePhoneChange = (e) => {
        const masked = maskPhone(e.target.value);
        setFormData((prev) => ({ ...prev, whatsapp: masked }));
        if (touched.whatsapp) {
            const err = validateWhatsApp(masked);
            setErrors((prev) => ({ ...prev, whatsapp: err }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (touched[name]) {
            const err = validateField(name, value);
            setErrors((prev) => ({ ...prev, [name]: err }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const err = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: err }));
    };

    const validateAll = () => {
        const newErrors = {
            name: validateName(formData.name),
            whatsapp: validateWhatsApp(formData.whatsapp),
            email: validateEmail(formData.email),
            company: validateCompany(formData.company),
            message: validateMessage(formData.message),
        };

        Object.keys(newErrors).forEach((key) => {
            if (!newErrors[key]) delete newErrors[key];
        });

        setErrors(newErrors);
        setTouched({
            name: true,
            whatsapp: true,
            email: true,
            company: true,
            message: true,
        });

        return Object.keys(newErrors).length === 0;
    };

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

        if (!validateAll()) {
            setStatus('error');
            const firstErrorField = ['name', 'whatsapp', 'email', 'company', 'message'].find(
                (f) => errors[f] || validateField(f, formData[f])
            );
            if (firstErrorField) {
                const el = document.querySelector(`[name="${firstErrorField}"]`);
                if (el) el.focus();
            }
            return;
        }

        setStatus('submitting');
        const waUrl = buildWhatsAppUrl();

        try {
            const stored = JSON.parse(localStorage.getItem('stack_leads') || '[]');
            stored.push({ ...formData, timestamp: new Date().toISOString() });
            localStorage.setItem('stack_leads', JSON.stringify(stored));
        } catch (_) {}

        setStatus('success');
        window.open(waUrl, '_blank');
    };

    const resetForm = () => {
        setStatus('idle');
        setErrors({});
        setTouched({});
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
            className="py-20 sm:py-28 px-4 sm:px-6 relative z-20"
            id="contato"
        >
            <div className="max-w-4xl mx-auto">
                {/* Header da seção */}
                <div className="text-center mb-16 sm:mb-20">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md mb-4 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-code text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                            // INICIAR CONVERSA
                        </span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-5xl font-black mb-5 tracking-tight text-black dark:text-white">
                        Solicite uma proposta técnica <span className="text-emerald-600 dark:text-emerald-400 relative inline-block">sem compromisso <span className="absolute bottom-1 left-0 w-full h-[3px] bg-emerald-500/40 rounded"></span></span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Preencha seus dados para receber uma análise preliminar de arquitetura e estimativa de investimento diretamente no WhatsApp.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Formulário Principal com Glassmorphism */}
                    <div className="lg:col-span-8 rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/80 p-6 sm:p-10 shadow-xl shadow-black/[0.02] dark:shadow-black/40 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-500 opacity-90"></div>

                        {status === 'success' ? (
                            <div className="text-center py-8 px-4">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-5 shadow-sm">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-black dark:text-white mb-2">
                                    Dados validados com sucesso!
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto leading-relaxed">
                                    Obrigado, <strong className="text-black dark:text-white">{formData.name}</strong>. Sua conversa no WhatsApp foi iniciada. Caso a janela não tenha aberto automaticamente, clique no botão abaixo:
                                </p>
                                <div className="space-y-3">
                                    <a
                                        href={buildWhatsAppUrl()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative inline-flex items-center justify-center p-4 px-8 py-3.5 overflow-hidden font-code font-bold text-emerald-600 dark:text-emerald-400 transition duration-300 ease-out border-2 border-emerald-500 rounded-full shadow-md group w-full"
                                    >
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black bg-emerald-500 duration-300 -translate-x-full group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-emerald-600 dark:text-emerald-400 group-hover:text-black transition-all duration-300 transform group-hover:translate-x-full ease">Abrir conversa no WhatsApp</span>
                                        <span className="relative invisible">Abrir conversa no WhatsApp</span>
                                    </a>
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="block mx-auto text-xs font-code text-gray-500 dark:text-gray-400 hover:underline pt-3"
                                    >
                                        Enviar outra mensagem
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                                {Object.keys(errors).length > 0 && (
                                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs sm:text-sm font-code flex items-start gap-2">
                                        <svg className="w-5 h-5 shrink-0 text-red-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-bold block">Atenção: corrija os campos destacados em vermelho abaixo:</span>
                                            <ul className="list-disc list-inside mt-1 space-y-0.5">
                                                {Object.values(errors).map((err, i) => (
                                                    <li key={i}>{err}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-code font-bold uppercase tracking-wider text-black dark:text-gray-200 mb-1.5">
                                            Seu Nome Completo *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Ex: Carlos Silva"
                                            className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-900/80 border text-black dark:text-white placeholder-gray-400 text-sm focus:outline-none transition-all ${
                                                errors.name
                                                    ? 'border-red-500 bg-red-500/5 focus:ring-2 focus:ring-red-500/20'
                                                    : 'border-gray-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                                            }`}
                                        />
                                        {errors.name && (
                                            <span className="text-red-500 text-xs font-code mt-1.5 flex items-center gap-1">
                                                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                <span>{errors.name}</span>
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-xs font-code font-bold uppercase tracking-wider text-black dark:text-gray-200 mb-1.5">
                                            WhatsApp com DDD *
                                        </label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handlePhoneChange}
                                            onBlur={handleBlur}
                                            maxLength={15}
                                            placeholder="(64) 99981-8481"
                                            className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-900/80 border text-black dark:text-white placeholder-gray-400 text-sm focus:outline-none transition-all ${
                                                errors.whatsapp
                                                    ? 'border-red-500 bg-red-500/5 focus:ring-2 focus:ring-red-500/20'
                                                    : 'border-gray-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                                            }`}
                                        />
                                        {errors.whatsapp && (
                                            <span className="text-red-500 text-xs font-code mt-1.5 flex items-center gap-1">
                                                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                <span>{errors.whatsapp}</span>
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-code font-bold uppercase tracking-wider text-black dark:text-gray-200 mb-1.5">
                                            Nome da Empresa <span className="text-gray-400 font-normal lowercase">(opcional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Ex: Alfa Logística"
                                            className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-900/80 border text-black dark:text-white placeholder-gray-400 text-sm focus:outline-none transition-all ${
                                                errors.company
                                                    ? 'border-red-500 bg-red-500/5 focus:ring-2 focus:ring-red-500/20'
                                                    : 'border-gray-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                                            }`}
                                        />
                                        {errors.company && (
                                            <span className="text-red-500 text-xs font-code mt-1.5 flex items-center gap-1">
                                                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                <span>{errors.company}</span>
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-xs font-code font-bold uppercase tracking-wider text-black dark:text-gray-200 mb-1.5">
                                            E-mail <span className="text-gray-400 font-normal lowercase">(opcional - não obrigatório)</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="carlos@empresa.com.br"
                                            className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-900/80 border text-black dark:text-white placeholder-gray-400 text-sm focus:outline-none transition-all ${
                                                errors.email
                                                    ? 'border-red-500 bg-red-500/5 focus:ring-2 focus:ring-red-500/20'
                                                    : 'border-gray-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                                            }`}
                                        />
                                        {errors.email && (
                                            <span className="text-red-500 text-xs font-code mt-1.5 flex items-center gap-1">
                                                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                <span>{errors.email}</span>
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-code font-bold uppercase tracking-wider text-black dark:text-gray-200 mb-1.5">
                                        O que sua empresa precisa desenvolver?
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-900/80 border border-gray-200 dark:border-zinc-800 text-black dark:text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all cursor-pointer"
                                    >
                                        <option value="software-sob-medida">Software Sob Medida (Web ou Mobile)</option>
                                        <option value="automacao-ia">Automação Inteligente & Soluções com IA</option>
                                        <option value="integracao-apis">Integração de Sistemas & APIs</option>
                                        <option value="modernizacao-legado">Modernização de Sistema Legado / Cloud</option>
                                        <option value="consultoria-arquitetura">Consultoria Técnica / Outro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-code font-bold uppercase tracking-wider text-black dark:text-gray-200 mb-1.5">
                                        Conte um pouco sobre o projeto ou gargalo <span className="text-gray-400 font-normal lowercase">(opcional)</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Ex: Precisamos automatizar a gestão de pedidos e substituir planilhas manuais..."
                                        className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-900/80 border text-black dark:text-white placeholder-gray-400 text-sm focus:outline-none transition-all resize-none ${
                                            errors.message
                                                ? 'border-red-500 bg-red-500/5 focus:ring-2 focus:ring-red-500/20'
                                                : 'border-gray-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                                        }`}
                                    ></textarea>
                                    {errors.message && (
                                        <span className="text-red-500 text-xs font-code mt-1.5 flex items-center gap-1">
                                            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            <span>{errors.message}</span>
                                        </span>
                                    )}
                                </div>

                                {/* Botão de Envio com o Efeito Slider Solicitado */}
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="relative inline-flex items-center justify-center p-4 px-6 py-3.5 overflow-hidden font-code font-bold text-black dark:text-white transition duration-300 ease-out border-2 border-emerald-500 rounded-xl shadow-md group w-full cursor-pointer disabled:opacity-60"
                                >
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-emerald-500 group-hover:translate-x-0 ease">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-emerald-600 dark:text-emerald-400 group-hover:text-black transition-all duration-300 transform group-hover:translate-x-full ease font-bold">
                                        {status === 'submitting' ? 'Validando e enviando...' : 'Solicitar Proposta sem Compromisso'}
                                    </span>
                                    <span className="relative invisible">
                                        {status === 'submitting' ? 'Validando e enviando...' : 'Solicitar Proposta sem Compromisso'}
                                    </span>
                                </button>

                                <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-code text-gray-500 dark:text-gray-400 pt-2 text-center">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        <span>Retorno direto pelo <strong>WhatsApp em até 1 dia útil</strong></span>
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Dados 100% protegidos</span>
                                    </span>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Canal Direto WhatsApp & Informações */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/80 p-6 sm:p-7 shadow-lg shadow-black/[0.02] dark:shadow-black/40">
                            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 shadow-sm">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                            </div>
                            <h4 className="font-display font-bold text-lg text-black dark:text-white mb-2">
                                Prefere conversar agora?
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                                Fale diretamente com nossa liderança técnica pelo WhatsApp para esclarecer dúvidas imediatas.
                            </p>
                            
                            {/* Botão de Slide também aplicado no atalho rápido do WhatsApp */}
                            <a
                                href="https://wa.me/5564999818481?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20software%20com%20a%20Stack%20Blackzada."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex items-center justify-center p-3 px-6 py-2.5 overflow-hidden font-code font-bold text-emerald-600 dark:text-emerald-400 transition duration-300 ease-out border border-emerald-500 rounded-xl shadow-sm group w-full text-xs sm:text-sm"
                            >
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black bg-emerald-500 duration-300 -translate-x-full group-hover:translate-x-0 ease">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-emerald-600 dark:text-emerald-400 group-hover:text-black transition-all duration-300 transform group-hover:translate-x-full ease font-bold">Iniciar conversa no WhatsApp</span>
                                <span className="relative invisible">Iniciar conversa no WhatsApp</span>
                            </a>
                        </div>

                        <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/80 p-6 shadow-lg shadow-black/[0.02] dark:shadow-black/40 font-code text-xs space-y-4">
                            <div>
                                <span className="text-gray-500 dark:text-gray-400 block mb-1 uppercase text-[10px] tracking-wider">
                                    WhatsApp Direto
                                </span>
                                <a
                                    href="https://wa.me/5564999818481"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                                >
                                    +55 (64) 99981-8481
                                </a>
                            </div>

                            <div>
                                <span className="text-gray-500 dark:text-gray-400 block mb-1 uppercase text-[10px] tracking-wider">
                                    E-mail institucional
                                </span>
                                <a
                                    href="mailto:stackblackzada@gmail.com"
                                    className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline break-all"
                                >
                                    stackblackzada@gmail.com
                                </a>
                            </div>

                            <div>
                                <span className="text-gray-500 dark:text-gray-400 block mb-1 uppercase text-[10px] tracking-wider">
                                    Horário de atendimento
                                </span>
                                <span className="text-gray-600 dark:text-gray-300">
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