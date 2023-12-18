import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#359cef",
        "gray-back": "#30314C",
        "gray-back-2": "#252238",
      },
      backgroundImage: {
        breakfast:
          "linear-gradient(94deg, #00A499 39.68%, rgba(0, 164, 153, 0.00) 116.6%)",
        lunch:
          "linear-gradient(92deg, #FF9301 31.46%, rgba(255, 147, 1, 0.00) 117.66%)",
        dinner:
          "linear-gradient(130deg, #E73D5B 31.19%, rgba(231, 61, 91, 0.00) 107.32%)",
        "workout-bottom":
          "linear-gradient(90deg, #359CEF 30%, rgba(53, 156, 239, 0) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
