/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"Segoe UI"', 'sans-serif'],
        body: ['"Space Grotesk"', '"Segoe UI"', 'sans-serif']
      },
      colors: {
        primary: '#6366F1',
        accent: '#22D3EE'
      },
      boxShadow: {
        soft: '0 14px 45px rgba(99, 102, 241, 0.18)'
      },
      backgroundImage: {
        'gradient-soft': 'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.22), transparent 30%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.2), transparent 30%), linear-gradient(135deg, #0B1224, #0F172A)'
      }
    }
  },
  plugins: []
}
