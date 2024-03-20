import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        spoqa: ['var(--font-spoqa)'],
        roboto: ['var(--roboto)'],
      },
      colors: {
        lightBg: 'rgb(250 250 249)', // stone 50
        darkBg: 'rgb(28 25 23)', // stone 900
        lightText: 'rgb(28 25 23)', // stone 900
        darkText: 'rgb(250 250 249)', // stone 50
        light_hover: 'rgb(231 229 228)', // stone 200
        dark_hover: 'rgb(68 64 60)', // stone 700
      },
    },
    plugins: [],
  },
};

export default config;
