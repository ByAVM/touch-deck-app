import { sva } from "@styled-system/css";

export const homePageHeroRecipe = sva({
    className: 'hero',
    slots: ['root'],
    base: {
        root: {
            height: '100vh',
        }
    }
})
export const homePageRecipe = sva({
    className: 'home',
    slots: ['root', 'action', 'title', 'subtitle', 'h2', 'link'],
    base: {
        root: {
            height: 'full'
        },
        title: {
            mt: '30vh',
            fontSize: '5xl',
            lineHeight: "tight",
            textTransform: 'uppercase',
            fontFamily: 'mono',
            color: 'sky.500',
            textShadowColor: 'sky.500',
            textShadow: "0 0 4px var(--text-shadow-color), 0 0 8px var(--text-shadow-color)",
            textAlign: 'center',

            sm: {
                fontSize: '7xl'
            }
        },
        subtitle: {
            fontSize: 'xl',
            color: 'sky.500/50',
            fontWeight: 'light',
            textAlign: 'center',
            mb: 12,

            sm: {
                fontSize: '2xl'
            }
        },
        action: {
            colorPalette: 'sky',

            borderWidth: '2px',
            borderRadius: 'sm',
            px: 10,
            py: 2,
            textTransform: 'uppercase',
            fontSize: 'md',

            backgroundColor: "colorPalette.800/20",
            borderColor: 'colorPalette.500',
            color: 'colorPalette.500',
            shadow: '0 0 6px var(--shadow-color), inset 0 0 6px var(--shadow-color)',
            shadowColor: 'colorPalette.500',

            _hover: {
                backgroundColor: 'sky.800/40'
            },

            sm: {
                fontSize: "2xl"
            }
        },
        h2: {
            textAlign: "center",
            fontSize: "3xl",
            fontWeight: "bold",
            fontFamily: "mono",
            mb: "8",
            color: "sky.500",
            textShadow: "0 0 2px var(--text-shadow-color)",
            textShadowColor: "sky.500",
        },
        link: {
            textDecoration: 'underline'
        }
    },
})