import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });

// Evita "pulos" no hero fixo quando a barra do navegador do celular aparece/some
ScrollTrigger.config({ ignoreMobileResize: true });

export default function useAnimations() {
    useEffect(() => {
        const cleanups = [];

        // --- 2. SPOTLIGHT EM TODOS OS CARDS + TILT SOMENTE NO CARD "QUEM SOMOS" (tilt-card) ---
        // Só roda com mouse; no toque não faz nada (evita efeito travado no celular)
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
                        const rotateX = ((y - centerY) / centerY) * -6;
                        const rotateY = ((x - centerX) / centerX) * 6;

                        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
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
            // --- 3. CONTADORES NUMÉRICOS ANIMADOS ---
            ScrollTrigger.create({
                trigger: '#metricas',
                start: 'top 80%',
                once: true,
                onEnter: () => {
                    document.querySelectorAll('.counter').forEach((counter) => {
                        const target = +counter.getAttribute('data-target');
                        gsap.to(counter, {
                            innerText: target,
                            duration: 2,
                            snap: { innerText: 1 },
                            ease: 'power2.out',
                        });
                    });
                },
            });

            // --- 4. OCULTAR/MOSTRAR NAVBAR NO SCROLL ---
            let lastScrollY = window.scrollY;
            const navbar = document.getElementById('navbar');

            ScrollTrigger.create({
                onUpdate: (self) => {
                    const currentScrollY = self.scroll();
                    if (currentScrollY > lastScrollY && currentScrollY > 80) {
                        navbar.classList.add('-translate-y-full');
                    } else {
                        navbar.classList.remove('-translate-y-full');
                    }
                    lastScrollY = currentScrollY;
                },
            });

            // --- 5. ANIMAÇÃO HERO PINNED ---
            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#hero-wrapper',
                    start: 'top top',
                    end: '+=120%',
                    scrub: 0.5,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            heroTl.to('.hero-content', {
                scale: 0.85,
                opacity: 0,
                duration: 0.8,
                ease: 'power1.inOut',
            }, 0);

            heroTl.to('.hero-bg-logo', {
                scale: 6,
                rotation: 180,
                opacity: 1,
                duration: 1.5,
                ease: 'power1.inOut',
            }, 0);

            heroTl.to('.hero-bg-logo', {
                opacity: 0,
                duration: 0.5,
                ease: 'power1.out',
            }, '>-0.3');

            // --- 6. ANIMAÇÕES DE ENTRADA DAS SEÇÕES ---
            gsap.from('.about-card', {
                scrollTrigger: {
                    trigger: '#sobre',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
            });

            gsap.from('.service-card', {
                scrollTrigger: {
                    trigger: '#servicos',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power2.out',
            });

            gsap.from('.timeline-step', {
                scrollTrigger: {
                    trigger: '.timeline-container',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                x: -30,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power2.out',
            });

            gsap.from('.cta-box', {
                scrollTrigger: {
                    trigger: '#contato',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
            });
        });

        return () => {
            cleanups.forEach((fn) => fn());
            ctx.revert();
        };
    }, []);
}
