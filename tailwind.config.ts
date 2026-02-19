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
        proxima: {
          black: "#0A0A0A",
          offwhite: "#FAF8F5",
          cream: "#FFFBEE",
          // Gradient colors from brand SVG
          maroon: "#BA000E",
          red: "#FE091B",
          orange: "#FF9D00",
        },
      },
      fontFamily: {
        sans: ["Archivo", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["Archivo", "Georgia", "serif"],
        mono: ["DM Mono", "monospace"],
        display: ["Darker Grotesque", "sans-serif"],
        // New local fonts
        "dm-sans": ["DM Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        "nb-international": ["NB International", "sans-serif"],
        "nb-mono": ["NB International Mono", "monospace"],
        robit: ["Robit", "sans-serif"],
      },
      backgroundImage: {
        "proxima-gradient": "linear-gradient(90deg, #BA000E 0%, #FE091B 25%, #FF9D00 50%, #FFFBEE 100%)",
      },
      typography: {
        editorial: {
          css: {
            maxWidth: '65ch',
            color: 'var(--proxima-black)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
