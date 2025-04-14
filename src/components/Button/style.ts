import { sva } from "@styled-system/css";

export const buttonRecipe = sva({
    slots: ['root'],
    base: {
        root: {
            borderRadius: 'sm',
            borderStyle: 'solid',
            borderWidth: '2px',
            color: 'primary.10',
            backgroundColor: 'primary.4',
            px: 4,
            py: 2,
            cursor: 'pointer'
        }
    }
})