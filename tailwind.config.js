/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        darkcolor: '#121212', 
        cyan: '#00FFFF',
        yellowt: '#F28D35',
        redt: "#BF343F",
        bluet: '#66CDD9',
        pinkt: '#D9A0CF',
        dgray: '#5A5A5A'
      },
    },
  },
  plugins: [],
};
