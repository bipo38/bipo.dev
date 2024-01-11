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
      main: "hsl(0, 0%, 83.14%)",
      invert: "hsl(0, 0%, 9%)",
      accent: "hsl(22, 72%, 72%)",
      go: "hsl(192, 99%, 42%)",
      vue: "hsl(153, 47%, 49%)",
      nuxt: "hsl(155, 100%, 43%)",
      hono: "hsl(25, 98%, 44%)",
      typescript: "hsl(211, 60%, 48%)",
      astro: "hsl(22, 100%, 50%)",
      scss: "hsl(330, 50%, 60%)",
    },
    fontFamily: {
      sans: ["Nunito Variable", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
