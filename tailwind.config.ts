import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        heading: 'Lemon',
        body: 'IBM Plex Sans KR',
      },
    },
    theme: {
      colors: {
        'text': '#0d0f12',
        'background': '#f2f4f7',
        'primary': '#303d55',
        'secondary': '#a9b7d1',
        'accent': '#899fc8',
       },
    }
  },
  plugins: [require("daisyui")],
} satisfies Config;
