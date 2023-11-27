/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-900": "#fff",
        "gray-200": "#d5dae1",
        "gray-800": "#333f51",
        darkolivegreen: {
          "100": "#14532d",
          "200": "#185013",
        },
        "primary-050": "#f0fdf4",
        "gray-500": "#556987",
        "gray-5001": "#667085",
        "gray-050": "#f7f8f9",
        "gray-900": "#2a3342",
        "primary-100": "#dcfce7",
        gainsboro: "#d9d9d9",
        "gray-400": "#8896ab",
        "secondary-500": "#a855f7",
        "secondary-050": "#fbf7ff",
        "primary-500": "#22c55e",
      },
      spacing: {},
      fontFamily: {
        "text-sm-regular": "Poppins",
      },
      borderRadius: {
        "17xl": "36px",
      },
    },
    fontSize: {
      lg: "18px",
      sm: "14px",
      base: "16px",
      xl: "20px",
      "11xl": "30px",
      xs: "12px",
      "29xl": "48px",
      "77xl": "96px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
