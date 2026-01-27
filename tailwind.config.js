/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        institutional: {
          blue: '#1E3A8A', // Azul institucional
          orange: '#F97316', // Laranja vibrante CTA
        },
        social: {
          clean: '#F9FAFB', // Tons de cinza claro
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
