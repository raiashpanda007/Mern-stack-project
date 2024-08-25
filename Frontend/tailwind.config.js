/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        slideInFromBelow: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%":{transform: "translateY(0)" , opacity:"1"},
          
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        sideBarHoverAnimation: {
          '0%': { backgroundColor: 'rgba(0,0,0,0)' },
          '100%': { backgroundColor: 'rgba(31, 41, 55, 1)' },
        },
        
      },
      animation: {
        slideInFromBelow: "slideInFromBelow 1s ease-out 0.5s forwards", 
        slideIn: 'slideIn 0.5s ease forwards',
        sideBarHoverAnimation: 'sideBarHoverAnimation 0.5s ease forwards',
      },
    },
  },
  plugins: [],
};
