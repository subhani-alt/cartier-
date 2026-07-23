/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8F5F2",
        secondary: "#E7DED4",
        accent: "#7A5C45",
        "accent-hover": "#654a36",
        dark: "#2D2A28",
        highlight: "#B89C7D",
        "text-main": "#1F1F1F",
        "text-muted": "#66605C",
        success: "#507A5B",
        ivory: "#FDFBF7",
        surface: "#FAF7F2",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Cinzel'", "Georgia", "serif"],
      },
      borderRadius: {
        'luxury': '16px',
        'luxury-sm': '12px',
        'luxury-lg': '18px',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(45, 42, 40, 0.07)',
        'luxury-hover': '0 30px 60px -20px rgba(45, 42, 40, 0.12)',
        'glass': '0 8px 32px 0 rgba(122, 92, 69, 0.08)',
      },
    },
  },
  plugins: [],
}
