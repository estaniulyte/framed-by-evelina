import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: '#f8f8f8',
        primary: {
          50: '#e2edff',
          100: '#b1caff',
          200: '#7fa6ff',
          300: '#4d82fe',
          400: '#0B63F8',
          500: '#013CC6',
          600: '#0136b2',
          700: '#002680',
          800: '#00174f',
          900: '#00081f',
        },
      },
    },
  },
  plugins: [],
};
export default config;
