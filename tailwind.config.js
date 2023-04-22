/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        splatoon: {
          blue: "#603bff",
          purple: "#af50ff",
          yellow: "#eaff3d",
          green: "#6af7ce",
          orange: "#ff9750",
          red: "#ff505e",
          brown: "#7f413f",

          battle: {
            regular: "#19d719",
            ranked: "#f54910",
            xmatch: "#0fdb9b",
            league: "#f02d7d",
          },
          salmonRun: "#ff5600",
          bigRun: "#b322ff",
        },
      },
    },
  },
  plugins: [],
};
