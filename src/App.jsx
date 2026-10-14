import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Deliverables from './components/Deliverables';
import TrustProof from './components/TrustProof';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useLanguage from './hooks/useLanguage';
import useAnimations from './hooks/useAnimations';
import { toggleTheme } from './hooks/theme';

export default function App() {
    const { lang, setLang, t } = useLanguage();
    useAnimations();

    return (
        <div className="min-h-screen flex flex-col selection:bg-brand-accent selection:text-brand-dark">
            {/* 1. Header Fixo com âncoras e CTA */}
            <Navbar lang={lang} onLangChange={setLang} onToggleTheme={toggleTheme} t={t} />

            <main className="flex-grow">
                {/* 2. Hero com foco no resultado do cliente e indicadores de confiança */}
                <Hero t={t} />

                {/* 3. Problema -> Solução (Dores comuns e como resolvemos) */}
                <ProblemSolution t={t} />

                {/* 4. Serviços (com benefício e para quem serve) */}
                <Services t={t} />

                {/* 5. Como Trabalhamos (Metodologia em 5 etapas com prazos e entregáveis) */}
                <Workflow t={t} />

                {/* 6. Entregáveis Concretos (Inspirado no padrão Hedra Solutions) */}
                <Deliverables t={t} />

                {/* 7. Prova de Confiança (Garantias, Casos de Uso e Stack Tecnológica) */}
                <TrustProof t={t} />

                {/* 8. Sobre Nós & Liderança Técnica (Caio Daniel Souza - Goiânia/GO) */}
                <About t={t} />

                {/* 9. FAQ (Perguntas que travam a decisão de contratação) */}
                <FAQ t={t} />

                {/* 10. CTA Final + Formulário de Qualificação e SLA */}
                <Contact t={t} />
            </main>

            {/* 11. Footer Institucional completo */}
            <Footer />
        </div>
    );
}
