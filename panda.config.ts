import { defineConfig, definePreset } from "@pandacss/dev";
import pandaPreset from '@pandacss/preset-panda'

const colorSystemPreset = definePreset({
  name: 'default',
  theme: {
    extend: {
      tokens: {
        colors: {
          blue: {
            light: {
              "50": {
                value: "hsl(215, 90%, 90%)",
              },
              "100": {
                value: "hsl(215, 90.1%, 75.56%)",
              },
              "200": {
                value: "hsl(215, 90.2%, 58.95%)",
              },
              "300": {
                value: "hsl(215, 90.3%, 44.9%)",
              },
              "400": {
                value: "hsl(215, 90.4%, 34.78%)",
              },
              "500": {
                value: "hsl(215, 90.5%, 27.24%)",
              },
              "600": {
                value: "hsl(215, 90.6%, 21.26%)",
              },
              "700": {
                value: "hsl(215, 90.7%, 16.3%)",
              },
              "800": {
                value: "hsl(215, 90.8%, 12.06%)",
              },
              "900": {
                value: "hsl(215, 90.9%, 8.33%)",
              },
              "950": {
                value: "hsl(215, 91%, 5%)",
              },
            },
            dark: {
              "50": {
                value: "hsl(215, 91%, 5%)",
              },
              "100": {
                value: "hsl(215, 90.9%, 8.33%)",
              },
              "200": {
                value: "hsl(215, 90.8%, 12.06%)",
              },
              "300": {
                value: "hsl(215, 90.7%, 16.3%)",
              },
              "400": {
                value: "hsl(215, 90.6%, 21.26%)",
              },
              "500": {
                value: "hsl(215, 90.5%, 27.24%)",
              },
              "600": {
                value: "hsl(215, 90.4%, 34.78%)",
              },
              "700": {
                value: "hsl(215, 90.3%, 44.9%)",
              },
              "800": {
                value: "hsl(215, 90.2%, 58.95%)",
              },
              "900": {
                value: "hsl(215, 90.1%, 75.56%)",
              },
              "950": {
                value: "hsl(215, 90%, 90%)",
              },
            },
          },
          red: {
            light: {
              "50": {
                value: "hsl(352, 90%, 90%)",
              },
              "100": {
                value: "hsl(352, 90.5%, 75.56%)",
              },
              "200": {
                value: "hsl(352, 91%, 58.95%)",
              },
              "300": {
                value: "hsl(352, 91.5%, 44.9%)",
              },
              "400": {
                value: "hsl(352, 92%, 34.78%)",
              },
              "500": {
                value: "hsl(352, 92.5%, 27.24%)",
              },
              "600": {
                value: "hsl(352, 93%, 21.26%)",
              },
              "700": {
                value: "hsl(352, 93.5%, 16.3%)",
              },
              "800": {
                value: "hsl(352, 94%, 12.06%)",
              },
              "900": {
                value: "hsl(352, 94.5%, 8.33%)",
              },
              "950": {
                value: "hsl(352, 95%, 5%)",
              },
            },
            dark: {
              "50": {
                value: "hsl(352, 95%, 5%)",
              },
              "100": {
                value: "hsl(352, 94.5%, 8.33%)",
              },
              "200": {
                value: "hsl(352, 94%, 12.06%)",
              },
              "300": {
                value: "hsl(352, 93.5%, 16.3%)",
              },
              "400": {
                value: "hsl(352, 93%, 21.26%)",
              },
              "500": {
                value: "hsl(352, 92.5%, 27.24%)",
              },
              "600": {
                value: "hsl(352, 92%, 34.78%)",
              },
              "700": {
                value: "hsl(352, 91.5%, 44.9%)",
              },
              "800": {
                value: "hsl(352, 91%, 58.95%)",
              },
              "900": {
                value: "hsl(352, 90.5%, 75.56%)",
              },
              "950": {
                value: "hsl(352, 90%, 90%)",
              },
            },
          },
          yellow: {
            light: {
              "50": {
                value: "hsl(38, 90%, 90%)",
              },
              "100": {
                value: "hsl(38, 90.5%, 75.56%)",
              },
              "200": {
                value: "hsl(38, 91%, 58.95%)",
              },
              "300": {
                value: "hsl(38, 91.5%, 44.9%)",
              },
              "400": {
                value: "hsl(38, 92%, 34.78%)",
              },
              "500": {
                value: "hsl(38, 92.5%, 27.24%)",
              },
              "600": {
                value: "hsl(38, 93%, 21.26%)",
              },
              "700": {
                value: "hsl(38, 93.5%, 16.3%)",
              },
              "800": {
                value: "hsl(38, 94%, 12.06%)",
              },
              "900": {
                value: "hsl(38, 94.5%, 8.33%)",
              },
              "950": {
                value: "hsl(38, 95%, 5%)",
              },
            },
            dark: {
              "50": {
                value: "hsl(38, 95%, 5%)",
              },
              "100": {
                value: "hsl(38, 94.5%, 8.33%)",
              },
              "200": {
                value: "hsl(38, 94%, 12.06%)",
              },
              "300": {
                value: "hsl(38, 93.5%, 16.3%)",
              },
              "400": {
                value: "hsl(38, 93%, 21.26%)",
              },
              "500": {
                value: "hsl(38, 92.5%, 27.24%)",
              },
              "600": {
                value: "hsl(38, 92%, 34.78%)",
              },
              "700": {
                value: "hsl(38, 91.5%, 44.9%)",
              },
              "800": {
                value: "hsl(38, 91%, 58.95%)",
              },
              "900": {
                value: "hsl(38, 90.5%, 75.56%)",
              },
              "950": {
                value: "hsl(38, 90%, 90%)",
              },
            },
          },
          green: {
            light: {
              "50": {
                value: "hsl(135, 90%, 90%)",
              },
              "100": {
                value: "hsl(135, 90.5%, 75.56%)",
              },
              "200": {
                value: "hsl(135, 91%, 58.95%)",
              },
              "300": {
                value: "hsl(135, 91.5%, 44.9%)",
              },
              "400": {
                value: "hsl(135, 92%, 34.78%)",
              },
              "500": {
                value: "hsl(135, 92.5%, 27.24%)",
              },
              "600": {
                value: "hsl(135, 93%, 21.26%)",
              },
              "700": {
                value: "hsl(135, 93.5%, 16.3%)",
              },
              "800": {
                value: "hsl(135, 94%, 12.06%)",
              },
              "900": {
                value: "hsl(135, 94.5%, 8.33%)",
              },
              "950": {
                value: "hsl(135, 95%, 5%)",
              },
            },
            dark: {
              "50": {
                value: "hsl(135, 95%, 5%)",
              },
              "100": {
                value: "hsl(135, 94.5%, 8.33%)",
              },
              "200": {
                value: "hsl(135, 94%, 12.06%)",
              },
              "300": {
                value: "hsl(135, 93.5%, 16.3%)",
              },
              "400": {
                value: "hsl(135, 93%, 21.26%)",
              },
              "500": {
                value: "hsl(135, 92.5%, 27.24%)",
              },
              "600": {
                value: "hsl(135, 92%, 34.78%)",
              },
              "700": {
                value: "hsl(135, 91.5%, 44.9%)",
              },
              "800": {
                value: "hsl(135, 91%, 58.95%)",
              },
              "900": {
                value: "hsl(135, 90.5%, 75.56%)",
              },
              "950": {
                value: "hsl(135, 90%, 90%)",
              },
            },
          },
          teal: {
            light: {
              "50": {
                value: "hsl(172, 90%, 90%)",
              },
              "100": {
                value: "hsl(172, 90.5%, 75.56%)",
              },
              "200": {
                value: "hsl(172, 91%, 58.95%)",
              },
              "300": {
                value: "hsl(172, 91.5%, 44.9%)",
              },
              "400": {
                value: "hsl(172, 92%, 34.78%)",
              },
              "500": {
                value: "hsl(172, 92.5%, 27.24%)",
              },
              "600": {
                value: "hsl(172, 93%, 21.26%)",
              },
              "700": {
                value: "hsl(172, 93.5%, 16.3%)",
              },
              "800": {
                value: "hsl(172, 94%, 12.06%)",
              },
              "900": {
                value: "hsl(172, 94.5%, 8.33%)",
              },
              "950": {
                value: "hsl(172, 95%, 5%)",
              },
            },
            dark: {
              "50": {
                value: "hsl(172, 95%, 5%)",
              },
              "100": {
                value: "hsl(172, 94.5%, 8.33%)",
              },
              "200": {
                value: "hsl(172, 94%, 12.06%)",
              },
              "300": {
                value: "hsl(172, 93.5%, 16.3%)",
              },
              "400": {
                value: "hsl(172, 93%, 21.26%)",
              },
              "500": {
                value: "hsl(172, 92.5%, 27.24%)",
              },
              "600": {
                value: "hsl(172, 92%, 34.78%)",
              },
              "700": {
                value: "hsl(172, 91.5%, 44.9%)",
              },
              "800": {
                value: "hsl(172, 91%, 58.95%)",
              },
              "900": {
                value: "hsl(172, 90.5%, 75.56%)",
              },
              "950": {
                value: "hsl(172, 90%, 90%)",
              },
            },
          },
          purple: {
            light: {
              "50": {
                value: "hsl(279, 90%, 90%)",
              },
              "100": {
                value: "hsl(279, 90.5%, 75.56%)",
              },
              "200": {
                value: "hsl(279, 91%, 58.95%)",
              },
              "300": {
                value: "hsl(279, 91.5%, 44.9%)",
              },
              "400": {
                value: "hsl(279, 92%, 34.78%)",
              },
              "500": {
                value: "hsl(279, 92.5%, 27.24%)",
              },
              "600": {
                value: "hsl(279, 93%, 21.26%)",
              },
              "700": {
                value: "hsl(279, 93.5%, 16.3%)",
              },
              "800": {
                value: "hsl(279, 94%, 12.06%)",
              },
              "900": {
                value: "hsl(279, 94.5%, 8.33%)",
              },
              "950": {
                value: "hsl(279, 95%, 5%)",
              },
            },
            dark: {
              "50": {
                value: "hsl(279, 95%, 5%)",
              },
              "100": {
                value: "hsl(279, 94.5%, 8.33%)",
              },
              "200": {
                value: "hsl(279, 94%, 12.06%)",
              },
              "300": {
                value: "hsl(279, 93.5%, 16.3%)",
              },
              "400": {
                value: "hsl(279, 93%, 21.26%)",
              },
              "500": {
                value: "hsl(279, 92.5%, 27.24%)",
              },
              "600": {
                value: "hsl(279, 92%, 34.78%)",
              },
              "700": {
                value: "hsl(279, 91.5%, 44.9%)",
              },
              "800": {
                value: "hsl(279, 91%, 58.95%)",
              },
              "900": {
                value: "hsl(279, 90.5%, 75.56%)",
              },
              "950": {
                value: "hsl(279, 90%, 90%)",
              },
            },
          },
          pink: {
            light: {
              "50": {
                value: "hsl(335, 90%, 90%)",
              },
              "100": {
                value: "hsl(335, 90.5%, 75.56%)",
              },
              "200": {
                value: "hsl(335, 91%, 58.95%)",
              },
              "300": {
                value: "hsl(335, 91.5%, 44.9%)",
              },
              "400": {
                value: "hsl(335, 92%, 34.78%)",
              },
              "500": {
                value: "hsl(335, 92.5%, 27.24%)",
              },
              "600": {
                value: "hsl(335, 93%, 21.26%)",
              },
              "700": {
                value: "hsl(335, 93.5%, 16.3%)",
              },
              "800": {
                value: "hsl(335, 94%, 12.06%)",
              },
              "900": {
                value: "hsl(335, 94.5%, 8.33%)",
              },
              "950": {
                value: "hsl(335, 95%, 5%)",
              },
            },
            dark: {
              "50": {
                value: "hsl(335, 95%, 5%)",
              },
              "100": {
                value: "hsl(335, 94.5%, 8.33%)",
              },
              "200": {
                value: "hsl(335, 94%, 12.06%)",
              },
              "300": {
                value: "hsl(335, 93.5%, 16.3%)",
              },
              "400": {
                value: "hsl(335, 93%, 21.26%)",
              },
              "500": {
                value: "hsl(335, 92.5%, 27.24%)",
              },
              "600": {
                value: "hsl(335, 92%, 34.78%)",
              },
              "700": {
                value: "hsl(335, 91.5%, 44.9%)",
              },
              "800": {
                value: "hsl(335, 91%, 58.95%)",
              },
              "900": {
                value: "hsl(335, 90.5%, 75.56%)",
              },
              "950": {
                value: "hsl(335, 90%, 90%)",
              },
            },
          },
          gray: {
            light: {
              "50": {
                value: "hsl(0, 0%, 90%)",
              },
              "100": {
                value: "hsl(0, 0%, 74.88%)",
              },
              "200": {
                value: "hsl(0, 0%, 57.48%)",
              },
              "300": {
                value: "hsl(0, 0%, 42.78%)",
              },
              "400": {
                value: "hsl(0, 0%, 32.18%)",
              },
              "500": {
                value: "hsl(0, 0%, 24.28%)",
              },
              "600": {
                value: "hsl(0, 0%, 18.02%)",
              },
              "700": {
                value: "hsl(0, 0%, 12.83%)",
              },
              "800": {
                value: "hsl(0, 0%, 8.39%)",
              },
              "900": {
                value: "hsl(0, 0%, 4.49%)",
              },
              "950": {
                value: "hsl(0, 0%, 1%)",
              },
            },
            dark: {
              "50": {
                value: "hsl(0, 0%, 1%)",
              },
              "100": {
                value: "hsl(0, 0%, 4.49%)",
              },
              "200": {
                value: "hsl(0, 0%, 8.39%)",
              },
              "300": {
                value: "hsl(0, 0%, 12.83%)",
              },
              "400": {
                value: "hsl(0, 0%, 18.02%)",
              },
              "500": {
                value: "hsl(0, 0%, 24.28%)",
              },
              "600": {
                value: "hsl(0, 0%, 32.18%)",
              },
              "700": {
                value: "hsl(0, 0%, 42.78%)",
              },
              "800": {
                value: "hsl(0, 0%, 57.48%)",
              },
              "900": {
                value: "hsl(0, 0%, 74.88%)",
              },
              "950": {
                value: "hsl(0, 0%, 90%)",
              },
            },
          },
        },
      },
      semanticTokens: {
        colors: {
          blue: {
            "50": {
              value: {
                base: "{colors.blue.light.50}",
                _dark: "{colors.blue.dark.50}",
              },
            },
            "100": {
              value: {
                base: "{colors.blue.light.100}",
                _dark: "{colors.blue.dark.100}",
              },
            },
            "200": {
              value: {
                base: "{colors.blue.light.200}",
                _dark: "{colors.blue.dark.200}",
              },
            },
            "300": {
              value: {
                base: "{colors.blue.light.300}",
                _dark: "{colors.blue.dark.300}",
              },
            },
            "400": {
              value: {
                base: "{colors.blue.light.400}",
                _dark: "{colors.blue.dark.400}",
              },
            },
            "500": {
              value: {
                base: "{colors.blue.light.500}",
                _dark: "{colors.blue.dark.500}",
              },
            },
            "600": {
              value: {
                base: "{colors.blue.light.600}",
                _dark: "{colors.blue.dark.600}",
              },
            },
            "700": {
              value: {
                base: "{colors.blue.light.700}",
                _dark: "{colors.blue.dark.700}",
              },
            },
            "800": {
              value: {
                base: "{colors.blue.light.800}",
                _dark: "{colors.blue.dark.800}",
              },
            },
            "900": {
              value: {
                base: "{colors.blue.light.900}",
                _dark: "{colors.blue.dark.900}",
              },
            },
            "950": {
              value: {
                base: "{colors.blue.light.950}",
                _dark: "{colors.blue.dark.950}",
              },
            },
            default: {
              value: "{colors.blue.5}",
            },
            text: {
              value: "{colors.blue.11}",
            },
          },
          red: {
            "50": {
              value: {
                base: "{colors.red.light.50}",
                _dark: "{colors.red.dark.50}",
              },
            },
            "100": {
              value: {
                base: "{colors.red.light.100}",
                _dark: "{colors.red.dark.100}",
              },
            },
            "200": {
              value: {
                base: "{colors.red.light.200}",
                _dark: "{colors.red.dark.200}",
              },
            },
            "300": {
              value: {
                base: "{colors.red.light.300}",
                _dark: "{colors.red.dark.300}",
              },
            },
            "400": {
              value: {
                base: "{colors.red.light.400}",
                _dark: "{colors.red.dark.400}",
              },
            },
            "500": {
              value: {
                base: "{colors.red.light.500}",
                _dark: "{colors.red.dark.500}",
              },
            },
            "600": {
              value: {
                base: "{colors.red.light.600}",
                _dark: "{colors.red.dark.600}",
              },
            },
            "700": {
              value: {
                base: "{colors.red.light.700}",
                _dark: "{colors.red.dark.700}",
              },
            },
            "800": {
              value: {
                base: "{colors.red.light.800}",
                _dark: "{colors.red.dark.800}",
              },
            },
            "900": {
              value: {
                base: "{colors.red.light.900}",
                _dark: "{colors.red.dark.900}",
              },
            },
            "950": {
              value: {
                base: "{colors.red.light.950}",
                _dark: "{colors.red.dark.950}",
              },
            },
            default: {
              value: "{colors.red.5}",
            },
            text: {
              value: "{colors.red.11}",
            },
          },
          yellow: {
            "50": {
              value: {
                base: "{colors.yellow.light.50}",
                _dark: "{colors.yellow.dark.50}",
              },
            },
            "100": {
              value: {
                base: "{colors.yellow.light.100}",
                _dark: "{colors.yellow.dark.100}",
              },
            },
            "200": {
              value: {
                base: "{colors.yellow.light.200}",
                _dark: "{colors.yellow.dark.200}",
              },
            },
            "300": {
              value: {
                base: "{colors.yellow.light.300}",
                _dark: "{colors.yellow.dark.300}",
              },
            },
            "400": {
              value: {
                base: "{colors.yellow.light.400}",
                _dark: "{colors.yellow.dark.400}",
              },
            },
            "500": {
              value: {
                base: "{colors.yellow.light.500}",
                _dark: "{colors.yellow.dark.500}",
              },
            },
            "600": {
              value: {
                base: "{colors.yellow.light.600}",
                _dark: "{colors.yellow.dark.600}",
              },
            },
            "700": {
              value: {
                base: "{colors.yellow.light.700}",
                _dark: "{colors.yellow.dark.700}",
              },
            },
            "800": {
              value: {
                base: "{colors.yellow.light.800}",
                _dark: "{colors.yellow.dark.800}",
              },
            },
            "900": {
              value: {
                base: "{colors.yellow.light.900}",
                _dark: "{colors.yellow.dark.900}",
              },
            },
            "950": {
              value: {
                base: "{colors.yellow.light.950}",
                _dark: "{colors.yellow.dark.950}",
              },
            },
            default: {
              value: "{colors.yellow.5}",
            },
            text: {
              value: "{colors.yellow.11}",
            },
          },
          green: {
            "50": {
              value: {
                base: "{colors.green.light.50}",
                _dark: "{colors.green.dark.50}",
              },
            },
            "100": {
              value: {
                base: "{colors.green.light.100}",
                _dark: "{colors.green.dark.100}",
              },
            },
            "200": {
              value: {
                base: "{colors.green.light.200}",
                _dark: "{colors.green.dark.200}",
              },
            },
            "300": {
              value: {
                base: "{colors.green.light.300}",
                _dark: "{colors.green.dark.300}",
              },
            },
            "400": {
              value: {
                base: "{colors.green.light.400}",
                _dark: "{colors.green.dark.400}",
              },
            },
            "500": {
              value: {
                base: "{colors.green.light.500}",
                _dark: "{colors.green.dark.500}",
              },
            },
            "600": {
              value: {
                base: "{colors.green.light.600}",
                _dark: "{colors.green.dark.600}",
              },
            },
            "700": {
              value: {
                base: "{colors.green.light.700}",
                _dark: "{colors.green.dark.700}",
              },
            },
            "800": {
              value: {
                base: "{colors.green.light.800}",
                _dark: "{colors.green.dark.800}",
              },
            },
            "900": {
              value: {
                base: "{colors.green.light.900}",
                _dark: "{colors.green.dark.900}",
              },
            },
            "950": {
              value: {
                base: "{colors.green.light.950}",
                _dark: "{colors.green.dark.950}",
              },
            },
            default: {
              value: "{colors.green.5}",
            },
            text: {
              value: "{colors.green.11}",
            },
          },
          teal: {
            "50": {
              value: {
                base: "{colors.teal.light.50}",
                _dark: "{colors.teal.dark.50}",
              },
            },
            "100": {
              value: {
                base: "{colors.teal.light.100}",
                _dark: "{colors.teal.dark.100}",
              },
            },
            "200": {
              value: {
                base: "{colors.teal.light.200}",
                _dark: "{colors.teal.dark.200}",
              },
            },
            "300": {
              value: {
                base: "{colors.teal.light.300}",
                _dark: "{colors.teal.dark.300}",
              },
            },
            "400": {
              value: {
                base: "{colors.teal.light.400}",
                _dark: "{colors.teal.dark.400}",
              },
            },
            "500": {
              value: {
                base: "{colors.teal.light.500}",
                _dark: "{colors.teal.dark.500}",
              },
            },
            "600": {
              value: {
                base: "{colors.teal.light.600}",
                _dark: "{colors.teal.dark.600}",
              },
            },
            "700": {
              value: {
                base: "{colors.teal.light.700}",
                _dark: "{colors.teal.dark.700}",
              },
            },
            "800": {
              value: {
                base: "{colors.teal.light.800}",
                _dark: "{colors.teal.dark.800}",
              },
            },
            "900": {
              value: {
                base: "{colors.teal.light.900}",
                _dark: "{colors.teal.dark.900}",
              },
            },
            "950": {
              value: {
                base: "{colors.teal.light.950}",
                _dark: "{colors.teal.dark.950}",
              },
            },
            default: {
              value: "{colors.teal.5}",
            },
            text: {
              value: "{colors.teal.11}",
            },
          },
          purple: {
            "50": {
              value: {
                base: "{colors.purple.light.50}",
                _dark: "{colors.purple.dark.50}",
              },
            },
            "100": {
              value: {
                base: "{colors.purple.light.100}",
                _dark: "{colors.purple.dark.100}",
              },
            },
            "200": {
              value: {
                base: "{colors.purple.light.200}",
                _dark: "{colors.purple.dark.200}",
              },
            },
            "300": {
              value: {
                base: "{colors.purple.light.300}",
                _dark: "{colors.purple.dark.300}",
              },
            },
            "400": {
              value: {
                base: "{colors.purple.light.400}",
                _dark: "{colors.purple.dark.400}",
              },
            },
            "500": {
              value: {
                base: "{colors.purple.light.500}",
                _dark: "{colors.purple.dark.500}",
              },
            },
            "600": {
              value: {
                base: "{colors.purple.light.600}",
                _dark: "{colors.purple.dark.600}",
              },
            },
            "700": {
              value: {
                base: "{colors.purple.light.700}",
                _dark: "{colors.purple.dark.700}",
              },
            },
            "800": {
              value: {
                base: "{colors.purple.light.800}",
                _dark: "{colors.purple.dark.800}",
              },
            },
            "900": {
              value: {
                base: "{colors.purple.light.900}",
                _dark: "{colors.purple.dark.900}",
              },
            },
            "950": {
              value: {
                base: "{colors.purple.light.950}",
                _dark: "{colors.purple.dark.950}",
              },
            },
            default: {
              value: "{colors.purple.5}",
            },
            text: {
              value: "{colors.purple.11}",
            },
          },
          pink: {
            "50": {
              value: {
                base: "{colors.pink.light.50}",
                _dark: "{colors.pink.dark.50}",
              },
            },
            "100": {
              value: {
                base: "{colors.pink.light.100}",
                _dark: "{colors.pink.dark.100}",
              },
            },
            "200": {
              value: {
                base: "{colors.pink.light.200}",
                _dark: "{colors.pink.dark.200}",
              },
            },
            "300": {
              value: {
                base: "{colors.pink.light.300}",
                _dark: "{colors.pink.dark.300}",
              },
            },
            "400": {
              value: {
                base: "{colors.pink.light.400}",
                _dark: "{colors.pink.dark.400}",
              },
            },
            "500": {
              value: {
                base: "{colors.pink.light.500}",
                _dark: "{colors.pink.dark.500}",
              },
            },
            "600": {
              value: {
                base: "{colors.pink.light.600}",
                _dark: "{colors.pink.dark.600}",
              },
            },
            "700": {
              value: {
                base: "{colors.pink.light.700}",
                _dark: "{colors.pink.dark.700}",
              },
            },
            "800": {
              value: {
                base: "{colors.pink.light.800}",
                _dark: "{colors.pink.dark.800}",
              },
            },
            "900": {
              value: {
                base: "{colors.pink.light.900}",
                _dark: "{colors.pink.dark.900}",
              },
            },
            "950": {
              value: {
                base: "{colors.pink.light.950}",
                _dark: "{colors.pink.dark.950}",
              },
            },
            default: {
              value: "{colors.pink.5}",
            },
            text: {
              value: "{colors.pink.11}",
            },
          },
          gray: {
            "50": {
              value: {
                base: "{colors.gray.light.50}",
                _dark: "{colors.gray.dark.50}",
              },
            },
            "100": {
              value: {
                base: "{colors.gray.light.100}",
                _dark: "{colors.gray.dark.100}",
              },
            },
            "200": {
              value: {
                base: "{colors.gray.light.200}",
                _dark: "{colors.gray.dark.200}",
              },
            },
            "300": {
              value: {
                base: "{colors.gray.light.300}",
                _dark: "{colors.gray.dark.300}",
              },
            },
            "400": {
              value: {
                base: "{colors.gray.light.400}",
                _dark: "{colors.gray.dark.400}",
              },
            },
            "500": {
              value: {
                base: "{colors.gray.light.500}",
                _dark: "{colors.gray.dark.500}",
              },
            },
            "600": {
              value: {
                base: "{colors.gray.light.600}",
                _dark: "{colors.gray.dark.600}",
              },
            },
            "700": {
              value: {
                base: "{colors.gray.light.700}",
                _dark: "{colors.gray.dark.700}",
              },
            },
            "800": {
              value: {
                base: "{colors.gray.light.800}",
                _dark: "{colors.gray.dark.800}",
              },
            },
            "900": {
              value: {
                base: "{colors.gray.light.900}",
                _dark: "{colors.gray.dark.900}",
              },
            },
            "950": {
              value: {
                base: "{colors.gray.light.950}",
                _dark: "{colors.gray.dark.950}",
              },
            },
            default: {
              value: "{colors.gray.5}",
            },
            text: {
              value: "{colors.gray.11}",
            },
          },
        },
      },
    },
  },
});

const generateOpacity = (oklch: {
  L: number,
  C: number,
  H: number,
  A?: number
}) => {
  const {
    L,C,H,A=100
  } = oklch

  const values: [string, {value: string}][] = []
  for (let alpha = A; alpha > 0; alpha -= 10) {
    if (alpha === 100) {
      values.push([`${alpha/10}`, {value: `oklch(${L.toFixed(2)} ${C.toFixed(4)} ${H.toFixed(2)})`}])
    } else {
      values.push([`${alpha/10}`, {value: `oklch(${L.toFixed(2)} ${C.toFixed(4)} ${H.toFixed(2)} / ${alpha}%)`}])
    }
  }

  return Object.fromEntries(values)
}

const spaceThemePreset = definePreset({
  name: 'space',
  globalVars: {
    extend: {
      '--bg-color': '#010810'
    }
  },
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: generateOpacity({L: 0.68, C: 0.1479, H: 237.32}),
          accent: generateOpacity({L: 0.57, C: 0.1982, H: 31.76}),
        }
      }
    }
  }
})

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

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: "styled-system",
});
