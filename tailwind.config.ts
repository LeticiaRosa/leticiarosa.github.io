import type { Config } from 'tailwindcss';
import './styles/variables.css';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // ou 'media' se preferir o modo escuro automático do sistema

  plugins: [],
};

export default config;
