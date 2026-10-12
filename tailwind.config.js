/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#DDF9F6', /* Fundo menta claro */
          card: '#EAFDFB', /* Cards no modo claro */
          dark: '#08171A', /* Fundo/Texto escuro */
          accent: '#20E3BD', /* Verde turquesa vibrante */
          subtle: '#124844', /* Tom secundário para alto contraste */
        },
        darkbg: {
          main: '#060F11', /* Fundo principal modo escuro */
          card: '#0C1E22', /* Cards modo escuro */
          nav: '#08171A', /* Navbar modo escuro */
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        code: ['Space Grotesk', 'monospace'],
      },
    },
  },
  plugins: [],
};
