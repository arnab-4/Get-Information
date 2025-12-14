/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    extend: {
      fontFamily: {
        Header: ["Lato", "sans-serif"],
        Text2: ["Lato", "sans-serif"],
        About: ["Playfair Display", "serif"],
        Futuristic: ["Orbitron", "sans-serif"],
      },
      colors: {
        AAprimary: "#0a0a1a",
        AAsecondary: "#00f0ff",
        AAtertiary: "#1a1a3e",
        AAaccent: "#ff00ff",
        AAwarning: "#ff6b35",
        ResumeButtonHover: "#153040",
        MobileNavBarColor: "#112340",
        StartupBackground: "#020c1b",
        neonBlue: "#00f0ff",
        neonPink: "#ff00ff",
        neonPurple: "#8b5cf6",
        neonGreen: "#39ff14",
        darkBg: "#0a0a1a",
        cardBg: "rgba(26, 26, 62, 0.8)",
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.neonBlue'), 0 0 20px theme('colors.neonBlue'), 0 0 40px theme('colors.neonBlue')",
        neonPink: "0 0 5px theme('colors.neonPink'), 0 0 20px theme('colors.neonPink'), 0 0 40px theme('colors.neonPink')",
        neonPurple: "0 0 5px theme('colors.neonPurple'), 0 0 20px theme('colors.neonPurple')",
        glow: "0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)",
        card: "0 8px 32px rgba(0, 240, 255, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'scan': 'scan 2s linear infinite',
        'flicker': 'flicker 3s infinite',
        'border-flow': 'borderFlow 3s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '25%, 75%': { opacity: '0.9' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
  variants: {
    scrollbar: ["rounded"],
  },
};