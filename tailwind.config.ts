import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
