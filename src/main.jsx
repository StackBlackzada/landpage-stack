import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { applyInitialTheme } from './hooks/theme';

applyInitialTheme();

createRoot(document.getElementById('root')).render(<App />);
