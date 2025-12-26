/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#F8FAFC",
        "text-primary": "#1E293B",
        "accent-start": "#E0F2FE",
        "accent-end": "#BAE6FD",
      },
    },
  },
  plugins: [],
};
