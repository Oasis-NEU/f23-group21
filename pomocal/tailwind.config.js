/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { 
    borderRadius: { 
      DEFAULT: '50px',
      'none': '0', 
      'md' : '25px',
      'lg': '50px',
    }, 
    
    extend: {
    },
  },
  plugins: [],
}
