/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
      colors: {
        main: 'hsl(0, 0%, 9%)',
        gray: 'rgba(255, 255, 255, .05)'
      },
    
      textColor: {
        main: 'rgb(212 212 212)'
      },

    extend: {
    },
  },
  plugins: [],
}


