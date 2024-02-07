const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, 'src/**/*.{js,ts,jsx,tsx}')],
  theme: {
    extend: {
      colors: {
        body: {
          200: '#FBFCFF',
          DEFAULT: '#FAFCFF',
        },
        link: {
          DEFAULT: '#3774E4',
          700: '#113E92',
        },
        primary: {
          50: '#EEF1FE',
          200: '#AFC0F8',
          DEFAULT: '#5275F0',
          600: '#4B6ADA',
          700: '#3A53AA',
          900: '#223165',
        },
        secondary: {
          50: '#EEEEFA',
          200: '#B2B0E6',
          DEFAULT: '#5753C9',
          600: '#4F4CB7',
          700: '#3E3B8F',
          900: '#252354',
        },
        accent: {
          50: '#e8f8f6',
          200: '#93ded6',
          DEFAULT: '#14b8a6',
          600: '#12a797',
          700: '#0e8376',
          900: '#084d46',
        },
        success: {
          50: '#ECFFF8',
          200: '#D1F8EA',
          DEFAULT: '#25C38A',
          700: '#05724B',
          900: '#00492F',
          600: '#00A66A',
        },
        danger: {
          50: '#FCE8E8',
          200: '#FF9999',
          DEFAULT: '#CE481B',
          700: '#A11818',
          900: '#540808',
          600: '#BF3B3B',
        },
        warning: {
          50: '#FBF6E9',
          200: '#F2E1A5',
          DEFAULT: '#D3AC1E',
          700: '#A88400',
          900: '#8C710E',
          600: '#E5B400',
        },
        muted: {
          50: '#F8FBFF',
          200: '#E1E5F1',
          DEFAULT: '#A6AEC7',
          600: '#C9CDD9',
          700: '#676D7D',
          900: '#343E5A',
        },
        dark: {
          50: '#1E293B',
          200: '#334155',
          DEFAULT: '#0F172A',
          600: '#6B7280',
          700: '#94A3B8',
          900: '#6B7280',
        },
        light: {
          50: '#FEFEFE',
          200: '#F9FAFB',
          DEFAULT: '#F9FAFB',
          600: '#475569',
          700: '#94A3B8',
          900: '#1E293B',
        },
      },
    },
  },
  plugins: [],
}

