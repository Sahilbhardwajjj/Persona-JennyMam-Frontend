/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0066cc",
        secondary: "#34c759",
      },
      animation: {
        "message-slide": "messageSlide 0.3s ease-out",
        typing: "typing 1.4s infinite",
      },
      keyframes: {
        messageSlide: {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        typing: {
          "0%, 60%, 100%": {
            transform: "translateY(0)",
            opacity: "0.7",
          },
          "30%": {
            transform: "translateY(-10px)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
