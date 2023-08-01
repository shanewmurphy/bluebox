/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "358px",
      },
      colors: {
        blue: "#393ED0",
        body: "#494554",
        black: "#423937",
        gray: "#494554",
        green: "#12DDB9",
        backgroudPage: "#fdfdfd",
        gradientBlue: "#E9EBFB",
        gradientWhite: "#F6F8FD",
      },
      fontSize: {
        "6xl": "2.488rem",
        "5xl": "2.074rem",
        "4xl": "1.728rem",
        "3xl": "1.44rem",
        "2xl": "1.2rem",
      },
    },
  },
  plugins: [],
};
