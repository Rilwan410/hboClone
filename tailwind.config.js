/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "UI/Header.js",
    "UI/SideNav.js",
    "UI/FeaturedMedia.js",
    "UI/ForYouList.js",
    "UI/JustAdded.js",
    "UI/PosterView.js",
    "UI/CastInfo.js",
    "UI/Account.js",
    "UI/SearchModal.js",
    "components/Login.js",
    "components/AuthCheck.js",
    "pages/index.js",
    "pages/create.js"
    ],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
