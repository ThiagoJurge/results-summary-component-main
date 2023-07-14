module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'tablet': '375px',
        'desktop': '1440px',
      },
      colors: {
        'primary-light-red': 'hsl(0, 100%, 67%)',
        'primary-orangey-yellow': 'hsl(39, 100%, 56%)',
        'primary-green-teal': 'hsl(166, 100%, 37%)',
        'primary-cobalt-blue': 'hsl(234, 85%, 45%)',
        'gradient-light-slate-blue': 'hsl(252, 100%, 67%)',
        'gradient-light-royal-blue': 'hsl(241, 81%, 54%)',
        'circle-violet-blue': 'hsla(256, 72%, 46%, 1)',
        'circle-persian-blue': 'hsla(241, 72%, 46%, 0)',
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-pale-blue': 'hsl(221, 100%, 96%)',
        'neutral-light-lavender': 'hsl(241, 100%, 89%)',
        'neutral-dark-gray-blue': 'hsl(224, 30%, 27%)',
      },
      fontFamily: {
        'hanken-grotesk': ['Hanken Grotesk', 'sans-serif'],
      },
      fontSize: {
        'body-copy': '18px',
      },
      fontWeight: {
        '500': 500,
        '700': 700,
        '800': 800,
      },
    },
  },
  plugins: [],
};
