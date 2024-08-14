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
        secondary:"#eeeeee"
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
