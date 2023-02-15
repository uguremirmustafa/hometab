/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        'p-50': 'rgb(var(--p-50) / <alpha-value>)',
        'p-100': 'rgb(var(--p-100) / <alpha-value>)',
        'p-200': 'rgb(var(--p-200) / <alpha-value>)',
        'p-300': 'rgb(var(--p-300) / <alpha-value>)',
        'p-400': 'rgb(var(--p-400) / <alpha-value>)',
        'p-500': 'rgb(var(--p-500) / <alpha-value>)',
        'p-600': 'rgb(var(--p-600) / <alpha-value>)',
        'p-700': 'rgb(var(--p-700) / <alpha-value>)',
        'p-800': 'rgb(var(--p-800) / <alpha-value>)',
        'p-900': 'rgb(var(--p-900) / <alpha-value>)',
        's-50': 'rgb(var(--s-50) / <alpha-value>)',
        's-100': 'rgb(var(--s-100) / <alpha-value>)',
        's-200': 'rgb(var(--s-200) / <alpha-value>)',
        's-300': 'rgb(var(--s-300) / <alpha-value>)',
        's-400': 'rgb(var(--s-400) / <alpha-value>)',
        's-500': 'rgb(var(--s-500) / <alpha-value>)',
        's-600': 'rgb(var(--s-600) / <alpha-value>)',
        's-700': 'rgb(var(--s-700) / <alpha-value>)',
        's-800': 'rgb(var(--s-800) / <alpha-value>)',
        's-900': 'rgb(var(--s-900) / <alpha-value>)',
        dark1: '#1F2937',
        dark2: '#444444',
        light1: '#ffffff',
        light2: '#cccccc',
      },
    },
  },
  plugins: [],
};
