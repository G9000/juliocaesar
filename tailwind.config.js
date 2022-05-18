const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        basicSans: ["basic-sans", ...defaultTheme.fontFamily.sans],
        karminaSans: "karmina-sans",
      },
    },
    plugins: [],
  },
};
