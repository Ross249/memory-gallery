import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/modal.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui"), require("@nextui-org/theme")],
  daisyui: {
    themes: ["wireframe", "black"],
  },
} satisfies Config;
