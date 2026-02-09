// Repository/tailwind.config.js
// This is the Tailwind CSS configuration file
// It defines the theme (colors, fonts, sizes), custom utilities,
// and tells Tailwind where to look for class names in your source files.

import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',   // include all source files
  ],
  theme: {
    extend: {
      colors: {
        // --- Core branding colors ---
        brandPrimary: '#12418d',
        brandSecondary: '#2f84a9',
        brandTertiary: '#8ecaef',

        // --- Accent colors ---
        accentPrimary: '#ef601e',
        accentSecondary: '#fa9939',
        accentTertiary: '#f7ce4d',

        // --- Neutral colors ---
        pureWhite: '#ffffff',
        paperWhite: '#f8f8ff',
        lightWarm: '#f9eeb6',
        lightCool: '#f8dcbf',
        lightPeach: '#fcebdd',
        mediumNeutral: '#d5c5c7',
        warmGray: '#ddc1a7',
        darkWarm: '#bd9479',
        darkCool: '#745e4d',
        deepGray: '#1f2937',
        charcoal: '#5b4f47',
        deepCharcoal: '#373d3b',
        pureBlack: '#000000',

        // --- Special colors ---
        eggplant: '#5e376d',
        navy: '#001f3d',

        // --- State colors ---
        successGreen: '#4caf50',
        errorRed: '#f44336',
        alertYellow: '#ffeb3b',
        infoBlue: '#2196f3',
      },

      // Fonts: we keep all 14 families available, but group them logically.
      fontFamily: {
        heading: [
          '"29LT Jawi"',
          'Agrandir',
          '"Agrandir Narrow"',
          '"Playfair Display"',
          ...fontFamily.serif,

        ],
        display: [
          '"Rig Solid Bold Halftone"',
          '"Neue Machina"',
          '"Montserrat Classic"',
          ...fontFamily.sans,
        ],
        body: [
          'Inter',
          'Poppins',
          '"Public Sans"',
          '"DM Sans"',
          '"Open Sans"',
          'Helvetica',
          ...fontFamily.sans,
        ],
        seasons: ['"The Seasons"', ...fontFamily.serif], // optional accent font
      },

      // Rounded corners
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },

      // Max width for desktop layout
      maxWidth: {
        layout: '1260px',
      },

      // Custom animations
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeInUp 420ms ease forwards',
      },
    },
  },
  plugins: [],
}
