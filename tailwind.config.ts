import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: {
            50: "#F5F5F5",
            100: "#E8E8E8",
            200: "#C7C7C7",
            300: "#A3A3A3",
            400: "#616161",
            500: "#1c1c1c",
            600: "#1A1717",
            700: "#140F0F",
            800: "#120B0B",
            900: "#0D0606",
            950: "#080202",
          },
          dark: {
            50: "#FCFCFC",
            100: "#FAFAFA",
            200: "#F0F0F0",
            300: "#E6E6E6",
            400: "#D4D4D4",
            500: "#c1c1c1",
            600: "#AD9C9C",
            700: "#916D6D",
            800: "#754646",
            900: "#572727",
            950: "#381010",
          },
        },
      },
    },
  },
};
