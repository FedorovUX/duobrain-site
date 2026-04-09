/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Core brand palette extracted from duobrain.app
        ink: {
          DEFAULT: '#0B2239',     // main dark navy (headings, dark bg, CTA)
          900: '#081A2B',
          800: '#0B2239',
          700: '#13304A',
        },
        mist: {
          DEFAULT: '#E8F0F8',     // hero background (very light blue)
          50: '#F4F8FC',
          100: '#E8F0F8',
          200: '#D6E4F0',
        },
        cream: '#F5F5EF',         // pricing section bg
        mint: '#D9EFE3',          // "how it works" section bg
        // Feature card tints
        pink: '#FDECEC',
        green: '#E3F3EA',
        lilac: '#ECEEFA',
        blue: '#E6EEF8',
        // Accents
        gold: '#E5B34B',          // "closer" italic accent
        accent: '#14D79A',        // stars, success
        muted: '#6B7A8C',         // secondary text
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],      // italic accents "Act like one", "closer"
        sans: ['"Mulish"', 'system-ui', 'sans-serif'],    // body + most headings (rounded geometric)
      },
      fontSize: {
        'hero': ['clamp(2.25rem, 5.5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2':   ['clamp(1.875rem, 4vw, 3rem)',    { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'h3':   ['clamp(1.25rem, 2vw, 1.5rem)',   { lineHeight: '1.2' }],
      },
      maxWidth: {
        'content': '1200px',
      },
      borderRadius: {
        'pill': '999px',
      },
      boxShadow: {
        'soft': '0 10px 40px -12px rgba(11, 34, 57, 0.15)',
        'card': '0 4px 24px -8px rgba(11, 34, 57, 0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
