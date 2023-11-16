/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/nature.jpg')",
      },
      boxShadow:{
        'full':'50px 50px 50px #808080',
        'green':'0px 20px 40px #00A572',
      },
      fontFamily:{
        'title':['Great Vibes'],
        'para': ['Roboto']
      }
    },
  },
  plugins: [],
}

