/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        teko: ['Teko', 'sans-serif'],
        wavefont: ['Wavefont', 'system-ui'],
        permanentMarker: ['Permanent Marker', 'cursive'],
      },
    },
  },
  plugins: [],
}
