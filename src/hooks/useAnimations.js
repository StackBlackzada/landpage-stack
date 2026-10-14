import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });

ScrollTrigger.config({ ignoreMobileResize: true });

export default function useAnimations() {
    useEffect(() => {
        const cleanups = [];

        // 1. SPOTLIGHT DINÂMICO NOS GLASS CARDS (apenas dispositivos com mouse)
        const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

        if (hasMouse) {
            document.querySelectorAll('.glass-card').forEach((card) => {
                const onMove = (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    card.style.setProperty('--x', `${x}px`);
                    card.style.setProperty('--y', `${y}px`);

                    if (card.classList.contains('tilt-card')) {
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = ((y - centerY) / centerY) * -5;
                        const rotateY = ((x - centerX) / centerX) * 5;

                        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
                    }
                };

                const onLeave = () => {
                    if (card.classList.contains('tilt-card')) {
                        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
                    }
                };

                card.addEventListener('mousemove', onMove);
                card.addEventListener('mouseleave', onLeave);
                cleanups.push(() => {
                    card.removeEventListener('mousemove', onMove);
                    card.removeEventListener('mouseleave', onLeave);
                });
            });
        }

        const ctx = gsap.context(() => {
            // 2. OCULTAR/MOSTRAR NAVBAR INTELIGENTE NO SCROLL
            let lastScrollY = window.scrollY;
            const navbar = document.getElementById('navbar');

            if (navbar) {
                ScrollTrigger.create({
                    onUpdate: (self) => {
                        const currentScrollY = self.scroll();
                        if (currentScrollY > lastScrollY && currentScrollY > 100) {
                            navbar.classList.add('-translate-y-full');
                        } else {
                            navbar.classList.remove('-translate-y-full');
                        }
                        lastScrollY = currentScrollY;
                    },
                });
            }

            // 3. ENTRADA SUAVE DO HERO
            gsap.from('.hero-content', {
                y: 30,
                opacity: 0,
                duration: 0.9,
                ease: 'power2.out',
            });

            // 4. ANIMAÇÕES DE ENTRADA DAS SEÇÕES
            // Problema vs Solução
            gsap.from('#problema-solucao .glass-card', {
                scrollTrigger: {
                    trigger: '#problema-solucao',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                y: 35,
                opacity: 0,
                stagger: 0.15,
                duration: 0.7,
                ease: 'power2.out',
            });

            // Serviços
            gsap.from('.service-card', {
                scrollTrigger: {
                    trigger: '#servicos',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                y: 35,
                opacity: 0,
                stagger: 0.15,
                duration: 0.7,
                ease: 'power2.out',
            });

            // Linha do tempo (Como trabalhamos)
            gsap.from('.timeline-step', {
                scrollTrigger: {
                    trigger: '.timeline-container',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                x: -25,
                opacity: 0,
                stagger: 0.15,
                duration: 0.6,
                ease: 'power2.out',
            });

            // Entregáveis
            gsap.from('#entregaveis .glass-card', {
                scrollTrigger: {
                    trigger: '#entregaveis',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power2.out',
            });

            // Prova de Confiança e Cases
            gsap.from('#prova-de-confianca .glass-card', {
                scrollTrigger: {
                    trigger: '#prova-de-confianca',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                y: 30,
                opacity: 0,
                stagger: 0.12,
                duration: 0.6,
                ease: 'power2.out',
            });

            // Sobre / Time
            gsap.from('.about-card', {
                scrollTrigger: {
                    trigger: '#sobre',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
            });

            // Formulário / Contato
            gsap.from('.cta-box', {
                scrollTrigger: {
                    trigger: '#contato',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                scale: 0.96,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
            });
        });

        return () => {
            cleanups.forEach((fn) => fn());
            ctx.revert();
        };
    }, []);
}
