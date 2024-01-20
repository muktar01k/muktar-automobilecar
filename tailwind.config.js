/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        Background:"url('/src/assets/IMAGE/background.png')",
        Rectangle:"url('/src/assets/IMAGE/leftBg.png')",
        Emoji:"url('/src/assets/IMAGE/emoji.png')",
        Emoji2:"url('/src/assets/IMAGE/Emoji2.png')"
      },
    },
  },
  plugins: [],
}

