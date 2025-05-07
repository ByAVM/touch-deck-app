import { toastAnatomy } from "@ark-ui/react";
import { cva, RecipeVariantProps, sva } from "@styled-system/css";

export const toastRecipe = sva({
  slots: toastAnatomy.keys(),
  base: {
    root: {
      colorPalette: 'sky',
      backgroundColor: "colorPalette.500/10",
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: "colorPalette.500",
      color: "colorPalette.500",
      shadow: "0 0 6px var(--shadow-color), inset 0 0 6px var(--shadow-color)",
      shadowColor: "colorPalette.500",
      p: 2,
      borderRadius: "md",
      maxWidth: "90vw",
      width: { base: "72", lg: "96" },

      translate: "var(--x) var(--y)",
      scale: "var(--scale)",
      height: "var(--height)",
      opacity: "var(--opacity)",
      willChange: "translate, opacity, scale",
    },
    title: {
      fontWeight: "bold",
    },
  },
  variants: {
    type: {
      default: {
        root: {
          colorPalette: 'sky'
        }
      },
      success: {
        root: {
          colorPalette: 'green'
        }
      },
      warning: {
        root: {
          colorPalette: 'orange'
        }
      },
      error: {
        root: {
          colorPalette: 'red'
        }
      }
    }
  }
});

export type ToastVariant = RecipeVariantProps<typeof toastRecipe>

export const toasterRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    zIndex: 'toast'
  },
});
