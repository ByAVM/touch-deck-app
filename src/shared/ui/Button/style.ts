import { sva } from "@styled-system/css";

export const buttonRecipe = sva({
    slots: ['root'],
    base: {
        root: {
            colorPalette: 'sky',

            borderRadius: 'sm',
            borderStyle: 'solid',
            borderWidth: '2px',
            px: 4,
            py: 2,
            cursor: 'pointer',

            backgroundColor: "colorPalette.800/20",
            borderColor: 'colorPalette.500',
            color: 'colorPalette.500',
            shadow: '0 0 6px var(--shadow-color), inset 0 0 6px var(--shadow-color)',
            shadowColor: 'colorPalette.500',

            _active: {
                backgroundColor: "colorPalette.800/40"
            },
        }
    }
})