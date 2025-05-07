import { defineConfig, definePreset } from "@pandacss/dev";
import pandaPreset from "@pandacss/preset-panda";

// var shadows = {
//   xs: { value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
//   sm: { value: ["0 1px 3px 0 rgb(0 0 0 / 0.1)", "0 1px 2px -1px rgb(0 0 0 / 0.1)"] },
//   md: { value: ["0 4px 6px -1px rgb(0 0 0 / 0.1)", "0 2px 4px -2px rgb(0 0 0 / 0.1)"] },
//   lg: { value: ["0 10px 15px -3px rgb(0 0 0 / 0.1)", "0 4px 6px -4px rgb(0 0 0 / 0.1)"] },
//   xl: { value: ["0 20px 25px -5px rgb(0 0 0 / 0.1)", "0 8px 10px -6px rgb(0 0 0 / 0.1)"] },
//   "2xl": { value: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
//   inner: { value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)" }
// };

const spaceThemePreset = definePreset({
  name: "space",
  globalVars: {
    extend: {
      "--bg-color": "#030509",
    },
  },
  patterns: {
    extend: {
      glowIcon: {
        transform: () => ({
          stroke: "colorPalette.500",
          filter: 'drop-shadow(0 0 6px var(--shadow-color))',
          shadowColor: "colorPalette.500",
        })
      },
      themedBlock: {
        transform: () => ({
          borderStyle: "solid",
          borderRadius: "sm",
          borderWidth: "2px",

          backgroundColor: "colorPalette.800/20",
          borderColor: "colorPalette.500",
          color: "colorPalette.500",
          shadow:
            "0 0 6px var(--shadow-color), inset 0 0 6px var(--shadow-color)",
          shadowColor: "colorPalette.500",
        }),
      },
    },
  },
  theme: {
    extend: {
      tokens: {
        sizes: {
          menu: { value: "2.5rem" },
        },
        spacing: {
          menu: { value: "3rem" },
        },
        zIndex: {
          menu: { value: 10 },
          toast: { value: 5 },
        },
      },
    },
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {},

  presets: [pandaPreset, spaceThemePreset],

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
