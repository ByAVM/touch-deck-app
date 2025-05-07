import { sva } from "@styled-system/css";

export const appPageRecipe = sva({
    slots: ['empty', 'emptyIcon'],
    base: {
        empty: {
            color: 'sky.500'
        },
        emptyIcon: {
            colorPalette: 'sky'
        }
    }
})