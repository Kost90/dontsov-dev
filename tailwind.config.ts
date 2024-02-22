import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'2rem',
    },
    extend: {
      backgroundColor:{
        bgLight:'#F8F4F0',
        bgDark:'black',
      },
      fontSize:{
        h1Desc:'48px',
        h1Mob:'38px',
        pDesc:'24px',
        pMob:'18px',
      },
      colors:{
        bronze:'#D3902A',
        bronzemid:'#9D9690',
        bronzeLight:'#F1ECE6',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
