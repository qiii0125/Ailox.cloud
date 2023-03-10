/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b",
        client: "#bfbfd8",
        latar: "#ccd1d1",
        latar2: "#e2e8f0",
        latar3: "#cbd5e1",
      },
      screens: {
        '2xl': '1230px',
      },
      backgroundImage: {
        'hero-pattern': "url('dist/img/1.png')",
      },
    },
  },
  plugins: [],
}
