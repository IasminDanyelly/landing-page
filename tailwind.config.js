/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/src/assets/uvas.webp')",
        "sementes": "url('/src/assets/sementes2.webp')",
        "sementesAmostra": "url('/src/assets/semente.webp')"
        
      }
    },
  },
  plugins: [],
}

