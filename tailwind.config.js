/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }, // Defines a keyframe for the "shimmer" animation.
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite', // Defines an animation named "shimmer" that uses the "shimmer" keyframe.
      },
    },
  },
  plugins: [],
};
