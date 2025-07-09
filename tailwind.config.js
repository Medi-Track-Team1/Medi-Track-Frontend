/** @type {import('tailwindcss').Config} */
import path from "path";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/Reception/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/Reception-hooks/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
    "./src/lib/Reception-lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables dark mode with a 'dark' class
  theme: {
    extend: {
      // You can customize your theme here
    },
  },
  plugins: [],
};
