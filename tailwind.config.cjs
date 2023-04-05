/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'about-us': "url('./src/Assets/AboutUs2.jpg')",
        'contact-us': "url('./src/Assets/ContactUs.jpeg')",
        courses: "url('./src/Assets/CoursesBack.jpg')",
      },

      colors: {
        'main-color': '#fefefefe',
        'second-color': '#0096da',
        'second-color-opacity': '#19A0DD',
        'third-color': '#ffaf19',
        'gray-color': '#eee',
      },
    },
  },
  plugins: [],
};
