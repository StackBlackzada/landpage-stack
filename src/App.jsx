import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Metrics from './components/Metrics';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useLanguage from './hooks/useLanguage';
import useAnimations from './hooks/useAnimations';
import { toggleTheme } from './hooks/theme';

export default function App() {
    const { lang, setLang, t } = useLanguage();
    useAnimations();

    return (
        <>
            <Navbar lang={lang} onLangChange={setLang} onToggleTheme={toggleTheme} t={t} />
            <Hero t={t} />
            <About t={t} />
            <Metrics t={t} />
            <Services t={t} />
            <Workflow t={t} />
            <Contact t={t} />
            <Footer />
        </>
    );
}
