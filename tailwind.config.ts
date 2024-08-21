import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px',
    },
    extend: {
      colors:{
        primary:"#ffffff",
        secondary:"#eeeeee",
        tertiary:"#F3F4FA",
        box:"#F6F7F8",
        SecondaryBgColor:"#1A1A1A",
        secondaryTextColor :"#6A737D"
      },
      fontFamily:{
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],    
        inter: ['inter',...defaultTheme.fontFamily.sans]    
      },

    },
  },
  plugins: [],
};
export default config;
