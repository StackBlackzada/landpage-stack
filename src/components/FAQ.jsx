import { useState } from 'react';

export default function FAQ({ t }) {
    const [openIndex, setOpenIndex] = useState(0); // Abre a primeira por padrão para instigar leitura

    const faqs = [
        {
            question: 'O código-fonte e o sistema serão realmente da minha empresa?',
            answer:
                'Sim, 100%. Ao final do projeto ou de cada ciclo entregue, todos os direitos de propriedade intelectual, repositórios de código Git e credenciais de acesso aos ambientes de nuvem são transferidos formalmente para sua organização. Não cobramos royalties de licenciamento nem taxas de encerramento contratual.',
        },
        {
            question: 'Quanto tempo leva para desenvolver um software sob medida?',
            answer:
                'O prazo varia de acordo com o escopo e complexidade técnica. Para versões enxutas (MVPs) ou automações específicas, o prazo típico é de 4 a 8 semanas. Em todos os projetos trabalhamos com sprints quinzenais, garantindo que sua equipe teste e aprove entregas reais funcionando logo nas primeiras semanas.',
        },
        {
            question: 'Como é calculado o investimento? Valor fechado ou horas trabalhadas?',
            answer:
                'Oferecemos dois formatos transparentes: Escopo Fechado (orçamento e prazo pré-fixados para projetos com requisitos bem definidos) ou Squad Dedicado / Ciclos Ágeis (modelo flexível por sprints para produtos em evolução contínua, onde você prioriza o backlog conforme a necessidade do negócio).',
        },
        {
            question: 'Minha empresa não possui time técnico interno. Quem dará suporte ao sistema?',
            answer:
                'Nós entregamos a solução em produção devidamente configurada e com documentação passo a passo. Além disso, oferecemos planos de sustentação e suporte técnico contínuo com SLA (tempo de resposta garantido em contrato) para cuidar de monitoramento, correções, melhorias e segurança.',
        },
        {
            question: 'Como funciona a segurança e o sigilo das informações do meu negócio?',
            answer:
                'Antes de qualquer detalhamento técnico ou envio de dados operacionais, firmamos um Acordo de Confidencialidade (NDA) com validade jurídica. Nosso código segue as melhores práticas de cibersegurança (criptografia em trânsito e em repouso, sanitização de inputs) e total conformidade com a LGPD.',
        },
        {
            question: 'Como funciona a primeira conversa e a elaboração da proposta?',
            answer:
                'Nossa primeira reunião tem caráter consultivo e dura cerca de 30 a 45 minutos. Ouvimos os gargalos da sua operação, entendemos os objetivos de negócio e avaliamos a viabilidade técnica. Em até 48 horas após essa conversa, enviamos uma proposta detalhada com escopo, cronograma e estimativa de investimento.',
        },
        {
            question: 'E se no futuro precisarmos adicionar novas funções ou trocar de equipe?',
            answer:
                'Todo o software é construído em arquitetura modular, com padrões consolidados de mercado e código amplamente documentado. Isso garante que novos módulos, integrações ou desenvolvedores futuros (sejam da sua empresa ou terceiros) possam evoluir a base de código sem atrito.',
        },
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-card/30 dark:bg-darkbg-card/30 relative z-20 border-t border-brand-subtle/10 dark:border-brand-accent/10" id="faq">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="font-code text-xs text-brand-subtle dark:text-brand-accent tracking-widest mb-2 font-bold uppercase">
                        {'// DÚVIDAS FREQUENTES'}
                    </div>
                    <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-dark dark:text-white mb-4">
                        Perguntas frequentes antes de contratar
                    </h2>
                    <p className="text-brand-dark/80 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Transparência total desde o primeiro contato. Se tiver qualquer outra dúvida, fale diretamente com nossos engenheiros.
                    </p>
                </div>

                {/* Acordeão */}
                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`glass-card rounded-2xl transition-all duration-300 border ${
                                    isOpen
                                        ? 'border-brand-accent shadow-lg bg-white/90 dark:bg-darkbg-card/95'
                                        : 'border-brand-subtle/20 dark:border-brand-accent/15 hover:border-brand-accent/40'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={isOpen}
                                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                                >
                                    <span className="font-display font-bold text-base sm:text-lg text-brand-dark dark:text-white leading-snug">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                                            isOpen
                                                ? 'bg-brand-accent text-brand-dark rotate-180'
                                                : 'bg-brand-subtle/10 dark:bg-brand-accent/10 text-brand-subtle dark:text-brand-accent'
                                        }`}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-brand-dark/80 dark:text-gray-300 leading-relaxed border-t border-brand-subtle/10 dark:border-brand-accent/10 pt-4">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Ajuda adicional rápida */}
                <div className="mt-10 text-center font-code text-xs sm:text-sm">
                    <span className="text-brand-dark/70 dark:text-gray-400">
                        Não encontrou a resposta para sua dúvida?{' '}
                    </span>
                    <a
                        href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20desenvolvimento%20de%20software%20com%20a%20Stack%20Blackzada."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-brand-subtle dark:text-brand-accent hover:underline inline-flex items-center gap-1"
                    >
                        <span>Fale agora no WhatsApp</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
