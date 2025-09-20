import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        "border-gold": "hsl(var(--border-gold))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: "hsl(var(--primary))",
      },
      backgroundImage: {
        'gradient-gold': 'var(--gradient-gold)',
        'gradient-dark': 'var(--gradient-dark)',
        'gradient-luxury': 'var(--gradient-luxury)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
      },
      boxShadow: {
        'gold': 'var(--shadow-gold)',
        'premium': 'var(--shadow-premium)',
        'luxury': 'var(--shadow-luxury)',
        'glow-gold': 'var(--glow-gold)',
        'glow-subtle': 'var(--glow-subtle)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-8px) rotate(1deg)" },
          "66%": { transform: "translateY(-4px) rotate(-1deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.08)" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "3d-float": {
          "0%, 100%": { 
            transform: "translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg)" 
          },
          "25%": { 
            transform: "translateY(-10px) translateZ(20px) rotateX(5deg) rotateY(5deg)" 
          },
          "50%": { 
            transform: "translateY(-5px) translateZ(30px) rotateX(0deg) rotateY(10deg)" 
          },
          "75%": { 
            transform: "translateY(-8px) translateZ(15px) rotateX(-3deg) rotateY(-5deg)" 
          },
        },
        "3d-float-reverse": {
          "0%, 100%": { 
            transform: "translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg)" 
          },
          "25%": { 
            transform: "translateY(-8px) translateZ(15px) rotateX(-3deg) rotateY(-5deg)" 
          },
          "50%": { 
            transform: "translateY(-5px) translateZ(30px) rotateX(0deg) rotateY(-10deg)" 
          },
          "75%": { 
            transform: "translateY(-10px) translateZ(20px) rotateX(5deg) rotateY(-5deg)" 
          },
        },
        "3d-spin": {
          "0%": { transform: "rotateY(0deg) rotateX(0deg)" },
          "25%": { transform: "rotateY(90deg) rotateX(0deg)" },
          "50%": { transform: "rotateY(180deg) rotateX(10deg)" },
          "75%": { transform: "rotateY(270deg) rotateX(0deg)" },
          "100%": { transform: "rotateY(360deg) rotateX(0deg)" },
        },
        "3d-bounce": {
          "0%, 100%": { 
            transform: "translateY(0) translateZ(0) rotateX(0deg)" 
          },
          "50%": { 
            transform: "translateY(-10px) translateZ(20px) rotateX(5deg)" 
          },
        },
        "3d-pulse": {
          "0%, 100%": { 
            transform: "scale(1) translateZ(0px)" 
          },
          "50%": { 
            transform: "scale(1.05) translateZ(10px)" 
          },
        },
        "3d-rocket": {
          "0%, 100%": { 
            transform: "translateY(0px) rotateZ(0deg)" 
          },
          "25%": { 
            transform: "translateY(-5px) rotateZ(5deg)" 
          },
          "50%": { 
            transform: "translateY(-10px) rotateZ(0deg)" 
          },
          "75%": { 
            transform: "translateY(-5px) rotateZ(-5deg)" 
          },
        },
        "3d-sparkle": {
          "0%, 100%": { 
            transform: "rotate(0deg) scale(1)" 
          },
          "25%": { 
            transform: "rotate(90deg) scale(1.1)" 
          },
          "50%": { 
            transform: "rotate(180deg) scale(1)" 
          },
          "75%": { 
            transform: "rotate(270deg) scale(1.1)" 
          },
        },
        "3d-glow": {
          "0%, 100%": { 
            textShadow: "0 0 10px rgba(255, 215, 0, 0.5)" 
          },
          "50%": { 
            textShadow: "0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.6)" 
          },
        },
        "3d-subtle": {
          "0%, 100%": { 
            transform: "translateZ(0px) rotateX(0deg)" 
          },
          "50%": { 
            transform: "translateZ(5px) rotateX(1deg)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-x": "gradient-x 4s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "slide-in": "slide-in 0.6s ease-out",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "3d-float": "3d-float 8s ease-in-out infinite",
        "3d-float-reverse": "3d-float-reverse 8s ease-in-out infinite reverse",
        "3d-spin": "3d-spin 12s linear infinite",
        "3d-bounce": "3d-bounce 3s ease-in-out infinite",
        "3d-pulse": "3d-pulse 4s ease-in-out infinite",
        "3d-rocket": "3d-rocket 6s ease-in-out infinite",
        "3d-sparkle": "3d-sparkle 8s linear infinite",
        "3d-glow": "3d-glow 3s ease-in-out infinite",
        "3d-subtle": "3d-subtle 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
