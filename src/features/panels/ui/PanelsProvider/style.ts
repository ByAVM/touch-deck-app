import { sva } from "@styled-system/css";

export const panelRecipe = sva({
    slots: ["panel", "item", "toggle", "backdrop", "backdropToggle"],
    base: {
      panel: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
  
        transition: "transform 0.2s ease",
        zIndex: 'menu',
        pt: 4,
        backgroundColor: "slate.900",
        overflowY: "auto",
  
        sm: {
          right: 'unset'
        }
      },
      toggle: {
        zIndex: 2,
        opacity: 1,
        height: "menu",
        backgroundColor: "slate.900",
        position: "absolute",
        cursor: "pointer",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
  
        left: 0,
        right: 0,
        bottom: 0,
  
        sm: {
          height: 'unset',
          p: 2,
          left: 4,
          bottom: 4,
          top: "unset",
          right: "unset",
          borderRadius: "full",
        },
      },
      item: {
        display: "block",
        px: 6,
        py: 2,
  
        _hover: {
          backgroundColor: "slate.950",
        },
      },
      backdrop: {
        zIndex: 1,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "black.700/40",
        backdropFilter: "auto",
        backdropBlur: "sm",
      },
      backdropToggle: {
        mt: "auto",
        display: "block",
        cursor: "pointer",
        height: 8,
  
        sm: {
          display: "none",
        },
      },
    },
    variants: {
      open: {
        true: {
          panel: {
            transform: "translateX(0)",
          },
          toggle: {
            opacity: 0,
          },
          backdrop: {
            display: "none",
  
            sm: {
              display: "block",
            },
          },
        },
        false: {
          panel: {
            transform: "translateX(-100%)",
          },
          toggle: {
            opacity: 1
          },
          backdrop: {
            display: "none",
          },
        },
      },
    },
    defaultVariants: {
      open: false,
    },
  });