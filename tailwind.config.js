/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      main: "hsl(0, 0%, 9%)",
      gray: "rgba(255, 255, 255, .05)",
      accent: "hsl(22, 72%, 72%)",
    },

    textColor: {
      main: "rgb(212 212 212)",
      invert: "hsl(0, 0%, 9%)",
      accent: "hsl(22, 72%, 72%)",
      go: "rgb(1, 173, 216)",
      vue: "#42b883",
      nuxt: "#00dc82",
      hono: "rgb(227, 96, 2)",
      typescript: "#3178c6",
      scss: "#c69",
    },
    fontFamily: {
      sans: ["Nunito Variable", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
